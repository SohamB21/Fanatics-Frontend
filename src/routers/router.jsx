import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import PrivateRoute from "../privateRoute/PrivateRoute.jsx";

// Lazy loading all the components
const App = React.lazy(() => import("../App.jsx"));
const Home = React.lazy(() => import("../pages/Home.jsx"));
const Shop = React.lazy(() => import("../pages/Shop.jsx"));
const About = React.lazy(() => import("../pages/About.jsx"));
const SingleJersey = React.lazy(() => import("../pages/SingleJersey.jsx"));
const DashboardLayout = React.lazy(
	() => import("../dashboard/DashboardLayout.jsx")
);
const Dashboard = React.lazy(() => import("../dashboard/Dashboard.jsx"));
const UploadJersey = React.lazy(() => import("../dashboard/UploadJersey.jsx"));
const ManageJerseys = React.lazy(
	() => import("../dashboard/ManageJerseys.jsx")
);
const EditJerseys = React.lazy(() => import("../dashboard/EditJerseys.jsx"));
const Signup = React.lazy(() => import("../pages/Signup.jsx"));
const Login = React.lazy(() => import("../pages/Login.jsx"));
const Logout = React.lazy(() => import("../pages/Logout.jsx"));

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<Spinner />}>
				<App />
			</Suspense>
		),
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
					fetch(`${import.meta.env.VITE_FANATICS_BACKEND_URL}/jersey/${params.id}`),
			},
		],
	},
	{
		path: "/admin-dashboard",
		element: (
			<Suspense fallback={<Spinner />}>
				<PrivateRoute>
					<DashboardLayout />
				</PrivateRoute>
			</Suspense>
		),
		children: [
			{
				path: "/admin-dashboard",
				element: <Dashboard />,
			},
			{
				path: "/admin-dashboard/upload",
				element: <UploadJersey />,
			},
			{
				path: "/admin-dashboard/manage",
				element: <ManageJerseys />,
			},
			{
				path: "/admin-dashboard/edit/:id",
				element: <EditJerseys />,
				loader: ({ params }) =>
					fetch(`${import.meta.env.VITE_FANATICS_BACKEND_URL}/jersey/${params.id}`),
			},
		],
	},
	{
		path: "signup",
		element: (
			<Suspense fallback={<Spinner />}>
				<Signup />
			</Suspense>
		),
	},
	{
		path: "login",
		element: (
			<Suspense fallback={<Spinner />}>
				<Login />
			</Suspense>
		),
	},
	{
		path: "logout",
		element: (
			<Suspense fallback={<Spinner />}>
				<Logout />
			</Suspense>
		),
	},
]);

export default router;
