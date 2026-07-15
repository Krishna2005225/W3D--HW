import React from 'react';

function ReusableButton({ label, color = '#007bff', size = 'medium', onClick }) {
  const sizes = { small: { padding: '6px 14px', fontSize: 12 }, medium: { padding: '10px 22px', fontSize: 14 }, large: { padding: '14px 32px', fontSize: 18 } };
  const s = sizes[size] || sizes.medium;
  return (
    <button onClick={onClick} style={{ backgroundColor: color, color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', fontWeight: 'bold', margin: 6, ...s }}>
      {label}
    </button>
  );
}
export default ReusableButton;
