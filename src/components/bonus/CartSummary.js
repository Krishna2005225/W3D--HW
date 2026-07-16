import React from 'react';

function CartSummary({ items, cartTotal }) {
  const freeShipping = cartTotal > 1000;
  return (
    <div style={{ border: '2px solid #ddd', borderRadius: 8, padding: 20, margin: 8, maxWidth: 400, backgroundColor: '#fff' }}>
      <h2 style={{ margin: '0 0 12px' }}>🛒 Cart Summary</h2>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
          <span>{item.name} x{item.qty}</span>
          <span style={{ fontWeight: 'bold' }}>₹{(item.price * item.qty).toLocaleString()}</span>
        </div>
      ))}
      <div style={{ marginTop: 12, borderTop: '2px solid #333', paddingTop: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 'bold' }}>
          <span>Total:</span>
          <span>₹{cartTotal.toLocaleString()}</span>
        </div>
        {freeShipping ? (
          <p style={{ color: '#4caf50', fontWeight: 'bold', marginTop: 8 }}>🚚 Free Shipping Applied!</p>
        ) : (
          <p style={{ color: '#e53935', marginTop: 8 }}>Shipping: ₹99 (Add ₹{(1001 - cartTotal).toLocaleString()} more for free shipping)</p>
        )}
      </div>
    </div>
  );
}
export default CartSummary;
