import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
"sm" : "480px",
"md" : "760px",
"lg" : "1025px",

      },
      colors: {
        black: "#000",
       orange: "#FF9D0F",
    
      },

    },
        
    
  
  			
  },
  plugins: [],
};
export default config;
