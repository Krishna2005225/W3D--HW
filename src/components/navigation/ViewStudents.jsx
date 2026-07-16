import { Link } from "react-router-dom";

export default function ViewStudents() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>View Students</h2>
      <nav>
        <Link to="/nav-home">Home</Link> |{" "}
        <Link to="/add-student">Add Student</Link> |{" "}
        <Link to="/view-students">View Students</Link>
      </nav>
      <p>Students list will appear here.</p>
    </div>
  );
}
