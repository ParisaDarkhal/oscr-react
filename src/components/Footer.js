import React from "react";
import Logo from "./images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-6 py-20">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="privacy.html"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="terms.html"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="FAQ.html"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 font-bold"
              >
                FAQ
              </a>
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
