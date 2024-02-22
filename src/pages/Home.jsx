import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Separator from "../components/Separator.jsx";
import JerseySets from "../components/JerseySets.jsx";
import RetroJerseys from "../components/RetroJerseys.jsx";

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
			/>
			<JerseySets />
			<RetroJerseys />
		</div>
	);
};

export default Home;
