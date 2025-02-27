/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pageContent/**/*.{js,ts,jsx,tsx}',

  ],
  theme: {
    extend: {
      colors: {
        vsBackground: '#1E1E1E',
        vsForeground: '#F5F5F5',
        primary: '#FCD34D',  
        primaryDark: '#EAB308', 
        accent: '#FFD700',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  safelist: [
    'bg-animated-gradient',
    'before:absolute',
    'before:inset-0',
    'mix-blend-soft-light'
  ],
  plugins: [],
};


// import type { Config } from "tailwindcss";

// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend:z
//       colors: {
//         background: "var(--background)",
//         foreground: "var(--foreground)",
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;
