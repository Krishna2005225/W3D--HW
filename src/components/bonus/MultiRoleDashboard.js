import React from 'react';

function MultiRoleDashboard({ userRole, userName }) {
  const roleConfigs = {
    Student: { color: '#4caf50', bg: '#e8f5e9', icon: '📚', menus: ['My Courses', 'Assignments', 'Grades', 'Attendance', 'Library'] },
    Faculty: { color: '#1976d2', bg: '#e3f2fd', icon: '👨‍🏫', menus: ['My Classes', 'Student Records', 'Grade Upload', 'Research', 'Schedule'] },
    Admin: { color: '#e53935', bg: '#ffebee', icon: '🛡️', menus: ['User Management', 'System Settings', 'Reports', 'Analytics', 'Audit Logs'] },
    Trainer: { color: '#ff9800', bg: '#fff3e0', icon: '🎯', menus: ['My Sessions', 'Trainee Progress', 'Course Material', 'Feedback', 'Certification'] }
  };
  const config = roleConfigs[userRole] || roleConfigs.Student;
  return (
    <div style={{ border: '2px solid ' + config.color, borderRadius: 12, padding: 20, margin: 8, maxWidth: 400, backgroundColor: config.bg }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 40 }}>{config.icon}</span>
        <div>
          <h2 style={{ margin: 0 }}>{userName}</h2>
          <span style={{ backgroundColor: config.color, color: '#fff', padding: '4px 14px', borderRadius: 12, fontSize: 12, fontWeight: 'bold' }}>{userRole}</span>
        </div>
      </div>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: 16 }}>
        {config.menus.map((m, i) => (
          <li key={i} style={{ padding: '10px 16px', margin: '4px 0', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: 6, cursor: 'pointer', fontWeight: 500 }}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
export default MultiRoleDashboard;
