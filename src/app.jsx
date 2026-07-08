import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home.jsx"; 
import About from "./pages/about.jsx";
import "./styles/home.css"; 
import Header from "./components/header.jsx";

const fillerStyle = { padding: "100px 20px", textAlign: "center", minHeight: "60vh" };
const Experience = () => <div style={fillerStyle}><h1>Experience Page note: put projects, skills, and leadership here</h1></div>;
const Resume = () => <div style={fillerStyle}><h1>Resume Page</h1></div>;
const Contact = () => <div style={fillerStyle}><h1>Let's Talk (Contact Page)</h1></div>;

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col text-base-content">
        <BrowserRouter>
        <Header /> 
        <main>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
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