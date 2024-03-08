/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"bumblebee",
			"emerald",
			"corporate",
			"synthwave",
			"retro",
			"cyberpunk",
			"valentine",
			"halloween",
			"garden",
			"forest",
			"aqua",
			"lofi",
			"pastel",
			"fantasy",
			"wireframe",
			"black",
			"luxury",
			"dracula",
			"cmyk",
			"autumn",
			"business",
			"acid",
			"lemonade",
			"night",
			"coffee",
			"winter",
			"dim",
			"nord",
			"sunset",
			{
				oceanicBlue: {
					primary: "#3498db",
					secondary: "#2ecc71",
					accent: "#e74c3c",
					neutral: "#34495e",
					"base-100": "#ffffff",
				},
			},
			{
				blueLavender: {
					primary: "#b0b5e8",
					secondary: "#99d8d0",
					accent: "#ffb347",
					neutral: "#4a4e69",
					"base-100": "#ffffff",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
