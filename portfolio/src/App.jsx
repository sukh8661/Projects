import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import sukhPortrait from "./img/sukh.jpg";
import { About } from "./Pages/about";
import { Projects } from "./Pages/project";
import { Blogs } from "./Pages/blogs";
import { Contact } from "./Pages/contact";
import { Home } from "./Pages/home";
import { Navbar } from "./components/navbar";


function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <BrowserRouter>
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      {/* Add padding top here */}
      <div className="-mt-16">
        {" "}
        {/* 16 * 4px = 64px */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
