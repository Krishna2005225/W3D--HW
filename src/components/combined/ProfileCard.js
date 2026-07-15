import React from 'react';

function ProfileCard({ name, role, location, isVerified }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 300,
      textAlign: 'center'
    }}>
      <h3>
        {name}
        {isVerified && (
          <span title="Verified User" style={{ color: '#1976d2', marginLeft: 6 }}>✅</span>
        )}
      </h3>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
      {isVerified && (
        <span style={{
          backgroundColor: '#e3f2fd',
          color: '#1565c0',
          padding: '4px 12px',
          borderRadius: 12,
          fontSize: 12,
          fontWeight: 'bold',
          display: 'inline-block',
          marginTop: 8
        }}>
          ✔️ Verified User
        </span>
      )}
      {!isVerified && (
        <span style={{
          backgroundColor: '#f5f5f5',
          color: '#999',
          padding: '4px 12px',
          borderRadius: 12,
          fontSize: 12,
          display: 'inline-block',
          marginTop: 8
        }}>
          Unverified
        </span>
      )}
    </div>
  );
}

export default ProfileCard;
