import { useState } from "react";

export default function ButtonClick() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 1: Button Click</h2>
      <button onClick={() => setMessage("Button Clicked")}>Click Me</button>
      {message && <p>{message}</p>}
    </div>
  );
}
