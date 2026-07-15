import React from 'react';

function StatusBadge({ label, status }) {
  const colors = {
    Active: '#4caf50', Inactive: '#9e9e9e', Pending: '#ff9800',
    Success: '#4caf50', Error: '#e53935', Warning: '#ff9800', Info: '#2196f3',
    Online: '#4caf50', Offline: '#9e9e9e', Busy: '#e53935',
    Approved: '#4caf50', Rejected: '#e53935', Review: '#ff9800'
  };
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 200, textAlign: 'center' }}>
      <p style={{ margin: '0 0 8px', color: '#555' }}>{label}</p>
      <span style={{ backgroundColor: colors[status] || '#999', color: '#fff', padding: '6px 18px', borderRadius: 16, fontWeight: 'bold', fontSize: 14 }}>{status}</span>
    </div>
  );
}
export default StatusBadge;
