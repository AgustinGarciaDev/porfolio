import CardProjects from "./CardProyects"
const Projects = () => {

    const projects = [
        {
            title: 'myTinerary',
            id: 'mytinerary',
            description: 'Aplicación web construida en el backend con Node, y el frontend con React js. Para manejar su estado global utilicé Redux. My Tinerary fue el resultado de un sprin de 5 semanas realizado con la metodología SCRUM.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Redux', 'Javascript', 'Express', 'MongoDB'],
            url: 'https://user-images.githubusercontent.com/66225450/122659237-6361b700-d14c-11eb-9b99-648d4189bf97.png',
            linkWeb: 'https://my-tinerary2021.herokuapp.com/',
            gitHubLink: 'https://github.com/AgustinGarciaDev/mytinerary-chinchilla',
        },
        {
            title: 'myTinerary App',
            id: 'mytineraryapp',
            description: 'Aplicación móvil realizada con react native cuanta con las funcionales que la versión web consumo de api, sistema de comentarios y like , creación y logueo de cuenta de un usuario a traves de aplicacion o con Facebook.',
            tecnology: ['Node', 'Javascript', 'React Native', 'Mongoose', 'Redux', 'Javascript', 'Express', 'MongoDB'],
            url: ' https://user-images.githubusercontent.com/66225450/122684198-699e7480-d1da-11eb-9d8f-7342b3258b4c.png',
            gitHubLink: 'https://github.com/AgustinGarciaDev/appMyTinerary'
        },

        {
            title: 'Explore',
            id: 'explore',
            description: 'E-commerce desarrollada en un grupo  con la temática de una tienda de juguetes sexuales. Fue desarrollada en 2 semanas donde fui el líder de equipo llevando a cabo la responsabilidad de un producto terminado y profesional.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Redux', 'Javascript', 'Express', 'MongoDB'],
            url: 'https://user-images.githubusercontent.com/66225450/122683427-753b6c80-d1d5-11eb-970f-d8ef800accef.png',
            linkWeb: 'https://explore-2021.herokuapp.com/',
            gitHubLink: 'https://github.com/AgustinGarciaDev/Explore-e-commerce',
        },
        {
            title: 'Explore App',
            id: 'exploreapp',
            description: 'Aplicación móvil realizada con react native, fue desarrollada en las mismas dos semanas que la e-commerce. Se realizaron las 2 en paralelo. Cuenta con todas las funcionalidades que su versión web.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Redux', 'Javascript', 'Express', 'MongoDB'],
            url: 'https://user-images.githubusercontent.com/66225450/122684055-b2096280-d1d9-11eb-9fb3-ddc42abb458c.png',
            gitHubLink: 'https://github.com/AgustinGarciaDev/exploreApp',
        },
        {
            title: 'MindTrainer',
            id: 'mindtrainer',
            description: 'Aplicación web de cursos online con la temática personal trainer. Desarrollada en grupo en una semana donde fui líder de equipo para llevar a cabo el desarrollo de la misma.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Redux', 'Javascript', 'Express', 'MongoDB'],
            url: 'https://user-images.githubusercontent.com/66225450/122683559-58ebff80-d1d6-11eb-9cbe-157aa32d63f0.png',
            linkWeb: 'https://trained-mind.herokuapp.com/',
            gitHubLink: 'https://explore-2021.herokuapp.com/',
        },


    ]

    return (
        <section id="projects" className="projectContainer">
            <div className="titleSection">
                <div className="titleandNumber">
                    <span>.03</span>
                    <p>Mis proyectos</p>
                </div>
                <div></div>
            </div>
            <main>
                {projects.map((project, index) => <CardProjects key={index} project={project} />)}
            </main>
        </section>
    )
}

export default Projects