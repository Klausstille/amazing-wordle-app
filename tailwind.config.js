import fontInter from "tailwindcss-font-inter";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                input: "repeat(10, 1fr)",
                "input-mobile": "repeat(10, 1fr)",
            },
        },

        fontFamily: {
            avenir: "Avenir Next",
            clash: ["Clash Display Semibold", "Arial", "sans"],
            inter: fontInter,
        },
    },
    plugins: [fontInter],
};
