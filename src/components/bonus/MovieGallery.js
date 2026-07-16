import React, { useState } from 'react';

function MovieItem({ m }) {
  const [imgSrc, setImgSrc] = useState(m.image);
  const fallback = 'https://via.placeholder.com/250x350/333/fff?text=' + encodeURIComponent(m.title);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 12, margin: 8, width: 230, backgroundColor: '#fff', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 4, left: 4, display: 'flex', flexDirection: 'column', gap: 4, zIndex: 1 }}>
        {m.isTrending && <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>🔥 TRENDING</span>}
        {m.isNewRelease && <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>🆕 NEW</span>}
        {m.isTopRated && <span style={{ backgroundColor: '#ffd700', color: '#333', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>⭐ TOP RATED</span>}
      </div>
      <img src={imgSrc} alt={m.title} onError={() => setImgSrc(fallback)} style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 6 }} />
      <h4 style={{ margin: '8px 0 2px' }}>{m.title}</h4>
      <p style={{ margin: 0, color: '#666', fontSize: 13 }}>{m.genre} | ⭐ {m.rating}/10</p>
    </div>
  );
}

function MovieGallery({ movies }) {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>🎬 Movie Gallery</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {movies.map((m, i) => <MovieItem key={i} m={m} />)}
      </div>
    </div>
  );
}
export default MovieGallery;
