import React from "react";
import { AppContext } from "./App";
import { useContext, useState } from "react";
export default function Login() {
  const { users, setUsers } = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const handleLogin = () => {
    const found = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (found) {
      setMessage("Welcome " + found.name);
    } else {
      setMessage("Access Denied");
    }
  };
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
    </div>
  );
}
