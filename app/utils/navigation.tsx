import { useLocation } from "@remix-run/react";
import { useEffect } from "react";
import AOS from "aos";
import SwiperCore from "swiper/core";
import { Pagination } from "swiper/modules";
import Typed from "typed.js";

export function useAOS() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
}

export function useSwipper() {
  useEffect(() => {
    SwiperCore.use([Pagination]);
  }, []);
}

export function useTyped() {
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
}

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

export function useScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      if (select(location.hash)) {
        scrollto(location.hash);
      }
    }
  }, [location]);
}
