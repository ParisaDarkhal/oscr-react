import React from "react";

const CardPricing = ({
  title,
  description,
  price,
  credits,
  features,
  isBestValue = false,
}) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-lg ${
        isBestValue ? "border-2 border-orange-500" : ""
      } relative`}
    >
      {isBestValue && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-400 text-white text-xs font-bold py-1 px-3 rounded-full">
          BEST VALUE
        </div>
      )}
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-4xl font-bold mb-2">
        ${price}{" "}
        <span className="text-gray-600 text-sm font-normal">Per month</span>
      </div>
      <p className="text-sm mb-4">{credits} credits*/month</p>
      <button className="w-full bg-orange-500 text-white py-3 rounded-full mb-6 hover:bg-orange-600 transition-colors">
        Try for free →
      </button>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="w-5 h-5 text-orange-500 mr-2 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span dangerouslySetInnerHTML={{ __html: feature }}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardPricing;
