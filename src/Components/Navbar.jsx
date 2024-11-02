import React, { useEffect } from "react";
import github from "../assets/githubMarkDark.svg";
import githubLight from "../assets/githubMarkLight.svg";
import { Sun, Moon } from "lucide-react";

function Navbar({ navVal, theme, toggleTheme, onScroll }) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className="hover:ring-2 border border-lightBlue active:ring-1 fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-full min-w-max bg-darkNav dark:bg-[#b9f6d2] dark:border-black drop-shadow-2xl flex items-center gap-2 px-2 py-2 hover:drop-shadow-lg z-[9999] mx-5 sm:px-2">
      <ul className="flex justify-between">
        <div className="flex">
          {navVal.map((item, index) => (
            <li key={index} className="px-4">
              <button
                onClick={() => onScroll(item.name)}
                className={`hidden sm:block font-bold px-1 py-1 rounded-full transition-transform transform hover:-translate-y-2 hover:shadow-lg ${
                  theme === "dark" ? "text-[#0a0b07]" : "text-[#fff]"
                }`}
              >
                {item.name}
              </button>
              <button
                onClick={() => onScroll(item.name)} 
                aria-label={item.name}
                className="block sm:hidden font-bold px-1 py-1 rounded-full transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                {item.icon}
              </button>
            </li>
          ))}
          <div className="mx-1 h-6 w-px dark:bg-[#0a0b07]/80 bg-white m-auto"></div>
          <div className="flex p-1 rounded-full transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:drop-shadow-lg">
            <a
              className="flex"
              href="https://github.com/Piyuzh77"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={theme === "dark" ? github : githubLight}
                className="h-6 w-6 m-auto"
                alt="GitHub"
              />
            </a>
          </div>
          <div>
            <button
              className="flex px-2 items-center mt-[0.20rem]"
              onClick={toggleTheme}
            >
              {theme === "dark" ? (
                <Moon
                  className="m-auto rounded-full transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:drop-shadow-lg"
                  size={24}
                />
              ) : (
                <Sun
                  size={24}
                  color="#fff"
                  className="m-auto transition-transform transform hover:-translate-y-2 hover:shadow-lg hover:drop-shadow-lg"
                />
              )}
            </button>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
