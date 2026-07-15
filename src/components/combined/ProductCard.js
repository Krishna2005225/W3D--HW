import React from 'react';

function ProductCard({ name, price, description, isOnSale, salePrice }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 250,
      position: 'relative',
      backgroundColor: isOnSale ? '#fce4ec' : '#fff'
    }}>
      {isOnSale && (
        <span style={{
          position: 'absolute',
          top: 8,
          right: 8,
          backgroundColor: '#e53935',
          color: '#fff',
          padding: '4px 10px',
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 'bold'
        }}>
          🏷️ SALE
        </span>
      )}
      <h3>{name}</h3>
      <p style={{ color: '#666' }}>{description}</p>
      {isOnSale ? (
        <div>
          <p style={{ textDecoration: 'line-through', color: '#999' }}>Price: ₹{price}</p>
          <p style={{ color: 'green', fontWeight: 'bold' }}>Sale: ₹{salePrice}</p>
        </div>
      ) : (
        <p style={{ fontWeight: 'bold' }}>Price: ₹{price}</p>
      )}
    </div>
  );
}

export default ProductCard;
