import React, { useState } from 'react';

function RestaurantCardDelivery({ name, cuisine, rating, deliveryTime, homeDelivery, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {homeDelivery && <span style={{ backgroundColor: '#ff9800', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>🛵 Home Delivery</span>}
      </div>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}/5</p>
      <p><strong>Delivery:</strong> {deliveryTime} min</p>
    </div>
  );
}
export default RestaurantCardDelivery;
