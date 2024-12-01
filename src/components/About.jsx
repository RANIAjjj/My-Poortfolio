import React, { useEffect } from "react";
import "./portfolio.css";
import Img2 from "../assets/grayImg.webp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DownloadIcon from "@mui/icons-material/Download";
import { purple } from "@mui/material/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  
  return (
    <>
      <section id="about" className="about-section">
        <div data-aos="fade-up" className="about-container shadow-2xl border-current">
          <div className="about-part1">
            <img
              className=" border-current"
              loading="lazy"
              alt="rania"
              src={Img2}
              style={{ width: "18rem", height: "23rem", borderRadius: "7px" }}
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
    </>
  );
}

export default About;
