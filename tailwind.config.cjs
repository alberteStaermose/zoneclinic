/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    /* ALLE FARVER */
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
      black100: "#485548",
      black200: "#3F4A3F",
      black300: "#374037",
      black400: "#303830",
      black500: "#2A312A",
      black600: "#242A24",
      black700: "#1F241F",
      black800: "#1A1F1A",
      black900: "#161A16",

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

    /* ALLE SKRIFTTYPER */
    fontFamily: {
      titel01: "'scotch-display', sans-serif",
      titel02: "'scotch-display', sans-serif",
      titel03: "'tablet-gothic', sans-serif",
      bodyMedium: "'tablet-gothic', sans-serif",
      bodySmall: "'tablet-gothic', sans-serif",
      bodyBase: "'tablet-gothic', sans-serif",
      bodyBaseItalic: "'tablet-gothic', sans-serif",
      bodyXsmall: "'tablet-gothic', sans-serif",
      menuLinks: "'tablet-gothic', sans-serif",
      knapTekster: "'tablet-gothic', sans-serif",
    },

    extend: {
      /* ALLE SKRIFTSTØRRELSER */
      fontSize: {
        //størrelser til web format
        size01Web: "4.3rem", 
        size02Web: "2.986rem",
        size03Web: "2.074rem",

        //størrelser til alle formater (sizeBody passer også til menu links)
        sizeBody: "1rem",
        sizeBodyX: "0.8rem",
        sizeButton: "1.188rem",

        //størrelser til mobil format
        size01Mobile: "2.986rem",
        size02Mobile: "2.074rem",
        size03Mobile: "1.44rem",
      },
      //Padding web
      padding: {
        webXsmall: "10px",
        webSmall: "30px",
        webMedium: "60px",
        webLarge: "140px",
        webXlarge: "220px",
      },
      //Margin web
      margin: {
        webXsmall: "10px",
        webSmall: "30px",
        webMedium: "60px",
        webLarge: "140px",
        webXlarge: "220px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
