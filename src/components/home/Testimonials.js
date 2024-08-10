import React from "react";
import Img2 from "./homeImg/image-2.png";
import Img28 from "./homeImg/image-28.png";

const Testimonials = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          What our customers are saying
        </h2>
        <h3 className="text-xl font-semibold mb-8 text-center text-gray-500">
          Branding leaders at high-growth companies rely on Oscr to connect with
          their targeted audience.
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
          {/* Images Container */}
          <div className="flex flex-row items-center justify-center gap-4">
            <img src={Img2} alt="logo-CentryStone" className="w-32 h-auto" />
            <img
              src={Img28}
              alt="logo-CentryStone"
              className="rounded-lg w-32 h-auto"
            />
          </div>
          {/* Testimonial Container */}
          <div className="text-left">
            <p className="text-black mb-2">
              “We rely on Oscr for nearly 100% of our marketing material. In a
              competitive market, Oscr offers a revolutionary way to efficiently
              and effectively produce valuable materials for our target
              audience. It has significantly boosted our brand presence, helped
              us stand out from the competition, and greatly increased our
              business conversions.”
            </p>
            <p className="text-gray-500 mb-2">
              - Kelly Shen/CEO and Founder, Centrystone Capital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
