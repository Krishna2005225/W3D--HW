import { useState } from "react";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "200px",
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      <h2>Task 3: Toggle Theme</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <p>This is some sample content to show the theme change.</p>
    </div>
  );
}
