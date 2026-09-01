import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1>My Application</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
