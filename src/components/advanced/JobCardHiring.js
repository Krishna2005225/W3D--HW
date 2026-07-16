import React, { useState } from 'react';

function JobCardHiring({ title, company, location, salary, vacancies, jobType, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const hiring = vacancies > 0;
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={company} onError={() => setImgSrc('https://via.placeholder.com/280x140/333/fff?text=' + encodeURIComponent(company))} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>{title}</h3>
        {hiring ? (
          <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>🟢 Actively Hiring</span>
        ) : (
          <span style={{ backgroundColor: '#e53935', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>🔴 Closed</span>
        )}
      </div>
      <p><strong>Company:</strong> {company}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Type:</strong> {jobType}</p>
      <p><strong>Vacancies:</strong> {vacancies}</p>
      <p style={{ fontWeight: 'bold', color: '#1565c0' }}>₹{salary.toLocaleString()}/yr</p>
    </div>
  );
}
export default JobCardHiring;