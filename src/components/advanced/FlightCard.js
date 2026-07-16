import React, { useState } from 'react';

function FlightCard({ airline, from, to, time, seatsAvailable, price, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const fullyBooked = seatsAvailable === 0;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, opacity: fullyBooked ? 0.6 : 1, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={airline} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=Flight')} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{airline}</h3>
        {fullyBooked ? (
          <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Fully Booked</span>
        ) : (
          <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Seats Available</span>
        )}
      </div>
      <p><strong>Route:</strong> {from} {String.fromCharCode(8594)} {to}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Seats:</strong> {seatsAvailable}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{price.toLocaleString()}</p>
    </div>
  );
}
export default FlightCard;
