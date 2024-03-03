import React from "react";
import fansImg4 from "../assets/fansImg4.png";
import { PiArrowFatLinesRight } from "react-icons/pi";

const PromoBanner = () => {
	const promoItems = [
		"Your ultimate destination for authentic jerseys and fan gear!",
		"Top-quality merchandise for every fan!",
		"Wide selection from all major sports leagues!",
		"Fast shipping, secure checkout, and unparalleled customer service!",
		"Join the thousands of fans who trust Fanatics!",
		"Gear up for victory!",
	];

	return (
		<div className="promo-banner bg-navy py-4 my-10">
			<div className="flex flex-wrap items-center justify-center">
				<div className="lg:w-1/3 sm:w-1/2 w-full px-4 my-2">
					<div className="flex justify-center items-center">
						<img
							src={fansImg4}
							alt="Promo Image"
							className="max-w-full h-auto sm:max-w-xs rounded-sm"
						/>
					</div>
				</div>
				<div className="lg:2/3 sm:w-1/2 w-full px-4 my-2">
					<div className="flex flex-col justify-around text-left text-offWhite gap-10">
						<h2 className="text-4xl font-medium font-russoOne text-orange">
							New Arrivals Just For You.
						</h2>
						<div className="mt-2 space-y-2">
							{promoItems.map((item, index) => (
								<div
									key={index}
									className="flex items-center gap-4"
								>
									<div>
										<PiArrowFatLinesRight className="text-lightBlue text-3xl sm:text-2xl" />
									</div>
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PromoBanner;
