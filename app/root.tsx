import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";

import Menu, { links as menuLinks } from "./components/Menu";
import Hero, { links as heroLinks } from "./components/Hero";
import About, { links as aboutLinks } from "./components/About";
import Resume, { links as resumeLinks } from "./components/Resume";
// import Portfolio, { links as portfolioLinks } from "./components/Portfolio";
import Services, { links as servicesLinks } from "./components/Services";
import Testimonials, { links as testimonialsLinks } from "./components/Testimonials";
import Contact, { links as contactLinks } from "./components/Contact";
import Footer, { links as footerLinks } from "./components/Footer";
import { HostedFields, hostedFieldsLinks } from "./components/Paypal";
import { PublicEnv } from "./components/PublicEnv";

import { getEnvVariables } from "./utils/env.server";
import { isDefinitelyAnError } from "./utils/misc";
import { getClientToken } from "./utils/paypal";
import { useAOS, useScrollToHash, useSwipper, useTyped } from "./utils/navigation";

import fontsStyles from "./styles/fonts.css";
import vendorStyles from "./styles/vendors.css";
import appStyles from "./styles/root.css";

export async function loader() {
  const env = getEnvVariables();
  const clientToken = await getClientToken();

  return json({ ...env, clientToken });
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: fontsStyles },
  { rel: "stylesheet", href: vendorStyles },
  { rel: "stylesheet", href: appStyles },
  ...menuLinks(),
  ...heroLinks(),
  ...aboutLinks(),
  ...resumeLinks(),
  ...servicesLinks(),
  ...testimonialsLinks(),
  ...contactLinks(),
  ...footerLinks(),
  ...hostedFieldsLinks(),
];

export const meta: MetaFunction = ({ data }: any) => {
  const description = "Experienced senior frontend engineer with a passion for teaching web development.";
  return [
    {
      charset: "utf-8",
      title: data?.title || "BrianMontero",
      description,
      keywords:
        "remix,saas,tailwindcss,prisma,react,typescript,boilerplate,saas-kit,saas-boilerplate,stripe,postmark,admin-portal,app-dashboard,multi-tenancy",
      "og:title": "BrianMontero | Ready-to-use Remix + Tailwind CSS routes and components",
      "og:type": "website",
      "og:url": "https://www.brianmontero.com",
      // "og:image": "https://yahooder.sirv.com/www.brianmontero/seo/cover-2.png",
      "og:card": "summary_large_image",
      "og:creator": "@brianmontero18",
      "og:site": "https://www.brianmontero.com",
      "og:description": description,
      // "twitter:image": "https://yahooder.sirv.com/remixblocks/seo/thumbnail-2.png",
      "twitter:card": "summary_large_image",
      "twitter:creator": "@brianmontero18",
      "twitter:site": "@brianmontero18",
      "twitter:title": "BrianMontero",
      "twitter:description": description,
    },
  ];
};

function Document({ children, title = "BrianMontero" }: { children: React.ReactNode; title?: string }) {
  const data = useLoaderData<typeof loader>();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <title>{title}</title>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <PublicEnv {...data.ENV} />
        <Scripts />
        {data.ENV.ENVIRONMENT === "sandbox" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<typeof loader>();

  useAOS();
  useTyped();
  useScrollToHash();
  useSwipper();

  return (
    <Document>
      <Menu />
      <Hero />
      <main id="main">
        <HostedFields clientToken={data.clientToken} />
        <About />
        <Resume />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Outlet />
    </Document>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <Document title="Uh-oh!">
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data.message}</p>
      </Document>
    );
  }

  // Don't forget to typecheck with your own logic.
  // Any value can be thrown, not just errors!
  let errorMessage = "Unknown error";
  if (isDefinitelyAnError(error)) {
    errorMessage = error.message;
  }

  return (
    <Document title="Uh-oh!">
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
      <pre>{errorMessage}</pre>
    </Document>
  );
}
