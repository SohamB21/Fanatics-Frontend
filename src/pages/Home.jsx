import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Separator from "../components/Separator.jsx";
import CategoryManager from "../components/CategoryManager.jsx";
import AboutCard from "../components/AboutCard.jsx";
import Review from "../components/Review.jsx";
import Footer from "../components/Footer.jsx";
import fansImg4 from "../assets/fansImg4.png";
import fansImg3 from "../assets/fansImg3.png";

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
			<AboutCard layout="row" fansImg={fansImg4} />
			<Separator
				headlines={[
					"Exclusive Deals Today !",
					"Free Shipping On Orders ₹5000+ !",
					"Hassle-Free Returns !",
				]}
				bgColor="#EFE0CA"
				textColor="#000000"
			/>
			<AboutCard layout="reverse" fansImg={fansImg3} />
			<Review />
		</div>
	);
};

export default Home;
