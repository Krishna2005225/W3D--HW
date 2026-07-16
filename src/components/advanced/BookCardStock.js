import React, { useState } from 'react';

function BookCardStock({ title, author, price, category, quantity, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const outOfStock = quantity === 0;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, opacity: outOfStock ? 0.6 : 1, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={title} onError={() => setImgSrc('https://via.placeholder.com/280x220/333/fff?text=' + encodeURIComponent(title))} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>{title}</h3>
        {outOfStock && <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Out of Stock</span>}
      </div>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Category:</strong> {category}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>₹{price}</p>
    </div>
  );
}
export default BookCardStock;