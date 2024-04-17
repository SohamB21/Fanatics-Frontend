import React, { useState, useContext } from "react";
import {
  PiCaretCircleLeft,
  PiCaretCircleRight,
  PiUploadSimple,
  PiTShirt,
  PiHouse,
  PiInfo,
  PiShoppingCart,
  PiSignIn,
  PiSignOut,
  PiQuestion,
  PiList,
  PiX,
} from "react-icons/pi";
import userPfp4 from "../assets/userPfp4.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";

function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // fetching details of user and rendering them based on their availability
  const { user } = useContext(AuthContext);
  const userEmail = user ? user.email : "";
  const userName = user
    ? user.displayName || userEmail.split("@")[0]
    : "User Name";

  // links which are displayed in the first/middle section
  const firstLinks = [
    {
      icon: (
        <img
          src={user && user.photoURL ? user.photoURL : userPfp4}
          alt="User Pfp"
          className="mr-2 w-8 h-8 border-2 rounded-full border-orange"
        />
      ),
      text: userName,
      route: "/admin-dashboard",
    },
    {
      icon: <PiUploadSimple className="mr-4 w-6 h-6 text-orange" />,
      text: "Upload Jerseys",
      route: "/admin-dashboard/upload",
    },
    {
      icon: <PiTShirt className="mr-4 w-6 h-6 text-orange" />,
      text: "Manage Jerseys",
      route: "/admin-dashboard/manage",
    },
    {
      icon: <PiHouse className="mr-4 w-6 h-6 text-orange" />,
      text: "Home",
      route: "/",
    },
    {
      icon: <PiInfo className="mr-4 w-6 h-6 text-orange" />,
      text: "About",
      route: "/about",
    },
    {
      icon: <PiShoppingCart className="mr-4 w-6 h-6 text-orange" />,
      text: "Shop",
      route: "/shop",
    },
  ];

  // links which are displayed in the second/bottom section
  const secondLinks = user
    ? [
        {
          icon: <PiSignOut className="mr-4 w-6 h-6 text-orange" />,
          text: "Log Out",
          route: "/logout",
        },
      ]
    : [
        {
          icon: <PiSignIn className="mr-4 w-6 h-6 text-orange" />,
          text: "Sign Up",
          route: "/signup",
        },
      ];
  secondLinks.push({
    icon: <PiQuestion className="mr-4 w-6 h-6 text-orange" />,
    text: "Help Fanatics",
    route: "https://buymeacoffee.com/sohamb21",
    target: "_blank",
  });

  return (
    <main className="flex flex-col lg:flex-row">
      {/* Dropdown */}
      <div className="lg:hidden">
        <div className="dropdown w-screen bg-lightBlue relative">
          <div className="flex justify-between p-4 text-orange text-xl">
            <h1 className="font-russoOne hover:text-navy transition-colors duration-300">
              FANATICS.
            </h1>
            <button
              className="hover:text-navy transition-colors duration-300"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? (
                <PiX className="w-6 h-6" />
              ) : (
                <PiList className="w-6 h-6" />
              )}
            </button>
          </div>
          <div
            id="dropdownContent"
            className={`bg-lightBlue text-navy text-base text-center absolute right-0 z-10 p-2 rounded-bl ${
              isDropdownOpen ? "" : "hidden"
            } lg:hidden`}
          >
            {firstLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className="block p-2 px-4 hover:text-orange flex items-center"
              >
                {link.icon}
                {link.text}
              </Link>
            ))}
            {secondLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className="block p-2 px-4 hover:text-orange flex items-center"
              >
                {link.icon}
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="hidden lg:flex lg:flex-col justify-between items-center m-0 p-0 lg:py-4 lg:w-56 md:w-100 lg:h-screen md:relative bg-lightBlue fixed sticky inset-y-0 left-0 overflow-auto">
        <h1 className="p-4 text-orange hover:text-navy font-russoOne text-xl transition-colors duration-300">
          FANATICS.
        </h1>

        {/* FirstLinks */}
        <div className="flex lg:flex-col justify-center items-start text-left px-4 text-base w-full">
          {firstLinks.map((link, index) => (
            <Link
              key={index}
              to={link.route}
              className="flex justify-between items-center p-2 text-navy hover:text-orange transition-colors duration-300"
            >
              {link.icon}
              {link.text}
            </Link>
          ))}
        </div>

        {/* SecondLinks */}
        <div className="flex lg:flex-col justify-center items-start text-left px-4 text-base w-full">
          {secondLinks.map((link, index) => (
            <Link
              key={index}
              to={link.route}
              target={link.target ? link.target : undefined}
              className="flex justify-between items-center p-2 text-navy hover:text-orange transition-colors duration-300"
            >
              {link.icon}
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Sidebar;
