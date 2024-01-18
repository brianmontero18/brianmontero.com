import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import type IsotopeOptions from "isotope-layout";

import portfolio1 from "../../images/portfolio/portfolio-1.jpg";
import portfolio2 from "../../images/portfolio/portfolio-2.jpg";
import portfolio3 from "../../images/portfolio/portfolio-3.jpg";
import portfolio4 from "../../images/portfolio/portfolio-4.jpg";
import portfolio5 from "../../images/portfolio/portfolio-5.jpg";
import portfolio6 from "../../images/portfolio/portfolio-6.jpg";
import portfolio7 from "../../images/portfolio/portfolio-7.jpg";
import portfolio8 from "../../images/portfolio/portfolio-8.jpg";
import portfolio9 from "../../images/portfolio/portfolio-9.jpg";

export const initializeIsotope = async (): Promise<IsotopeOptions | void> => {
  // Verificar si `window` está definido (para evitar problemas en el entorno Node.js)
  const portfolioContainer = select(".portfolio-container");

  if (typeof window !== "undefined" && portfolioContainer) {
    const Isotope = (await import("isotope-layout")).default;

    const portfolioIsotope = new Isotope(portfolioContainer as HTMLElement, {
      itemSelector: ".portfolio-item",
    });

    return portfolioIsotope;
  }
};

const portfolioItems = [
  { src: portfolio1, category: "app", title: "App 1" },
  { src: portfolio2, category: "web", title: "Web 3" },
  { src: portfolio3, category: "app", title: "App 2" },
  { src: portfolio4, category: "card", title: "Card 2" },
  { src: portfolio5, category: "web", title: "Web 2" },
  { src: portfolio6, category: "app", title: "App 3" },
  { src: portfolio7, category: "card", title: "Card 1" },
  { src: portfolio8, category: "card", title: "Card 3" },
  { src: portfolio9, category: "web", title: "Web 3" },
];

const select = (el: any, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

export default function Portfolio() {
  let isotopeInstance = useRef<null | IsotopeOptions>(null);

  useEffect(() => {
    const initIsotope = async () => {
      const isotope = await initializeIsotope();

      if (isotope) {
        isotopeInstance.current = isotope;

        return () => {
          isotope.destroy();
        };
      }
    };

    initIsotope();
  }, []);

  const handleClick = (e: any) => {
    let portfolioFilters = select("#portfolio-flters li", true);

    e.preventDefault();
    portfolioFilters.forEach(function (el: any) {
      el.classList.remove("filter-active");
    });
    e.currentTarget.classList.add("filter-active");

    if (isotopeInstance.current) {
      isotopeInstance.current.arrange({
        filter: e.currentTarget.getAttribute("data-filter"),
      });
    }

    AOS.refresh(); // Si es necesario refrescar AOS
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
            in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active" onClick={handleClick}>
                All
              </li>
              <li data-filter=".filter-app" onClick={handleClick}>
                App
              </li>
              <li data-filter=".filter-card" onClick={handleClick}>
                Card
              </li>
              <li data-filter=".filter-web" onClick={handleClick}>
                Web
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio1} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio2} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio2} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio3} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio3} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio4} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio4} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio5} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio5} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={portfolio6} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href={portfolio6} data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio7} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio7} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 1">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src={portfolio8} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href={portfolio8} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 3">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={portfolio9} className="img-fluid" alt="" />
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href={portfolio9} data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3">
                    <i className="bx bx-plus"></i>
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="portfolio-details-lightbox"
                    data-glightbox="type: external"
                    title="Portfolio Details"
                  >
                    <i className="bx bx-link"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
