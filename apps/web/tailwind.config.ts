import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
	darkMode: ["class"],
	content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,jsx,ts,tsx,mdx}", "./components/**/*.{js,jsx,ts,tsx,mdx}"],
	theme: {
		container: {
			center: true,
			padding: "4rem",
			screens: {
				"2xl": "2400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "-10%", opacity: "0%" },
					to: {
						height: "var(--radix-accordion-content-height)",
						opacity: "100%",
						display: "block",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
						opacity: "100%",
						display: "block",
					},
					to: { height: "-10%", opacity: "0%" },
				},
				"color-change": {
					"0%": {
						backgroundColor: "#FBEC50",
					},
					"100%": {
						backgroundColor: "#DAA520",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down .3s ease-in",
				"accordion-up": "accordion-up .3s ease-out",
				"color-change": " color-change 1s infinite alternate",
			},
		},
	},

	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;