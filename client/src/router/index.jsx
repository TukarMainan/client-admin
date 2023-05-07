import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Reported from "../pages/Reported";
import Archieved from "../pages/Archieved";
import AddAdmin from "../pages/AddAdmin";
import ChangePassword from "../pages/ChangePassword";
import Detail from "../pages/Detail";

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
    ],
  },
]);

export default router;
