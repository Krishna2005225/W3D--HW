import { useState, useEffect } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= 10) return;
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 2: Timer Application</h2>
      <h1>Timer: {count}</h1>
      {count >= 10 && <p>Timer stopped at 10!</p>}
    </div>
  );
}
