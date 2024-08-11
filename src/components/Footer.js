import React from "react";
import Logo from "./images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-20">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/privacy"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                to="/faq#credits"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
        <img src={Logo} alt="Logo" className="h-8" />
      </div>
      <div className="text-center mt-4 text-gray-600">
        &copy; {new Date().getFullYear()} OscrAI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
