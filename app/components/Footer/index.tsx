import type { LinksFunction } from "@remix-run/node";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <h3>Brian Montero</h3>
        <p>Stay connected and follow me on social media for the latest updates! Let's continue this journey together</p>
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
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Brian Montero</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
}
