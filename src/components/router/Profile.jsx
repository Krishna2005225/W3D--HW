import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/settings">Settings</Link>
      </nav>
      <p>This is your profile page.</p>
    </div>
  );
}
