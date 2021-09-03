import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'


const pageMap = {
  "Note": require("./Pages/Note")
}

createInertiaApp({
  resolve: name => pageMap[name],
  id: 'app',
  setup({ el, App, props }) {
    render(<App {...props} />, el)
  },
})
