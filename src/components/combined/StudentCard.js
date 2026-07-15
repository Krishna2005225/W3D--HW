import React from 'react';

function StudentCard({ name, age, course, marks }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 300,
      backgroundColor: marks > 90 ? '#e8f5e9' : '#fff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{name}</h3>
        {marks > 90 && (
          <span style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 'bold'
          }}>
            🏆 Topper
          </span>
        )}
      </div>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}</p>
    </div>
  );
}

export default StudentCard;
