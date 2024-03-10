import React, { useState } from "react";

const UploadJersey = () => {
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
		jerseyTitle: "",
		teamName: "",
		imageUrl: "",
		venueName: venueCategories[0],
		jerseyDescription: "",
		seasonStart: "", // corrected the field name
		seasonEnd: "", // corrected the field name
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

		fetch("https://ebook-using-mern.onrender.com/upload-book", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((res) => res.json())
			.then((data) => {
				alert("Jersey Uploaded Successfully!");
				setFormData({
					jerseyTitle: "",
					teamName: "",
					imageUrl: "",
					venueName: venueCategories[0],
					jerseyDescription: "",
					seasonStart: "",
					seasonEnd: "",
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
					Upload Jersey
				</div>
				<div className="w-1/3 border-b border-double border-teal"></div>
			</div>

			<form onSubmit={handleSubmit} className="flex flex-col gap-8">
				{/* Jersey Title & Team Name */}
				<div className="w-full flex flex-row lg:gap-8 md:gap-4 gap-2">
					<div className="w-1/2 flex flex-col justify-between">
						<label
							htmlFor="jerseyTitle"
							className={inputStyle.label}
						>
							Jersey Title
						</label>
						<input
							id="jerseyTitle"
							name="jerseyTitle"
							type="text"
							placeholder="Eg: FC Barcelona Home Jersey 23/24"
							value={formData.jerseyTitle}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="teamName" className={inputStyle.label}>
							Team Name
						</label>
						<input
							id="teamName"
							name="teamName"
							type="text"
							placeholder="Eg: Real Madrid"
							value={formData.teamName}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>
				</div>

				{/* Jersey Image URL & Jersey Venue */}
				<div className="w-full flex flex-row lg:gap-8 md:gap-4 gap-2">
					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="imageUrl" className={inputStyle.label}>
							Jersey Image URL
						</label>
						<input
							id="imageUrl"
							name="imageUrl"
							type="text"
							placeholder="Eg: https://footy.in/ManU-home.jpg"
							value={formData.imageUrl}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/2 flex flex-col justify-between">
						<label htmlFor="venueName" className={inputStyle.label}>
							Jersey Venue
						</label>
						<select
							id="venueName"
							name="venueName"
							className={inputStyle.select}
							value={formData.venueName}
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
					<label
						htmlFor="jerseyDescription"
						className={inputStyle.label}
					>
						Jersey Description
					</label>
					<textarea
						id="jerseyDescription"
						name="jerseyDescription"
						className={inputStyle.input}
						placeholder="Eg: Premium Quality - AS Roma Home Kit 2023/24"
						value={formData.jerseyDescription}
						onChange={handleChange}
						required
						rows={6}
					/>
				</div>

				{/* Season Start & Season End & Jersey Category */}
				<div className="w-full flex flex-row lg:gap-6 md:gap-4 gap-2">
					<div className="w-1/3 flex flex-col justify-between">
						<label
							htmlFor="seasonStart"
							className={inputStyle.label}
						>
							Season Start
						</label>
						<input
							id="seasonStart"
							name="seasonStart"
							type="text"
							placeholder="Eg: 2008"
							value={formData.seasonStart}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/3 flex flex-col justify-between">
						<label htmlFor="seasonEnd" className={inputStyle.label}>
							Season End
						</label>
						<input
							id="seasonEnd"
							name="seasonEnd"
							type="text"
							placeholder="Eg: 2009"
							value={formData.seasonEnd}
							onChange={handleChange}
							required
							className={inputStyle.input}
						/>
					</div>

					<div className="w-1/3 flex flex-col justify-between">
						<label
							htmlFor="categoryName"
							className={inputStyle.label}
						>
							Category
						</label>
						<select
							id="categoryName"
							name="categoryName"
							className={inputStyle.select}
							value={formData.categoryName}
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

				<button
					type="submit"
					className="mt-4 mb-2 px-4 py-2 bg-navy hover:bg-teal text-offWhite lg:w-1/3 flex items-center justify-center mx-auto transition-colors duration-300 rounded-md"
				>
					Upload Jersey
				</button>
			</form>
		</div>
	);
};

export default UploadJersey;
