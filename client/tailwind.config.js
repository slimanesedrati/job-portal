/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(200, 100%, 29%)',
          dark: '#4B4ACF',
          lighter: '#E2E1FF',
        },
        gray: {
          dark: 'hsl(210, 4%, 20%)',
          med: 'hsl(210, 2%, 53%)',
          light: 'hsl(210, 4%, 80%)',
        },
        light:'hsl(45, 14%, 95%)',

        accentBlue:'hsl(196, 100%, 43%)',
        red: 'hsl(0, 87%, 67%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%) ',
        green:'hsl(152, 92%, 24%)',
      },
    },
  },
  plugins: [],
}
