import { useState, useEffect } from "react";

export default function CrudApp() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.slice(0, 5)));
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email };
    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setUsers(users.map((u) => (u.id === editId ? { ...u, name, email } : u)));
    setEditId(null);
    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 5: CRUD Application</h2>
      <form onSubmit={editId ? handleUpdate : handleAdd}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <button type="submit">{editId ? "Update" : "Add User"}</button>
        {editId && <button type="button" onClick={() => { setEditId(null); setName(""); setEmail(""); }}>Cancel</button>}
      </form>
      <table border="1" cellPadding="8" style={{ marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
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
                <button onClick={() => handleEdit(user)}>Edit</button>{" "}
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
