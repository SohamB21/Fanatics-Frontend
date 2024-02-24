/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			navy: "#001233",
			orange: "#FE5000",
			lightBlue: "#A1D5CC",
			teal: "#0D7164",
			offWhite: "#F9F3EA",
			cream: "#EFE0CA",
		},
		fontFamily: {
			russoOne: "'Russo One', sans-serif", // special text
			fredoka: "'Fredoka', cursive", // medium-weight
			quicksand: "'Quicksand', sans-serif", // very thin
			inter: "'Inter', sans-serif", // body text
		},
		extend: {},
	},
	plugins: [],
};
