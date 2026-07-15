import React from 'react';

function NotificationCard({ title, message, type, time }) {
  const typeConfig = {
    Success: { icon: '✅', color: '#4caf50', bg: '#e8f5e9' },
    Warning: { icon: '⚠️', color: '#ff9800', bg: '#fff3e0' },
    Error: { icon: '❌', color: '#e53935', bg: '#ffebee' }
  };
  const config = typeConfig[type] || typeConfig.Info;
  return (
    <div style={{ border: `1px solid ${config.color}`, borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, backgroundColor: config.bg }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 24 }}>{config.icon}</span>
        <div>
          <h3 style={{ margin: 0 }}>{title}</h3>
          <p style={{ margin: '4px 0', color: '#555' }}>{message}</p>
          <p style={{ margin: 0, fontSize: 12, color: '#999' }}>{time}</p>
        </div>
      </div>
    </div>
  );
}
export default NotificationCard;
