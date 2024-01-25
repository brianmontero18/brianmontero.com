import type { LinksFunction } from "@remix-run/node";
import { useState, useRef, CSSProperties } from "react";
import {
  PayPalScriptProvider,
  PayPalHostedFieldsProvider,
  PayPalHostedField,
  usePayPalHostedFields,
  PayPalButtons,
} from "@paypal/react-paypal-js";
import { OnApproveData, OnApproveActions } from "@paypal/paypal-js/types/components/buttons";
import { getPublicEnv } from "../PublicEnv";

import styles from "./HostedFields.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

const intent = "capture";
const CUSTOM_FIELD_STYLE = { border: "1px solid #606060", boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)" };
const INVALID_COLOR = {
  color: "#dc3545",
};

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
      body: JSON.stringify({ intent: "CAPTURE" }),
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

// Example of custom component to handle form submit
const SubmitPayment = ({ customStyle }: { customStyle: CSSProperties }) => {
  const [paying, setPaying] = useState(false);
  const cardHolderName = useRef<HTMLInputElement | null>(null);
  const hostedField = usePayPalHostedFields();

  const handleClick = () => {
    if (!hostedField?.cardFields) {
      const childErrorMessage = "Unable to find any child components in the <PayPalHostedFieldsProvider />";
      throw new Error(childErrorMessage);
    }
    const isFormInvalid =
      Object.values(hostedField.cardFields.getState().fields).some((field) => !field.isValid) ||
      !cardHolderName?.current?.value;

    if (isFormInvalid) {
      return alert("The payment form is invalid");
    }
    setPaying(true);
    hostedField.cardFields
      .submit({
        cardholderName: cardHolderName?.current?.value,
      })
      .then(async (data) => {
        const response = await fetch(`/api/paypal/complete_order`, {
          method: "post",
          headers: { "Content-Type": "application/json; charset=utf-8" },
          body: JSON.stringify({
            intent: intent,
            order_id: data.orderId,
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
          // return actions.restart();
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
      })
      .catch((err) => {
        // Here handle error
        setPaying(false);
      });
  };

  return (
    <>
      <label title="This represents the full name as shown in the card">
        Card Holder Name
        <input
          id="card-holder"
          ref={cardHolderName}
          className="card-field"
          style={{ ...customStyle, outline: "none" }}
          type="text"
          placeholder="Full name"
        />
      </label>
      <button className={`btn${paying ? "" : " btn-primary"}`} style={{ float: "right" }} onClick={handleClick}>
        {paying ? <div className="spinner tiny" /> : "Pay"}
      </button>
    </>
  );
};

export default function HostedFields({ clientToken }: { clientToken?: string }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: getPublicEnv("PAYPAL_CLIENT_ID"),
        enableFunding: "venmo",
        currency: "USD",
        intent,
        components: "buttons,hosted-fields",
        dataClientToken: clientToken,
      }}
    >
      <>
        <PayPalButtons createOrder={createOrder} onApprove={onApprove} fundingSource="paypal" />
        <PayPalHostedFieldsProvider
          styles={{
            ".valid": { color: "#28a745" },
            ".invalid": { color: "#dc3545" },
            input: { "font-family": "monospace", "font-size": "16px" },
          }}
          createOrder={createOrder}
        >
          <label htmlFor="card-number">
            Card Number
            <span style={INVALID_COLOR}>*</span>
          </label>
          <PayPalHostedField
            id="card-number"
            className="card-field"
            style={CUSTOM_FIELD_STYLE}
            hostedFieldType="number"
            options={{
              selector: "#card-number",
              placeholder: "4111 1111 1111 1111",
            }}
          />
          <label htmlFor="cvv">
            CVV<span style={INVALID_COLOR}>*</span>
          </label>
          <PayPalHostedField
            id="cvv"
            className="card-field"
            style={CUSTOM_FIELD_STYLE}
            hostedFieldType="cvv"
            options={{
              selector: "#cvv",
              placeholder: "123",
              maskInput: true,
            }}
          />
          <label htmlFor="expiration-date">
            Expiration Date
            <span style={INVALID_COLOR}>*</span>
          </label>
          <PayPalHostedField
            id="expiration-date"
            className="card-field"
            style={CUSTOM_FIELD_STYLE}
            hostedFieldType="expirationDate"
            options={{
              selector: "#expiration-date",
              placeholder: "MM/YYYY",
            }}
          />
          <SubmitPayment customStyle={{ border: "1px solid #606060", boxShadow: "2px 2px 10px 2px rgba(0,0,0,0.1)" }} />
        </PayPalHostedFieldsProvider>
      </>
    </PayPalScriptProvider>
  );
}
