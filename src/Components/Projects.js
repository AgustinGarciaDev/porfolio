import CardProjects from "./CardProyects"
const Projects = () => {

    const projects = [
        {
            title: 'myTinerary',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            url: 'https://user-images.githubusercontent.com/66225450/122659237-6361b700-d14c-11eb-9b99-648d4189bf97.png',
            linkWeb: 'https://my-tinerary2021.herokuapp.com/',
            gitHubLink: 'https://github.com/AgustinGarciaDev/mytinerary-chinchilla',
        },
        {
            title: 'myTinerary App',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            url: ' https://user-images.githubusercontent.com/66225450/122684198-699e7480-d1da-11eb-9d8f-7342b3258b4c.png',
            gitHubLink: 'https://github.com/AgustinGarciaDev/appMyTinerary'
        },

        {
            title: 'Explore',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            url: 'https://user-images.githubusercontent.com/66225450/122683427-753b6c80-d1d5-11eb-970f-d8ef800accef.png',
            linkWeb: 'https://explore-2021.herokuapp.com/',
            gitHubLink: 'https://github.com/AgustinGarciaDev/Explore-e-commerce',
        },
        {
            title: 'Explore App',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            url: 'https://user-images.githubusercontent.com/66225450/122684055-b2096280-d1d9-11eb-9fb3-ddc42abb458c.png',
            gitHubLink: 'https://github.com/AgustinGarciaDev/exploreApp',
        },
        {
            title: 'MindTrainer',
            description: 'A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.',
            tecnology: ['Node', 'Javascript', 'React', 'Mongoose', 'Node', 'Javascript', 'React', 'Mongoose'],
            url: 'https://user-images.githubusercontent.com/66225450/122683559-58ebff80-d1d6-11eb-9cbe-157aa32d63f0.png',
            linkWeb: 'https://trained-mind.herokuapp.com/',
            gitHubLink: 'https://explore-2021.herokuapp.com/',
        },


    ]

    return (
        <section className="projectContainer">
            <div className="titleSection">
                <div className="titleandNumber">
                    <span>.03</span>
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