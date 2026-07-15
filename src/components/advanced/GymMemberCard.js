import React, { useState } from 'react';

function GymMemberCard({ name, membership, expiryDate, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const expired = new Date(expiryDate) < new Date();
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: expired ? '#ffebee' : '#e8f5e9' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {expired ? (
          <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>❌ Expired</span>
        ) : (
          <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>✅ Active</span>
        )}
      </div>
      <p><strong>Plan:</strong> {membership}</p>
      <p><strong>Expiry:</strong> {expiryDate}</p>
    </div>
  );
}
export default GymMemberCard;
