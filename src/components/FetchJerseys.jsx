import React, { useEffect, useState } from "react";
import BannerCube from "./BannerCube.jsx";

const FetchJerseys = () => {
	const [jerseys, setJerseys] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/all-jerseys")
			.then((res) => res.json())
			.then((data) => setJerseys(data));
	}, []);
	return (
		<div>
			<BannerCube jerseys={jerseys} />
		</div>
	);
};

export default FetchJerseys;
