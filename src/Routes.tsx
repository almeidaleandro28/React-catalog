import {  createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import ErrorPage from "./components/error/Error_page";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalog",
    element: <Catalog />,
    errorElement: <ErrorPage />

  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />

  }
]);

export default Routes;