import React from "react";

import home from "../../assets/images/nav-icons/home.png";
import about from "../../assets/images/nav-icons/about.png";
import skills from "../../assets/images/nav-icons/skills.png";
import portfolio from "../../assets/images/nav-icons/portfolio.png";
import contact from "../../assets/images/nav-icons/contact.png";

import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <section>
      <nav className="min-h-screen fixed right-0 flex items-center justify-start w-12 sm:w-24">
        <ul className="bg-red-600 min-h-screen px-1 sm:px-3 flex flex-col justify-evenly items-center">
          <li>
            <NavLink to={"/"} className="focus:outline-none">
              <img
                className="p-1 w-7 sm:w-10 hover:scale-125 hover:rounded-lg duration-300"
                src={home}
                alt="home"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className="focus:outline-none">
              <img
                className="p-1 w-7 sm:w-10 hover:scale-125 hover:rounded-lg duration-300"
                src={about}
                alt="about"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/skills"} className="focus:outline-none">
              <img
                className="p-1 w-8 sm:w-11 hover:scale-125 hover:rounded-lg duration-300"
                src={skills}
                alt="skills"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/portfolio"} className="focus:outline-none">
              <img
                className="p-1 w-7 sm:w-10 hover:scale-125 hover:rounded-lg duration-300"
                src={portfolio}
                alt="portfolio"
              />
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} className="focus:outline-none">
              <img
                className="p-1 w-7 sm:w-10 hover:scale-125 hover:rounded-lg duration-300"
                src={contact}
                alt="contact"
              />
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
}
