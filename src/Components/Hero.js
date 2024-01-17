import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const title = useRef();
  const containerHero = useRef();
  const { t } = useTranslation();
  useEffect(() => {
    gsap.from(title.current, {
      duration: 1.5,
      rotate: 360,
      repeat: 1,
      yoyoEase: true,
      ease: "elastic",
    });
    gsap.from(containerHero.current, {
      duration: 1.5,
      rotate: 360,
      repeat: 1,
      yoyoEase: true,
      ease: "elastic",
    });
  }, []);

  return (
    <section id="inicio" className="containerHero">
      <h1 className="titleHero" ref={title}>
        Agustin Garcia.
      </h1>
      <div ref={containerHero}>
        <h2 className="subTitle"> iOS and web developer </h2>
        <p className="textHero">{t("text.hero")}</p>
        <a href="#contact" className="btnHero">
          {t("text.hero.btn")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
