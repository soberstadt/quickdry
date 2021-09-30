module.exports = {
  mode: "jit",
  purge: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.tsx",
  ],
  theme: {
    fontFamily: {
      mono: [
        "Lotion",
        "Anonymous Pro for Powerline",
        "Courier New",
        "monospace",
      ],
    },
  },
};
