import React from "react";
import "./portfolio.css";
import { Helmet } from "react-helmet-async";
import Nav from "./Nav";
import Header from "./Header";
import About from "./About";
import Process from "./Process";
import Projects from "./Projects";
import Cta from "./Cta";
import Skills from "./Skills";

function Portfolio() {
  

  return (
    <>
      <Helmet>
        <title>Rania Mohamed</title>
        <meta name="description" content="Portfolio showcasing my skills, projects, and work process as a Frontend Developer specializing in React." />
        <meta property="og:title" content="Frontend Developer | React Developer - Rania Mohamed" />
        <meta property="og:description" content="Explore my work and skills as a React Developer and Frontend Developer." />
      </Helmet>

      <Nav/>
      <Header/>
      <About/>
      <Process/>
      <Projects/>
      <Cta/>
      <Skills/>
    </>
  );
}

export default Portfolio;
