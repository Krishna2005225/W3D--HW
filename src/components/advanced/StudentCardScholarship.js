import React, { useState } from 'react';

function StudentCardScholarship({ name, course, marks, attendance, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const topper = marks > 95;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: topper ? '#e8f5e9' : '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {topper && <span style={{ backgroundColor: '#ffd700', color: '#333', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>🎓 Scholarship</span>}
      </div>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Marks:</strong> {marks}%</p>
      <p><strong>Attendance:</strong> {attendance}%</p>
    </div>
  );
}
export default StudentCardScholarship;
