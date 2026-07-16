import React from 'react';

function RoleDashboard({ userName, role }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 350 }}>
      <h3>Welcome, {userName}</h3>
      {role === 'Admin' ? (
        <div style={{ backgroundColor: '#fce4ec', padding: 12, borderRadius: 6 }}>
          <h4 style={{ color: '#c62828' }}>🛡️ Admin Panel</h4>
          <p>Manage users, settings, and permissions.</p>
        </div>
      ) : (
        <div style={{ backgroundColor: '#e8f5e9', padding: 12, borderRadius: 6 }}>
          <h4 style={{ color: '#2e7d32' }}>📊 User Dashboard</h4>
          <p>View your profile and activity.</p>
        </div>
      )}
    </div>
  );
}

export default RoleDashboard;
