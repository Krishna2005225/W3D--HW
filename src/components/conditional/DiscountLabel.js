import React from 'react';

function DiscountLabel({ productName, price, discountPercent }) {
  const hasDiscount = discountPercent > 0;
  const discountedPrice = price - (price * discountPercent) / 100;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, position: 'relative' }}>
      <h3>{productName}</h3>
      {hasDiscount && (
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
          {discountPercent}% OFF
        </span>
      )}
      <p style={{ textDecoration: hasDiscount ? 'line-through' : 'none', color: '#999' }}>Price: ₹{price}</p>
      {hasDiscount && <p style={{ color: 'green', fontWeight: 'bold' }}>Now: ₹{discountedPrice.toFixed(0)}</p>}
    </div>
  );
}

export default DiscountLabel;
