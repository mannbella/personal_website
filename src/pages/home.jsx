import React from "react";
import "../styles/home.css"; 
import profilePic from "../assets/headshot.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <> 

        <section className="headshot-container">
          <div className="headshot-content">
            <div className="status-tag">
              <span className="line"></span>
              PORTLAND, OR • OPEN TO OPPORTUNITIES
            </div>

            <h1>
              Hi, I'm<br />
              Isabella Mann
            </h1>

            <p className="subtitle">• Computer Science Graduate • Software Engineer •</p>

            <div className="badges">
              <span className="badge">Meta • QA Engineer</span>
              <span className="badge">NASA Langley • Software Development Intern</span>
              <span className="badge">Trimble • SDET Intern</span>
              <span className="badge">SHRB Lab • Lead Software Developer</span>
              <span className="badge">Oregon State University • B.S. CS 2026</span>
            </div>

            <div className="actions">
              <NavLink 
                className="btn primary" 
                to="/resume"
              >
                Download Resume
              </NavLink>
              <a 
                href="https://github.com/mannbella" 
                className="btn" 
                target="_blank" 
                rel="noreferrer"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/isabella-mann-8a12a6220" 
                className="btn" 
                target="_blank" 
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="headshot-image-wrapper">
            <img src={profilePic} alt="Isabella Mann" className="profile-img"/>

            <div className="floating-card card-top-left">
              <span>Currently</span> 
              <strong>QA Engineer</strong> @ <strong>Meta</strong>
            </div>

            <div className="floating-card card-right translate-x-28">
              <span>LLM Workflows</span> 
              <strong>Automated</strong> Validation
            </div>

            <div className="floating-card card-bottom-center">
              <span>Experience</span>
              <strong>3+</strong> Years in Industry
            </div>
          </div>
        </section>


        <section className="about-content">
          <div className="bg-base-200 flex flex-col">
            <div className="w-full bg-[#2038ae] text-white py-16 px-4 flex flex-col items-center">
              <h1>About Me</h1>
              <p className="about-subtitle px-32">
                I'm a software and QA Automation Engineer with a B.S. in Computer Science, 
                specializing in automated data pipelines, generative AI validation, 
                and complex hardware-software integrations. <br />
                <br />
                My engineering philosophy is rooted in building scalable and human-centered solutions.
                Throughout my career, I have specialized in translating ambiguous requirements into 
                concrete technological systems across highly diverse environments. At Meta, I have validated
                frontier generative AI ecosystems, architected automated prompt-generation systems, and engineered
                multi-step LLM workflows. At Trimble, I scaled enterprise-level UI and API testing frameworks
                to ensure seamless backend integration and continuous software delivery. <br />
                <br />
                Beyond quality assurance, I am deeply passionate about creating and utilizing technology that has real, community-focused impacts.
                My work as Lead Software Developer at the Sustainable, Healthy, and Resilient Buildings Lab involved managing real-time telemetry and data
                pipelines for networks of environmental sensors. Additionally, my experience engineering the UI/UX for Vibrosonics, an open-source wearable device
                that translates sound into tactile vibrations for the hard-of-hearing community, solidified my commitment to functional accessibility and inclusive design. <br />
                <br />
                I am driven by the opportunity to solve interdisciplinary challenges to better the communities around me. As a Portland local, I bring a highly collaborative, adaptable, 
                and forward-thinking approach to every technical team I join.
              </p>
            </div>
          </div>
        </section>
    </> 
  );
}

export default Home;