import React from 'react';

function OnlineOffline({ userName, isActive }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>User Status</h3>
      <p><strong>Name:</strong> {userName}</p>
      {isActive ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>🟢 Online</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>🔴 Offline</p>
      )}
    </div>
  );
}

export default OnlineOffline;
