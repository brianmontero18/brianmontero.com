export async function handleResponse(response) {
  try {
    const jsonResponse = await response.json();

    return {
      jsonResponse,
      httpStatusCode: response.status,
    };
  } catch (err) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
}
