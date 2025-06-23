import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 sm:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-[2.75rem] md:text-[3.75rem] font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 dark:from-purple-400 dark:via-blue-400 dark:to-green-300 bg-clip-text text-transparent mb-6 leading-[1.4]">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Story Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-3 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full mr-4"></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              My Story
            </h3>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p className="text-lg">
              I'm{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Sukhpreet Singh
              </span>
              , a passionate full-stack developer with experience in building
              responsive, dynamic web applications using modern technologies. I
              love solving problems and continuously learning new tools and
              practices.
            </p>

            <p>
              I'm dedicated to building scalable, modern web applications that
              deliver real value. With a focus on clean code, user-centered
              design, and continuous learning, I aim to contribute meaningfully
              to the tech industry.
            </p>

            <p>
              I specialize in JavaScript, React, Node.js, and MongoDB, and I
              enjoy working on projects that challenge my skills and allow me to
              grow as a developer.
            </p>

            <p>
              Whether it's frontend magic or backend logic, I love turning ideas
              into polished digital products that solve real-world problems.
            </p>

            <p className="text-purple-600 dark:text-purple-400 font-medium">
              In my free time, I enjoy contributing to open-source projects,
              exploring new technologies, and sharing my knowledge through blogs
              and tutorials. Let's connect and build something amazing together!
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700 backdrop-blur-sm transform hover:scale-[1.02] transition-all duration-500">
          <div className="flex items-center mb-6">
            <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full mr-4"></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Skills & Expertise
            </h3>
          </div>

          <div className="space-y-6">
            {[
              {
                category: "Languages",
                skills: ["JavaScript", "TypeScript", "Python", "C/C++"],
                color: "from-yellow-400 to-orange-500",
              },
              {
                category: "Frontend",
                skills: ["React", "HTML", "CSS", "Tailwind", "Bootstrap"],
                color: "from-blue-400 to-purple-500",
              },
              {
                category: "Backend",
                skills: ["Node.js", "Express"],
                color: "from-green-400 to-blue-500",
              },
              {
                category: "Database",
                skills: ["MongoDB", "SQL", "Firebase", "PostgreSQL",  "MySQL"],
                color: "from-purple-400 to-pink-500",
              },
              {
                category: "Tools",
                skills: ["Git", "GitHub", "REST APIs"],
                color: "from-gray-400 to-gray-600",
              },
              
            ].map((skillSet, index) => (
              <div key={index} className="group">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                  {skillSet.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillSet.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-4 py-2 bg-gradient-to-r ${skillSet.color} text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 mb-16 border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-8 bg-gradient-to-b from-teal-500 to-green-500 rounded-full mr-4"></div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Tools & Tech Stack
            </h3>
            <div className="w-3 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full ml-4"></div>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies I work with daily
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              name: "React",
              color: "from-blue-400 to-cyan-400",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              name: "Node.js",
              color: "from-green-400 to-green-600",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              name: "MongoDB",
              color: "from-green-500 to-green-700",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
              name: "Git",
              color: "from-orange-400 to-red-500",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              name: "JavaScript",
              color: "from-yellow-400 to-yellow-600",
            },
            {
              src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
              name: "HTML5",
              color: "from-orange-500 to-red-500",
            },
          ].map((tech, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-lg transform hover:scale-110 transition-all duration-300 cursor-pointer"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tech.color} p-3 mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl p-8 text-white max-w-3xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-purple-100 mb-8 leading-relaxed text-lg max-w-2xl mx-auto">
            I'm always excited to collaborate on interesting projects and
            connect with fellow developers. Whether you have an idea to discuss
            or just want to say hello, I'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-white text-purple-600 font-semibold px-8 py-4 rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-lg group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:animate-pulse"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </a>
            <a
              href="/projects"
              className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
              View My Work
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);