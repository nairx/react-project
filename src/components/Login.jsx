import React from "react";
import { AppContext } from "../App";
import { useContext, useState, useEffect, useRef } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";
export default function Login() {
  const { users, setUsers, currUser, setCurrUser } = useContext(AppContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const emailRef = useRef()
  const passwordRef = useRef()

  const [message, setMessage] = useState();
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;
  const handleLogin = async () => {
    // const found = users.find(
    //   (user) => user.email === email && user.password === password,
    // );
    console.log("Component Updated")   
    const found = await axios.post(`${API}/users/login`, { email:emailRef.current.value, password:passwordRef.current.value });
    console.log(found);
    if (found.data.email) {
      setCurrUser({ name: found.data.name, email: found.data.email });
      navigate("/");
    } else {
      setMessage("Access Denied");
    }
  };

  useEffect(() => {
    setCurrUser({});
    console.log("Component Mounted")
    return () => {
      console.log("Component Unmounted")
    }
  }, []);

  return (
    <div>
      Login
      <p>{message}</p>
      <p>
        <input
          type="text"
          placeholder="Email"
          ref={emailRef}
          // onChange={(e) => setEmail(e.target.value)}
        />
      </p>
      <p>
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          // onChange={(e) => setPassword(e.target.value)}
        />
      </p>
      <button onClick={handleLogin}>Login</button>
      <p>
        New User <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
