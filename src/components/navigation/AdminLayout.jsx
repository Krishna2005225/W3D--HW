import { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";

export default function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin Dashboard</h2>
      <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <Link to="/admin">Dashboard</Link>
        <Link to="/admin/students">Students</Link>
        <Link to="/admin/courses">Courses</Link>
        <button onClick={() => navigate("/")}>Logout</button>
      </nav>
      <Outlet />
    </div>
  );
}
