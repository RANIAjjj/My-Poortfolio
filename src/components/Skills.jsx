import React from 'react'
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

function Skills() {
  const skills =[
    {
      img: html,
      alt: "html logo",
      title: "Html",
      width: 150,
      height: 150,
    },
    {
      img: css,
      alt: "css logo",
      title: "Css",
      width: 130,
      height: 130,
    },
    {
      img: js,
      alt: "javascript logo",
      title: "JS",
      width: 150,
      height: 150,
    },
    {
      img: react,
      alt: "react logo",
      title: "ReactJS",
      width: 150,
      height: 150,
    },
    {
      img: rtk,
      alt: "redux toolkit logo",
      title: "Redux Toolkit",
      width: 150,
      height: 150,
    },
    {
      img: tailwind,
      alt: "tailwind logo",
      title: "Tailwind CSS",
      width: 150,
      height: 150,
    },
    {
      img: typescript,
      alt: "typescript logo",
      title: "TS",
      width: 150,
      height: 150,
    },
    {
      img: mui,
      alt: "mui logo",
      title: "MUI",
      width: 150,
      height: 150,
    },
    {
      img: nodejs,
      alt: "nodejs logo",
      title: "NodeJS",
      width: 150,
      height: 150,
    },
    {
      img: express,
      alt: "express logo",
      title: "ExpressJS",
      width: 180,
      height: 140,
    },
    {
      img: mongo,
      alt: "mongodb logo",
      title: "Mongo DB",
      width: 150,
      height: 150,
    },
    {
      img: git,
      alt: "git logo",
      title: "Git & GitHub",
      width: 150,
      height: 150,
    },
    {
      img: accessability,
      alt: "accessability logo",
      title: "Accessibility",
      width: 150,
      height: 150,
    },
  ]
  return (
    <>
      <section id="skills" className="skills-section">
        <div className="skills-container">
          <p className="text-4xl font-semibold">My Skills</p>
          <p className="text-xl opacity-75">
            I'm always ready to learn new skills as the job requires, since continous
            learning is the key in software development.
          </p>
          <div className="skills-icons mt-[90px]">
            {skills.map((skill ,index)=>(
              <img
              key={index}
              src={skill.img}
              alt={skill.alt}
              loading="lazy"
              title={skill.title}
              width={skill.width}
              height={skill.height}
            />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
