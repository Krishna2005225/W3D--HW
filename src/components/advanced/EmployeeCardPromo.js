import React, { useState } from 'react';

function EmployeeCardPromo({ name, designation, department, experience, salary, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const eligible = experience > 10;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: eligible ? '#e8f5e9' : '#fff' }}>
      <img src={imgSrc} alt={name} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(name))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{name}</h3>
        {eligible && <span style={{ backgroundColor: '#2e7d32', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>⬆️ Promotion Eligible</span>}
      </div>
      <p><strong>Designation:</strong> {designation}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Experience:</strong> {experience} years</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>₹{salary.toLocaleString()}</p>
    </div>
  );
}
export default EmployeeCardPromo;