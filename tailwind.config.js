




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
    export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  './app/**/*.{html,js,jsx,ts,tsx,css}',
];
export const theme = {
  extend: {
    colors: {
      'primary': '#63b546',
      'secondary': '#2b354d',
      'accent': '#ffffff',
    },
    animation: {
      'slide-in': 'slideIn 0.4s ease-out forwards',
    },
    keyframes: {
      slideIn: {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      colors: {
        illaramText: '#A2A4A8'
      }
    }
  },
  backgroundImage: {
    'service1': "url('/path/to/your/image1.jpg')",
    'service2': "url('/path/to/your/image2.jpg')",
    'service3': "url('/path/to/your/image3.jpg')",
    'service4': "url('/path/to/your/image4.jpg')",
  },
};
export const plugins = [
  tailwindcss,
  autoprefixer,
];