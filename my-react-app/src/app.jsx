import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx"; // Note: Make sure home.jsx is inside a "pages" folder!
import "./Home.css"; 
import Header from "./header.jsx";

// --- SIMPLE FILLER PAGES ---
const fillerStyle = { padding: "100px 20px", textAlign: "center", minHeight: "60vh" };
const About = () => <div style={fillerStyle}><h1>About Page</h1></div>;
const Experience = () => <div style={fillerStyle}><h1>Experience Page</h1></div>;
const Projects = () => <div style={fillerStyle}><h1>Projects Page</h1></div>;
const Skills = () => <div style={fillerStyle}><h1>Skills Page</h1></div>;
const Leadership = () => <div style={fillerStyle}><h1>Leadership Page</h1></div>;
const Resume = () => <div style={fillerStyle}><h1>Resume Page</h1></div>;
const Contact = () => <div style={fillerStyle}><h1>Let's Talk (Contact Page)</h1></div>;


// --- THE APP ROUTER ---
function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<div style={fillerStyle}><h1>404 - Page Not Found</h1></div>} />
        </Routes>
      </main>
    </BrowserRouter>
  ); 
}

export default App;