import React from "react";

const Separator = ({ headlines, bgColor, textColor }) => {
  return (
    <header className="w-full">
      <nav
        className="lg:py-1 md:py-1 py-0.5 px-2 flex justify-center items-center"
        style={{ backgroundColor: bgColor }}
      >
        <div
          className={`flex-grow flex lg:flex-row md:flex-row flex-col ${
            headlines.length === 1
              ? "justify-center items-center"
              : "justify-between"
          }`}
        >
          {headlines.map((headline, index) => (
            <div
              key={index}
              className="antialiased w-full md:w-[33.33%] text-center text-sm uppercase py-1 font-fredoka"
              style={{ color: textColor }}
            >
              {headline}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Separator;
