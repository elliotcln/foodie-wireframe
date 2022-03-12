module.exports = {
  content: ["src/scss/**/*.scss", "src/js/**/*", "index.html"],
  theme: {
    screens: {
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      "large-desktop": "1440px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          desktop: "3.5rem",
        },
      },
    },
  },
  plugins: [],
};
