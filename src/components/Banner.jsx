import React from "react";
import theme from "../theme";
import BannerCube from "../components/BannerCube.jsx";
import FetchJerseys from "../components/FetchJerseys.jsx";

const Banner = () => {
  return (
    <div className="px-4 lg:px-20 h-auto bg-[#001233] flex items-center h-auto lg:py-24 md:py-12 py-6">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-14 text-left">
          <h2
            className="antialiased text-[#FE5000] text-5xl uppercase"
            style={{ fontFamily: theme.fonts.russoOne }}
          >
            Unleash Your Passion,{" "}
            <span
              className="antialiased text-[#A1D5CC]"
              style={{ fontFamily: theme.fonts.russoOne }}
            >
              Define Your Style
            </span>
          </h2>
          <p
            className="antialiased md:w-4/5 text-[#EFE0CA] text-left text-base"
            style={{ fontFamily: theme.fonts.fredoka }}
          >
            Discover the perfect blend of comfort and style with our exclusive
            collection of jerseys. Elevate your game-day look and showcase your
            passion in style.
          </p>
          <div className="text-base" style={{ fontFamily: theme.fonts.inter }}>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Find Your Jersey"
              className="py-2 px-4 rounded-md outline-none my-1 mr-4"
            />
            <button className="antialiased bg-[#A1D5CC] px-6 py-2 text-[#001233] hover:bg-[#FE5000] transition-all ease-in duration-200 rounded-md font-bold my-1">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <FetchJerseys />
        </div>
      </div>
    </div>
  );
};

export default Banner;
