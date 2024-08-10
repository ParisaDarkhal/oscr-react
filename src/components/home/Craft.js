import React from "react";
import Background from "./homeImg/ellipse-39.svg";
import Loop from "./homeImg/loop.svg";
import CraftAnything from "./homeGif/craft-anything-from-anything.gif";

const Craft = () => {
  return (
    <section
      className=" py-5 px-10"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center md:text-left mx-5 mt-10 col-span-1 md:col-span-1 self-center md:pl-12">
          <h3 className="text-2xl font-semibold mb-1">
            <span className="text-3xl text-orange-500">Craft</span> anything
            from anything
          </h3>
          <p className="mb-1">
            Want to combine your research with a YouTube video? Mix and match as
            you wish, we help you bring your ideas to life from any sources you
            choose.
          </p>
          <div className="justify-center mt-4 md:col-span-3">
            <button className="border-2 rounded-full border-orange-500 px-4 py-2 my-4 hover:bg-gray-100">
              <a href="#" className="text-orange-500">
                Learn more →
              </a>
            </button>
          </div>
        </div>

        <div
          className="flex justify-center mt-4 md:mt-0  col-span-1 md:col-span-1 relative "
          style={{
            backgroundImage: `url(${Loop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <a href={CraftAnything} target="_blank" className="relative">
            <img
              src={CraftAnything}
              alt="Feature"
              className="rounded-lg shadow-lg md:transform md:scale-75 xl:scale-100"
            />
            <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 px-2 py-1 bg-black text-white md:text-xl rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              Click to open
            </div>
          </a>
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-200 mx-auto w-7/12 mt-20 mb-20" />
    </section>
  );
};

export default Craft;
