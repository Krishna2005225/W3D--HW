import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Dashboard</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}
