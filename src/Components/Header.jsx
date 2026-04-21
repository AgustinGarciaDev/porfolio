import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const stored = localStorage.getItem("ag-theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = stored ?? (systemDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);

    const onScroll = () => {
      const nav = document.getElementById("main-nav");
      if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("ag-theme", next);
  };

  return (
    <nav id="main-nav">
      <a href="#hero" className="nav-logo">AG<span>.</span>dev</a>
      <div className="nav-right">
        <ul className="nav-links">
          <li className="nav-item"><a href="#about">About</a></li>
          <li className="nav-item"><a href="#experience">Experience</a></li>
          <li className="nav-item"><a href="#projects">Projects</a></li>
          <li className="nav-cta"><a href="#contact">Contact</a></li>
        </ul>
        <button className="theme-toggle" id="theme-btn" aria-label="Toggle dark mode" onClick={toggleTheme}>
          <svg className="icon-sun" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
          <svg className="icon-moon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Header;
