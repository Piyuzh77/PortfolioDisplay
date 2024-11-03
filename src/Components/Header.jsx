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
    <div className="max-w-full mx-auto px-2">
      <div
        className={`w-full flex flex-col items-center ${
          theme === "dark" ? `bg-darkNav` : `bg-[#b9f6d2]`
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center sm:p-6 p-2 w-full">
          {/* Logo and Name */}
          <div className="flex items-center px-2">
            <img
              src={theme === "dark" ? logodark : logo}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
              alt="Logo"
            />
            <span
              className={`pl-2 text-base sm:text-lg font-sans font-extrabold leading-tight ${
                theme === "dark" ? "text-[#b9f6d2]" : "text-darkNav"
              }`}
            >
              Piyush Gupta
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex mt-3 sm:mt-0 sm:ml-auto gap-2">
            <a
              href="mailto:piyushg0707.03@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
              <MailIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush-gupta-298464212/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
              <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://x.com/PiyushOnTwT"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1 sm:p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 ${iconColor}`}
            >
              <TwitterIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
