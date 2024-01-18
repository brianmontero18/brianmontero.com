import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    const navbarlinks = document.querySelectorAll("#navbar .scrollto");

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;

      if (navbarlinks) {
        navbarlinks.forEach((navbarlink) => {
          const anchorLink = navbarlink as HTMLAnchorElement;
          if (!anchorLink.hash) return;
          let section = document.querySelector(anchorLink.hash);
          // Utiliza as para convertir el tipo a HTMLElement
          const htmlSection = section as HTMLElement;
          if (!htmlSection) return;
          if (position >= htmlSection.offsetTop && position <= htmlSection.offsetTop + htmlSection.offsetHeight) {
            anchorLink.classList.add("active");
          } else {
            anchorLink.classList.remove("active");
          }
        });
      }
    };

    // En el evento 'load', activa los enlaces del navbar
    window.addEventListener("scroll", navbarlinksActive);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", navbarlinksActive);
    };
  }, []);

  const handleClick = (e: any) => {
    document.body.classList.toggle("mobile-nav-active");
    e.currentTarget.classList.toggle("bi-list");
    e.currentTarget.classList.toggle("bi-x");
  };

  return (
    <>
      {/* <!-- ======= Mobile nav toggle button ======= --> */}
      {/* <!-- <button type="button" className="mobile-nav-toggle d-xl-none"><i className="bi bi-list mobile-nav-toggle"></i></button> --> */}
      <i className="bi bi-list mobile-nav-toggle d-lg-none" onClick={handleClick}></i>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="d-flex flex-column justify-content-center">
        <nav id="navbar" className="navbar nav-menu">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bx bx-home"></i> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <i className="bx bx-user"></i> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bx bx-file-blank"></i> <span>Resume</span>
              </a>
            </li>
            {/* <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bx bx-book-content"></i> <span>Portfolio</span>
              </a>
            </li> */}
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bx bx-server"></i> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <i className="bx bx-envelope"></i> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
