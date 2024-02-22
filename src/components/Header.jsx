import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import theme from "../theme";

const Header = () => {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const headlines = [
    "Huge Savings Await! Enjoy Up To 15% Off On Your First Order With Code Soham15.",
    "Jersey Bonanza: Buy More, Save More! Discounts Up To ₹250 With Our Special Offers.",
    "Big Savings Today! Use Code Hi-Fan For 5% Off, Plus Discount On Multiple Purchases.",
  ];

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      if (typingIndex < headlines[headlineIndex].length) {
        setTypingIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(interval);
        timeout = setTimeout(() => {
          setTypingIndex(0);
          setHeadlineIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        }, 5000); // Pause before switching to the next headline
      }
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [typingIndex, headlineIndex]);

  return (
    <header className={`w-full shadow-lg bg-[#001233]`}>
      <nav
        className={`lg:py-px md:py-0.5 py-1 lg:px-2 px-4 flex justify-center items-center bg-[#A1D5CC] lg:mx-40 md:mx-20 lg:rounded-lg md:rounded-lg`}
      >
        {/* Displaying Headlines */}
        <div className="flex-grow flex justify-center space-x-6 relative">
          <span
            className="antialiased text-base font-bold text-[#001233]"
            style={{ fontFamily: theme.fonts.quicksand }}
          >
            {headlines[headlineIndex].slice(0, typingIndex)}

            <span className="px-0.5 h-full border-r-2 border-[#001233] animate-pulse"></span>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
