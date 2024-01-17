import { useTranslation } from "react-i18next";
const CardProjects = ({
  project: { id, title, description, tecnology, url, linkWeb, storeApp,gitHubLink },
}) => {
  const { t } = useTranslation();

  return (
    <article id={id} className="cardProject">
      <div
        className="coverProjects"
        style={{ backgroundImage: ` url('${url}')` }}
      >
        <div className="colorCover"></div>
      </div>
      <div className="containerTextProjects">
        <p>{t("text.proyect.subtitleAbove")}</p>
        <h5>{title}</h5>
        <div className="descriptionProject">
          <p>{t(description)}</p>
        </div>
        <ul>
          {tecnology.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          {linkWeb && (
            <a target="_blank" rel="noopener noreferrer" href={linkWeb}>
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}

        {gitHubLink && (
                     <a target="_blank" rel="noopener noreferrer" href={gitHubLink}>
                     <i className="fab fa-github-alt"></i>
                   </a>
          )}
        
          {storeApp && (
            <a target="_blank" rel="noopener noreferrer" href={storeApp}>
             <i class="fab fa-app-store-ios"></i>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardProjects;
