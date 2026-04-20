import { useEffect } from "react";
import About from "../Components/About";
import Hero from "../Components/Hero";
import Work from "../Components/Work";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const Home = () => {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add("visible"), i * 55);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const observe = () => document.querySelectorAll(".reveal").forEach(el => obs.observe(el));
    observe();
    const t = setTimeout(observe, 300);
    return () => { clearTimeout(t); obs.disconnect(); };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Projects />
      <Contact />
      <footer>
        <p>Built by <span>Agustín García</span> · 2026</p>
      </footer>
    </>
  );
};

export default Home;
