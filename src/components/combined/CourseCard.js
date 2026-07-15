import React from 'react';

function CourseCard({ courseName, trainer, duration, fee, totalSeats, enrolledSeats }) {
  const seatsFull = enrolledSeats >= totalSeats;
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 300,
      opacity: seatsFull ? 0.7 : 1
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{courseName}</h3>
        {seatsFull && (
          <span style={{
            backgroundColor: '#e53935',
            color: '#fff',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 11,
            fontWeight: 'bold'
          }}>
            CLOSED
          </span>
        )}
      </div>
      <p><strong>Trainer:</strong> {trainer}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Fee:</strong> ₹{fee}</p>
      <p><strong>Seats:</strong> {enrolledSeats}/{totalSeats}</p>
      {!seatsFull && (
        <button style={{
          backgroundColor: '#4caf50',
          color: '#fff',
          border: 'none',
          padding: '8px 16px',
          borderRadius: 4,
          cursor: 'pointer',
          marginTop: 8
        }}>
          Enroll Now
        </button>
      )}
      {seatsFull && (
        <p style={{ color: 'red', fontWeight: 'bold', marginTop: 8 }}>Enrollment Closed</p>
      )}
    </div>
  );
}

export default CourseCard;
