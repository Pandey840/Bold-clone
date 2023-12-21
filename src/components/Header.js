import React from "react";
import imageLinks from "../data/imageLinks.json";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const logo = imageLinks.logo;
  return (
    <header className="bg-[#451C76] p-5">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-20 mr-6" />
        </div>
        <div className="xl:hidden">
          <IoMenu className="text-5xl text-white" />
        </div>
        <ul className="hidden xl:flex space-x-5 font-bold text-sm pt-10 mr-10">
          <li>
            <a href="#a" className="text-white">
              ABOUT US
            </a>
          </li>
          <li className="relative group">
            <a href="#b" className="text-white">
              EARLY DETECTION OF DEMENTIA
            </a>
            <ul className="absolute hidden bg-[#372350] text-white py-2 px-4 rounded mt-1 group-hover:block min-w-64 z-10">
              <li className="cursor-pointer mt-2">WHAT IS DEMENTIA?</li>
              <li className="cursor-pointer mt-2">
                WHAT IS EARLY DETECTION OF DEMENTIA?
              </li>
            </ul>
          </li>
          <li>
            <a href="#c" className="text-white">
              TECHNICAL ASSISTANCE
            </a>
          </li>
          <li className="relative group">
            <a href="#d" className="text-white">
              RESOURCES
            </a>
            <ul className="absolute hidden bg-[#372350] text-white py-2 px-4 rounded mt-1 group-hover:block min-w-64 z-10">
              <li className="cursor-pointer mt-2">PARTNER SPOTLIGHTS</li>
              <li className="cursor-pointer mt-2">
                DEMENTIA DETECTION TOOLKITS
              </li>
              <li className="cursor-pointer mt-2">FEATURED LINKS</li>
            </ul>
          </li>
          <li>
            <a href="#e" className="text-white">
              FAQS
            </a>
          </li>
          <li>
            <a href="#f" className="text-white">
              CONNECT
            </a>
          </li>
          <li className="relative group">
            <a href="#g" className="text-white">
              EVENTS
            </a>
            <ul className="absolute hidden bg-[#372350] text-white py-2 px-4 rounded mt-1 group-hover:block w-40 right-0 z-10">
              <li className="cursor-pointer mt-2">WEBINARS</li>
              <li className="cursor-pointer mt-2">SYMPOSIUM 2022</li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
