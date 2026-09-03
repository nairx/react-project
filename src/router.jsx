import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";
import Order from "./components/Order";
import AdminLayout from "./components/AdminLayout";
import Users from "./components/Users";
import Products from "./components/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "cart", element: <Cart /> },
      { path: "order", element: <Order /> },
      {
        path: "admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Users /> },
          { path: "products", element: <Products /> },
        ],
      },
    ],
  },
]);

export default router;
