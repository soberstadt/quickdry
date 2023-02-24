import React from "react";
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from "@inertiajs/react";

const pageMap = {
  Note: require("./Pages/Note"),
  Search: require("./Pages/Search"),
  Tasks: require("./Pages/Tasks"),
};

createInertiaApp({
  resolve: (name) => pageMap[name],
  id: "app",
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
});
