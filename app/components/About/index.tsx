import type { LinksFunction } from "@remix-run/node";
import programming from "public/images/brian-programming.jpeg";
import family from "public/images/brian-family.jpeg";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row mb-5">
          <div className="col-md-6">
            <img src={programming} alt="Imagen 1" className="img-fluid w-100 h-100 rounded shadow" />
          </div>
          <div className="col-md-6 m-auto">
            <p className="about-text">
              I'm Brian Montero, an electronics engineer with over eight years of experience in software and systems
              development. As an immigrant, I navigated my way through prominent companies in Argentina, including
              Globant, IBM, Tecnisis, and JP Morgan, before taking on the role of a full-stack instructor at Digital
              House. Back in Venezuela, I was a teacher, discovering my passion for guiding others in their careers.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <p className="about-text">
              Having successfully made the leap, I now work with startups in the United States from the comfort of my
              home. My mission is to inspire those who desire life changes, providing opportunities in the world of
              systems for a balanced and fulfilling life. Living fully with my family, I aim to assist others in finding
              the courage and transformation needed in their careers. Welcome to my world of possibilities!
            </p>
          </div>
          <div className="col-md-6">
            <img src={family} alt="Imagen 2" className="img-fluid w-100 h-100 rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}
