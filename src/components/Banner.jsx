import React from "react";
import theme from "../theme";
import BannerCube from "../components/BannerCube.jsx";

const Banner = () => {
  return (
    <div className="px-4 lg:px-20 h-auto bg-[#001233] flex items-center h-screen">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-10 text-left">
          <h2
            className="text-[#FE5000] text-5xl uppercase"
            style={{ fontFamily: theme.fonts.russoOne }}
          >
            Unleash Your Passion,{" "}
            <span
              className="text-[#A1D5CC]"
              style={{ fontFamily: theme.fonts.russoOne }}
            >
              Define Your Style
            </span>
          </h2>
          <p
            className="md:w-4/5 text-[#EFE0CA] text-left text-base"
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
            <button className="bg-[#FE5000] px-6 py-2 text-[#001233] hover:bg-[#A1D5CC] transition-all ease-in duration-200 rounded-md font-bold my-1">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2">
          <BannerCube />
        </div>
      </div>
    </div>
  );
};

export default Banner;
