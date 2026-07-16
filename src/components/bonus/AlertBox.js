import React from 'react';

function AlertBox({ type, title, message }) {
  const config = {
    Success: { icon: '✅', color: '#4caf50', bg: '#e8f5e9', border: '#a5d6a7' },
    Error: { icon: '❌', color: '#e53935', bg: '#ffebee', border: '#ef9a9a' },
    Warning: { icon: '⚠️', color: '#ff9800', bg: '#fff3e0', border: '#ffcc80' },
    Info: { icon: 'ℹ️', color: '#2196f3', bg: '#e3f2fd', border: '#90caf9' }
  };
  const c = config[type] || config.Info;
  return (
    <div style={{ border: `2px solid ${c.border}`, borderRadius: 8, padding: 16, margin: 8, maxWidth: 400, backgroundColor: c.bg }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 28 }}>{c.icon}</span>
        <div>
          <h3 style={{ margin: 0, color: c.color }}>{title}</h3>
          <p style={{ margin: '4px 0 0', color: '#555' }}>{message}</p>
        </div>
      </div>
    </div>
  );
}
export default AlertBox;
