import React, { useEffect } from "react";
import "./portfolio.css";
import headerImg from "../assets/header.webp";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);
  return (
    <>
      <header id="header">
        <div className="absolute left-0 top-0 -z-10 h-[100dvh] w-full bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200 opacity-30 blur-3xl"></div>
        <div className="header-container">
          <div data-aos="fade-right" className="header-text">
            <p className="header-text-title text-4xl font-semibold">
              Hello , I'm Rania Mohamed
            </p>
            <p className="header-text-description text-slate-500 text-lg">
              I'm a Freelance Frontend Developer based in Aswan , Egypt. I
              strives to build immersive and beautiful web applications through
              carefully crafted code and user-centric design.
            </p>
            <div className="header-text-btn font-semibold">
              <a aria-label="WhatsApp Number" title="whatsApp link" href="https://wa.me/01147142033?text=Hello%2C%20I%20am%20interested%20in%20your%20services" target="_blank">
              <button>Say Hello!</button>
              </a>
            </div>
            <div className="header-text-calcs">
              <div className="calcs-item">
                <p className="font-bold text-lg">0 Y.</p>
                <p className="font-medium text-sm">Experience</p>
              </div>
              <div className="calcs-item">
                <p className="font-bold text-lg">+10</p>
                <p className="font-medium text-sm">Project Completed</p>
              </div>
              <div className="calcs-item">
                <p className="font-bold text-lg">1</p>
                <p className="font-medium text-sm">Happy Client</p>
              </div>
            </div>
          </div>

          <img
            data-aos="fade-left"
            className="shadow-2xl border-current"
            src={headerImg}
            alt="rania"
            style={{ height: "25rem", width: "19rem", borderRadius: "20px" }}
          />
        </div>
      </header>
    </>
  );
}

export default Header;
