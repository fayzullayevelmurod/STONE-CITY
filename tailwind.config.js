/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"green": "#739678",
				"light-green": "#62CF73",
				"silver-gray": "#B1E4B8",
				"black": "#242424"
			},
			fontFamily: {
				"Monserat": "Montserrat",
				"Vollkorn": "Vollkorn"
			},
			lineHeight: {
				"5.5": "22px"
			},
			fontSize: {
				"1xl": "22px"
			}
		},
	},
	plugins: [],
}