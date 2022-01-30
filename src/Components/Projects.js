import CardProjects from "./CardProyects";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t } = useTranslation();
  const projects = [
    {
      title: "myTinerary",
      id: "mytinerary",
      description: "text.proyect.description.one",
      tecnology: [
        "Node",
        "React",
        "Mongoose",
        "Redux",
        "Javascript",
        "Express",
        "MongoDB",
      ],
      url: "https://user-images.githubusercontent.com/66225450/121558589-2c710000-c9ec-11eb-84e3-67c8c5c83323.gif",
      gitHubLink: "https://github.com/AgustinGarciaDev/mytinerary-chinchilla",
    },
    {
      title: "myTinerary App",
      id: "mytineraryapp",
      description: "text.proyect.description.five",
      tecnology: [
        "Node",
        "React Native",
        "Mongoose",
        "Redux",
        "Javascript",
        "Express",
        "MongoDB",
      ],
      url: "https://user-images.githubusercontent.com/66225450/151716532-0578ff5a-e769-4e3a-b0f5-5ea228e158db.gif",
      gitHubLink: "https://github.com/AgustinGarciaDev/appMyTinerary",
    },

    {
      title: "Explore",
      id: "explore",
      description: "text.proyect.description.two",
      tecnology: [
        "Node",
        "React",
        "Mongoose",
        "Redux",
        "Javascript",
        "Express",
        "MongoDB",
      ],
      url: "https://user-images.githubusercontent.com/66225450/121626821-873a4400-ca4c-11eb-932d-38bbd41b2c78.gif",
      gitHubLink: "https://github.com/AgustinGarciaDev/Explore-e-commerce",
    },
    {
      title: "Explore App",
      id: "exploreapp",
      description: "text.proyect.description.three",
      tecnology: [
        "Node",
        "React",
        "Mongoose",
        "Redux",
        "Javascript",
        "Express",
        "MongoDB",
      ],
      url: "/assets/gif/AppNativeVideoEcommerce.gif",
      gitHubLink: "https://github.com/AgustinGarciaDev/exploreApp",
    },
    {
      title: "MindTrainer",
      id: "mindtrainer",
      description: "text.proyect.description.four",
      tecnology: [
        "Node",
        "React",
        "Mongoose",
        "Redux",
        "Javascript",
        "Express",
        "MongoDB",
      ],
      url: "https://user-images.githubusercontent.com/66225450/121586638-41f52280-ca0a-11eb-8f2b-131d4f3a35f7.gif",
      gitHubLink: "https://explore-2021.herokuapp.com/",
    },
    {
      title: "Clon Crunchyroll",
      id: "appVideo",
      description: "text.proyect.description.four",
      tecnology: ["React Native CLI", "Javascript"],
      url: "/assets/gif/AppNativeVideo.gif",
    },
    {
      title: "Music App",
      id: "appMusic",
      description: "text.proyect.description.four",
      tecnology: ["SwiftUI", "Alamofire", "SwiftPM", "Core Data"],
      url: "/assets/gif/SwiftAppMusic.gif",
    },
  ];

  return (
    <section id="projects" className="projectContainer">
      <div className="titleSection">
        <div className="titleandNumber">
          <span>.03</span>
          <p>{t("text.proyect")}</p>
        </div>
        <div></div>
      </div>
      <main>
        {projects.map((project, index) => (
          <CardProjects key={index} project={project} />
        ))}
      </main>
    </section>
  );
};

export default Projects;
