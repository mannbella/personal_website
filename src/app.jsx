import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx"; 
import About from "./pages/about.jsx";
import "./styles/home.css"; 
import Header from "./components/header.jsx";

// --- SIMPLE FILLER PAGES ---
const fillerStyle = { padding: "100px 20px", textAlign: "center", minHeight: "60vh" };
const Experience = () => <div style={fillerStyle}><h1>Experience Page</h1></div>;
const Projects = () => <div style={fillerStyle}><h1>Projects Page</h1></div>;
const Skills = () => <div style={fillerStyle}><h1>Skills Page</h1></div>;
const Resume = () => <div style={fillerStyle}><h1>Resume Page</h1></div>;
const Contact = () => <div style={fillerStyle}><h1>Let's Talk (Contact Page)</h1></div>;


// --- THE APP ROUTER ---
function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-base-100 text-base-content">
        <BrowserRouter>
        <Header /> 
        <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="*" element={<div style={fillerStyle}><h1>404 - Page Not Found</h1></div>} />
            </Routes>
        </main>
        </BrowserRouter>
    </div>
  ); 
}

export default App;