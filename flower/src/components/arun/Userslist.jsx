import React from "react";
import axios from "axios";
import "./Userslist.css"
import { useEffect,useState } from "react";
const Userslist = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const res = await axios.get(
      "https://642829d7161067a83b08563b.mockapi.io/users"
    );
    setUsers(res.data);
    console.log(res.data);
  };
  const handleDeleteUser = async (id) => {
    const res = await axios.delete(
      `https://642829d7161067a83b08563b.mockapi.io/users/${id}`
    );
    fetchUsers();
  };
  return (
    <div className="users">
      <h1>Users List</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Userslist;
