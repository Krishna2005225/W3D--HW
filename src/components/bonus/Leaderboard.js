import React from 'react';

function Leaderboard({ students }) {
  const sorted = [...students].sort((a, b) => b.marks - a.marks);
  const badges = ['🥇 Gold', '🥈 Silver', '🥉 Bronze'];
  return (
    <div style={{ padding: 16, maxWidth: 500, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center' }}>🏆 Leaderboard</h2>
      {sorted.map((s, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', padding: 12, margin: '8px 0', borderRadius: 8, backgroundColor: i === 0 ? '#fff8e1' : i === 1 ? '#f5f5f5' : i === 2 ? '#fff3e0' : '#fff', border: i < 3 ? '2px solid ' + (i === 0 ? '#ffd700' : i === 1 ? '#c0c0c0' : '#cd7f32') : '1px solid #ddd' }}>
          <span style={{ width: 30, fontSize: 18, fontWeight: 'bold' }}>{i + 1}</span>
          <div style={{ flex: 1 }}>
            <strong>{s.name}</strong>
            <p style={{ margin: 0, fontSize: 12, color: '#666' }}>{s.course}</p>
          </div>
          {i < 3 && <span style={{ marginRight: 8, fontSize: 12 }}>{badges[i]}</span>}
          <span style={{ fontWeight: 'bold', fontSize: 16 }}>{s.marks}%</span>
        </div>
      ))}
    </div>
  );
}
export default Leaderboard;
