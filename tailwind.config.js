module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          blue: {
            dark: "#0B0D17",
            light: "#D0D6F9",
          },
        },
      },
      fontFamily: {
        barlow: ["'Barlow'", "sans-serif"],
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
        bellefair: ["'Bellefair'", "serif"],
      },
      spacing: {
        "1/25": "4%",
        "1/20": "5%",
        "1/15": "6.5%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
