import { Link } from "react-router-dom";

export default function NavDashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard (Logged In)</h2>
      <nav>
        <Link to="/nav-home">Home</Link> |{" "}
        <Link to="/add-student">Add Student</Link> |{" "}
        <Link to="/view-students">View Students</Link>
      </nav>
      <p>Welcome to the dashboard!</p>
    </div>
  );
}
