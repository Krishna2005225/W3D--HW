import React, { useState } from 'react';

function ProfileCard({ image, name, role, location }) {
  const [imgSrc, setImgSrc] = useState(image);
  const fallback = 'https://via.placeholder.com/200/cccccc/666666?text=' + encodeURIComponent(name.charAt(0));
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, margin: 8, maxWidth: 280, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc(fallback)} style={{ width: 100, height: 100, borderRadius: '50%', objectFit: 'cover' }} />
      <h3 style={{ marginTop: 8 }}>{name}</h3>
      <p style={{ color: '#555' }}>{role}</p>
      <p style={{ color: '#888' }}>📍 {location}</p>
    </div>
  );
}

export default ProfileCard;
