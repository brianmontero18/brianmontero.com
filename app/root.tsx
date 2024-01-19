import { useEffect } from "react";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import AOS from "aos";
import Typed from "typed.js";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper/modules";

import Menu from "./components/Menu";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Paypal from "./components/Paypal";

import aosStylesHref from "aos/dist/aos.css";
import bootstrapStylesHref from "bootstrap/dist/css/bootstrap.min.css";
import bootstrapIconsStylesHref from "bootstrap-icons/font/bootstrap-icons.css";
import boxIconsStylesHref from "boxicons/css/boxicons.min.css";
import glightboxStylesHref from "./vendor/glightbox.min.css";
import swiperStylesHref from "swiper/swiper-bundle.css";
import appStylesHref from "./app.css";

const select = (el: string, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const scrollto = (el: string) => {
  let element = select(el);
  if (element && !Array.isArray(element)) {
    const elementPos = (element as HTMLElement).offsetTop;

    window.scrollTo({
      top: elementPos,
      behavior: "smooth",
    });
  }
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: aosStylesHref },
  { rel: "stylesheet", href: bootstrapStylesHref },
  { rel: "stylesheet", href: bootstrapIconsStylesHref },
  { rel: "stylesheet", href: boxIconsStylesHref },
  { rel: "stylesheet", href: glightboxStylesHref },
  { rel: "stylesheet", href: swiperStylesHref },
  { rel: "stylesheet", href: appStylesHref },
];

export const meta: MetaFunction = ({ data }: any) => {
  const description = `Ready-to-use Remix + Tailwind CSS routes and components.`;
  return [
    {
      charset: "utf-8",
      title: data?.title || "MyResume",
      description,
      keywords:
        "remix,saas,tailwindcss,prisma,react,typescript,boilerplate,saas-kit,saas-boilerplate,stripe,postmark,admin-portal,app-dashboard,multi-tenancy",
      "og:title": "RemixBlocks | Ready-to-use Remix + Tailwind CSS routes and components",
      "og:type": "website",
      "og:url": "https://remixblocks.com",
      "og:image": "https://yahooder.sirv.com/remixblocks/seo/cover-2.png",
      "og:card": "summary_large_image",
      "og:creator": "@AlexandroMtzG",
      "og:site": "https://remixblocks.com",
      "og:description": description,
      "twitter:image": "https://yahooder.sirv.com/remixblocks/seo/thumbnail-2.png",
      "twitter:card": "summary_large_image",
      "twitter:creator": "@AlexandroMtzG",
      "twitter:site": "@saas_rock",
      "twitter:title": "RemixBlocks",
      "twitter:description": description,
    },
  ];
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    const typed = document.querySelector(".typed");

    if (typed) {
      const typed_strings = typed.getAttribute("data-typed-items")?.split(",");

      const typedInstance = new Typed(".typed", {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typedInstance.destroy();
      };
    }
  }, []);

  useEffect(() => {
    if (location.hash) {
      if (select(location.hash)) {
        scrollto(location.hash);
      }
    }
  }, [location]);

  useEffect(() => {
    SwiperCore.use([Pagination]);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MyResume</title>
        {/* <-- Google Fonts --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Menu />
        <Hero />

        <main id="main">
          <Paypal />
          <About />
          {/* <Facts /> */}
          {/* <Skills /> */}
          <Resume />
          {/* <Portfolio /> */}
          <Services />
          <Testimonials />
          <Contact />
        </main>

        <footer id="footer">
          <div className="container">
            <h3>Brian Montero</h3>
            <p>
              Stay connected and follow me on social media for the latest updates! Let's continue this journey together
            </p>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/brian-montero-rosendo/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a href="https://github.com/brianmontero18" className="github" target="_blank" rel="noopener noreferrer">
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://twitter.com/brianmontero18"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-twitter"></i>
              </a>
            </div>
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>Brian Montero</span>
              </strong>
              . All Rights Reserved
            </div>
          </div>
        </footer>

        {/* <div id="preloader"></div> */}
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
          <i className="bi bi-arrow-up-short"></i>
        </a>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
