import React from "react";
import "./portfolio.css";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import headerImg from "../assets/header.webp";
import Img2 from "../assets/grayImg.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { purple } from "@mui/material/colors";
import DownloadIcon from "@mui/icons-material/Download";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import labtop from "../assets/labtop(1).webp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EastIcon from "@mui/icons-material/East";
import html from "../assets/html-.webp";
import css from "../assets/css-.webp";
import js from "../assets/js.webp";
import react from "../assets/react.webp";
import rtk from "../assets/reduxToolkit.webp";
import tailwind from "../assets/tailwind.webp";
import typescript from "../assets/typeScript.webp";
import mui from "../assets/mui.webp";
import nodejs from "../assets/nodeJS.webp";
import express from "../assets/express.webp";
import mongo from "../assets/mongo.webp";
import git from "../assets/github.webp";
import accessability from "../assets/accessability.webp";
import { Helmet } from "react-helmet-async";

function Portfolio() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView();
    }
  };

  return (
    <>
      <Helmet>
        <title>Frontend Developer | React Developer - Rania Mohamed</title>
        <meta name="description" content="Portfolio showcasing my skills, projects, and work process as a Frontend Developer specializing in React." />
        <meta property="og:title" content="Frontend Developer | React Developer - Rania Mohamed" />
        <meta property="og:description" content="Explore my work and skills as a React Developer and Frontend Developer." />
      </Helmet>

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
            {/* <li>
              <a>Achievements</a>
            </li> */}
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

      <header id="header">
        <div className="absolute left-0 top-0 -z-10 h-[100dvh] w-full bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200 opacity-30 blur-3xl"></div>
        <div className="header-container">
          <div className="header-text">
            <p className="header-text-title text-4xl font-semibold">
              Hello , I'm Rania Mohamed
            </p>
            <p className="header-text-description text-slate-500 text-lg">
              I'm a Freelance Frontend Developer based in Aswan , Egypt. I
              strives to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
            <div className="header-text-btn font-semibold">
              <button>Say Hello!</button>
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
            loading="lazy"
            alt="me2"
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
              alt="me"
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
              <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-500">
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
              <div className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
                <p className="item-icon ">
                  <CalendarMonthOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">1. Planning</p>
                <p className="text-slate-500 text-md">
                  Understand the project scope, user needs, and technical
                  requirements.
                </p>
              </div>
              <div className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
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
              <div className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
                <p className="item-icon">
                  <AutoFixHighOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">3. Optimization </p>
                <p className="text-slate-500 text-md">
                  Enhance performance. Ensure responsiveness across devices
                </p>
              </div>
              <div className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
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
            <div className="project hover:shadow-2xl hover:scale-105 duration-700">
              <img
                loading="lazy"
                src={labtop}
                alt="project preview"
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-semibold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web design</p>
                <p className="text-slate-500 text-lg">
                  Technologies used: React
                </p>
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
            <div className="project hover:shadow-2xl hover:scale-105 duration-700">
              <img
                loading="lazy"
                src={labtop}
                alt="project preview"
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-bold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web app</p>
                <p className="text-slate-500 text-lg">
                  Technologies used: React
                </p>
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
            <div className="project hover:shadow-2xl hover:scale-105 duration-700">
              <img
                loading="lazy"
                src={labtop}
                alt="project preview"
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-bold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web design</p>
                <p className="text-slate-500 text-lg">
                  Technologies used: React
                </p>
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
            <div className="project hover:shadow-2xl hover:scale-105 duration-700">
              <img
                loading="lazy"
                src={labtop}
                alt="project preview"
                width={490}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-bold text-xl">Landing Page</p>
                <p className="text-slate-500 text-lg">Web app</p>
                <p className="text-slate-500 text-lg">
                  Technologies used: React
                </p>
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

      <section className="cta-section">
        <div className="cta-container">
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

      <section id="skills" className="skills-section">
        <div className="skills-container">
          <p className="text-4xl font-semibold">My Skills</p>
          <p className="text-xl opacity-75">
            I'm always ready to learn new skills as the job requires, since
            learning is the key in software development.
          </p>
          <div className="skills-icons mt-[90px]">
            <img
              src={html}
              alt="html logo"
              loading="lazy"
              title="Html"
              width={150}
            />
            <img
              src={css}
              alt="css logo"
              loading="lazy"
              title="CSS"
              width={130}
            />
            <img
              src={js}
              alt="javascript logo"
              loading="lazy"
              title="JS"
              width={150}
            />
            <img
              src={react}
              alt="react logo"
              loading="lazy"
              title="ReactJS"
              width={150}
            />
            <img
              src={rtk}
              alt="redux toolkit logo"
              loading="lazy"
              title="Readux Toolkit"
              width={150}
            />
            <img
              src={tailwind}
              alt="tailwind logo"
              loading="lazy"
              title="Tailwind css"
              width={150}
            />
            <img
              src={typescript}
              alt="typescript logo"
              loading="lazy"
              title="TS"
              width={150}
            />
            <img
              src={mui}
              alt="mui logo"
              loading="lazy"
              title="MUI"
              width={150}
            />
            <img
              src={nodejs}
              alt="nodejs logo"
              loading="lazy"
              title="NodeJS"
              width={150}
            />
            <img
              src={express}
              alt="express logo"
              loading="lazy"
              title="ExpressJS"
              width={180}
            />
            <img
              src={mongo}
              alt="mongodb logo"
              loading="lazy"
              title="Mongo DB"
              width={150}
            />
            <img
              src={git}
              alt="git logo"
              loading="lazy"
              title="Git & GitHub"
              width={150}
            />
            <img
              src={accessability}
              alt="accessability logo"
              loading="lazy"
              title="Accessability"
              width={150}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
