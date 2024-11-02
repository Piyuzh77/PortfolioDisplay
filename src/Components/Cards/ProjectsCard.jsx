import React from "react";

const Projects = ({ project, theme }) => {
  const isDark = theme === "dark";
  return (
    <div>
      <div
        className={`w-full h-full rounded-lg ${
          isDark ? "bg-darkNav text-light" : "bg-light text-darkNav"
        } flex flex-col md:flex-row p-2 px-6 items-start`}
      >
        <div className="p-3 w-full flex flex-col m-2">
          <h1 className="rounded-full bg-darkNav max-w-fit text-lightBlue px-3 py-1 -translate-x-1">
            Personal Project
          </h1>
          <h1 className="font-bold my-2 text-2xl md:text-3xl border-black">
            {project.title}
          </h1>
          <p className="mr-0 md:mr-16 border-black text-xl md:text-2xl mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap mb-4">
            {project.tech.map((t, i) => (
              <div
                key={i}
                className={`${
                  isDark
                    ? "bg-lightBlue text-darkNav"
                    : "bg-darkNav text-light"
                } flex rounded-full max-w-fit p-1 my-2 mx-1`}
              >
                <h1 className="px-1">{t}</h1>
              </div>
            ))}
          </div>
          <a
            className={`${
              !isDark
                ? "bg-lightBlue border border-black text-darkNav"
                : "bg-light border border-black text-darkNav"
            } my-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-8 transition duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-0 active:translate-y-0 active:!shadow-none dark:hover:shadow-[4px_4px_0px_0px_#fff] w-max`}
            href="mailto:piyushg0707.03@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github!
          </a>
        </div>

        <img
          src={project.src}
          className="rounded-xl w-full md:w-[300px] lg:w-[520px] h-full md:h-fit object-cover m-auto ring-2 hover:rotate-1 hover:shadow-lg drop-shadow-xl "
        />
      </div>
    </div>
  );
};

export default Projects;
