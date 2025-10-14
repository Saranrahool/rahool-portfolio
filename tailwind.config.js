/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#0f1115",
        panel: "#131722",
        accent: "#67e8f9",
      },
    },
  },
  plugins: [],
}
