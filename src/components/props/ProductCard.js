import React from 'react';

function ProductCard({ name, price, description }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 250, backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>{name}</h3>
      <p style={{ color: '#2c7a2c', fontWeight: 'bold' }}>${price}</p>
      <p style={{ color: '#666' }}>{description}</p>
    </div>
  );
}

export default ProductCard;
