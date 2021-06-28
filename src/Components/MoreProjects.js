import CardOtherProjects from "./CardOtherProjects"
const MoreProjects = () => {

    const projects = [
        {
            title: 'PetShop',
            description: 'E-commerce realiza como proyecto en el bootcamp MindHub 2021. Para la obtención de los datos consume una api de productos.',
            tecnology: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Sass'],
            gitHub: 'https://github.com/AgustinGarciaDev/petshop-chinchilla',
            link: 'https://petshopbarracas.netlify.app/index.html',
        },
        {
            title: 'Tgif',
            description: 'Página web dinámica como proyecto en el bootcamp MindHub 2021. Que consume la API  de ProPublica para la obtención de los datos.',
            tecnology: ['Html', 'Css', 'Bootstrap', 'Javascript'],
            gitHub: 'https://github.com/AgustinGarciaDev/proyectosenator',
            link: 'https://agustingarciadev.github.io/proyectosenator/',
        },
        {
            title: 'Porfolio V1',
            description: 'Proyecto personal con el fin de poder mostrar mis habilidades y proyectos realizados en mi carrera profesional.',
            tecnology: ['React', 'Css', 'Bootstrap', 'Javascript', 'Sass'],
            gitHub: 'https://github.com/AgustinGarciaDev/porfolio',
        },
        {
            title: 'Spanish Learn And Travel',
            description: 'Academia de español multilenguaje. Realizada para un cliente de España. Freelancer',
            tecnology: ['Wordpress'],
            link: 'https://spanishlearnandtravel.com/',
        },
        {
            title: 'Academia Claxon Learning',
            description: 'Academia de inglés con sistema de reserva de clases  y con un plugin  LMS para cursos online.',
            tecnology: ['Wordpress', 'Woocommerce', 'Sensei'],
            link: 'https://claxonlearning.com/',
        },
        {
            title: 'Somos gestión humana',
            description: 'Academia de formación profesional. E-commerce de cursos online con integración a moddle.',
            tecnology: ['Wordpress', 'Hubspot', 'Moodle'],
            link: 'https://ghcapacitacion.com/cursos/',
        },
    ]

    return (
        <section className='containerOtherProjects'>
            {projects.map((project, index) => <CardOtherProjects key={index} project={project} />)}
        </section>
    )
}
export default MoreProjects