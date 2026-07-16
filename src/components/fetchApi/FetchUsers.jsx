import { useState, useEffect } from "react";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 1: Fetch Users</h2>
      {users.map((user) => (
        <div key={user.id} style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company.name}</p>
        </div>
      ))}
    </div>
  );
}
