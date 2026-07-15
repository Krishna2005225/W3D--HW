import React, { useState } from 'react';

function BusTicketCard({ passenger, from, to, date, seatNumber, status, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const statusColors = { Confirmed: '#4caf50', 'Waiting List': '#ff9800', Cancelled: '#e53935' };
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt="Bus" onError={() => setImgSrc('https://via.placeholder.com/280x140/333/fff?text=Bus+Ticket')} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>🚌 {from} → {to}</h3>
        <span style={{ backgroundColor: statusColors[status] || '#999', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>{status}</span>
      </div>
      <p><strong>Passenger:</strong> {passenger}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Seat:</strong> {seatNumber}</p>
    </div>
  );
}
export default BusTicketCard;