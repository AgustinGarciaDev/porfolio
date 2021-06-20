import CardOtherProjects from "./CardProyects"
const MoreProjects = () => {

    const projects = [
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            gitHub: 'https://github.com/',
            link: 'https://github.com/',
        },
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            gitHub: 'https://github.com/',
            link: 'https://github.com/',
        },
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            gitHub: 'https://github.com/',
            link: 'https://github.com/',
        },
    ]

    return (
        <section>
            {projects.map((project, index) => <CardOtherProjects key={index} project={project} />)}
        </section>
    )
}
export default MoreProjects