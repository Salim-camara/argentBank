import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import Dashboard from "./pages/Dashboard";

const Router = () => {
  const routes = useRoutes([
    { path: "*", element: <Home /> },
    { path: "/login", element: <Connexion /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
  return routes;
};

export default Router;
