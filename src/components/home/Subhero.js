import React from "react";
import Logo from "./homeImg/logo.svg";
import LaptopScreen from "./homeImg/screen-1.png";

const Subhero = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-xl py-1 text-center">
          <h2 className="block sm:inline">From Hours To Seconds</h2>
          <h2 className="block sm:inline">- Do Less, Get More With</h2>
          <img
            src={Logo}
            alt="logo"
            className="small-logo h-auto mx-auto sm:ml-2 sm:inline-block"
          />
        </div>

        <h2 className="text-3xl font-bold text-center">
          <span className="text-orange-500">Build </span> your brand and
          <span className="text-orange-500"> Grow </span>your business
        </h2>

        <div className="flex flex-col items-center">
          <img
            src={LaptopScreen}
            alt="laptop-screen"
            className="transform scale-75"
          />
          <a
            href="https://app.oscr.tech/login"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white mx-3 px-6 py-2 rounded-full text-lg"
          >
            Get started →
          </a>
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-200 mx-auto w-7/12 mt-20 mb-20" />
    </section>
  );
};

export default Subhero;
