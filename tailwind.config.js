// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//     "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Add this for Flowbite
//   ],
//   darkMode: "class",
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require("flowbite/plugin"), // Add Flowbite as a plugin
//   ],
// };

module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Add this for Flowbite

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    require("flowbite/plugin"), // Add Flowbite as a plugin
  ],
};
