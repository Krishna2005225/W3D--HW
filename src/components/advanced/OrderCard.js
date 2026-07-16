import React, { useState } from 'react';

function OrderCard({ orderId, product, customer, price, status, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const statusColors = { Pending: '#ff9800', Shipped: '#2196f3', Delivered: '#4caf50' };
  const bgColors = { Pending: '#fff3e0', Shipped: '#e3f2fd', Delivered: '#e8f5e9' };
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: bgColors[status] || '#fff', borderLeft: `4px solid ${statusColors[status] || '#999'}` }}>
      <img src={imgSrc} alt={product} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(product))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>#{orderId}</h3>
        <span style={{ backgroundColor: statusColors[status] || '#999', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>{status}</span>
      </div>
      <p><strong>Product:</strong> {product}</p>
      <p><strong>Customer:</strong> {customer}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>₹{price.toLocaleString()}</p>
    </div>
  );
}
export default OrderCard;