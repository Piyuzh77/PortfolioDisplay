import React from "react";
import Projects from "./Cards/ProjectsCard";

const Project = ({ projects, theme }) => {
  const isDark = theme === "dark";
  return (
    <>
      <div
        className={`${
          !isDark ? "bg-darkNav " : "bg-light "
        } container p-6 flex flex-row flex-wrap group max-w-7xl mx-auto mb-6 px-4 rounded-lg`}
      >
       <h1
          className={`text-xl font-extrabold ${
            isDark ? "text-darkNav" : "text-lightBlue"
          } px-4 container m-auto rounded-lg `}
        >
          Projects
        </h1>
        {" "}
        {projects.map((project, i) => {
          return (
            <div className="flex m-2" key={i}>
              <Projects project={project} theme={theme} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
