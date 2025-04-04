





module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
      extend: {fontFamily: {
        geist: ["'Geist Sans'", "sans-serif"],
      },colors: {
        primary: "#1E293B", // Replace with your desired color
      },},
    },
    plugins: [{
        tailwindcss: {},
        autoprefixer: {},
      },]
  };

    // darkMode: 'class', // Enable dark mode
    