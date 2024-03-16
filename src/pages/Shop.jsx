import React from "react";
import ShopView from "../components/ShopView.jsx";

const Shop = () => {
	return (
		<div className="py-16">
			<div className="w-11/12 flex items-center justify-center lg:text-nowrap md:text-nowrap text-wrap font-semibold text-center mx-auto">
				<div className="w-1/3 border-b border-double border-teal"></div>
				<div className="mx-4 text-3xl uppercase text-navy font-russoOne">
					Explore Products
				</div>
				<div className="w-1/3 border-b border-double border-teal"></div>
			</div>
			<div className="lg:flex flex-row mx-auto my-10 gap-10">
				<ShopView />
			</div>
		</div>
	);
};

export default Shop;
