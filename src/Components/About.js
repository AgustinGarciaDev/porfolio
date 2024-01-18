import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
const About = () => {
  const titleNumer = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(
      titleNumer.current,
      {
        opacity: 0,
        duration: 3,
        x: -1000,
        scrollTrigger: {
          trigger: titleNumer.current,
          toggleActions: "play  pause none none",
        },
      },
      {
        x: 0,
      }
    );
  }, []);

  return (
    <section className="containerAbout">
      <div ref={titleNumer} className="titleSection">
        <div  id="about" className="titleandNumber">
          <span>.02</span>
          <p>{t("text.header.two")}</p>
        </div>
        <div></div>
      </div>
      <article className="containertextAndPhoto">
        <div>
          <p className="textAbout">{t("text.aboutme")}</p>
          <p className="textAbout">{t("text.technology")}</p>
          <div className="skills">
            <ul>
              <li>Swift</li>
              <li>Cocoapods</li>
              <li>XCTest</li>
              <li>SwiftUI</li>
              <li>SwiftPM</li>
              <li>Core Data</li>
            </ul>
            <ul>
              <li>Sqlite</li>
              <li>Git/GitHub</li> 
              <li>SDK Firebse/Analytics</li>
              <li>Combine</li>
              <li>App Store Conect</li>
            </ul>
            <ul>
              <li>Node</li>
              <li>React</li>
              <li>ReactNative</li>
              <li>Mongo DB</li>
              <li>Redux</li>
              <li>Express</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="PhotoProfile"
            src="/assets/photo_profile.png"
            alt="la fotito"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
