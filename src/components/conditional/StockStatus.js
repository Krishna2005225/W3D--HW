import React from 'react';

function StockStatus({ productName, inStock }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300 }}>
      <h3>{productName}</h3>
      {inStock ? (
        <p style={{ color: 'green', fontWeight: 'bold' }}>✅ Available</p>
      ) : (
        <p style={{ color: 'red', fontWeight: 'bold' }}>❌ Out of Stock</p>
      )}
    </div>
  );
}

export default StockStatus;
