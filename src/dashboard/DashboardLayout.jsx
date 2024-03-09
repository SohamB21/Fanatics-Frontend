import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import { ProSidebarProvider } from "react-pro-sidebar";

const DashboardLayout = () => {
	return (
		<div className="flex lg:flex-row md:flex-row flex-col gap-2">
			<ProSidebarProvider>
				<div className="md:w-1/4">
					<Sidebar />
				</div>
			</ProSidebarProvider>
			<div className="flex-grow w-full">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
