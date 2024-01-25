import { environment, getEnvVariables } from "~/utils/env.server";

type Props = ReturnType<typeof getEnvVariables>["ENV"];

declare global {
  interface Window {
    ENV: Props;
  }
}

export function PublicEnv(props: Props) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `window.ENV = ${JSON.stringify(props)}`,
      }}
    />
  );
}

export function getPublicEnv<T extends keyof Props>(key: T): Props[T] {
  if (typeof window !== "undefined" && !window.ENV) {
    throw new Error(`Missing the <PublicEnv /> component at the root of your app.`);
  }

  return typeof window === "undefined" ? environment()[key] : window.ENV[key];
}
