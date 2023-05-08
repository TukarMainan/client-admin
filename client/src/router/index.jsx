import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Reported from "../pages/Reported";
import Archieved from "../pages/Archieved";
import AddAdmin from "../pages/AddAdmin";
import ChangePassword from "../pages/ChangePassword";
import Detail from "../pages/Detail";
import Category from "../pages/Category";
import CategoryDetail from "../pages/CategoryDetail";
import History from "../pages/History";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reported",
        element: <Reported />,
      },
      {
        path: "/archieve",
        element: <Archieved />,
      },
      {
        path: "/add",
        element: <AddAdmin />,
      },
      {
        path: "/changePassword",
        element: <ChangePassword />,
      },
      {
        path: "/detail/:id",
        element: <Detail />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/category/:id",
        element: <CategoryDetail />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);

export default router;
