import { Link } from "react-router-dom";

export default function Settings() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Settings</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>
      <p>Adjust your settings here.</p>
    </div>
  );
}
