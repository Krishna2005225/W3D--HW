import React from 'react';

function AgeStatus({ name, age }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>Age Verification</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      {age >= 18 ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>🟢 Adult</p>
      ) : (
        <p style={{ color: 'orange', fontWeight: 'bold' }}>🟡 Minor</p>
      )}
    </div>
  );
}

export default AgeStatus;
