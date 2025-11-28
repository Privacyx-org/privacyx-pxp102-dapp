/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        privacyx: "#4befa0",
        "privacyx-dark": "#050816",
      },
    },
  },
  plugins: [],
};

