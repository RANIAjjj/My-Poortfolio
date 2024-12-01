import React from "react";
import "./portfolio.css";
import { Helmet } from "react-helmet-async";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import { purple } from "@mui/material/colors";

function Nav() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      

      <nav className="shadow-lg">
        <div className="nav-container">
          <ul className="nav-links text-lg font-semibold">
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
              <button>Contact</button>
            </li>
          </ul>
          <div className="langAndmode">
            {/* <div className="lang">
              <GTranslateIcon fontSize="large" className="cursor-pointer"/>
              <p>English</p>
            </div> */}
            <div className="mode">
              {/* <NightsStayIcon sx={{ color: purple["A700"] }} fontSize="large" className="cursor-pointer"/> */}
              <LightModeIcon
                sx={{ color: purple["A700"] }}
                fontSize="large"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
