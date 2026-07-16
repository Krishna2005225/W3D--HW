import React from 'react';

function StudentDashboard({ students }) {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>📚 Student Management Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {students.map((student, index) => {
          const passed = student.marks >= 35;
          const isTopper = student.marks > 90;
          const attendancePercent = student.attendance;
          const hasGoodAttendance = attendancePercent >= 75;

          return (
            <div key={index} style={{
              border: '1px solid #ddd',
              borderRadius: 8,
              padding: 16,
              margin: 8,
              width: 280,
              backgroundColor: passed ? '#f9fff9' : '#fff5f5'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ margin: 0 }}>{student.name}</h3>
                {isTopper && (
                  <span style={{
                    backgroundColor: '#ffd700',
                    color: '#333',
                    padding: '2px 8px',
                    borderRadius: 12,
                    fontSize: 11,
                    fontWeight: 'bold'
                  }}>
                    🏆 Topper
                  </span>
                )}
              </div>
              <p style={{ margin: '4px 0' }}><strong>Age:</strong> {student.age}</p>
              <p style={{ margin: '4px 0' }}><strong>Course:</strong> {student.course}</p>
              <p style={{ margin: '4px 0' }}><strong>Marks:</strong> {student.marks}</p>
              <hr style={{ margin: '8px 0' }} />
              <p style={{ margin: '4px 0' }}>
                <strong>Result:</strong>{' '}
                {passed ? (
                  <span style={{ color: 'green', fontWeight: 'bold' }}>✅ Pass</span>
                ) : (
                  <span style={{ color: 'red', fontWeight: 'bold' }}>❌ Fail</span>
                )}
              </p>
              <p style={{ margin: '4px 0' }}>
                <strong>Attendance:</strong>{' '}
                {hasGoodAttendance ? (
                  <span style={{ color: 'green' }}>✅ {attendancePercent}% (Good)</span>
                ) : (
                  <span style={{ color: 'red' }}>⚠️ {attendancePercent}% (Low)</span>
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StudentDashboard;
