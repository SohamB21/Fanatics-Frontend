import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import FetchJerseys from "../components/FetchJerseys.jsx";

import theme from "../theme";

const Home = () => {
	return (
		<div>
			<Header />
			<Banner />
			<FetchJerseys />
		</div>
	);
};

export default Home;
