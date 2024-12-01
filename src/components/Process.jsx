import React, { useEffect } from 'react'
import { purple } from "@mui/material/colors";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import AutoFixHighOutlinedIcon from "@mui/icons-material/AutoFixHighOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Process() {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <>
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
              <div data-aos="fade-down-right">
              <div  className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
                <p className="item-icon ">
                  <CalendarMonthOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">1. Planning</p>
                <p className="text-slate-500 text-md">
                  Understand the project scope, user needs, and technical
                  requirements.
                </p>
              </div>
              </div>
              
              <div data-aos="fade-up-right">
              <div  className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
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
            </div>
            <div className="shapes-part2">
              <div data-aos="fade-down-left">
              <div  className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
                <p className="item-icon">
                  <AutoFixHighOutlinedIcon sx={{ color: purple["A700"] }} />
                </p>
                <p className="text-md font-semibold">3. Optimization </p>
                <p className="text-slate-500 text-md">
                  Enhance performance. Ensure responsiveness across devices
                </p>
              </div>
              </div>
              <div data-aos="fade-up-left">
              <div  className="shapes-item hover:shadow-2xl hover:scale-105 duration-500">
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
        </div>
      </section>
    </>
  )
}

export default Process
