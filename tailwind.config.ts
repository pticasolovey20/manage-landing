import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "1024px",
			xl: "1200px",
			xxl: "1440px",
		},

		extend: {
			colors: {
				primary: {
					"bright-red": "hsl(12, 88%, 59%)",
					"dark-blue": "hsl(228, 39%, 23%)",
				},

				neutral: {
					"dark-grayish-blue": "hsl(227, 12%, 61%)",
					"very-dark-blue": "hsl(233, 12%, 13%)",
					"very-pale-red": "hsl(13, 100%, 96%)",
					"vary-light-gray": "hsl(0, 0%, 98%)",
				},
			},
		},
	},
	plugins: [],
};
export default config;
