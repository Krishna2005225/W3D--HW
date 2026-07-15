import React from 'react';

function JobCard({ title, company, salary, jobType, location }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 300,
      position: 'relative'
    }}>
      <span style={{
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: jobType === 'Remote' ? '#4caf50' : '#2196f3',
        color: '#fff',
        padding: '4px 10px',
        borderRadius: 12,
        fontSize: 12,
        fontWeight: 'bold'
      }}>
        {jobType === 'Remote' ? '🏠 Remote' : '🏢 On-site'}
      </span>
      <h3>{title}</h3>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Salary:</strong> ${salary.toLocaleString()}/year</p>
    </div>
  );
}

export default JobCard;
