module.exports = {
  // plugins: {
  //   tailwindcss: {},
  //   autoprefixer: {},

  // },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-for"),
  ],
};
