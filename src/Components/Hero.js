import { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const title = useRef();
  const { t } = useTranslation();

  return (
    <section id="inicio" className="containerHero">
      <h1 className="titleHero" ref={title}>
        Agustin Chinchilla Garcia
      </h1>
      <div>
        <h2 className="subTitle"> iOS Engineer </h2>
        <p className="textHero">{t("text.hero")}</p>
        <a href="#contact" className="btnHero">
          {t("text.hero.btn")}
        </a>
      </div>
    </section>
  );
};

export default Hero;
