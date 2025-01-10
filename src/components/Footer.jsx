import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow  m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.ibb.co/R39RgW7/logoimage.png"
                className="h-10 w-42 object-cover"
                alt="Logo"
              />
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black sm:mb-0 dark:text-gray-400">
             
            <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all-blog" className="hover:underline me-4 md:me-6">
                  All Blogs
                </Link>
              </li>
              <li>
                <Link to="/features-blog" className="hover:underline me-4 md:me-6">
                  Features Blog
                </Link>
              </li>
              <li>
                <Link to="/aboutUs" className="hover:underline me-4 md:me-6">
                  About Us
                </Link>
              </li>
            
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-black sm:text-center">
            © 2025{" "}
            <Link to="/" className="hover:underline">
              GenIdeas
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
