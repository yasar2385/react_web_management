// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({

    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {

        extend: {
            keyframes: {
                marquee: {
                    '0%': {
                        transform: 'translateX(0%)'
                    },
                    '100%': {
                        transform: 'translateX(-100%)'
                    },
                },
                marquee2: {
                    '0%': {
                        transform: 'translateX(100%)'
                    },
                    '100%': {
                        transform: 'translateX(0%)'
                    },
                },
            },
            animation: {
                'spin-slow-30': 'spin 30s linear infinite',
                'spin-slow-25': 'spin 25s linear infinite',
                'spin-slow-10': 'spin 10s linear infinite',
                'marquee-infinite': 'marquee 25s linear infinite',
            }
        }
    },
    plugins: [],
});