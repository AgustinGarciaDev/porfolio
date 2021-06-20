import CardProjects from "./CardProyects"
const Projects = () => {

    const projects = [
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],

        },
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],

        },
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],

        },
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],

        },
        {
            title: 'Title',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],

        },

    ]

    return (
        <section className="projectContainer">
            <div className="titleSection">
                <div className="titleandNumber">
                    <span >.03</span>
                    <p>Some Things I’ve Built</p>
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