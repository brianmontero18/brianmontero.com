import type { LinksFunction } from "@remix-run/node";
import styles from "./styles.css";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Experienced Senior Frontend Engineer with a proven track record in diverse tech environments, ranging from
            multinational corporations to dynamic startups. Proficient in leading-edge frontend technologies, fostering
            collaborative global teamwork. Additionally, served as a Full Stack Web Development Course Professor,
            showcasing expertise in teaching and mentoring.
          </p>
        </div>

        <div className="row">
          <h3 className="resume-title">Professional Experience</h3>
          <div className="col-lg-6">
            <div className="resume-item">
              <h4>Senior Frontend Engineer </h4>
              <h5>2022 - Present</h5>
              <p>
                <em>Ampla, New York, NY </em>
              </p>
              <ul>
                <li>
                  Unioncrate’s artificial intelligence combines consumer behavior data with the client's historical
                  shipments to predict sales and inventory with up to 85.3% accuracy. Sales, purchasing, and inventory
                  into one place, automating the manual steps.
                </li>
                <li>React 16, React Hooks, Redux, react-query, react-table, react-router, react-hook-form</li>
                <li>UX: Figma, Storybook</li>
                <li>Testing: Jest + React Testing library + Mock Service Worker</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Senior Frontend Engineer</h4>
              <h5>2019 - 2022</h5>
              <p>
                <em>Unioncrate, New York, NY</em>
              </p>
              <ul>
                <li>
                  Unioncrate’s artificial intelligence combines consumer behavior data with the client's historical
                  shipments to predict sales and inventory with up to 85.3% accuracy. Sales, purchasing, and inventory
                  into one place, automating the manual steps.
                </li>
                <li>React 16, React Hooks, Redux, react-query, react-table, react-router, react-hook-form</li>
                <li>UX: Figma, Storybook</li>
                <li>Testing: Jest + React Testing library + Mock Service Worker</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Software Development Engineer</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>JPMorgan Chase & Co., Buenos Aires, Argentina</em>
              </p>
              <ul>
                <li>
                  Big data visualization app built in React and deployed in an enterprise-grade private cloud built on
                  Cloud Foundry.
                </li>
                <li>
                  The app consumes real time data from multiple micro services and shows it in a high performance grid.
                </li>
                <li>React-Redux, Redux-Saga, Reselect (memoization), React hooks</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Web Developer</h4>
              <h5>2017 - 2017</h5>
              <p>
                <em>IBM, Buenos Aires, Argentina</em>
              </p>
              <ul>
                <li>Project: HSBC bank homebanking platform for enterprises</li>
                <li>Front-end: HTML5, CSS3, Javascript (Dojo Toolkit).</li>
                <li>Back-end: Java (Spring) and SQL Server</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="resume-item">
              <h4>Professor of Full Stack Web Development course</h4>
              <h5>2016 - 2017</h5>
              <p>
                <em>Digital House Coding School, Buenos Aires, Argentina</em>
              </p>
              <ul>
                <li>Teaching how to create web applications from scratch using the following technologies.</li>
                <li>HTML5, CSS3, Sass, Javascript, React, Babel, Webpack, PHP, Laravel, MySQL</li>
                <li>Object Oriented Programming</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Javascript developer</h4>
              <h5>2016 - 2016</h5>
              <p>
                <em>Technisys, Buenos Aires, Argentina</em>
              </p>
              <ul>
                <li>
                  Development and implementation of a product made in javascript that allows to design screens for home
                  banking systems in Mobile and Desktop..
                </li>
                <li>Cyberbank Multiplatform Solution for Macro Bank</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Full Stack Web Developer</h4>
              <h5>2015 - 2016</h5>
              <p>
                <em>Globant, Buenos Aires, Argentina</em>
              </p>
              <ul>
                <li>Project: LiveNation & TicketMaster.</li>
                <li>Open Source E-Learnig platform that allows interaction with Facebook</li>
                <li>Training in framework UI of Electronic Arts (EA)</li>
              </ul>
            </div>
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelor's in Electronics Engineering (Automation and Control)</h4>
              <h5>2006 - 2010</h5>
              <p>
                <em>Universidad Rafael Belloso Chacín, Maracaibo, Venezuela</em>
              </p>
              <p>
                Skills include SCADA systems, PLC technology, and control card development. Prepared for roles in
                manufacturing, petrochemicals, telecommunications, and aerospace industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
