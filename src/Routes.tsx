import {  createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";



const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "catalog",
    element: <Catalog />
  },
  {
    path: "admin",
    element: <Admin />
  }
]);

export default Routes;