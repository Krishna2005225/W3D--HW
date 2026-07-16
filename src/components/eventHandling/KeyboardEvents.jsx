import { useState } from "react";

export default function KeyboardEvents() {
  const [lastKey, setLastKey] = useState("None");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 5: Keyboard Events</h2>
      <input
        type="text"
        onKeyDown={(e) => setLastKey(`KeyDown: ${e.key}`)}
        onKeyUp={(e) => setLastKey(`KeyUp: ${e.key}`)}
        placeholder="Type something here..."
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />
      <p>Pressed Key: {lastKey}</p>
    </div>
  );
}
