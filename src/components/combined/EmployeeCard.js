import React from 'react';

function EmployeeCard({ name, designation, salary, department, experience }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 300,
      backgroundColor: experience > 5 ? '#e3f2fd' : '#fff'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{name}</h3>
        {experience > 5 && (
          <span style={{
            backgroundColor: '#1565c0',
            color: '#fff',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 'bold'
          }}>
            👔 Senior Employee
          </span>
        )}
      </div>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Salary:</strong> ${salary.toLocaleString()}</p>
    </div>
  );
}

export default EmployeeCard;
