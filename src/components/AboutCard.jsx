import React from "react";

const AboutCard = ({ layout, fansImg }) => {
  const order = layout === "reverse" ? 1 : 0;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 
        ${order === 1 ? "mb-20" : "mt-20"}`}
    >
      <div
        className={`flex items-center justify-center bg-cream
          ${order === 1 ? "order-last" : ""}`}
      >
        <img
          src={fansImg}
          alt="Fans Image"
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="bg-navy p-4 rounded-sm">
        <div className="text-lg font-bold mb-2">About</div>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
