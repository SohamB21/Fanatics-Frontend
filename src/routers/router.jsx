import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import SingleJersey from "../pages/SingleJersey.jsx";

import DashboardLayout from "../dashboard/DashboardLayout.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import UploadBook from "../dashboard/UploadBook.jsx";
import ManageBooks from "../dashboard/ManageBooks.jsx";
import EditBooks from "../dashboard/EditBooks.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shop />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/jersey/:id",
				element: <SingleJersey />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/jersey/${params.id}`),
			},
		],
	},
	{
		path: "/admin-dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "/admin-dashboard",
				element: <Dashboard />,
			},
			{
				path: "/admin-dashboard/upload",
				element: <UploadBook />,
			},
			{
				path: "/admin-dashboard/manage",
				element: <ManageBooks />,
			},
			{
				path: "/admin-dashboard/edit/:id",
				element: <EditBooks />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/jersey/${params.id}`),
			},
		],
	},
]);

export default router;
