import { useEffect } from "react";

export default function ComponentLoaded() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 1: Component Loaded</h2>
      <p>Check the console for "Component Loaded" message.</p>
    </div>
  );
}
