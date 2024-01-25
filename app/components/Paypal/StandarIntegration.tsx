import { useEffect, useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js/types/components/buttons";

const intent = "capture";

// Example function to show a result to the user. Your site's UI library can be used instead.
function resultMessage(message: any) {
  const container = document.querySelector("#result-message");

  if (container) {
    container.innerHTML = message;
  }
}

async function createOrder() {
  try {
    // const response = await fetch("/api/paypal/orders", {
    const response = await fetch("/api/paypal/create_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({ intent }),
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      //   body: JSON.stringify({
      //     cart: [
      //       {
      //         id: "YOUR_PRODUCT_ID",
      //         quantity: "YOUR_PRODUCT_QUANTITY",
      //       },
      //     ],
      //   }),
    });

    const orderData = await response.json();

    if (orderData.id) {
      return orderData.id;
    } else {
      const errorDetail = orderData?.details?.[0];
      const errorMessage = errorDetail
        ? `${errorDetail.issue} ${errorDetail.description} (${orderData.debug_id})`
        : JSON.stringify(orderData);

      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error(error);
    resultMessage(`Could not initiate PayPal Checkout...<br><br>${error}`);
  }
}

async function onApprove(data: OnApproveData, actions: OnApproveActions) {
  try {
    // const response = await fetch(`/api/paypal/orders/${data.orderID}/capture`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    const response = await fetch(`/api/paypal/complete_order`, {
      method: "post",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        intent: intent,
        order_id: data.orderID,
      }),
    });

    const orderData = await response.json();
    // Three cases to handle:
    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
    //   (2) Other non-recoverable errors -> Show a failure message
    //   (3) Successful transaction -> Show confirmation or thank you message

    const errorDetail = orderData?.details?.[0];

    if (errorDetail?.issue === "INSTRUMENT_DECLINED") {
      // (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
      // recoverable state, per https://developer.paypal.com/docs/checkout/standard/customize/handle-funding-failures/
      return actions.restart();
    } else if (errorDetail) {
      // (2) Other non-recoverable errors -> Show a failure message
      throw new Error(`${errorDetail.description} (${orderData.debug_id})`);
    } else if (!orderData.purchase_units) {
      throw new Error(JSON.stringify(orderData));
    } else {
      // (3) Successful transaction -> Show confirmation or thank you message
      // Or go to another URL:  actions.redirect('thank_you.html');
      const transaction =
        orderData?.purchase_units?.[0]?.payments?.captures?.[0] ||
        orderData?.purchase_units?.[0]?.payments?.authorizations?.[0];
      resultMessage(
        `Transaction ${transaction.status}: ${transaction.id}<br><br>See console for all available details`,
      );
      console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
    }
  } catch (error) {
    console.error(error);
    resultMessage(`Sorry, your transaction could not be processed...<br><br>${error}`);
  }
}

export default function Paypal() {
  const [clientToken, setClientToken] = useState<string | undefined>(undefined);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    email: "",
  });

  useEffect(() => {
    async function getClientToken() {
      try {
        const response = await fetch("/api/paypal/get_client_token", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ customer_id: "" }),
        });

        const clientToken = await response.text();
        setClientToken(clientToken);
      } catch (error) {
        console.error(error);
        resultMessage(`Sorry, your transaction could not be processed...<br><br>${error}`);
      }
    }
    getClientToken();
  }, [setClientToken]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Aquí puedes realizar acciones adicionales o enviar los datos a tu servidor
    console.log("Form Data:", formData);
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: "test",
        enableFunding: "venmo",
        currency: "USD",
        intent,
        components: "buttons,hosted-fields",
        dataClientToken: clientToken,
      }}
    >
      <>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} fundingSource="paypal" />
        <div id="payment_options">
          <form className="row ms-form-group" id="card-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="card-number">Card Number</label>
              <input
                className="div_input"
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md mb-2">
              <label htmlFor="expiration-date">Expiration Date</label>
              <input
                id="expirationDate"
                className="div_input"
                type="text"
                value={formData.expirationDate}
                onChange={handleChange}
              />
            </div>
            <div className="col-md mb-2">
              <label htmlFor="cvv">Security Code</label>
              <input id="cvv" className="div_input" type="number" value={formData.cvv} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="username@email.com"
                type="email"
                id="email"
                className="div_input"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input className="ms-fullwidth mt-2 ms-medium" type="submit" value="Purchase" />
            </div>
          </form>
        </div>
      </>
    </PayPalScriptProvider>
  );
}
