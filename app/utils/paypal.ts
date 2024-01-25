export async function getClientToken() {
  const response = await fetch("http://localhost:3000/api/paypal/get_client_token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customer_id: "" }),
  });

  const jsonResponse = await response.json();
  return jsonResponse.client_token as string;
}
