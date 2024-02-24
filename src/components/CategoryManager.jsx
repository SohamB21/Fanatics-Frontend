import React from "react";
import Separator from "./Separator.jsx";
import JerseyCategory from "./JerseyCategory.jsx";

const CategoryManager = () => {
	return (
		<div>
			<JerseyCategory
				categoryName="Jersey Sets"
				subHeading="New Season, New Jerseys! Shop Now!"
				categoryId="1"
			/>

			<Separator
				headlines={[
					"Embrace The New Season With Our Fresh Jersey Sets!",
				]}
				bgColor="#001233"
				textColor="#F9F3EA"
			/>

			<JerseyCategory
				categoryName="Retro Jerseys"
				subHeading="Classic Designs, Timeless Elegance!"
				categoryId="2"
			/>

			<Separator
				headlines={[
					"Step Into Nostalgia With Our Iconic Retro Jerseys!",
				]}
				bgColor="#001233"
				textColor="#F9F3EA"
			/>

			<JerseyCategory
				categoryName="Training Wears"
				subHeading="Gear Up Performance And Comfort!"
				categoryId="3"
			/>

			<Separator
				headlines={[
					"Train And Push Your Limits With Our Training Wears!",
				]}
				bgColor="#001233"
				textColor="#F9F3EA"
			/>
		</div>
	);
};

export default CategoryManager;
