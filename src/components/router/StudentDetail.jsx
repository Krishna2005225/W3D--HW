import { useParams } from "react-router-dom";

export default function StudentDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student ID: {id}</h1>
      <p>Details for student with ID {id}</p>
    </div>
  );
}
