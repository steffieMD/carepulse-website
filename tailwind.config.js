module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        customlightgreen: "#24ae7c",
      },
      fontFamily: {
        plusJakarta: "Plus Jakarta Sans",
      },
      boxShadow: {
        "custom-1": "16px 24px 64px -24px rgba(255, 255, 255, 0.04) inset",
        "custom-2": "0px 24px 64px -16px rgba(0, 0, 0, 0.24)",
        "custom-3": "0px 8px 12px 0px rgba(255, 255, 255, 0.04) inset",
      },
    },
  },
  plugins: [],
};
