import React, { useState } from 'react';

function PlayerCard({ name, sport, team, jerseyNumber, isCaptain, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isCaptain ? '#e3f2fd' : '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {isCaptain && <span style={{ backgroundColor: '#1976d2', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>© Captain</span>}
      </div>
      <p><strong>Sport:</strong> {sport}</p>
      <p><strong>Team:</strong> {team}</p>
      <p><strong>Jersey:</strong> #{jerseyNumber}</p>
    </div>
  );
}
export default PlayerCard;