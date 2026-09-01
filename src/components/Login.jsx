import React from "react";
import { AppContext } from "../App";
import { useContext, useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const { users, setUsers, currUser, setCurrUser } = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const handleLogin = () => {
    const found = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (found) {
      setCurrUser({ name: found.name, email: found.email });
      navigate("/");
    } else {
      setMessage("Access Denied");
    }
  };

  useEffect(() => {
    setCurrUser({});
  }, []);

  return (
    <div>
      Login
      <p>{message}</p>
      <p>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleLogin}>Login</button>
      <p>
        New User <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
