import CardProjects from "./CardProyects";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t } = useTranslation();
  const projects = [

    {
      title: "Onboarding Banco Hipotecario",
      id: "onboarding",
      description: "text.proyect.description.one",
      tecnology: [
        "Swift",
        "UIKit",
        "SDK Firebase - Crashlytics",
        "SDK Digital Identity",
        "MVVM",
      ],
      url: "/assets/gif/onboarding.gif",
      storeApp: "https://apps.apple.com/ar/app/banca-m%C3%B3vil-banco-hipotecario/id469262970"
    },
    ,
    {
      title: "Roly",
      id: "roly",
      description: "text.proyect.description.two",
      tecnology: [
        "Swift",
        "UIKit",
        "SDK Firebase",
        "SDK Crashlytics",
        "SwiftUI",
        "Objective-C",
        "SQLite",
        "MVVM",
      ],
      url: "/assets/gif/roly.gif",
      storeApp: "https://apps.apple.com/ar/app/roly-m-commerce/id1100636934"
    },
    {
      title: "Naranja X",
      id: "naranjax",
      description: "text.proyect.description.six",
      tecnology: [
        "Swift",
        "UIKit",
        "SDK Firebase",
        "SDK Crashlytics",
        "MVVM",
        "VIP",
        "VIPER",
      ],
      url: "/assets/gif/naranjax.gif",
      storeApp: "https://apps.apple.com/ar/app/naranja-x-tu-plata-crece/id1452691757",
    },
    {
      title: "Scanner DNI",
      id: "scanerdni",
      description: "text.proyect.description.three",
      tecnology: [
        "Swift",
        "SwiftUI",
        "SDK Firebase",
        "SDK Crashlytics",
        "MVVM",
        "Combine"
      ],
      url: "/assets/gif/scannerDNI.gif",
      storeApp: "https://apps.apple.com/ar/app/scaner-barcode-dni/id6464230303?l=en-GB"
    },
    {
      title: "Somos Gestión Humana",
      id: "gestionhumana",
      description: "text.proyect.description.four",
      tecnology: [
        "WordPress",
        "Woocommerce",
        "Elementor",
        "SEO",
        "Modle",
      ],
      url: "/assets/gif/somosgestionhumana.gif",
      linkWeb: "https://ghcapacitacion.com/cursos/",
    },
    {
      title: "Disney+",
      id: "disneyplus",
      description: "text.proyect.description.five",
      tecnology: [
        "Swift",
        "SwiftUI",
        "SDK Firebase",
        "SDK Crashlytics",
        "MVVM",
        "Combine"
      ],
      url: "/assets/gif/DisneyPlus.gif",
      gitHubLink: "https://github.com/AgustinGarciaDev/exploreApp",
    },
    {
      title: "MindTrainer",
      id: "mindtrainer",
      description: "text.proyect.description.seven",
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
      description: "text.proyect.description.eigth",
      tecnology: ["React Native CLI", "Javascript"],
      url: "/assets/gif/AppNativeVideo.gif",
    },
    {
      title: "Music App",
      id: "appMusic",
      description: "text.proyect.description.nine",
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
