import React, { useState } from 'react';

function BankAccountCard({ holderName, accountNumber, bankName, balance, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const lowBalance = balance < 1000;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: lowBalance ? '#fff3e0' : '#e8f5e9' }}>
      <img src={imgSrc} alt={bankName} onError={() => setImgSrc('https://via.placeholder.com/280x120/333/fff?text=' + encodeURIComponent(bankName))} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6 }} />
      <h3 style={{ marginTop: 8 }}>{bankName}</h3>
      <p><strong>Holder:</strong> {holderName}</p>
      <p><strong>Account:</strong> ****{accountNumber.slice(-4)}</p>
      <p style={{ fontWeight: 'bold', color: lowBalance ? '#e65100' : '#2e7d32', fontSize: 18 }}>₹{balance.toLocaleString()}</p>
      {lowBalance && <p style={{ color: '#e65100', fontWeight: 'bold', fontSize: 12 }}>⚠️ Minimum Balance Warning</p>}
    </div>
  );
}
export default BankAccountCard;