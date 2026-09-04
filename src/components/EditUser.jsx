import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function EditUser() {
  const { id } = useParams();
  const API = import.meta.env.VITE_API_URL;
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const fetchUser = async () => {
    const res = await axios.get(`${API}/users/edit/${id}`);
    setUser(res.data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdate = async () => {
    const res = await axios.put(`${API}/users/edit/${id}`, user);
    navigate("/admin");
  };

  return (
    <div>
      EditUser-{id}
      <p>
        <input
          type="text"
          placeholder="Name"
          defaultValue={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          defaultValue={user.email}
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          defaultValue={user.password}
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </p>
      <p>
        <input
          type="text"
          defaultValue={user.role}
          placeholder="Role"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleUpdate}>Update</button>
      </p>
    </div>
  );
}
