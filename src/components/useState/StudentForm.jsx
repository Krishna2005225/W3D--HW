import { useState } from "react";

export default function StudentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 2: Student Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Course: </label>
          <input type="text" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submitted && (
        <div style={{ marginTop: "20px" }}>
          <h3>Entered Details:</h3>
          <p>Name: {name}</p>
          <p>Email: {email}</p>
          <p>Course: {course}</p>
        </div>
      )}
    </div>
  );
}
