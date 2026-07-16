import { useState } from "react";

export default function PasswordVisibility() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Task 4: Password Visibility</h2>
      <div>
        <label>Password: </label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide Password" : "Show Password"}
      </button>
      {showPassword && <p>Password: {password}</p>}
    </div>
  );
}
