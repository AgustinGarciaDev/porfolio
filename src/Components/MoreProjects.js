import CardOtherProjects from "./CardOtherProjects";
const MoreProjects = () => {
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
      link: "https://spanishlearnandtravel.com/",
    },
    {
      title: "Claxon Learning (Academy)",
      description: "text.otherProyect.description.five",
      tecnology: ["Wordpress", "Woocommerce", "Sensei"],
      link: "https://claxonlearning.com/",
    },
    {
      title: "Somos gestión humana",
      description: "text.otherProyect.description.six",
      tecnology: ["Wordpress", "Hubspot", "Moodle"],
      link: "https://ghcapacitacion.com/cursos/",
    },
  ];

  return (
    <section className="containerOtherProjects">
      {projects.map((project, index) => (
        <CardOtherProjects key={index} project={project} />
      ))}
    </section>
  );
};
export default MoreProjects;
