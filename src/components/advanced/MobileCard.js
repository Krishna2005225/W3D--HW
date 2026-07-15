import React, { useState } from 'react';

function MobileCard({ brand, model, storage, price, is5G, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: is5G ? '#e3f2fd' : '#fff' }}>
      <img src={imgSrc} alt={model} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(brand))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{brand} {model}</h3>
        {is5G && <span style={{ backgroundColor: '#1976d2', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>5G Supported</span>}
      </div>
      <p><strong>Storage:</strong> {storage}GB</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{price.toLocaleString()}</p>
    </div>
  );
}
export default MobileCard;
