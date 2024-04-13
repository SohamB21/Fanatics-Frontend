import React, { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";

const Dashboard = () => {
	const { user } = useContext(AuthContext);
	const userEmail = user ? user.email : "";
	const userName = user
		? user.displayName || userEmail.split("@")[0]
		: "User Name";

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="lg:px-24 flex flex-col items-center justify-center m-4">
				<div className="text-5xl uppercase text-navy font-russoOne mb-8">
					Welcome
				</div>

				<p className="text-3xl font-bold text-teal font-quicksand">
					{userName}.
				</p>
			</div>
		</div>
	);
};

export default Dashboard;
