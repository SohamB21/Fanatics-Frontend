import React from "react";

const Spinner = () => {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<div className="h-12 w-12 border-t-4 border-b-4 border-orange rounded-full animate-spin"></div>
		</div>
	);
};

export default Spinner;
