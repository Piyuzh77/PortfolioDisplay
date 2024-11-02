import React from "react";
import logo from "../assets/symbol.png";
import logodark from "../assets/symbolDark.png";
import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";

function Header({ theme }) {
  const iconColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="max-w-[99vw] mx-auto px-4 flex">
      <div
        className={`w-full flex flex-col justify-center ${
          theme === "dark" ? `bg-darkNav` : `bg-[#b9f6d2]`
        }`}
      >
        <div className="flex p-6 justify-center items-center w-full">
          {theme === "dark" ? (
            <div className="flex px-3 items-center">
              <img src={logodark} className="w-8 h-8 rounded-full" alt="Logo" />
              <span className="pl-4 text-lg font-sans font-extrabold text-[#b9f6d2] leading-tight sm:block">
                Piyush Gupta
              </span>
            </div>
          ) : (
            <div className="flex px-3 items-center">
              <img src={logo} className="w-8 h-8 rounded-full" alt="Logo" />
              <span className="pl-4 text-lg font-sans text-darkNav font-extrabold leading-tight sm:block">
                Piyush Gupta
              </span>
            </div>
          )}

          {/* Social Media Icons */}
          <div className="flex ml-auto gap-3">
            <button
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
              <a
                href="mailto:piyushg0707.03@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MailIcon />
              </a>
            </button>
            <button
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
            <a
                href="https://www.linkedin.com/in/piyush-gupta-298464212/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <LinkedinIcon />
              </a>
            </button>
            <button
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
            <a
                href="https://x.com/PiyushOnTwT"
                target="_blank"
                rel="noopener noreferrer"
              >
              <TwitterIcon />
              </a>
            </button>
            <button
              className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
            <a
                href="https://www.instagram.com/piyush0719/"
                target="_blank"
                rel="noopener noreferrer"
              >
              <InstagramIcon />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
