import React, { useState } from 'react';

function CustomerCard({ name, email, points, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  let membership, color;
  if (points >= 5000) { membership = 'Gold'; color = '#ffd700'; }
  else if (points >= 2000) { membership = 'Silver'; color = '#c0c0c0'; }
  else { membership = 'Bronze'; color = '#cd7f32'; }
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        <span style={{ backgroundColor: color, color: '#333', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>👑 {membership}</span>
      </div>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Points:</strong> {points.toLocaleString()}</p>
    </div>
  );
}
export default CustomerCard;