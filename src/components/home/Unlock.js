import React from "react";
import Loop from "./homeImg/loop.svg";
import UnlockYourContent from "./homeGif/unlock-your-unique-content.gif";

const Unlock = () => {
  return (
    <section className="py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Text Block */}
        <div className="md:order-2 md:self-center order-1">
          <div className="text-center md:text-left mt-10 md:mt-20">
            <h3 className="text-2xl font-semibold mb-1">
              Unlock the power of your
              <span className="text-3xl text-orange-500">unique context</span>
            </h3>
            <p className="mb-1">
              Bring your own context and data, and repurpose it to create
              personalized, publish-ready content, in seconds.
            </p>
          </div>
          <div className="flex justify-center md:justify-start mt-4">
            <button className="border-2 rounded-full border-orange-500 px-4 py-2 my-4 hover:bg-gray-100">
              <a href="#" className="text-orange-500">
                Learn more →
              </a>
            </button>
          </div>
        </div>

        {/* Image Block */}
        <div className="md:order-1 order-2 relative">
          <div className="md:hidden flex justify-center items-center group">
            <a href={UnlockYourContent} target="_blank" className="relative">
              <img
                src={UnlockYourContent}
                alt=""
                className="shadow-lg rounded-lg"
              />
              <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 px-2 py-1 bg-black text-white text-xs md:text-xl rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Click to open
              </div>
            </a>
          </div>
          <div className="md:block hidden">
            <a href={UnlockYourContent} target="_blank" className="relative">
              <img
                src={UnlockYourContent}
                alt="Transform-AI-animation"
                className="rounded-lg shadow-lg mx-auto md:mx-0 md:transform md:scale-75 xl:scale-100 xl:mx-auto"
              />
              <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 px-2 py-1 bg-black text-white text-xs md:text-xl rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                Click to open
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Unlock;
