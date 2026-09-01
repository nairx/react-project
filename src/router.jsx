import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import RootLayout from "./components/RootLayout";
import Cart from "./components/Cart";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
       { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router