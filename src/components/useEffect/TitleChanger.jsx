import { useState, useEffect } from "react";

export default function TitleChanger() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    document.title = `Count : ${count}`;
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 5: Title Changer</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Check the browser tab title!</p>
    </div>
  );
}
