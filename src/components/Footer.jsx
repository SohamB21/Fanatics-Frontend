import React from "react";
import footerImage from "../assets/footerImage.jpg";
import {
  PiGoogleLogo,
  PiGithubLogo,
  PiLinkedinLogo,
  PiCode,
  PiArrowBendDownRight,
  PiCopyright,
  PiLink,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-navy lg:grid lg:grid-cols-5 mt-24">
      <div className="relative block h-32 lg:col-span-2 lg:h-full">
        <img
          src={footerImage}
          alt="Mes Que Un Club"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-10 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <a
                href="#"
                className="antialiased block text-2xl font-medium text-offWhite hover:text-orange sm:text-3xl font-russoOne transition duration-500"
              >
                FANATICS.
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-base text-offWhite">
              <li className="antialiased text-orange uppercase font-fredoka text-lg">
                Wear. Your. Passion.
              </li>
              <li className="antialiased flex items-center">
                Also Visit
                <a
                  href="https://soham-banik-portfolio.vercel.app/"
                  target="_blank"
                  className="antialiased flex items-center hover:text-orange font-fredoka transition duration-500"
                >
                  <PiLink size={20} className="mx-1" /> Soham's Portfolio
                </a>
              </li>
            </ul>

            <ul className="mt-8 flex gap-10">
              <li>
                <a
                  href="mailto:soham0110banik@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="antialiased text-offWhite hover:text-orange transition duration-500"
                >
                  <span className="sr-only">Gmail</span>
                  <PiGoogleLogo size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SohamB21"
                  rel="noreferrer"
                  target="_blank"
                  className="antialiased text-offWhite hover:text-orange transition duration-500"
                >
                  <span className="sr-only">GitHub</span>
                  <PiGithubLogo size={30} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/soham-banik-b13909237/"
                  rel="noreferrer"
                  target="_blank"
                  className="antialiased text-offWhite hover:text-orange transition duration-500"
                >
                  <span className="sr-only">LinkedIn</span>
                  <PiLinkedinLogo size={30} />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="antialiased font-medium text-offWhite font-quicksand">
                Categories
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#Jersey Sets"
                    className="antialiased flex items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                  >
                    <PiArrowBendDownRight className="text-lightBlue" />
                    Jersey Sets
                  </a>
                </li>
                <li>
                  <a
                    href="#Retro Jerseys"
                    className="antialiased flex items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                  >
                    <PiArrowBendDownRight className="text-lightBlue" />
                    Retro Jerseys
                  </a>
                </li>
                <li>
                  <a
                    href="#Training Wears"
                    className="antialiased flex items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                  >
                    <PiArrowBendDownRight className="text-lightBlue" />
                    Training Wears
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="antialiased font-medium text-offWhite font-quicksand">
                Know More
              </p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link
                    to="/sell-jerseys"
                    className="antialiased flex items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                  >
                    <PiArrowBendDownRight className="text-lightBlue" />
                    Sell Jerseys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="antialiased flex items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                  >
                    <PiArrowBendDownRight className="text-lightBlue" />
                    Shop Jerseys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="antialiased flex items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                  >
                    <PiArrowBendDownRight className="text-lightBlue" />
                    About Fanatics
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-orange pt-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-sm">
              <li>
                <a
                  href="https://github.com/SohamB21"
                  target="_blank"
                  className="antialiased flex justify-center items-center gap-2 text-offWhite hover:text-orange transition duration-500"
                >
                  Developed By Soham Banik. <PiCode size={20} />
                </a>
              </li>
            </ul>
            <p className="antialiased flex items-center gap-1 mt-8 text-sm text-offWhite sm:mt-0">
              <PiCopyright /> 2024. Fanatics. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
