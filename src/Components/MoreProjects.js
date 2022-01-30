import CardOtherProjects from "./CardOtherProjects";
import { useTranslation } from "react-i18next";

const MoreProjects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "PetShop",
      description: "text.otherProyect.description.one",
      tecnology: ["Html", "Css", "Bootstrap", "Javascript", "Sass"],
      gitHub: "https://github.com/AgustinGarciaDev/petshop-chinchilla",
      link: "https://petshopbarracas.netlify.app/index.html",
    },
    {
      title: "Tgif",
      description: "text.otherProyect.description.two",
      tecnology: ["Html", "Css", "Bootstrap", "Javascript"],
      gitHub: "https://github.com/AgustinGarciaDev/proyectosenator",
      link: "https://agustingarciadev.github.io/proyectosenator/",
    },
    {
      title: "Porfolio V1",
      description: "text.otherProyect.description.three",
      tecnology: ["React", "Css", "Bootstrap", "Javascript", "Sass"],
      gitHub: "https://github.com/AgustinGarciaDev/porfolio",
    },
    {
      title: "Spanish Learn And Travel",
      description: "text.otherProyect.description.four",
      tecnology: ["Wordpress"],
    },
    {
      title: "Claxon Learning (Academy)",
      description: "text.otherProyect.description.five",
      tecnology: ["Wordpress", "Woocommerce", "Sensei"],
    },
    {
      title: "Somos gestión humana",
      description: "text.otherProyect.description.six",
      tecnology: ["Wordpress", "Hubspot", "Moodle"],
    },
  ];

  return (
    <section className="containerOtherProjects">
      <div className="titleSection">
        <div className="titleandNumber">
          <span>.05</span>
          <p>{t("text.otherProyect")}</p>
        </div>
        <div></div>
      </div>
      <main className="containerCardsOtherProjects">
        {projects.map((project, index) => (
          <CardOtherProjects key={index} project={project} />
        ))}
      </main>
    </section>
  );
};
export default MoreProjects;
