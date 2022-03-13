module.exports = {
  content: [
    "./src/**/*.{html, ts}"
  ],
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.css"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
