/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /* OLIVE */
      olive100: "#FEFEFD",
      olive200: "#E7E5DE",
      olive300: "#D2D0C2",
      olive400: "#C0BDA9",
      olive500: "#B0AC93",
      olive600: "#A09B7D",
      olive700: "#918B6A",
      olive800: "#807A5D",
      olive900: "#716B52",

      /* BLACK */
      black100: "#FEFEFD",
      black200: "#E7E5DE",
      black300: "#D2D0C2",
      black400: "#C0BDA9",
      black500: "#B0AC93",
      black600: "#A09B7D",
      black700: "#918B6A",
      black800: "#807A5D",
      black900: "#716B52",

      /* YELLOW */
      yellow100: "#FFFFFF",
      yellow200: "#FFFFFF",
      yellow300: "#FBF7E6",
      yellow400: "#F6EECB",
      yellow500: "#F1E6B2",
      yellow600: "#ECDE99",
      yellow700: "#E8D782",
      yellow800: "#E4D06D",
      yellow900: "#E0CA59",

      /* LAKE */
      lake100: "#92AFA4",
      lake200: "#779B8E",
      lake300: "#63877A",
      lake400: "#557368",
      lake500: "#496259",
      lake600: "#3D514A",
      lake700: "#33433D",
      lake800: "#2A3833",
      lake900: "#232E2A",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
