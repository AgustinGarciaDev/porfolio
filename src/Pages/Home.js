import About from '../Components/About'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Projects from '../Components/Projects'
import MoreProjects from '../Components/MoreProjects'

const Home = () => {
    return (
        <main className="homeContainer">
            <Hero />
            <About />
            <Work />
            <Projects />
            <MoreProjects />
        </main>
    )
}

export default Home