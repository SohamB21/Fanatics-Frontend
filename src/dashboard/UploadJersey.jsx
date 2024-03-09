import React, { useState } from "react";
import {
	Button,
	Checkbox,
	Label,
	Select,
	TextInput,
	Textarea,
} from "flowbite-react";

const UploadJersey = () => {
	const venueCategories = [
		"Home",
		"Away",
		"Third",
		"Fourth",
		"Neutral",
		"Others",
	];

	const [selectedVenueCategory, setSelectedVenueCategory] = useState(
		venueCategories[0],
	);
	const handleChangedSelectedValue = (event) => {
		console.log(event.target.value);
		setSelectedJerseyCategory(event.target.value);
	};

	const handleJerseySubmit = (event) => {
		event.preventDefault();
		const form = event.target;

		const bookTitle = form.bookTitle.value;
		const authorName = form.authorName.value;
		const category = form.categoryName.value;
		const bookDescription = form.bookDescription.value;
		const bookPdfUrl = form.bookPdfUrl.value;
		const imageUrl = form.imageUrl.value;

		const bookObj = {
			bookTitle,
			authorName,
			category,
			bookDescription,
			bookPdfUrl,
			imageUrl,
		};

		console.log(bookObj);

		fetch("https://ebook-using-mern.onrender.com/upload-book", {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(bookObj),
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				alert("Book Uploaded Succesfully!");
				form.reset();
			});
	};

	return (
		<div className="px-1 mt-12">
			<h2 className="mb-8 text-3xl font-bold">Upload Jersey</h2>

			<form
				onSubmit={handleJerseySubmit}
				className="flex lg:w-full flex-col flex-wrap gap-4"
			>
				<div className="flex gap-8">
					{/* Jersey Name */}
					<div className="lg:w-1/2 md:w-1/2 w-full">
						<div className="mb-2 block">
							<Label htmlFor="jerseyTitle" value="Jersey Title" />
						</div>
						<TextInput
							id="jerseyTitle"
							name="jerseyTitle"
							type="text"
							placeholder="Jersey Title"
							required
						/>
					</div>

					{/* Team Name */}
					<div className="lg:w-1/2">
						<div className="mb-2 block">
							<Label htmlFor="teamName" value="Team Name" />
						</div>
						<TextInput
							id="teamName"
							name="teamName"
							type="text"
							placeholder="Team name"
							required
						/>
					</div>
				</div>

				<div className="flex gap-8">
					{/* Image URL */}
					<div className="lg:w-1/2">
						<div className="mb-2 block">
							<Label
								htmlFor="imageUrl"
								value="Jersey Image URL"
							/>
						</div>
						<TextInput
							id="imageUrl"
							name="imageUrl"
							type="text"
							placeholder="Jersey image URL"
							required
						/>
					</div>

					{/* Venue */}
					<div className="lg:w-1/2">
						<div className="mb-2 block">
							<Label htmlFor="inputState" value="Jersey Venue" />
						</div>

						<Select
							id="inputState"
							name="venueName"
							className="w-full rounded"
							value={selectedVenueCategory}
							onChange={handleChangedSelectedValue}
						>
							{venueCategories.map((option) => (
								<option key={option} value={option}>
									{option}
								</option>
							))}
						</Select>
					</div>
				</div>

				{/* Jersey Description */}
				<div>
					<div className="mb-2 block">
						<Label
							htmlFor="jerseyDescription"
							value="Jersey Description"
						/>
					</div>
					<Textarea
						id="jerseyDescription"
						name="jerseyDescription"
						className="w-full"
						placeholder="Write the description of the jersey..."
						required
						rows={6}
					/>
				</div>

				{/* Season Start and Season End */}
				<div>
					<div className="mb-2 block">
						<Label htmlFor="seasonInfo" value="Season Info" />
					</div>
					<TextInput
						id="seasonInfo"
						name="seasonInfo"
						type="text"
						placeholder="Season Start and Season End"
						required
					/>
				</div>

				<Button type="submit" className="mt-5">
					Upload Jersey
				</Button>
			</form>
		</div>
	);
};

export default UploadJersey;