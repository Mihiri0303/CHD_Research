const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	darkMode: "class",
	theme: {
		extend: {
			borderWidth: {
				6: "6px",
				7: "7px",
				8: "8px",
				9: "9px",
				10: "10px",
			},
		},
	},
	varients: {
		extends: {
			maxWidth: ["group-scope-hover"],
			opacity: ["group-scope-hover"],
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/line-clamp"),
		require("@tailwindcss/aspect-ratio"),
	],
};
