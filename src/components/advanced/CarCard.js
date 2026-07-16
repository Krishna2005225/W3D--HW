import React, { useState } from 'react';

function CarCard({ brand, model, fuelType, price, seats, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const isElectric = fuelType === 'Electric';
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isElectric ? '#e8f5e9' : '#fff' }}>
      <img src={imgSrc} alt={model} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(brand))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{brand} {model}</h3>
        {isElectric && <span style={{ backgroundColor: '#2e7d32', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Electric Vehicle</span>}
      </div>
      <p><strong>Fuel:</strong> {fuelType}</p>
      <p><strong>Seats:</strong> {seats}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{price.toLocaleString()}</p>
    </div>
  );
}
export default CarCard;
