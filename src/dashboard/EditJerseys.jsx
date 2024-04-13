import React, { useState, useContext } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";

const EditJerseys = () => {
	const { user } = useContext(AuthContext);
	const userEmail = user ? user.email : "";
	const userName = user
		? user.displayName || userEmail.split("@")[0]
		: "User Name";
	const userId = user.uid;

	const { id } = useParams();
	const {
		title,
		description,
		team_name,
		venue,
		season_start,
		season_end,
		original_price,
		discounted_price,
		size,
		category,
		image_url,
		seller_name,
	} = useLoaderData();

	const [updateStatus, setUpdateStatus] = useState(false);

	const venueCategories = [
		"Home",
		"Away",
		"Third",
		"Fourth",
		"Neutral",
		"Others",
	];

	const jerseyCategories = ["Jersey Sets", "Retro Jerseys", "Training Wears"];

	const [formData, setFormData] = useState({
		title: title || "",
		description: description || "",
		team_name: team_name || "",
		venue: venue || venueCategories[0],
		season_start: season_start || "",
		season_end: season_end || "",
		discounted_price: discounted_price || "",
		size: size || "XS S M L XL XXL",
		category: category || jerseyCategories[0],
		image_url: image_url || "",
		seller_name: seller_name || "",
		user_id: userId ? userId : "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Form Data:", formData);

		fetch(`http://localhost:5000/jersey/${id}`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				setUpdateStatus(true);
				setTimeout(() => {
					setUpdateStatus(false);
				}, 5000);
				setFormData({
					title: "",
					description: "",
					team_name: "",
					venue: venueCategories[0],
					season_start: "",
					season_end: "",
					discounted_price: "",
					size: "XS S M L XL XXL",
					category: jerseyCategories[0],
					image_url: "",
					seller_name: "",
					user_id: userId ? userId : "",
				});
			});
	};

	const inputStyle = {
		label: "text-base text-navy font-semibold font-quicksand",
		input: "mt-1 p-1 w-full bg-offWhite rounded text-sm border border-cream",
		select: "mt-1 p-1 w-full bg-offWhite rounded text-sm border border-cream",
	};

	return (
		<div className="lg:w-full px-3 pt-8 h-screen">
			<div className="w-11/12 flex items-center justify-center lg:text-nowrap md:text-nowrap text-wrap font-semibold text-center mx-auto mb-6">
				<div className="w-1/3 border-b border-double border-teal"></div>
				<div className="mx-4 text-3xl uppercase text-navy font-russoOne">
					Edit Jersey
				</div>
				<div className="w-1/3 border-b border-double border-teal"></div>
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				{/* Jersey Title & Team Name */}
				<div className="w-full flex flex-row lg:gap-8 md:gap-4 gap-2">
					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="title" className={inputStyle.label}>
							Jersey Title
						</label>
						<input
							id="title"
							name="title"
							type="text"
							placeholder="Eg: FC Barcelona Home Jersey 23/24"
							value={formData.title}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="team_name" className={inputStyle.label}>
							Team Name
						</label>
						<input
							id="team_name"
							name="team_name"
							type="text"
							placeholder="Eg: Real Madrid"
							value={formData.team_name}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>
				</div>

				{/* Jersey Image URL & Jersey Venue */}
				<div className="w-full flex flex-row lg:gap-8 md:gap-4 gap-2">
					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="image_url" className={inputStyle.label}>
							Jersey Image URL
						</label>
						<input
							id="image_url"
							name="image_url"
							type="text"
							placeholder="Eg: https://footy.in/ManU-home.jpg"
							value={formData.image_url}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="venue" className={inputStyle.label}>
							Jersey Venue
						</label>
						<select
							id="venue"
							name="venue"
							className={inputStyle.select}
							value={formData.venue}
							onChange={handleChange}
						>
							{venueCategories.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Jersey Description */}
				<div>
					<label htmlFor="description" className={inputStyle.label}>
						Jersey Description
					</label>
					<textarea
						id="description"
						name="description"
						className={inputStyle.input}
						placeholder="Eg: Premium Quality - AS Roma Home Kit 2023/24"
						value={formData.description}
						onChange={handleChange}
						required
						rows={6}
					/>
				</div>

				{/* Season Start & Season End & Jersey Category */}
				<div className="w-full flex flex-row lg:gap-6 md:gap-4 gap-2">
					<div className="w-1/3 flex flex-col justify-between">
						<label
							htmlFor="season_start"
							className={inputStyle.label}
						>
							Season Start
						</label>
						<input
							id="season_start"
							name="season_start"
							type="number"
							placeholder="Eg: 2008"
							value={formData.season_start}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/3 flex flex-col justify-between">
						<label
							htmlFor="season_end"
							className={inputStyle.label}
						>
							Season End
						</label>
						<input
							id="season_end"
							name="season_end"
							type="number"
							placeholder="Eg: 2009"
							value={formData.season_end}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/3 flex flex-col justify-between">
						<label htmlFor="category" className={inputStyle.label}>
							Category
						</label>
						<select
							id="category"
							name="category"
							className={inputStyle.select}
							value={formData.category}
							onChange={handleChange}
						>
							{jerseyCategories.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* Seller Name & Selling Price */}
				<div className="w-full flex flex-row lg:gap-8 md:gap-4 gap-2">
					<div className="w-1/2 flex flex-col justify-between">
						<label
							htmlFor="seller_name"
							className={inputStyle.label}
						>
							Seller Name
						</label>
						<input
							id="seller_name"
							name="seller_name"
							type="text"
							placeholder="Enter the seller's name"
							value={formData.seller_name}
							onChange={handleChange}
							required
							disabled="true"
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/2 flex flex-col justify-between">
						<label
							htmlFor="discounted_price"
							className={inputStyle.label}
						>
							Selling Price
						</label>
						<input
							id="discounted_price"
							name="discounted_price"
							type="number"
							placeholder="Enter the selling price"
							value={formData.discounted_price}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>
				</div>

				<button
					type="submit"
					className="mt-4 mb-2 px-4 py-2 bg-navy hover:bg-teal text-offWhite lg:w-1/3 flex items-center justify-center mx-auto transition-colors duration-300 rounded-md"
				>
					{updateStatus
						? "Jersey Edited Successfully"
						: "Edit Jersey"}
				</button>
			</form>
		</div>
	);
};

export default EditJerseys;
