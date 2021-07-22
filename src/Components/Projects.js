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
      url: "https://user-images.githubusercontent.com/66225450/122659237-6361b700-d14c-11eb-9b99-648d4189bf97.png",
      linkWeb: "https://my-tinerary2021.herokuapp.com/",
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
      url: " https://user-images.githubusercontent.com/66225450/122684198-699e7480-d1da-11eb-9d8f-7342b3258b4c.png",
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
      url: "https://user-images.githubusercontent.com/66225450/122683427-753b6c80-d1d5-11eb-970f-d8ef800accef.png",
      linkWeb: "https://explore-2021.herokuapp.com/",
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
      url: "https://user-images.githubusercontent.com/66225450/122684055-b2096280-d1d9-11eb-9fb3-ddc42abb458c.png",
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
      url: "https://user-images.githubusercontent.com/66225450/122683559-58ebff80-d1d6-11eb-9cbe-157aa32d63f0.png",
      linkWeb: "https://trained-mind.herokuapp.com/",
      gitHubLink: "https://explore-2021.herokuapp.com/",
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
