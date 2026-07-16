import React, { useState } from 'react';

function SubscriptionCard({ planName, price, startDate, endDate, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const now = new Date();
  const end = new Date(endDate);
  const daysLeft = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  let status, color;
  if (daysLeft < 0) { status = 'Expired'; color = '#e53935'; }
  else if (daysLeft <= 7) { status = 'Renew Soon'; color = '#ff9800'; }
  else { status = 'Active'; color = '#4caf50'; }
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={planName} onError={() => setImgSrc('https://via.placeholder.com/280x140/333/fff?text=' + encodeURIComponent(planName))} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{planName}</h3>
        <span style={{ backgroundColor: color, color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>{status}</span>
      </div>
      <p><strong>Price:</strong> ₹{price}/mo</p>
      <p><strong>Start:</strong> {startDate}</p>
      <p><strong>End:</strong> {endDate}</p>
      {daysLeft >= 0 && <p style={{ fontSize: 12, color: '#999' }}>{daysLeft} days remaining</p>}
    </div>
  );
}
export default SubscriptionCard;
