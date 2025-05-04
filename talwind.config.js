const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
    darkMode: "class",
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust the paths based on your project structure
        "./public/index.html",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
});

