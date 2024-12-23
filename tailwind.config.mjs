/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	purge: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
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
			"jg-fog": "#d3d3d3",
			"jg-offwhite": "#ececec",
			"white": "#fff",
			"transparent": "transparent"
		},
		extend: {},
	},
	plugins: [
		typography
	],
}
