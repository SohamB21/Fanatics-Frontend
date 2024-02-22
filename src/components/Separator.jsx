import React from "react";
import theme from "../theme";

const Separator = ({ headlines }) => {
  return (
    <header className="w-full">
      <nav className="lg:py-1 md:py-1 py-0.5 flex justify-center items-center bg-[#EFE0CA]">
        <div
          className={`flex-grow flex lg:flex-row md:flex-row flex-col ${
            headlines.length === 1 ? "justify-center items-center" : "justify-between"
          }`}
        > 
          {headlines.map((headline, index) => (
            <div
              key={index}
              className="antialiased w-full md:w-[33.33%] text-center text-[#001233] font-semibold text-sm uppercase py-1"
              style={{ fontFamily: theme.fonts.quickSand }}
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
