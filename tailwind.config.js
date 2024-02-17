/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				"silver-gray": "#B1E4B8",
				"black": {
					"100": "#000",
					"400": "#242424",
					"800": "#2E352F"
				},
				"light": {
					"200": "#F6FAF6",
					"300": "#EFF4EF",
					"400": "#ececec",
					"500": "#EFF3EF",
					"600": "#E3EBE3",
					"700": "#F9FBF9",
					"800": "#EFF4EF",
					"900": "#E4E9E4",
				},
				"green": {
					"100": "#739678",
					"300": "#5B7B60",
					"600": "#6CBF79",
					"700": "#62CF73",
					"800": "#6cbf7a",
				},
				"gray": {
					"300": "#595959",
					"400": "#585858",
					"500": "#D3D3D3",
					"600": "#C6C6C6C6",
					"700": "#777",
					"900": "#262D27",
				}
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
			},
			borderRadius: {
				"DEFAULT": '5px',
				"1xl": "15px",
				"4xl": "25px",
			},
			screens: {
				"1xl": "1440px",
				"1xs": "1390px",
				"xlg": "1115px",
				"xsm": "480px",
			}
		},
	},
	plugins: [],
}