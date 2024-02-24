import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Shop from "../pages/Shop.jsx";
import About from "../pages/About.jsx";
import Blog from "../pages/Blog.jsx";
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
				path: "/blog",
				element: <Blog />,
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
