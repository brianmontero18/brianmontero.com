import express from "express";

import paypal from "./paypal.js";

const router = express.Router();

router.use("/paypal", paypal);

export default router;
