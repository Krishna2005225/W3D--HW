import React from 'react';

function WeatherCard({ city, temperature, condition }) {
  const weatherIcons = {
    Sunny: '☀️',
    Rainy: '🌧️',
    Cloudy: '☁️',
    Snowy: '❄️',
    Stormy: '⛈️'
  };
  const bgColors = {
    Sunny: '#fff9c4',
    Rainy: '#e1f5fe',
    Cloudy: '#f5f5f5',
    Snowy: '#e8eaf6',
    Stormy: '#fce4ec'
  };
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      maxWidth: 250,
      textAlign: 'center',
      backgroundColor: bgColors[condition] || '#fff'
    }}>
      <span style={{ fontSize: 48 }}>{weatherIcons[condition] || '🌤️'}</span>
      <h3>{city}</h3>
      <p style={{ fontSize: 24, fontWeight: 'bold' }}>{temperature}°C</p>
      <p style={{ color: '#555' }}>{condition}</p>
    </div>
  );
}

export default WeatherCard;
