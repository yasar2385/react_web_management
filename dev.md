// /** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT ({

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        }, },
  },
  plugins: [],
});
.bg-navbar {
    min-width: 100%;
    min-height: 250px;
    position: relative;
    width: 65%;
    height: 35em;
}
https://stjosephschool.co.in/
https://darululoom-deoband.com/en/
https://tailwindcss.com/docs/accent-ncolor
https://stxaviers.com/About/profile.html
https://play.tailwindcss.com/VJvK9YXBoB?layout=horizontal
https://tailwind-elements.com/docs/standard/content-styles/animations/
https://tailwindcss.com/docs/content
https://jackwhiting.co.uk/posts/creating-a-marquee-with-tailwind/
https://www.material-tailwind.com/docs/react/form
<https://heroicons.com/>



npm run start


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// X-Large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }

// XX-Large devices (larger desktops, 1400px and up)
@media (min-width: 1400px) { ... }
