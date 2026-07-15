import React from 'react';

function CompanyCard({ company }) {
  return (
    <div style={{ border: '2px solid #333', borderRadius: 8, padding: 16, margin: 8, maxWidth: 350, backgroundColor: '#f0f0f0' }}>
      <h3>Company Profile</h3>
      <p><strong>Name:</strong> {company.name}</p>
      <p><strong>Industry:</strong> {company.industry}</p>
      <p><strong>Location:</strong> {company.location}</p>
      <p><strong>Employees:</strong> {company.employees}</p>
      <p><strong>Founded:</strong> {company.founded}</p>
      <p><strong>Website:</strong> {company.website}</p>
    </div>
  );
}

export default CompanyCard;
