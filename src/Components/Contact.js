import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contacto">
      <div className="titleSectionContact">
        <div className="titleandNumberContact">
          <span>.05</span>
          <p>{t("text.contact")}</p>
        </div>
      </div>
      <div className="containerTextContact">
        <h3>{t("text.contact.subTitle")}</h3>
        <a href="mailto:agustinchinchilla16@gmail.com">
          {t("text.contact.btn")}
        </a>
        <div className="containerIconsFooter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/agustingarciadev/"
          >
            <i className="fab fa-linkedin "></i>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/AgustinGarciaDev"
          >
            <i className="fab fa-github-square"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
