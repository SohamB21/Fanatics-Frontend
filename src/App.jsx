import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer.jsx";

function App() {
	return (
		<>
			<Navbar />
			<div className="min-h-screen">
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default App;
