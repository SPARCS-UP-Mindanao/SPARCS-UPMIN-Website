/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				raleway: ['Raleway', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				dazzlingBlue: '#3853A4',
			}
		},
	},
	plugins: [],
}
