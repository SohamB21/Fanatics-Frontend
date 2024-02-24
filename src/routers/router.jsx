import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import SellJerseys from "../pages/SellJerseys.jsx";
import SingleJersey from "../pages/SingleJersey.jsx";

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
				path: "/sell-jerseys",
				element: <SellJerseys />,
			},
			{
				path: "/jersey/:id",
				element: <SingleJersey />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/jersey/${params.id}`),
			},
		],
	},
]);

export default router;
