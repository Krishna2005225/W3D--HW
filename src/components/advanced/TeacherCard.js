import React, { useState } from 'react';

function TeacherCard({ name, subject, experience, qualification, designation, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const isHOD = designation === 'Head of Department';
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isHOD ? '#fce4ec' : '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {isHOD && <span style={{ backgroundColor: '#c62828', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>🎓 HOD</span>}
      </div>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p><strong>Qualification:</strong> {qualification}</p>
    </div>
  );
}
export default TeacherCard;