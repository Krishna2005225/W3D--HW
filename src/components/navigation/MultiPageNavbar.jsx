import { Link } from "react-router-dom";

export default function MultiPageNavbar() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Multi Page Application</h2>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/mpa">Home</Link>
        <Link to="/mpa/about">About</Link>
        <Link to="/mpa/services">Services</Link>
        <Link to="/mpa/contact">Contact</Link>
      </nav>
    </div>
  );
}
