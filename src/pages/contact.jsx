import React, { useState } from "react";
import Emailer from "../components/emailer.jsx";

function contact() {
  return (
    <div className="min-h-screen bg-base-200 pb-20 flex flex-col">
      <div className="w-full bg-[#4b9c43] text-white pt-24 pb-32 px-4 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h1>
        <p className="text-lg">Questions, inquires, projects, I'm here to help!</p>
      </div>

      <div className="w-full max-w-4xl mx-auto px-4 -mt-20 relative z-10">
        <Emailer />
      </div>
    </div>
  );
}

export default contact;