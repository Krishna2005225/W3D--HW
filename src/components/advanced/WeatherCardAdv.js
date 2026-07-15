import React, { useState } from 'react';

function WeatherCardAdv({ city, temperature, condition, humidity, windSpeed, image }) {
  const [imgSrc, setImgSrc] = useState(image);
  let bgColor, label;
  if (temperature >= 35) { bgColor = '#ffebee'; label = '🔥 Hot'; }
  else if (temperature >= 15 && temperature < 35) { bgColor = '#e8f5e9'; label = '🌤️ Normal'; }
  else { bgColor = '#e3f2fd'; label = '❄️ Cold'; }
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, maxWidth: 280, backgroundColor: bgColor }}>
      <img src={imgSrc} alt={condition} onError={() => setImgSrc('https://via.placeholder.com/280x160/333/fff?text=' + encodeURIComponent(condition))} style={{ width: '100%', height: 160, objectFit: 'cover', borderRadius: 6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
        <h3 style={{ margin: 0 }}>{city}</h3>
        <span style={{ padding: '2px 10px', borderRadius: 12, fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(0,0,0,0.1)' }}>{label}</span>
      </div>
      <p style={{ fontSize: 28, fontWeight: 'bold', margin: '8px 0' }}>{temperature}°C</p>
      <p><strong>Condition:</strong> {condition}</p>
      <p><strong>Humidity:</strong> {humidity}%</p>
      <p><strong>Wind:</strong> {windSpeed} km/h</p>
    </div>
  );
}
export default WeatherCardAdv;
