import React from 'react';

function LoginStatus({ isLoggedIn }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>Login Status</h3>
      {isLoggedIn ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>✅ Login Successful</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>❌ Please Login</p>
      )}
    </div>
  );
}

export default LoginStatus;
