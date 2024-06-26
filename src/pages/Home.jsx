import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Separator from "../components/Separator.jsx";
import CategoryManager from "../components/CategoryManager.jsx";
import PromoBanner from "../components/PromoBanner.jsx";
import Review from "../components/Review.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<Separator
				headlines={[
					"Exclusive Deals Today !",
					"Free Shipping On Orders ₹5000+ !",
					"Hassle-Free Returns !",
				]}
				bgColor="#EFE0CA"
				textColor="#000000"
			/>
			<CategoryManager />
			<PromoBanner />
			<Review />
		</div>
	);
};

export default Home;
