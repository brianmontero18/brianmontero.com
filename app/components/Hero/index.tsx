import type { LinksFunction } from "@remix-run/node";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Brian Montero</h1>
        <p>
          I'm <span className="typed" data-typed-items="Developer, Mentor, Freelancer, Husband"></span>
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
          <a href="https://twitter.com/brianmontero18" className="twitter" target="_blank" rel="noopener noreferrer">
            <i className="bx bxl-twitter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
