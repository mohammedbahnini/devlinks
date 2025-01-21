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
			'purple' : '#633CFF',
			'purple-hover' : '#BEADFF',
			'light-purple' : '#EFEBFF',
			'dark-grey' : '#333333',
			'grey' : '#737373',
			'light-grey' : '#FAFAFA',
			'border-color' : '#D9D9D9' ,
			'red' : '#FF3939',
			'github' : '#1A1A1A',
			'frontend-mentor' : '#FFFFFF',
			'twitter' : '#43B7E9' ,
			'linkedin' : '#2D68FF' ,
			'youtube' : '#EE3939' ,
			'facebook' : '#2442AC' ,
			'twitch' : '#EE3FC8',
			'devto' : '#333333' ,
			'codewars' : '#8A1A50',
			'freecodecamp' : '#302267' ,
			'gitlab' : '#EB4925' ,
			'hashcode' : '#0330D1',
			'stackoverflow' : '#EC7100',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
	safelist : [
		'bg-github',
		'bg-frontend-mentor',
		'bg-twitter',
		'bg-linkedin',
		'bg-youtube',
		'bg-facebook',
		'bg-twitch',
		'bg-devto',
		'bg-codewars',
		'bg-freecodecamp',
		'bg-gitlab',
		'bg-hashnode',
		'bg-stackoverflow'
	],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
