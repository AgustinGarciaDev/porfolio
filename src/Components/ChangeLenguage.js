import { useTranslation } from "react-i18next";

const ChangeLenguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.id);
  };
  return (
    <div>
      <button className="switchbtn" onClick={changeLanguage} value="en">
        <img id="en" src="/assets/flag/united-states.svg" alt="" />
      </button>
      <button className="switchbtn" onClick={changeLanguage} value="es">
        <img id="es" src="/assets/flag/spain.svg" alt="" />
      </button>
    </div>
  );
};

export default ChangeLenguage;
