const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");
  
  /** @type {import('tailwindcss').Config} */
  module.exports = {
	content: [
	  // your paths
	  "./src/**/*.{html,js,jsx,ts,tsx}",
	],
	darkMode: "class",
	theme: {
	  extend: {
		colors: {
			background: 'var(--background)', // Use your CSS variables here
			foreground: 'var(--foreground)',
		  },
		animation: {
		  aurora: "aurora 60s linear infinite",
		  "meteor-effect": "meteor 5s linear infinite",
		},
		keyframes: {
			meteor: {
				"0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
				"70%": { opacity: "1" },
				"100%": {
				  transform: "rotate(215deg) translateX(-500px)",
				  opacity: "0",
				},
			  },
			aurora: {
				from: {
				backgroundPosition: "50% 50%, 50% 50%",
				},
				to: {
				backgroundPosition: "350% 50%, 350% 50%",
				},
			},
		},
	  },
	},
	plugins: [addVariablesForColors],
  };
  
  // This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
  function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
  
	addBase({
	  ":root": newVars,
	});
  }
  