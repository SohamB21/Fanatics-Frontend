import React from "react";
import FanaticsLogo from "../assets/FanaticsLogo.png";

const About = () => {
	return (
		<div className="py-16">
			<div className="w-11/12 flex items-center justify-center lg:text-nowrap md:text-nowrap text-wrap font-semibold text-center mx-auto">
				<div className="w-1/3 border-b border-double border-teal"></div>
				<div className="mx-4 text-3xl uppercase text-navy font-russoOne">
					About Fanatics
				</div>
				<div className="w-1/3 border-b border-double border-teal"></div>
			</div>
			<div className="w-11/12 lg:flex flex-row mx-auto my-10 gap-10">
				<div className="flex justify-center items-start my-6">
					<img
						src={FanaticsLogo}
						alt="Fanatics Logo"
						className="lg:w-full md:w-1/2 sm:w-1/2 w-full object-cover shadow-lg bg-gradient-to-br from-cream to-lightBlue p-2 rounded-md"
					/>
				</div>
				<div className="flex flex-col justify-center items-center font-russoOne my-6 text-left">
					<p className="text-lg text-navy font-fredoka mb-6">
						"Fanatics" is designed to be your ultimate destination
						for sports apparel and fan gear, offering the largest
						selection of licensed merchandise worldwide. Whether
						you're a die-hard fan or representing your favorite
						team, the intent is to provide high-quality products and
						exceptional customer service for a seamless shopping
						experience. Discover everything you need to showcase
						your team spirit with a range of jerseys and more.
					</p>
					<p className="text-lg text-navy font-fredoka mb-6">
						Talking about the idea for creating Fanatics, the
						intention was to provide sports enthusiasts with a
						platform to easily access a wide range of authentic
						sports merchandise while ensuring a smooth shopping
						experience. As a passionate sports fan myself, I wanted
						to create a destination where fellow fans could find
						everything they need to support their favorite teams and
						players.
					</p>
					<p className="text-lg text-navy font-fredoka mb-6">
						Join us in celebrating the excitement of game day and
						showing your support for the teams and players you love.
						Shop now and gear up for victory with Fanatics.
					</p>
					<p className="text-lg text-navy font-fredoka text-left font-medium">
						For inquiries or any communication needs, please reach
						out to me, Soham Banik, through the following links -{" "}
						<a
							href="https://www.linkedin.com/in/soham-banik-b13909237/"
							className="text-teal hover:text-orange mr-2 font-fredoka"
							target="_blank"
							rel="noopener noreferrer"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/SohamB21"
							className="text-teal hover:text-orange mr-2 font-fredoka"
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
						</a>
						<a
							href="https://soham-banik-portfolio.vercel.app/"
							className="text-teal hover:text-orange mr-2 font-fredoka"
							target="_blank"
							rel="noopener noreferrer"
						>
							Portfolio
						</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
