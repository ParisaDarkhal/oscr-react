import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/logo.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const untoggleMobileMenu = () => {
    setIsMobileMenuOpen(isMobileMenuOpen);
  };
  return (
    <header className="bg-white py-4 px-6 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-8" />
        </Link>

        <div className="hidden md:flex items-center space-x-4">
          {/* Desktop Menu */}
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-900 hover:font-semibold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-600 hover:text-gray-900 hover:font-semibold"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>

          {/* Sign in and Get started buttons */}
          <button className="border border-2 border-orange-500 rounded-full hover:bg-gray-100">
            <Link
              to="https://discord.com/invite/qQ2a4nKRt2"
              target="_blank"
              className="text-orange-500 px-3 py-2 flex"
            >
              Discord
              <span className="[&>svg]:h-5 [&>svg]:w-5 px-3 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                </svg>
              </span>
            </Link>
          </button>
          <button className="bg-orange-500 text-white px-10 py-2 rounded-full border-2 border-orange-500 hover:bg-orange-600 hover:border-orange-600">
            <a href="https://app.oscr.tech/login" target="_blank">
              Sign in
            </a>
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden"
          id="menu-toggle"
          onClick={toggleMobileMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}
        id="mobile-menu"
      >
        <ul className="bg-white py-4">
          <li>
            <Link
              to="/"
              className="block px-4 py-1 text-gray-600 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="block px-4 py-1 text-gray-600 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="https://discord.com/invite/qQ2a4nKRt2"
              target="_blank"
              className="text-orange-500 px-3 py-2 inline-flex"
              onClick={toggleMobileMenu}
            >
              Discord
              <span className="[&>svg]:h-5 [&>svg]:w-5 px-3 pt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path
                    d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 

0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"
                  />
                </svg>
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="https://app.oscr.tech/login"
              target="_blank"
              className="block px-4 py-1 text-gray-600 bg-orange-400 hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              Sign in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
