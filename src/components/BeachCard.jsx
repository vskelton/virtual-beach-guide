import React, { useState } from 'react';

const BeachCard = ({ beaches }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeaches = beaches.filter((beach) =>
    beach.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a beach..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />
      <div>
        {filteredBeaches.map((beach) => (
          <div key={beach.id} style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
            <h3>{beach.name}</h3>
            <p>{beach.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachCard;