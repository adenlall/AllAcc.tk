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
            {
                mytheme: {

                // AsSeem Colors:
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

                "primary": "#F28482",

                "secondary": "#84A59D",

                "accent": "#F5CAC3",

                "neutral": "#F7EDE2",

                "base": "#aacfcc",

                "info": "#5eead4",

                "success": "#4ade80",

                "warning": "#d97706",

                "error": "#b91c1c",
                },
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
        extend: {
            colors: {

                // AsSeem Colors:
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

                "primary": "#F28482",

                "secondary": "#84A59D",

                "accent": "#F5CAC3",

                "neutral": "#F7EDE2",

                "base": "#aacfcc",

                "info": "#5eead4",

                "success": "#4ade80",

                "warning": "#d97706",

                "error": "#b91c1c",
            },
        },
    },
    plugins: [require("daisyui")],

}
