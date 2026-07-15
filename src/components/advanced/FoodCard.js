import React, { useState } from 'react';

function FoodCard({ name, cuisine, price, isVeg, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {isVeg ? (
          <span style={{ border: '2px solid green', color: 'green', padding: '2px 10px', borderRadius: 4, fontSize: 11, fontWeight: 'bold' }}>VEG</span>
        ) : (
          <span style={{ border: '2px solid red', color: 'red', padding: '2px 10px', borderRadius: 4, fontSize: 11, fontWeight: 'bold' }}>NON-VEG</span>
        )}
      </div>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{price}</p>
    </div>
  );
}
export default FoodCard;
