import React, { useState } from 'react';

function LaptopCard({ brand, model, ram, processor, price, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const isGaming = ram >= 16;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isGaming ? '#e8f5e9' : '#fff' }}>
      <img src={imgSrc} alt={model} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(brand))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{brand} {model}</h3>
        {isGaming && <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Gaming Laptop</span>}
      </div>
      <p><strong>RAM:</strong> {ram}GB</p>
      <p><strong>Processor:</strong> {processor}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{price.toLocaleString()}</p>
    </div>
  );
}
export default LaptopCard;
