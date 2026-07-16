import React, { useState } from 'react';

function ProfileImage({ userName, hasCustomImage, customImageUrl }) {
  const fallback = 'https://via.placeholder.com/200/cccccc/666666?text=' + encodeURIComponent(userName.charAt(0));
  const [imgSrc, setImgSrc] = useState(hasCustomImage ? customImageUrl : fallback);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, textAlign: 'center' }}>
      <h3>Profile</h3>
      <img
        src={imgSrc}
        alt={userName}
        onError={() => setImgSrc(fallback)}
        style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '3px solid #ddd' }}
      />
      <p style={{ marginTop: 8 }}><strong>{userName}</strong></p>
      {hasCustomImage ? (
        <p style={{ color: 'green' }}>✅ Custom Profile Picture</p>
      ) : (
        <p style={{ color: '#999' }}>📷 Default Profile Picture</p>
      )}
    </div>
  );
}

export default ProfileImage;
