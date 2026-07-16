import { useState } from "react";

export default function InputField() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 2: Input Field</h2>
      <div>
        <label>Enter your name: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      {name && <h3>Welcome {name}</h3>}
    </div>
  );
}
