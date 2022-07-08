module.exports = {
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark",
        themes: [
            "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter",
            {
                NnP: {
                    "--rounded-box": "10em", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "10em", // border radius rounded-btn utility class, used in buttons and similar element
                    "--tab-radius": "10em", // border radius of tabs

                    "primary": "#e11d48",
                    "secondary": "#facc15",
                    "accent": "#f43f5e",
                    "neutral": "#701a75",
                    "base-100": "#312e81",
                    "info": "#e11d48",
                    "success": "#f3c46d",
                    "warning": "#f59e0b",
                    "error": "#831843",
                },
                Ind: {
                    "--rounded-box": "1em", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "1em", // border radius rounded-btn utility class, used in buttons and similar element
                    "--tab-radius": "1em", // border radius of tabs

                    "primary": "#f28482",    // pink 2
                    "secondary": "#f5cac3", // pink 1
                    "accent": "#f7ede2",   // pink 0
                    "success": "#f6bd60", // gold
                    "info": "#84a59d",   // green&blue
                    "neutral": "#f6bd60",
                    "base-100": "#042b28",
                    "base": "#042b28",
                    "warning": "#d97706",
                    "error": "#b91c1c",

                },
                BnW: {
                    "--rounded-box": "0", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "0", // border radius rounded-btn utility class, used in buttons and similar element
                    "--rounded-badge": "0", // border radius rounded-badge utility class, used in badges and similar
                    "--animation-btn": "0.5s", // duration of animation when you click on button
                    "--animation-input": "0.5s", // duration of animation for inputs like checkbox, toggle, radio, etc
                    "--btn-text-case": "uppercase", // set default text transform for buttons
                    "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
                    "--border-btn": "2px", // border width of buttons
                    "--tab-border": "2px", // border width of tabs
                    "--tab-radius": "0", // border radius of tabs

                    "primary": "#111827",
                    "secondary": "#545454",
                    "accent": "#fff",
                    "neutral": "#d1d5db",
                    "base-100": "#0000",
                    "info": "#0000",
                    "success": "#ffff",
                    "warning": "#1c1917",
                    "error": "#d1d5db",

                },

                RRG: {
                    "--rounded-box": "10em", // border radius rounded-box utility class, used in card and other large boxes
                    "--rounded-btn": "10em", // border radius rounded-btn utility class, used in buttons and similar element
                    "--tab-radius": "10em", // border radius of tabs

                    "primary": "#49e566",
                    "secondary": "#99f78c",
                    "accent": "#f9c998",
                    "neutral": "#211E29",
                    "base-100": "#FDFCFD",
                    "base": "#FDFCFD",
                    "info": "#84BFE6",
                    "success": "#19B89B",
                    "warning": "#C49D12",
                    "error": "#F2545C",
                }
            },

        ],
    },
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.jsx",
        "./resources/**/*.js",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        screens: {
            'xs': '290px',
        },
        extend: {
            screens: {
                "xs": "300px",
                "ss": "350px",
                "ls": "450px",
            },
            colors: {
                "ap1": "#F28482",
                "agr": "#84A59D",
                "ap2": "#F5CAC3",
                "ap3": "#F7EDE2",
                "ago": "#F6BD60",
                "head": "#ff7b52",
                "drk": "#4e5a59",
                "drk-l": "#768382",
                "main": "#022e2b",
                "light": "aliceblue",
            },
        },
    },
    plugins: [
        require("daisyui"),
        require('tailwindcss'),
        require('autoprefixer'),
    ],


}
