import { useState } from "react";
import { Link } from "react-router-dom";

export default function AddStudent() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setStudents([...students, { name, course }]);
    setName("");
    setCourse("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Student</h2>
      <nav>
        <Link to="/nav-home">Home</Link> |{" "}
        <Link to="/add-student">Add Student</Link> |{" "}
        <Link to="/view-students">View Students</Link>
      </nav>
      <form onSubmit={handleAdd} style={{ marginTop: "10px" }}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Course: </label>
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
