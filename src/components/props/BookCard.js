import React from 'react';

function BookCard({ title, author, price, category }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 250, backgroundColor: '#fff8e1' }}>
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Category:</strong> {category}</p>
      <p style={{ color: '#d84315', fontWeight: 'bold' }}>₹{price}</p>
    </div>
  );
}

export default BookCard;
