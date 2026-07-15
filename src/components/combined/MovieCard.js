import React, { useState } from 'react';

function MovieCard({ title, poster, rating, genre }) {
  const [imgSrc, setImgSrc] = useState(poster);
  const fallback = 'https://via.placeholder.com/300x400/333333/ffffff?text=' + encodeURIComponent(title);
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 250,
      textAlign: 'center',
      backgroundColor: rating > 8.5 ? '#fff3e0' : '#fff'
    }}>
      {rating > 8.5 && (
        <span style={{
          backgroundColor: '#e65100',
          color: '#fff',
          padding: '4px 12px',
          borderRadius: 4,
          fontSize: 12,
          fontWeight: 'bold',
          display: 'inline-block',
          marginBottom: 8
        }}>
          🔥 Blockbuster
        </span>
      )}
      <img src={imgSrc} alt={title} onError={() => setImgSrc(fallback)} style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 4 }} />
      <h3>{title}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Rating:</strong> ⭐ {rating}/10</p>
    </div>
  );
}

export default MovieCard;
