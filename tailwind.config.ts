import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#3FD24D',
        inputDefault: 'rgba(25,25,25,0.32)',
        'green-start': '#9CE59C',
        'green-end': '#3FD24D',
        blackSecondary: '#090A09',
        lightBlack: '#494949',
        likesCountBlack: '#2B2C2B',
        dividerGray: '#A3A4A3',
        commentBackgroundGreen: '#E6F9E7',
        commentGray: '#5B5C5B',
        darkGreen: '#007400',
        labelGiveMomentGreen: '#00A600',
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'montserract': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
