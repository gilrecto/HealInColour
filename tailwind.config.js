/** @type {import('tailwindcss').Config} */
module.exports = {
	corePlugins: {
		preflight: false,
	},
	prefix: "ts-",
	content: ["./theme/**/*.{liquid,js,json}"],
	theme: {
		extend: {
			fontFamily: {
				header: ["Lucidity", "sans-serif"],
				body: ["DM Sans", "sans-serif"]
			},
			fontSize: {
				clamp_xxl: "clamp(4rem, 9vw, 8.5rem)",
				clamp_xl: "clamp(3.5rem, 5vw, 6.5rem)",
				clamp_l: "clamp(3rem, 4vw, 3.2rem)",
      },
		},
		colors: {
			dark: "#000000",
			light: "#ffffff",
			transparent: 'transparent',
      black: "#000000",
      off_white: "#FFFAF4",
			brown: "#B7703F",
			accent: "#4B2D20"
		},
		screens: {
			'xs': '0',
			'sm': '576px',
			'sm-mobile': {
				'max': '767px'
			},
			'md': '768px',
			'mobile': {
				'max': '991px'
			},
			'lg': '992px',
			'xl': '1200px',
			'xxl': '1441px',
		}
	},
	plugins: [],
};