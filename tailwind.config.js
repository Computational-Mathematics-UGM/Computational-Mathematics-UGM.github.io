module.exports = {
  content: [
    "./_layouts/**/*.html",
    "./_includes/**/*.html",
    "./_people/**/*.md",
    "./*.md",
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",   // navy
        secondary: "#059669", // emerald
        neutral: "#f9fafb"    // light gray
      },
      fontFamily: {
        heading: ["Merriweather", "serif"],
        body: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
}
