import TabJobs from "./TabJobs";
import { useTranslation } from "react-i18next";
const Work = () => {
  const { t } = useTranslation();

  return (
    <section id="experience" className="jobs">
      <div className="titleSection">
        <div className="titleandNumber">
          <span>.02</span>
          <p>{t("text.experience")}</p>
        </div>
        <div></div>
      </div>
      <div className="containerTabs">
        <TabJobs />
      </div>
    </section>
  );
};
export default Work;
