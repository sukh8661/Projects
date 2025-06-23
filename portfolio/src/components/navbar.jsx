import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ toggleTheme, isDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blogs", label: "Blogs" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 py-6 bg-gradient-to-r from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 backdrop-blur-lg border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent tracking-tight">
          {"</ Sukhpreet Singh >"}
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map(({ path, label }) => (
            <Link
              key={label}
              to={path}
              className="relative text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:bg-blue-50/80 dark:hover:bg-blue-900/20 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              {label}
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative p-3 text-lg sm:text-xl bg-gradient-to-br from-yellow-400 to-orange-500 dark:from-blue-500 dark:to-purple-600 text-white rounded-full hover:shadow-2xl hover:shadow-yellow-500/25 dark:hover:shadow-blue-500/25 hover:scale-110 transition-all duration-300 ease-out transform active:scale-95 group overflow-hidden"
          aria-label="Toggle Dark Mode"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400 dark:from-blue-400 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="relative z-10">
            {isDark ? <FaSun /> : <FaMoon />}
          </span>
        </button>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={toggleMenu}
          className="md:hidden ml-4 text-2xl text-gray-700 dark:text-gray-300"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700">
          {navItems.map(({ path, label }) => (
            <Link
              key={label}
              to={path}
              className="block text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 py-2 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};