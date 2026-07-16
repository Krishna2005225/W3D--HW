import React from 'react';

function PremiumBadge({ userName, isPremium }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> {userName}</p>
      {isPremium && (
        <span style={{
          backgroundColor: '#ffd700',
          color: '#333',
          padding: '4px 12px',
          borderRadius: 12,
          fontWeight: 'bold',
          display: 'inline-block',
          marginTop: 8
        }}>
          ⭐ Premium Member
        </span>
      )}
      {!isPremium && (
        <p style={{ color: '#999', marginTop: 8 }}>Standard User</p>
      )}
    </div>
  );
}

export default PremiumBadge;
