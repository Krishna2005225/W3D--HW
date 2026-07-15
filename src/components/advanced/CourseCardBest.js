import React, { useState } from 'react';

function CourseCardBest({ name, instructor, price, duration, enrollments, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const isBestSeller = enrollments > 1000;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isBestSeller ? '#fff8e1' : '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x180/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>{name}</h3>
        {isBestSeller && <span style={{ backgroundColor: '#ff9800', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>Best Seller</span>}
      </div>
      <p><strong>Instructor:</strong> {instructor}</p>
      <p><strong>Duration:</strong> {duration}</p>
      <p><strong>Students:</strong> {enrollments.toLocaleString()}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>{'\u20B9'}{price.toLocaleString()}</p>
    </div>
  );
}
export default CourseCardBest;
