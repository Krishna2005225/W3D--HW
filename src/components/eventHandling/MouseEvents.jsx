import { useState } from "react";

export default function MouseEvents() {
  const [event, setEvent] = useState("No event yet");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 4: Mouse Events</h2>
      <div
        onClick={() => setEvent("onClick triggered")}
        onMouseOver={() => setEvent("onMouseOver triggered")}
        onMouseLeave={() => setEvent("onMouseLeave triggered")}
        style={{
          width: "300px",
          height: "150px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          border: "2px solid #333",
        }}
      >
        Hover or Click me!
      </div>
      <p>Event: {event}</p>
    </div>
  );
}
