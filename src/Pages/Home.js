import About from '../Components/About'
import Hero from '../Components/Hero'
import Work from '../Components/Work'
import Projects from '../Components/Projects'
import MoreProjects from '../Components/MoreProjects'
import Contact from '../Components/Contact'

const Home = () => {
    return (
        <main className="homeContainer">
            <Hero />
            <About />
            <Work />
            <Projects />
            <MoreProjects />
            <Contact />
        </main>
    )
}

export default Home