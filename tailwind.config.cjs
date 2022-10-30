/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '280px',
            md: '720px',
            lg: '1024px',
            xl: '1440px',
        },
        extend: {
            colors: {
                'blue-primary': '#2557A7',
                'blue-secondary': '#174081',
            },
        },
    },
    plugins: [],
}
