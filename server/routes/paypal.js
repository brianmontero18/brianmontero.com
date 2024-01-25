import express from "express";
import { createOrder, captureOrder, completeOrder } from "../controllers/paypalOrders.controller.js";
import { getClientToken } from "../controllers/paypalAuth.controllers.js";

const router = express.Router();

router.post("/orders", async (req, res) => {
  try {
    // use the cart information passed from the front-end to calculate the order amount detals
    // const { cart } = req.body;
    const { jsonResponse, httpStatusCode } = await createOrder();
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

router.post("/orders/:orderID/capture", async (req, res) => {
  try {
    const { orderID } = req.params;
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to capture order." });
  }
});

router.post("/create_order", async (req, res) => {
  try {
    const { jsonResponse, httpStatusCode } = await createOrder(req.body.intent);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to create order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

router.post("/complete_order", async (req, res) => {
  try {
    const { jsonResponse, httpStatusCode } = await completeOrder(req.body.order_id, req.body.intent);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to complete the order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

router.post("/get_client_token", async (req, res) => {
  try {
    const { jsonResponse, httpStatusCode } = await getClientToken(req.body.customer_id);
    res.status(httpStatusCode).json(jsonResponse);
  } catch (error) {
    console.error("Failed to complete the order:", error);
    res.status(500).json({ error: "Failed to create order." });
  }
});

export default router;
