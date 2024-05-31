/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Black: "#263238",
        D_Gray: "#4D4D4D",
        Gray: "#717171",
        L_Gray: "#89939E",
        "Grey-blue": "#ABBED1",
        Silver: "#F5F7FA",
        Primary: "#4CAF4F",
        Secondary: "#263238",
        Info: "#2194f3",
        Shade1: "#43A046",
        Shade2: "#388E3B",
        Shade3: "#237D31",
        Shade4: "#1B5E1F",
        Shade5: "#103E13",
        Tint1: "#66BB69",
        Tint2: "#81C784",
        Tint3: "#A5D6A7",
        Tint4: "#C8E6C9",
        Tint5: "#E8F5E9",
        Waring: "##FBC02D",
        Error: "#E53835",
        Success: "#2E7D31",
      },
      spacing: {
        "10px": "10px",
      },
      fontSize: {
        h1: ["64px", "76px"],
        h2: ["36px", "44px"],
        h3: ["28px", "36px"],
        h4: ["20px", "28px"],

        b1: ["18px", "28px"],
        b2: ["16px", "24px"],
        b3: ["14px", "20px"],
        b4: ["12px", "16px"],
      },
    },
  },
  plugins: [],
};
