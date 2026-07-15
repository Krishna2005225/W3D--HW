import React, { useState } from 'react';

function TaskCard({ title, assignee, deadline, priority, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  const priorityColors = { High: '#e53935', Medium: '#ff9800', Low: '#4caf50' };
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: '#fff', borderTop: `4px solid ${priorityColors[priority] || '#999'}` }}>
      <img src={imgSrc} alt={title} onError={() => setImgSrc('https://via.placeholder.com/280x140/333/fff?text=Task')} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>{title}</h3>
        <span style={{ backgroundColor: priorityColors[priority] || '#999', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>{priority}</span>
      </div>
      <p><strong>Assignee:</strong> {assignee}</p>
      <p><strong>Deadline:</strong> {deadline}</p>
    </div>
  );
}
export default TaskCard;
