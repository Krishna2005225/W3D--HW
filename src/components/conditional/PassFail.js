import React from 'react';

function PassFail({ studentName, marks }) {
  const passed = marks >= 35;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>Result</h3>
      <p><strong>Student:</strong> {studentName}</p>
      <p><strong>Marks:</strong> {marks}</p>
      {passed ? (
        <p style={{ color: 'green', fontWeight: 'bold', fontSize: 18 }}>✅ Pass</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold', fontSize: 18 }}>❌ Fail</p>
      )}
    </div>
  );
}

export default PassFail;
