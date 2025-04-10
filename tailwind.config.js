




// 
// const tailwindcss = require('tailwindcss');
// const autoprefixer = require('autoprefixer');





// export const content = [
//   "./app/**/*.{js,ts,jsx,tsx}",
//   "./src/**/*.{html,js,jsx,ts,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",
//   "./pages/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//   extend: {
//     fontFamily: {
//       geist: ["'Geist Sans'", "sans-serif"],
//       poppins: ['Poppins', 'sans-serif'],
//       inter: ['Inter', 'sans-serif'],
//     }, 
//       colors: {
//       illaramPrimary: '#0F766E',
//       illaramAccent: '#FF5F37',
//       illaramBackground: '#F1F5F9',
//       illaramText: '#A2A4A8',
//       illaramTextDark: '#4A5565',
    
//     },
//   },
// };



// export const plugins = [{
//   tailwindcss: {},
//   autoprefixer: {},
// },];

    // darkMode: 'class', // Enable dark mode
    module.exports = {
      content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
      ],
      theme: {
        extend: {
          colors: {
           
            illaramText: '#A2A4A8'
          }
        }
      },
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    };