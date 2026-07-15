import React, { useState } from 'react';

function ProductCardDelivery({ name, price, seller, category, orderValue, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const freeDelivery = orderValue > 500;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>{name}</h3>
        {freeDelivery && <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>🚚 Free Delivery</span>}
      </div>
      <p><strong>Seller:</strong> {seller}</p>
      <p><strong>Category:</strong> {category}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>₹{price.toLocaleString()}</p>
    </div>
  );
}
export default ProductCardDelivery;
