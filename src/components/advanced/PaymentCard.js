import React, { useState } from 'react';

function PaymentCard({ orderId, amount, method, date, isPaid, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isPaid ? '#e8f5e9' : '#fff3e0' }}>
      <img src={imgSrc} alt="Payment" onError={() => setImgSrc('https://via.placeholder.com/280x120/333/fff?text=Payment')} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>Order #{orderId}</h3>
        {isPaid ? (
          <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>✅ Paid</span>
        ) : (
          <span style={{ backgroundColor: '#ff9800', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>⏳ Pending</span>
        )}
      </div>
      <p style={{ fontSize: 20, fontWeight: 'bold' }}>₹{amount.toLocaleString()}</p>
      <p><strong>Method:</strong> {method}</p>
      <p><strong>Date:</strong> {date}</p>
    </div>
  );
}
export default PaymentCard;
