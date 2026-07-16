import React from 'react';

function Dashboard() {
  const cards = [
    { type: 'Student', name: 'Alice', badge: 'Topper', color: '#4caf50', image: 'https://picsum.photos/id/60/400/200' },
    { type: 'Employee', name: 'Bob', badge: 'Senior', color: '#1976d2', image: 'https://picsum.photos/id/61/400/200' },
    { type: 'Product', name: 'iPhone 15', badge: 'Sale', color: '#e53935', image: 'https://picsum.photos/id/62/400/200' },
    { type: 'Course', name: 'React Masterclass', badge: 'Best Seller', color: '#ff9800', image: 'https://picsum.photos/id/63/400/200' },
    { type: 'Movie', name: 'Inception', badge: 'Blockbuster', color: '#9c27b0', image: 'https://picsum.photos/id/64/400/200' },
  ];
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>📊 Combined Dashboard</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cards.map((card, i) => (
          <div key={i} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, width: 260, backgroundColor: '#fff' }}>
            <img src={card.image} alt={card.name} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <p style={{ margin: 0, fontSize: 12, color: '#999' }}>{card.type}</p>
              <span style={{ backgroundColor: card.color, color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>{card.badge}</span>
            </div>
            <h3 style={{ margin: '4px 0 0' }}>{card.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;
