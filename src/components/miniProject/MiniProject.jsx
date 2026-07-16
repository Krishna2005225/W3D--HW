import { useState, useEffect } from "react";

export default function MiniProject() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (timer >= 30) return;
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "300px",
      }}
    >
      <h1>Mini Project 1</h1>

      <section style={{ marginBottom: "20px" }}>
        <h2>Counter App</h2>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h2>Theme Toggle</h2>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </section>

      <section>
        <h2>Timer</h2>
        <h3>Timer: {timer}s</h3>
      </section>
    </div>
  );
}
