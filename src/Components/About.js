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
    <section id="about" className="containerAbout">
      <div ref={titleNumer} className="titleSection">
        <div className="titleandNumber">
          <span>.01</span>
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
              <li>Node</li>
              <li>React</li>
              <li>ReactNative</li>
              <li>JSON</li>
              <li>Mongo DB</li>
              <li>Redux</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>SCSS</li>
              <li>Git/GitHub</li>
              <li>Docker</li>
              <li>SCSS</li>
              <li>Selenium</li>
              <li>Laravel</li>
              <li>Firebase SDK</li>
            </ul>
            <ul>
              <li>Swift</li>
              <li>Cocoapods</li>
              <li>Gitlab</li>
              <li>XCTest</li>
              <li>SwiftUI</li>
              <li>SwiftPM</li>
              <li>Core Data</li>
            </ul>
          </div>
        </div>
        <div>
          <img
            className="PhotoProfile"
            src="https://user-images.githubusercontent.com/66225450/122656714-977cae00-d133-11eb-9eec-d4360bd02c5a.png"
            alt="la fotito"
          />
        </div>
      </article>
    </section>
  );
};

export default About;
