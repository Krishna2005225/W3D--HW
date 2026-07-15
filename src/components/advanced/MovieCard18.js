import React, { useState } from 'react';

function MovieCard18({ title, genre, rating, duration, isAdult, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={title} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(title))} style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{title}</h3>
        {isAdult && <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '4px 10px', borderRadius: 4, fontSize: 14, fontWeight: 'bold' }}>18+</span>}
      </div>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Rating:</strong> {rating}/10</p>
      <p><strong>Duration:</strong> {duration} min</p>
    </div>
  );
}
export default MovieCard18;
