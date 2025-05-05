import React, { useState } from 'react';

const beaches = [
  {
    name: "Waikiki Beach",
    location: "Honolulu, Hawaii, USA",
    description: "Iconic beach known for its calm waters, city skyline backdrop, and beginner-friendly surf waves.",
    activities: ["Surfing", "Swimming", "Shopping", "Dining"],
    coordinates: { lat: 21.2767, lng: -157.8275 }
  },
  {
    name: "Myrtle Beach",
    location: "Myrtle Beach, South Carolina, USA",
    description: "Popular family beach destination with a lively boardwalk, shops, and entertainment.",
    activities: ["Swimming", "Mini-golf", "Amusement rides", "Shopping"],
    coordinates: { lat: 33.6891, lng: -78.8867 }
  },
  {
    name: "Clearwater Beach",
    location: "Clearwater, Florida, USA",
    description: "Award-winning beach with soft white sand and clear, shallow waters.",
    activities: ["Sunbathing", "Jet skiing", "Dolphin watching", "Fishing"],
    coordinates: { lat: 27.9774, lng: -82.8270 }
  },
  {
    name: "Venice Beach",
    location: "Los Angeles, California, USA",
    description: "Eclectic beach famous for its boardwalk, street performers, and Muscle Beach gym.",
    activities: ["Skateboarding", "Shopping", "People-watching", "Basketball"],
    coordinates: { lat: 33.9850, lng: -118.4695 }
  },
  {
    name: "Cannon Beach",
    location: "Cannon Beach, Oregon, USA",
    description: "Stunning beach with dramatic rock formations like Haystack Rock.",
    activities: ["Photography", "Tide pooling", "Hiking", "Beachcombing"],
    coordinates: { lat: 45.8918, lng: -123.9615 }
  },
  {
    name: "Ocean City Beach",
    location: "Ocean City, Maryland, USA",
    description: "Family-friendly beach with a classic boardwalk full of rides, games, and eateries.",
    activities: ["Swimming", "Fishing", "Boardwalk rides", "Kayaking"],
    coordinates: { lat: 38.3365, lng: -75.0849 }
  },
  {
    name: "Virginia Beach",
    location: "Virginia Beach, Virginia, USA",
    description: "Expansive beach with a bustling 3-mile boardwalk lined with shops and restaurants.",
    activities: ["Swimming", "Biking", "Fishing", "Live music"],
    coordinates: { lat: 36.8529, lng: -75.9780 }
  },
  {
    name: "South Beach",
    location: "Miami, Florida, USA",
    description: "Vibrant beach known for its art deco scene, nightlife, and colorful atmosphere.",
    activities: ["Sunbathing", "People-watching", "Dining", "Nightlife"],
    coordinates: { lat: 25.7826, lng: -80.1341 }
  },
  {
    name: "Malibu Beach",
    location: "Malibu, California, USA",
    description: "Celebrity hotspot with stunning cliffs, scenic drives, and epic surf breaks.",
    activities: ["Surfing", "Swimming", "Hiking", "Scenic drives"],
    coordinates: { lat: 34.0259, lng: -118.7798 }
  },
  {
    name: "Cape May Beach",
    location: "Cape May, New Jersey, USA",
    description: "Charming historic town with beautiful Victorian homes and peaceful beaches.",
    activities: ["Swimming", "Whale watching", "Shopping", "Biking"],
    coordinates: { lat: 38.9351, lng: -74.9080 }
  },
  {
    name: "Ka'anapali Beach",
    location: "Maui, Hawaii, USA",
    description: "Beautiful stretch of golden sand with top-notch snorkeling and luxury resorts.",
    activities: ["Snorkeling", "Swimming", "Golf", "Cliff diving"],
    coordinates: { lat: 20.9220, lng: -156.6951 }
  },
  {
    name: "Huntington Beach",
    location: "Huntington Beach, California, USA",
    description: "Surf City USA, home to consistent waves and a lively surf culture.",
    activities: ["Surfing", "Skateboarding", "Beach volleyball", "Shopping"],
    coordinates: { lat: 33.6595, lng: -117.9988 }
  },
  {
    name: "Coronado Beach",
    location: "San Diego, California, USA",
    description: "Wide, family-friendly beach with glittering mica sand and the historic Hotel del Coronado.",
    activities: ["Swimming", "Sunbathing", "Biking", "Photography"],
    coordinates: { lat: 32.6797, lng: -117.1785 }
  },
  {
    name: "Siesta Key Beach",
    location: "Sarasota, Florida, USA",
    description: "Known for its powdery white quartz sand and shallow, calm waters.",
    activities: ["Swimming", "Sunbathing", "Snorkeling", "Shell collecting"],
    coordinates: { lat: 27.2670, lng: -82.5469 }
  }
];


const BeachCard = ({ setSelectedCoordinates }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const matchingBeach = beaches.find(beach =>
    beach.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const foundBeach = beaches.find(beach =>
      beach.name.toLowerCase().includes(term.toLowerCase())
    );

    if (foundBeach) {
      setSelectedCoordinates(foundBeach.coordinates);
    }
  };

  return (
    <div className='beach-card'>
      <input
        type="text"
        placeholder="Search for a beach..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {matchingBeach ? (
        <div>
          <h2>{matchingBeach.name}</h2>
          <p>{matchingBeach.location}</p>
          <p>{matchingBeach.description}</p>
          <ul className='activities-list'>
            <h3>Activities:</h3>
            {matchingBeach.activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No Beach Found. Try another name!</p>
      )}
    </div>
  );
};

export default BeachCard;