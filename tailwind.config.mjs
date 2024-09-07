/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

const defaultTheme = require("tailwindcss/defaultTheme");
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
                  fontFamily: {
                     sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
                  },
                  fontSize: {
                    '2xl': ['1.5rem', {
                    lineHeight: '2.4rem',
                    letterSpacing: '-0.01em',
                    fontWeight: '500',
                    }],
                    '3xl': ['1.875rem', {
                      lineHeight: '3.25rem',
                      letterSpacing: '-0.02em',
                      fontWeight: '700',
                    }],
                  },
                },
	},
	plugins: [require('@tailwindcss/typography'), daisyui],
    daisyui: {
        themes: [
          {
            garden: {
              ...require("daisyui/src/theming/themes")["garden"],
              "default": "rgb(249,249,249)",
              "primary": "rgb(193,46,54)",
              "base-100": "rgb(249,249,249)",
              "base-200": "rgb(249,249,249)",
            },
          },
        ],
    }
}

