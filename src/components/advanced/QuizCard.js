import React, { useState } from 'react';

function QuizCard({ title, subject, totalQuestions, timeLimit, isCompleted, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: isCompleted ? '#e8f5e9' : '#fff' }}>
      <img src={imgSrc} alt={title} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(title))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0, fontSize: 14 }}>{title}</h3>
        {isCompleted ? (
          <span style={{ backgroundColor: '#4caf50', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>✅ Completed</span>
        ) : (
          <span style={{ backgroundColor: '#9e9e9e', color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold' }}>📝 Not Attempted</span>
        )}
      </div>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Questions:</strong> {totalQuestions}</p>
      <p><strong>Time:</strong> {timeLimit} min</p>
    </div>
  );
}
export default QuizCard;