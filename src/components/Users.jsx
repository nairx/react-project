import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Users() {
  const [users, setUsers] = useState();
  const API = import.meta.env.VITE_API_URL;
   const [user, setUser] = useState({});
  const fetchUsers = async () => {
    const res = await axios.get(`${API}/users`);
    setUsers(res.data);
  };
  useEffect(()=>{
    fetchUsers()
  },[])

  const handleDelete = async (id) => {
    await axios.delete(`${API}/users/delete/${id}`);
    fetchUsers();
  };

    const handleAdd = async () => {
    const res = await axios.post(`${API}/users`, user);
    fetchUsers();
  };

  return (
    <div>
      Users
      <p>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) =>
            setUser({ ...user, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button onClick={handleAdd}>Add</button>
      </p>
      <ol>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/admin/edit-user/${user.id}`}>{user.name}</Link>-{user.email}-{user.role}- <button onClick={() => handleDelete(user.id)}>Delete</button>
            </li>
          ))}
      </ol>
    </div>
  );
}
