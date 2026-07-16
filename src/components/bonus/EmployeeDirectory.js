import React, { useState } from 'react';

function EmployeeItem({ emp }) {
  const [imgSrc, setImgSrc] = useState(emp.image);
  const fallback = 'https://via.placeholder.com/200x160/333/fff?text=' + encodeURIComponent(emp.name.charAt(0));
  const statusColor = emp.status === 'Active' ? '#4caf50' : emp.status === 'On Leave' ? '#ff9800' : '#e53935';
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, width: 240, backgroundColor: '#fff' }}>
      <img src={imgSrc} alt={emp.name} onError={() => setImgSrc(fallback)} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
      <h3 style={{ textAlign: 'center', margin: '8px 0 4px' }}>{emp.name}</h3>
      <p style={{ textAlign: 'center', margin: '0 0 8px', color: '#666' }}>{emp.designation}</p>
      <div style={{ textAlign: 'center' }}>
        <span style={{ backgroundColor: statusColor, color: '#fff', padding: '2px 12px', borderRadius: 12, fontSize: 12, fontWeight: 'bold' }}>{emp.status}</span>
      </div>
      <p style={{ marginTop: 8, fontSize: 13 }}><strong>Dept:</strong> {emp.department}</p>
      <p style={{ fontSize: 13 }}><strong>Exp:</strong> {emp.experience} yrs</p>
    </div>
  );
}

function EmployeeDirectory({ employees }) {
  return (
    <div style={{ padding: 16 }}>
      <h2 style={{ textAlign: 'center' }}>👥 Employee Directory</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {employees.map((emp, i) => <EmployeeItem key={i} emp={emp} />)}
      </div>
    </div>
  );
}
export default EmployeeDirectory;
