import React, { useState } from "react";
import "./portfolio.css";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { purple } from "@mui/material/colors";

function Nav() {
  const [themeFlag, setThemeFlag] = useState(false);

  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
  } else if (localStorage.getItem("theme") === "light") {
    document.documentElement.classList.remove("dark");
  }

  function toLight() {
    localStorage.theme = "light";
    setThemeFlag(true);
  }

  function toDark() {
    localStorage.theme = "dark";
    setThemeFlag(false);
  }

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      <nav className="shadow-2xl dark:bg-slate-800">
        <div className="nav-container dark:bg-slate-800">
          <ul className="nav-links text-lg font-semibold dark:text-white">
            <li>
              <a
                href="#header"
                title="Go to Home Section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("header");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                title="Go to about Section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#process"
                title="Go to process Section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("process");
                }}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#projects"
                title="Go to projects Section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects");
                }}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                title="Go to skills Section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills");
                }}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#contact"
                title="Go to contact Section"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                <button>Contact</button>
              </a>
            </li>
          </ul>
          <div className="langAndmode">
            <div className="mode">
              {themeFlag ? (
                <LightModeIcon
                  sx={{ color: purple["A700"] }}
                  fontSize="large"
                  className="cursor-pointer"
                  onClick={toDark}
                />
              ) : (
                <NightsStayIcon
                  sx={{ color: purple["A700"] }}
                  fontSize="large"
                  className="cursor-pointer"
                  onClick={toLight}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
