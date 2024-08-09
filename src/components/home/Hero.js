import React from "react";
import Background from "./homeImg/ellipse-39.svg";
import Img1 from "./homeImg/image-1.png";
import Img2 from "./homeImg/image-2.png";
import Img3 from "./homeImg/image-3.png";
import Img4 from "./homeImg/image-4.png";
import Img5 from "./homeImg/image-5.png";
import Img6 from "./homeImg/whizQueen.jpg";

const Hero = ({ Bg }) => {
  return (
    <section
      className="py-16 px-6 pt-40"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">
          <span className="hero-span1">Discover, </span>
          <span className="hero-span2">Organize, </span>
          <span className="hero-span3">Repurpose, </span>
          <span className="hero-span4">Create</span>
        </h1>
        <h2 className="text-xl mb-8">
          Turn your unique context into action, insight, and new content. Fast
        </h2>
        <h3 className="py-5">
          For businesses & professionals who want to <br /> grow your influence
          and build your brand
        </h3>
        <a
          href="https://app.oscr.tech/login"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 text-white mx-3 px-6 py-2 rounded-full text-lg"
        >
          Get started →
        </a>
      </div>
      <hr className="my-8 border-t-2 border-gray-200 mx-auto w-7/12 mt-20 mb-20" />
      <h3 className="text-xl text-center text-gray-800 m-8">
        Trusted by the world's most innovative
        <span className="font-semibold">
          growth, marketing and branding teams, and entrepreneurs.
        </span>
      </h3>
      <div className="container mx-auto px-4 md:px-40">
        <div className="flex flex-wrap justify-center md:grid md:grid-cols-6 gap-1">
          <img src={Img1} alt="Logo 1" className="h-20 px-3 md:col-span-1" />
          <img src={Img2} alt="Logo 2" className="h-20 px-3 md:col-span-1" />
          <img
            src={Img3}
            alt="Logo 3"
            className="h-20 md:pl-16 px-3 md:col-span-1 transform scale-100"
          />
          <img src={Img4} alt="Logo 4" className="h-20 px-3 md:col-span-1" />
          <img src={Img5} alt="Logo 5" className="h-20 px-3 md:col-span-1" />
          <img
            src={Img6}
            alt="Logo 6"
            className=" px-3 transform scale-100 md:col-span-1 self-center"
          />
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-200 mx-auto w-7/12 mt-20 mb-20" />
    </section>
  );
};

export default Hero;
