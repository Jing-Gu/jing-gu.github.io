/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['inter', 'system-ui'],
		},
		colors: {
			"jg-teal": "#00A19D",
			"jg-salmon": "#E05D5D",
			"jg-cream": "#FFF8E5",
			"jg-charcoal": "#333333",
			"jg-smoke": "#757575",
			"white": "#fff",
			"transparent": "transparent"
		},
		extend: {},
	},
	plugins: [],
}
