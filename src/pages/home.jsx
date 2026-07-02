import React from "react";
import "../styles/home.css"; 
import Emailer from "../components/emailer.jsx";

import profilePic from "../assets/headshot.png";

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

          <p className="subtitle">
            • Computer Science Graduate • Software Engineer •
          </p>

          <div className="badges">
            <span className="badge">Meta • QA Engineer</span>
            <span className="badge">NASA Langley • Software Development Intern</span>
            <span className="badge">Trimble • SDET Intern</span>
            <span className="badge">SHRB Lab • Lead Developer</span>
            <span className="badge">Oregon State University • B.S. CS 2026</span>
          </div>

          <div className="actions">
            <button className="btn primary">Download Resume</button>
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
            <span>Experience</span>
            <strong>3+</strong> Years in Industry
          </div>

          <div className="floating-card card-right">
            <span>Tests Built</span> 
            <strong>200+</strong> Automated
          </div>

          <div className="floating-card card-bottom-center">
            <span>Currently</span> 
            <strong>QA Engineer • Meta</strong>
          </div>
        </div>
      </section>
      
      <div className="flex flex-col mt-20">
        <Emailer />
      </div>
    </> 
  );
}

export default Home;