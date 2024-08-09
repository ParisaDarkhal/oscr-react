import React from "react";
import Background from "./homeImg/ellipse-39.svg";
import Loop from "./homeImg/loop.svg";
import SearchDiscoveryFeature from "./homeGif/search-discovery-feature.gif";

const SearchDiscover = () => {
  return (
    <section
      className="py-5 px-10"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Text Block */}
        <div className="md:col-span-1 mx-1 text-center md:text-left justify-between self-center md:pl-12">
          <div>
            <h3 className="text-2xl font-semibold mb-1 mt-10">
              <span className="text-3xl text-orange-500">Search</span> and
              <span className="text-3xl text-orange-500">Discover</span> fresh
              source content, in real-time
            </h3>
            <p className="mb-4">
              We all need to start somewhere. Streamline your research with our
              discovery tool, or let us handle it for you to kickstart your
              creation.
            </p>
          </div>

          <div className="mt-4">
            <button className="border-2 rounded-full border-orange-500 px-4 py-2 hover:bg-gray-100">
              <a href="#" className="text-orange-500">
                Learn more →
              </a>
            </button>
          </div>
        </div>

        {/* Image Block */}
        <div
          className="md:col-span-1 relative "
          style={{
            backgroundImage: `url(${Loop})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Background SVG for Large Screens */}
          <a href={SearchDiscoveryFeature} target="_blank" className="relative">
            <img
              src={SearchDiscoveryFeature}
              alt="Transform-AI-animation"
              className="rounded-lg shadow-lg mx-auto md:mx-0 md:transform md:scale-75 xl:scale-100 xl:mx-auto"
            />
            <div className="absolute bottom-60 left-1/2 transform -translate-x-1/2 translate-y-full mt-2 px-2 py-1 bg-black text-white text-xs md:text-xl rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              Click to open
            </div>
          </a>
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-200 mx-auto w-7/12 mt-20 mb-20 md:hidden" />
    </section>
  );
};

export default SearchDiscover;
