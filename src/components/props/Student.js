import React from 'react';

function Student({ name, age, course }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>Student Details</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Course:</strong> {course}</p>
    </div>
  );
}

export default Student;
