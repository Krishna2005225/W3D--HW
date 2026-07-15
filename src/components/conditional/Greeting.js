import React from 'react';

function Greeting() {
  const hour = new Date().getHours();
  let greeting, color;
  if (hour < 12) {
    greeting = 'Good Morning';
    color = '#ff9800';
  } else if (hour < 17) {
    greeting = 'Good Afternoon';
    color = '#2196f3';
  } else {
    greeting = 'Good Evening';
    color = '#673ab7';
  }
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 300, textAlign: 'center' }}>
      <h2 style={{ color }}>🌅 {greeting}!</h2>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}

export default Greeting;
