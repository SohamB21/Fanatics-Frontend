import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PiCurrencyInr } from "react-icons/pi";
import { AuthContext } from "../contacts/AuthProvider";

const ManageJerseys = () => {
	const { user } = useContext(AuthContext);
	const userEmail = user ? user.email : "";
	const userName = user
		? user.displayName || userEmail.split("@")[0]
		: "User Name";
	const userId = user.uid;

	const [allJerseys, setAllJerseys] = useState([]);

	useEffect(() => {
		fetch(`${import.meta.env.VITE_FANATICS_BACKEND_URL}/all-jerseys`)
			.then((res) => res.json())
			.then((data) => setAllJerseys(data));
	}, []);

	const handleDelete = (id, user_id) => {
		if (userId === user_id) {
			fetch(`${import.meta.env.VITE_FANATICS_BACKEND_URL}/jersey/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					window.location.reload();
				});
		} else {
			alert("You are not authorized to delete this jersey.");
		}
	};

	const handleEdit = (id, user_id) => {
		if (userId === user_id) {
			window.location.href = `/admin-dashboard/edit/${id}`;
		} else {
			alert("You are not authorized to edit this jersey.");
		}
	};

	return (
		<div className="lg:w-full px-3 pt-8 h-screen">
			<div className="w-11/12 flex items-center justify-center lg:text-nowrap md:text-nowrap text-wrap font-semibold text-center mx-auto mb-6">
				<div className="w-1/3 border-b border-double border-teal"></div>
				<div className="mx-4 text-3xl uppercase text-navy font-russoOne">
					Manage Jerseys
				</div>
				<div className="w-1/3 border-b border-double border-teal"></div>
			</div>

			{/* Jerseys list */}
			<div className="flex flex-col lg:w-full">
				<div className="flex flex-row bg-offWhite border-2 border-lightBlue rounded-lg font-medium text-sm text-center">
					<div className="w-1/12 p-2 font-quicksand text-xs"></div>
					<div className="w-4/6 p-2 font-quicksand hidden lg:block">
						Title
					</div>
					<div className="w-2/6 p-2 font-quicksand text-xs">Team</div>
					<div className="w-1/6 p-2 font-quicksand text-xs">
						Venue
					</div>
					<div className="w-2/6 p-2 font-quicksand text-xs hidden lg:block">
						Season
					</div>
					<div className="w-1/6 p-2 font-quicksand text-xs">
						Price
					</div>
					<div className="w-2/6 p-2 font-quicksand text-xs">
						Category
					</div>
					<div className="w-2/6 p-2 font-quicksand text-xs">
						Action
					</div>
				</div>
				{allJerseys.length <= 15 ? (
					<div className="text-center text-orange mt-4">
						Currrently there are no jerseys uploaded by sellers.
					</div>
				) : (
					allJerseys
						.filter((jersey) => jersey.seller_name != null)
						.map((jersey, index) => (
							<div
								className={`flex flex-row text-center ${jersey.user_id === userId ? "text-orange" : "text-teal"}`}
								key={jersey._id}
							>
								<div className="w-1/12 p-2 text-xs lg:text-sm">
									{index + 1}.
								</div>
								<div className="w-4/6 p-2 text-xs lg:text-sm hidden lg:block">
									{jersey.title}
								</div>
								<div className="w-2/6 p-2 text-xs lg:text-sm">
									{jersey.team_name}
								</div>
								<div className="w-1/6 p-2 text-xs lg:text-sm">
									{jersey.venue}
								</div>
								<div className="w-2/6 p-2 text-xs lg:text-sm hidden lg:block">
									{jersey.season_start}-{jersey.season_end}
								</div>
								<div className="w-1/6 p-2 text-xs lg:text-sm">
									<div className="flex items-center justify-center text-center">
										<PiCurrencyInr />
										{jersey.discounted_price}
									</div>
								</div>
								<div className="w-2/6 p-2 text-xs lg:text-sm">
									{jersey.category}
								</div>
								<div className="w-2/6 p-2 text-xs lg:text-sm text-center">
									<button
										onClick={() =>
											handleEdit(
												jersey._id,
												jersey.user_id,
											)
										}
										className="text-navy hover:text-orange font-russoOne mr-0.5"
									>
										Edit
									</button>
									<button
										onClick={() =>
											handleDelete(
												jersey._id,
												jersey.user_id,
											)
										}
										className="text-navy hover:text-orange font-russoOne ml-0.5"
									>
										Delete
									</button>
								</div>
							</div>
						))
				)}
			</div>
		</div>
	);
};

export default ManageJerseys;
