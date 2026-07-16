import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 3: Digital Clock</h2>
      <h1>
        {String(time.getHours()).padStart(2, "0")}:
        {String(time.getMinutes()).padStart(2, "0")}:
        {String(time.getSeconds()).padStart(2, "0")}
      </h1>
    </div>
  );
}
