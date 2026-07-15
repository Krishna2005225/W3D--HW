import React, { useState } from 'react';

function ProductItem({ p }) {
  const [imgSrc, setImgSrc] = useState(p.image);
  const fallback = 'https://via.placeholder.com/250x200/333/fff?text=' + encodeURIComponent(p.name);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, margin: 8, width: 230, backgroundColor: '#fff', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 4, left: 4, display: 'flex', gap: 4, zIndex: 1 }}>
        {p.isOnSale && <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>SALE</span>}
        {p.quantity === 0 && <span style={{ backgroundColor: '#757575', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>OUT OF STOCK</span>}
        {p.featured && <span style={{ backgroundColor: '#ff9800', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>FEATURED</span>}
      </div>
      <img src={imgSrc} alt={p.name} onError={() => setImgSrc(fallback)} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <h4 style={{ margin: '8px 0 4px' }}>{p.name}</h4>
      <p style={{ color: p.quantity > 0 ? '#2e7d32' : '#e53935', fontWeight: 'bold' }}>
        {p.quantity > 0 ? `₹${p.price}` : 'Out of Stock'}
      </p>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>🛒 Product Grid (20 Products)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((p, i) => (
          <ProductItem key={i} p={p} />
        ))}
      </div>
    </div>
  );
}
export default ProductGrid;
