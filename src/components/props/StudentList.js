import React from 'react';

function StudentList({ students }) {
  return (
    <div style={{ padding: 16 }}>
      <h3>Student List</h3>
      {students.map((student, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: 8, padding: 12, margin: 8, backgroundColor: '#f5f5f5' }}>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Marks:</strong> {student.marks}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
