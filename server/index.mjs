import express from "express";
import { createRequestHandler } from "@remix-run/express";
import { broadcastDevReady } from "@remix-run/node";

import apiRoutes from "./routes/index.js";

// notice that the result of `remix build` is "just a module"
import * as build from "../build/index.js";
const app = express();

// setup
app.disable("x-powered-by");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

app.use(express.static("public"));

// routes
app.use("/api", apiRoutes);

// and your app is "just a request handler"
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  if (process.env.NODE_ENV === "development") {
    broadcastDevReady(build);
  }
  console.log("App listening on http://localhost:3000");
});

export default app;
