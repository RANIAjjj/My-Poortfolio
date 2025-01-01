import React from 'react'
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import labtop from "../assets/labtop(1).webp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

function Projects() {

  const projects=[
    {
      title: "E-commerce Plateform",
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB.',
      img: labtop,
      technologies: ['React', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates.',
      img: labtop,
      technologies: ['React', 'Nodejs', 'OpenAI', 'Material-UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Landing Page',
      description: 'A landing page that showcase services provided in business, and make it easy for customers to contact',
      img: labtop,
      technologies: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ]

  return (
    <>
      <section id="projects" className="projects-section dark:bg-slate-800">
        <div className="portfolio-container">
          <p className="text-4xl font-semibold dark:text-white">Projects</p>
          <p className="text-xl opacity-75 dark:text-white">A collection of my recent work</p>
          <div className="portfolio-projects">
            {projects.map((project ,index)=>(
              <div key={index} className="project hover:shadow-2xl hover:scale-105 duration-700 dark:border-slate-600">
              <img
                loading="lazy"
                src={project.img}
                alt="project preview"
                width={490}
                height={370}
                style={{ borderRadius: "10px" }}
              />
              <div className="project-content">
                <p className="font-semibold text-xl dark:text-white">{project.title}</p>
                {/* <p className="text-slate-500 text-lg min-w-24">{project.description}</p> */}
                <p className="text-slate-500 text-lg text-pretty dark:text-slate-400">Technologies used: {project.technologies.map((tech,i)=>(
                   <span key={i}> {tech} </span>
                ))}
                </p>
                <div className="buttons">
                  <a href={project.liveUrl} className="text-sm font-semibold">
                    Live <RemoveRedEyeIcon />{" "}
                  </a>
                  <a href={project.githubUrl} className="text-sm font-semibold">
                    Code <CodeOutlinedIcon />{" "}
                  </a>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
