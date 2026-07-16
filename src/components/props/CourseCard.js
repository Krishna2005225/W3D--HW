import React from 'react';

function CourseCard({ courseName, trainer, duration, fee }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, backgroundColor: '#e3f2fd' }}>
      <h3>{courseName}</h3>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p style={{ color: '#1565c0', fontWeight: 'bold' }}>Fee: ₹{fee}</p>
    </div>
  );
}

export default CourseCard;
