import { pick } from "moderndash";
import * as z from "zod";

const environmentSchema = z.object({
  ENVIRONMENT: z.enum(["sandbox", "production"]).default("sandbox"),
  PAYPAL_CLIENT_ID: z.string().min(1),
  PAYPAL_CLIENT_SECRET: z.string().min(1),
});

const environment = () => environmentSchema.parse(process.env);

function getEnvVariables() {
  return {
    ENV: pick(environment(), ["ENVIRONMENT", "PAYPAL_CLIENT_ID"]),
  };
}

export { getEnvVariables, environment };
