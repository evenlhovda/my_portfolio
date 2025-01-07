import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			primary: {
  				DEFAULT: '#4F46E5',
  				hover: '#4338CA',
  			},
  			background: {
  				DEFAULT: '#1F2937',
  				surface: '#374151',
  			},
  			accent: {
  				DEFAULT: '#818CF8',
  				foreground: '#C7D2FE',
  			},
  			contrast: {
  				DEFAULT: '#F97316',
  				hover: '#EA580C',
  				light: '#FB923C',
  			},
  			card: {
  				DEFAULT: '#1F2937',
  				foreground: '#F9FAFB',
  			},
  			popover: {
  				DEFAULT: '#1F2937',
  				foreground: '#F9FAFB',
  			},
  			secondary: {
  				DEFAULT: '#374151',
  				foreground: '#F9FAFB',
  			},
  			muted: {
  				DEFAULT: '#374151',
  				foreground: '#9CA3AF',
  			},
  			destructive: {
  				DEFAULT: '#DC2626',
  				foreground: '#FEE2E2',
  			},
  			border: '#374151',
  			input: '#374151',
  			ring: '#4F46E5',
  		},
  		borderRadius: {
  			lg: '0.5rem',
  			md: '0.375rem',
  			sm: '0.25rem',
  		},
  		fontFamily: {
  			inter: ['Inter', 'sans-serif'],
  		},
  		spacing: {
  			'4': '1rem',
  			'6': '1.5rem',
  			'8': '2rem',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
