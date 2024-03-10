import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const DashboardLayout = () => {
	return (
		<div className="flex lg:flex-row flex-col gap-2">
			<div className="md:w-2/7">
				<Sidebar />
			</div>

			<div className="flex-grow w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
