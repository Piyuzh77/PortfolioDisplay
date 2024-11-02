import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import { useState, useEffect } from "react";
import { CodeXml, Home, PanelTopClose, PhoneCall, User } from "lucide-react";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import nerdmo from "./assets/nerdmoSS.png";
import pwb from "./assets/pwb.png";
import javaApp from "./assets/javaApp.png";
import About from "./Components/About";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme; 
    document.body.style.backgroundColor = theme === "dark" ? "#1f2930" : "#ffffff"; 
  }, [theme]);

  const navVal = [
    {
      text: true,
      name: "Home",
      icon: <Home color={theme === "dark" ? "#0a0b07" : "#fff"} />,
    },
    {
      text: true,
      name: "Skills",
      icon: <PanelTopClose color={theme === "dark" ? "#0a0b07" : "#fff"} />,
    },
    {
      text: true,
      name: "Project",
      icon: <CodeXml color={theme === "dark" ? "#0a0b07" : "#fff"} />,
    },
    {
      text: true,
      name: "About",
      icon: <User color={theme === "dark" ? "#0a0b07" : "#fff"} />,
    },
  ];

  const skills = [
    {
      name: "Java",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg",
      description:
        "A versatile language used for building a variety of applications.",
    },
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      description: "The standard markup language for creating web pages.",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      description:
        "A stylesheet language used for describing the presentation of HTML.",
    },
    {
      name: "JavaScript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      description:
        "A dynamic scripting language commonly used for web development.",
    },
    {
      name: "Spring",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
      description: "A powerful framework for building Java applications.",
    },
    {
      name: "Tailwind",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Vite",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      description:
        "A fast build tool and development server for modern web projects.",
    },
    {
      name: "Maven",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
      description:
        "A fast build tool and development server for Java projects.",
    },
  ];
  const projects = [
    {
      name: "Web Extension",
      title: "Nerdmo",
      description:
        "A web extension designed to block distracting websites with a customizable countdown timer, allowing users to set specific durations for blocking.",
      src: nerdmo,
      tech: ["ReactJs", "TailwindCss", "Chrome-Web API"],
      githubLink: "https://github.com/Piyuzh77/NerdMo",
    },
    {
      name: "Portfolio Website",
      title: "Devfolio",
      src: pwb,
      tech: ["ReactJs", "TailwindCss", "Vitejs"],
      description:
        "A personal portfolio website showcasing projects, skills, and experience with a sleek, responsive design.",
      githubLink: "https://github.com/Piyuzh77",
    },
    {
      name: "Automated Folder Deletor",
      title: "Folder-Deletor",
      src: javaApp,
      description:
        "A standalone command-line interface (CLI) tool written in JavaScript for deleting empty folders from the root directory. It features robust exception handling and employs multiple threads for depth-first search (DFS) traversal!",
      tech: ["Java", "NIO APi (Java-8)", "Windows-Task Schedular"],
      githubLink: "https://github.com/Piyuzh77/Automated-Empty-Folder-Deleter",
    },
  ];

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="dark:bg-gray-900">
        <Navbar
          navVal={navVal}
          toggleTheme={toggleTheme}
          theme={theme}
          onScroll={handleScroll}
        />
        <section id="Home">
        <Header theme={theme} />
          <Hero theme={theme} />
        </section>
        <section id="Skills">
          <Skills theme={theme} skills={skills} />
        </section>
        <section id="Project">
          <Project theme={theme} projects={projects} />
        </section>
        <section id="About">
          <About theme={theme} />
        </section>
      </div>
    </>
  );
}

export default App;
