import React from "react"
import Routes from "./Routes"
import { RouterProvider } from "react-router-dom"

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={ Routes } />
    </React.StrictMode>
  )
}

export default App
