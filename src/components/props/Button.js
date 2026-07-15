import React from 'react';

function Button({ text, onClick, color = '#007bff', textColor = '#fff' }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 24px',
        backgroundColor: color,
        color: textColor,
        border: 'none',
        borderRadius: 6,
        cursor: 'pointer',
        fontSize: 16,
        margin: 8
      }}
    >
      {text}
    </button>
  );
}

export default Button;
