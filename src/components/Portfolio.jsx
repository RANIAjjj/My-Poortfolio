import React from "react";
import "./portfolio.css";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import headerImg from "../assets/WhatsApp_Image_2024-08-19_at_6.09.51_PM-removebg-preview.png";
import Img2 from "../assets/grayImg.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { purple } from "@mui/material/colors";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import labtop from "../assets/labtop.jpg";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EastIcon from "@mui/icons-material/East";

function Portfolio() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="shadow-lg">
        <div className="nav-container">
          {/* <div className="brand text-2xl font-bold">
            <h2 className="brand-icon">R</h2>
            <h3 className="brand-name">Rania</h3>
          </div> */}
          <ul className="nav-links text-lg font-semibold">
            <li>
              <a onClick={() => scrollToSection("header")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about")}>About</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("process")}>Process</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("projects")}>Projects</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Achievements</a>
            </li>
            <button>Contact</button>
          </ul>
          <div className="langAndmode">
            {/* <div className="lang">
              <GTranslateIcon fontSize="large" className="cursor-pointer"/>
              <p>English</p>
            </div> */}
            <div className="mode">
              {/* <NightsStayIcon fontSize="large" className="cursor-pointer"/> */}
              <LightModeIcon fontSize="large" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
      <header id="header">
        <div className="absolute left-0 top-0 -z-10 h-[100dvh] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 opacity-30 blur-3xl"></div>
        <div className="header-container">
          <div className="header-text">
            <p className="header-text-title text-4xl font-semibold">
              Hello , I'm Rania Mohamed
            </p>
            <p className="header-text-description text-slate-500 text-lg">
              I'm a Freelance Frontend Developer based in Aswan,Egypt . I
              strives to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
            <div className="header-text-btn font-semibold">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                Say Hello!
              </button>
            </div>
            <div className="header-text-calcs">
              <div className="calcs-item">
                <p className="font-bold text-lg">0 Y.</p>
                <p className="font-medium text-sm">Experience</p>
              </div>
              <div className="calcs-item">
                <p className="font-bold text-lg">10</p>
                <p className="font-medium text-sm">Project Completed</p>
              </div>
              <div className="calcs-item">
                <p className="font-bold text-lg">1</p>
                <p className="font-medium text-sm">Happy Client</p>
              </div>
            </div>
          </div>

          <img
            className="shadow-2xl border-current"
            src={headerImg}
            style={{ height: "25rem", borderRadius: "20px" }}
          />
        </div>
      </header>
      <section id="about" className="about-section">
        <div className="about-container shadow-2xl border-current">
          <div className="about-part1">
            <img
              className=" border-current"
              loading="lazy"
              src={Img2}
              style={{ width: "18rem", borderRadius: "7px" }}
            />
            <div className="social-links shadow-2xl">
              <LinkedInIcon
                fontSize="small"
                sx={{ color: purple["A700"] }}
                className="cursor-pointer"
              />
              <GitHubIcon
                fontSize="small"
                sx={{ color: purple["A700"] }}
                className="cursor-pointer"
              />
              <WhatsAppIcon
                fontSize="small"
                sx={{ color: purple["A700"] }}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="about-part2">
            <p className="header-text-title text-4xl font-semibold">
              I am a Professional Frontend Developer
            </p>
            <p className="header-text-description text-slate-500 text-lg">
              I am skilled in React with expertise in JavaScript, TypeScript,
              React Context and Redux Toolkit. has experience in building
              dynamic web applications, handling APIs. Proficient in front-end
              technologies like React, Tailwind , MUI , HTML, and CSS, I am
              passionate about creating user-friendly interfaces, develop and
              maintain web apps ,and collaborating with UX teams.
            </p>
            <div className="header-text-btn font-semibold">
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <DownloadIcon /> Download my CV
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="process" className="process-section">
        <div className="process-container">
          <div className="process-title">
            <p className="text-3xl font-semibold">Work Process</p>
            <p className="text-slate-500 text-xl">
              My work process include series of steps that are systematically
              followed to complete a task or achieve a specific goal in a
              project . It involves defining the workflow, actions, and stages
              required to move from the initial concept or planning phase to the
              final result .
            </p>
          </div>
          <div className="process-shapes">
            <div className="shapes-part1">
              <div className="shapes-item hover:shadow-2xl hover:scale-110">
                <p className="item-icon ">
                  <CalendarMonthOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">1. Planning</p>
                <p className="text-slate-500 text-md">
                  Understand the project scope, user needs, and technical
                  requirements.
                </p>
              </div>
              <div className="shapes-item hover:shadow-2xl hover:scale-110">
                <p className="item-icon">
                  <CodeOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">2. Coding </p>
                <p className="text-slate-500 text-md">
                  Set up the development environment. Build the user interface.
                  Develop reusable components and integrate APIs for dynamic
                  functionality.
                </p>
              </div>
            </div>
            <div className="shapes-part2">
              <div className="shapes-item hover:shadow-2xl hover:scale-110">
                <p className="item-icon">
                  <AutoFixHighOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">3. Optimization </p>
                <p className="text-slate-500 text-md">
                  Enhance performance. Ensure responsiveness across devices
                </p>
              </div>
              <div className="shapes-item hover:shadow-2xl hover:scale-110">
                <p className="item-icon">
                  <DevicesOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">4. Deployment </p>
                <p className="text-slate-500 text-md">
                  Prepare the application for production. Deploy the front-end
                  code to hosting platforms (Netlify, Vercel).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <div className="portfolio-container">
          <p className="text-4xl font-semibold">Projects</p>
          <p className="text-xl opacity-75">A collection of my recent work</p>
          <div className="portfolio-projects">
            <div className="project hover:shadow-2xl hover:scale-105">
              <img
                src={labtop}
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-semibold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web design</p>
                <p className="text-slate-500 text-lg">Technologies used: React</p>
                <div className="buttons">
                  <button className="text-sm font-semibold">
                    Live <RemoveRedEyeIcon />{" "}
                  </button>
                  <button className="text-sm font-semibold">
                    Code <CodeOutlinedIcon />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="project hover:shadow-2xl hover:scale-105">
              <img
                src={labtop}
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-bold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web app</p>
                <p className="text-slate-500 text-lg">Technologies used: React</p>
                <div className="buttons">
                  <button className="text-sm font-semibold">
                    Live <RemoveRedEyeIcon />{" "}
                  </button>
                  <button className="text-sm font-semibold">
                    Code <CodeOutlinedIcon />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="project hover:shadow-2xl hover:scale-105">
              <img
                src={labtop}
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-bold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web design</p>
                <p className="text-slate-500 text-lg">Technologies used: React</p>
                <div className="buttons">
                  <button className="text-sm font-semibold">
                    Live <RemoveRedEyeIcon />{" "}
                  </button>
                  <button className="text-sm font-semibold">
                    Code <CodeOutlinedIcon />{" "}
                  </button>
                </div>
              </div>
            </div>
            <div className="project hover:shadow-2xl hover:scale-105">
              <img
                src={labtop}
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-bold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web app</p>
                <p className="text-slate-500 text-lg">Technologies used: React</p>
                <div className="buttons">
                  <button className="text-sm font-semibold">
                    Live <RemoveRedEyeIcon />{" "}
                  </button>
                  <button className="text-sm font-semibold">
                    Code <CodeOutlinedIcon />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hint-section">
        <div className="hint-container">
          <p className="text-3xl font-semibold text-slate-50">
            Do you have a Project idea?
          </p>
          <p className="text-3xl font-semibold text-slate-50">
            Let's discuss your project !
          </p>
          <button className="text-md font-semibold text-slate-50">
            Let’s work Together <EastIcon fontSize="small" />
          </button>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
