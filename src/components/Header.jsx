import { Link } from "react-router-dom";
import "./Header.css";
import { AppContext } from "../App";
import { useContext } from "react";
function Header() {
  const { currUser } = useContext(AppContext);
  return (
    <div className="header">
      <h1>My Application</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
        <li>
          <Link to="order">Order</Link>
        </li>

        {currUser?.role === "admin" && (
          <li>
            <Link to="admin">Admin</Link>
          </li>
        )}

        <li>
          {currUser?.email ? (
            <Link to="login">Logout</Link>
          ) : (
            <Link to="login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Header;
