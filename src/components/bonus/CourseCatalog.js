import React, { useState } from 'react';

function CourseItem({ c }) {
  const [imgSrc, setImgSrc] = useState(c.image);
  const fallback = 'https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(c.name);
  const lowSeats = c.seatsLeft <= 5;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, width: 280, backgroundColor: lowSeats ? '#fff3e0' : '#fff', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 4, right: 4, display: 'flex', flexDirection: 'column', gap: 4, zIndex: 1 }}>
        {c.isNew && <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>NEW COURSE</span>}
        {c.isPopular && <span style={{ backgroundColor: '#e91e63', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>🔥 POPULAR</span>}
        {lowSeats && <span style={{ backgroundColor: '#ff9800', color: '#fff', padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 'bold' }}>LIMITED SEATS ({c.seatsLeft})</span>}
      </div>
      <img src={imgSrc} alt={c.name} onError={() => setImgSrc(fallback)} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <h4 style={{ margin: '8px 0 4px' }}>{c.name}</h4>
      <p style={{ margin: 0, color: '#666', fontSize: 13 }}>{c.instructor} | {c.duration}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0', marginTop: 4 }}>₹{c.price.toLocaleString()}</p>
    </div>
  );
}

function CourseCatalog({ courses }) {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>📚 Course Catalog</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {courses.map((c, i) => <CourseItem key={i} c={c} />)}
      </div>
    </div>
  );
}
export default CourseCatalog;
