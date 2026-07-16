import { Link } from "react-router-dom";

export default function StudentList() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Students</h1>
      <nav>
        <Link to="/student/1">Student 1</Link> |{" "}
        <Link to="/student/2">Student 2</Link> |{" "}
        <Link to="/student/3">Student 3</Link>
      </nav>
    </div>
  );
}
