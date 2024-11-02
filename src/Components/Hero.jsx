import React from "react";
import { LocateIcon, MailIcon, Pin, PinIcon } from "lucide-react";
function Hero({ theme }) {
  const isDark = theme === "dark";
  return (
    <div className="container mx-auto px-4 rounded-lg">
      <h1
        className={`${
          !isDark ? " text-darkNav" : "text-light"
        } px-6 pt-2 font-extrabold text-2xl`}
      >
        Hello There! My name is{" "}
        <span
          className={`${
            !isDark ? "bg-lightBlue text-darkNav" : "bg-darkNav text-lightBlue"
          } inline-block -rotate-1 px-3 pb-1 pt-3`}
        >
          <span
            className={`${
              !isDark ? "text-darkNav" : "text-lightBlue"
            } inline-block rotate-1 text-3xl`}
          >
            Piyush Gupta.
          </span>
        </span>
      </h1>

      <h1
        className={`${
          !isDark ? " text-darkNav" : "text-light "
        } p-2 -mt-3 font-extrabold px-6 pt-2 text-2xl`}
      >
        I am a{" "}
        <span
          className={`${
            !isDark ? "bg-lightBlue" : "bg-darkNav"
          } inline-block hover:-rotate-1 px-3 pb-1 pt-2 mt-2 `}
        >
          <span
            className={`${
              !isDark ? "text-darkNav" : "text-lightBlue"
            } inline-block hover:rotate-1 text-2xl`}
          >
            Fullstack Software Developer
          </span>
        </span>{" "}
        and a{" "}
        <span
          className={`${
            !isDark ? "bg-lightBlue" : "bg-darkNav"
          } inline-block hover:-rotate-1 px-3 pb-1 pt-2 mt-2`}
        >
          <span
            className={`${
              !isDark ? "text-darkNav" : "text-lightBlue"
            }  inline-block hover:rotate-1`}
          >
            Computer Science Undergrad From India
          </span>
          
        </span>
      </h1>

      <h3
        className={`${
          isDark ? "text-light" : "text-darkNav"
        } px-6 pt-2 pb-3 font-medium text-lg`}
      >
        Java developer focused on full-stack web development, web design, and
        UI/UX design to create dynamic applications.
        <br />
        Passionate about utilizing a variety of tools to develop responsive,
        user-friendly interfaces.
      </h3>

      <div className="flex px-6 pb-2">
        <a
          className={`${
            !isDark ? "bg-light text-darkNav" : "bg-darkNav text-white"
          } my-3 inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-8 transition duration-200 hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[4px_4px_0px_0px_#10002B] active:translate-x-0 active:translate-y-0 active:!shadow-none dark:hover:shadow-[4px_4px_0px_0px_#b9f6d2] w-max`}
          href="mailto:piyushg0707.03@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        > <MailIcon/>
          Let's Talk!
        </a>
      </div>
    </div>
  );
}

export default Hero;
