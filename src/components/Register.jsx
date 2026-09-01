import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  const handleSubmit = () => {
    setUsers([
      ...users,
      {
        name,
        email,
        password,
      },
    ]);
    navigate("/login")
  };
  return (
 
      <div>
        Register
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </p>
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
        <p>
          <button onClick={handleSubmit}>Submit</button>
        </p>
      </div>
    
  );
}
