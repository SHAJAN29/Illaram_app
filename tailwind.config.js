/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,html,css}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geist: ["'Geist Sans'", "sans-serif"],
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0F766E',
        accent: '#FF5F37',
        background: '#F1F5F9',
        text: '#A2A4A8',
        textDark: '#4A5565',
        bgPrimary: '#f4f7f0',
        textPrimary: "#3b3c3a",
        bgSecondary: '#ffffff',
        accentLight: '#ffffff',
           prim: '#97c25f',
        bg: '#f4f7f0',
      },
      animation: {
        'slide-in': 'slideIn 0.4s ease-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
      backgroundImage: {
        service1: "url('/path/to/your/image1.jpg')",
        service2: "url('/path/to/your/image2.jpg')",
        service3: "url('/path/to/your/image3.jpg')",
        service4: "url('/path/to/your/image4.jpg')",
      },
    },
  },
  darkMode: 'class',
}
