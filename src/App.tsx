import React from "react"
import Routes from "./Routes"
import { BrowserRouter, RouterProvider } from "react-router-dom"
// import Navbar from "./components/navigation/Navbar"

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={ Routes } />
    </React.StrictMode>
  )
}

export default App
