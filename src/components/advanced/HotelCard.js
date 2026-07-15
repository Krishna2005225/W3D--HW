import React, { useState } from 'react';

function HotelCard({ name, location, pricePerNight, rating, breakfastIncluded, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {breakfastIncluded && <span style={{ backgroundColor: '#ff9800', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Free Breakfast</span>}
      </div>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Rating:</strong> {rating}/5</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{pricePerNight}/night</p>
    </div>
  );
}
export default HotelCard;
