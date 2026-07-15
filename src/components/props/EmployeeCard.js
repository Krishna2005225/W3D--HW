import React from 'react';

function EmployeeCard({ name, designation, salary, department }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, backgroundColor: '#f9f9f9' }}>
      <h3>Employee Card</h3>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Salary:</strong> ${salary.toLocaleString()}</p>
    </div>
  );
}

export default EmployeeCard;
