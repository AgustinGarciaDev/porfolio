import About from "../Components/About";
import Hero from "../Components/Hero";
import Work from "../Components/Work";
import Projects from "../Components/Projects";
import MoreProjects from "../Components/MoreProjects";
import Contact from "../Components/Contact";
import { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const btnTheme = () => {
    if (theme === "dark") {
      setTheme("ligth");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      {/*   <button onClick={btnTheme} >change theme</button> */}
      <main className={`homeContainer ${theme}`}>
        <Hero />
        <About />
        <Work />
        <Projects />
        <MoreProjects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
