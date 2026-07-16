import { Link } from "react-router-dom";

export default function NavHome() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Home</h2>
      <nav>
        <Link to="/nav-home">Home</Link> |{" "}
        <Link to="/add-student">Add Student</Link> |{" "}
        <Link to="/view-students">View Students</Link>
      </nav>
      <p>Welcome to the Student Management System</p>
    </div>
  );
}
