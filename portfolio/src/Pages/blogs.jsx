import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import { FaGithub, FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export const Blogs = () => {
  const blogsData = [
    {
      title: "Getting Started with React",
      excerpt:
        "Learn the basics of React and how to build your first component.",
      date: "2025-05-10",
      link: "#",
    },
    {
      title: "Understanding Tailwind CSS",
      excerpt: "A deep dive into utility-first CSS framework Tailwind.",
      date: "2025-05-20",
      link: "#",
    },
    {
      title: "Mastering React Router",
      excerpt:
        "Understand dynamic routing, nested routes, and React Router v6 features.",
      date: "2025-05-15",
      link: "https://dev.to/sukh8661/react-router-guide",
    },
    {
      title: "Why Tailwind CSS is a Game Changer",
      excerpt:
        "Explore how Tailwind helps rapidly build modern UIs with utility-first classes.",
      date: "2025-05-20",
      link: "https://dev.to/sukh8661/tailwind-power",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[2.75rem] md:text-[3.75rem] font-extrabold bg-gradient-to-r from-purple-600 via-blue-600 to-purple-800 dark:from-purple-400 dark:via-blue-400 dark:to-green-300 bg-clip-text text-transparent mb-6 leading-[1.4]">
            Latest Blogs
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sharing my thoughts, experiences, and insights about web
            development, technology trends, and coding best practices.
          </p>
        </div>

        {/* Featured Blog */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-white">
              <div className="flex items-center mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                  Featured Post
                </span>
                <span className="ml-4 text-green-200 text-sm">
                  {new Date(blogsData[0]?.date).toLocaleDateString()}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {blogsData[0]?.title}
              </h3>
              <p className="text-green-100 text-lg mb-6 leading-relaxed">
                {blogsData[0]?.excerpt}
              </p>
              <a
                href={blogsData[0]?.link}
                className="inline-flex items-center bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Full Article
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.slice(1).map((blog, index) => (
            <article
              key={index + 1}
              className="group bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border border-gray-100 dark:border-gray-700 backdrop-blur-sm overflow-hidden"
            >
              {/* Blog Header */}
              <div className="relative p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                      New
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {blog.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
              </div>

              {/* Blog Footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                      Sukhpreet Singh
                    </span>
                  </div>
                  <a
                    href={blog.link}
                    className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 text-sm font-medium transition-all duration-300 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-2xl mx-auto border border-gray-100 dark:border-gray-700">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Get notified when I publish new articles about web development,
              coding tips, and tech insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-purple-500 dark:focus:border-purple-400 focus:outline-none transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
