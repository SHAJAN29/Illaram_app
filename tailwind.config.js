





export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      geist: ["'Geist Sans'", "sans-serif"],
      poppins: ['Poppins', 'sans-serif'],
    }, colors: {
      illaramPrimary: '#0F766E',
      illaramPrimaryDark: '#5EEAD4',
      illaramAccent: '#F97316',
      illaramAccentDark: '#FDBA74',
      illaramBackground: '#F1F5F9',
      illaramBackgroundDark: '#0F172A',
      illaramText: '#1F2937',
      illaramTextDark: '#E2E8F0',
    },
  },
};



export const plugins = [{
  tailwindcss: {},
  autoprefixer: {},
},];

    // darkMode: 'class', // Enable dark mode
    