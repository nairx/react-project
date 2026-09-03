import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Users() {
  const [users, setUsers] = useState();
  const API = import.meta.env.VITE_API_URL;
  const fetchUsers = async () => {
    const res = await axios.get(`${API}/users`);
    setUsers(res.data);
  };
  useEffect(()=>{
    fetchUsers()
  },[])
  return (
    <div>
      Users
      <ol>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              {user.name}-{user.email}-{user.role}
            </li>
          ))}
      </ol>
    </div>
  );
}
