import React, { useEffect, useState } from "react";
import BannerCube from "./BannerCube.jsx";

const FetchJerseys = () => {
	const [jerseys, setJerseys] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/all-jerseys")
			.then((res) => res.json())
			.then((data) => {
				setJerseys(data);
			})
			.catch((error) => {
				console.error("Error fetching jerseys:", error);
			});
	}, []);

	return <div>{jerseys.length > 0 && <BannerCube jerseys={jerseys} />}</div>;
};

export default FetchJerseys;
