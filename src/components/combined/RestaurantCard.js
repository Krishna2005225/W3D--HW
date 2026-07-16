import React from 'react';

function RestaurantCard({ name, cuisine, rating, openHour, closeHour }) {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour < closeHour;
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 300,
      backgroundColor: isOpen ? '#e8f5e9' : '#ffebee'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>{name}</h3>
        {isOpen ? (
          <span style={{ color: 'green', fontWeight: 'bold' }}>🟢 Open Now</span>
        ) : (
          <span style={{ color: 'red', fontWeight: 'bold' }}>🔴 Closed</span>
        )}
      </div>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {rating}/5</p>
      <p><strong>Hours:</strong> {openHour}:00 - {closeHour}:00</p>
    </div>
  );
}

export default RestaurantCard;
