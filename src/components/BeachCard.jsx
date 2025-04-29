import React, { useState } from 'react';

const BeachCard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const beaches = [
    {
      name: "Waikiki Beach",
      location: "Honolulu, Hawaii, USA",
      description: "Iconic beach known for its calm waters, city skyline backdrop, and beginner-friendly surf waves.",
      activities: ["Surfing", "Swimming", "Shopping", "Dining"]
    },
    {
      name: "Myrtle Beach",
      location: "Myrtle Beach, South Carolina, USA",
      description: "Popular family beach destination with a lively boardwalk, shops, and entertainment.",
      activities: ["Swimming", "Mini-golf", "Amusement rides", "Shopping"]
    },
    {
      name: "Clearwater Beach",
      location: "Clearwater, Florida, USA",
      description: "Award-winning beach with soft white sand and clear, shallow waters.",
      activities: ["Sunbathing", "Jet skiing", "Dolphin watching", "Fishing"]
    },
    {
      name: "Venice Beach",
      location: "Los Angeles, California, USA",
      description: "Eclectic beach famous for its boardwalk, street performers, and Muscle Beach gym.",
      activities: ["Skateboarding", "Shopping", "People-watching", "Basketball"]
    },
    {
      name: "Cannon Beach",
      location: "Cannon Beach, Oregon, USA",
      description: "Stunning beach with dramatic rock formations like Haystack Rock.",
      activities: ["Photography", "Tide pooling", "Hiking", "Beachcombing"]
    },
    {
      name: "Ocean City Beach",
      location: "Ocean City, Maryland, USA",
      description: "Family-friendly beach with a classic boardwalk full of rides, games, and eateries.",
      activities: ["Swimming", "Fishing", "Boardwalk rides", "Kayaking"]
    },
    {
      name: "Virginia Beach",
      location: "Virginia Beach, Virginia, USA",
      description: "Expansive beach with a bustling 3-mile boardwalk lined with shops and restaurants.",
      activities: ["Swimming", "Biking", "Fishing", "Live music"]
    },
    {
      name: "South Beach",
      location: "Miami, Florida, USA",
      description: "Vibrant beach known for its art deco scene, nightlife, and colorful atmosphere.",
      activities: ["Sunbathing", "People-watching", "Dining", "Nightlife"]
    },
    {
      name: "Malibu Beach",
      location: "Malibu, California, USA",
      description: "Celebrity hotspot with stunning cliffs, scenic drives, and epic surf breaks.",
      activities: ["Surfing", "Swimming", "Hiking", "Scenic drives"]
    },
    {
      name: "Cape May Beach",
      location: "Cape May, New Jersey, USA",
      description: "Charming historic town with beautiful Victorian homes and peaceful beaches.",
      activities: ["Swimming", "Whale watching", "Shopping", "Biking"]
    },
    {
      name: "Ka'anapali Beach",
      location: "Maui, Hawaii, USA",
      description: "Beautiful stretch of golden sand with top-notch snorkeling and luxury resorts.",
      activities: ["Snorkeling", "Swimming", "Golf", "Cliff diving"]
    },
    {
      name: "Huntington Beach",
      location: "Huntington Beach, California, USA",
      description: "Surf City USA, home to consistent waves and a lively surf culture.",
      activities: ["Surfing", "Skateboarding", "Beach volleyball", "Shopping"]
    },
    {
      name: "Coronado Beach",
      location: "San Diego, California, USA",
      description: "Wide, family-friendly beach with glittering mica sand and the historic Hotel del Coronado.",
      activities: ["Swimming", "Sunbathing", "Biking", "Photography"]
    },
    {
      name: "Siesta Key Beach",
      location: "Sarasota, Florida, USA",
      description: "Known for its powdery white quartz sand and shallow, calm waters.",
      activities: ["Swimming", "Beach yoga", "Picnicking", "Shelling"]
    },
    {
      name: "Assateague Island Beach",
      location: "Maryland/Virginia, USA",
      description: "Wild, natural beach famous for its free-roaming wild horses.",
      activities: ["Wildlife watching", "Camping", "Swimming", "Hiking"]
    },
    {
      name: "Bondi Beach",
      location: "Sydney, Australia",
      description: "World-famous surf beach with a vibrant atmosphere and scenic coastal walks.",
      activities: ["Surfing", "Swimming", "Coastal walks", "People-watching"]
    },
    {
      name: "Copacabana Beach",
      location: "Rio de Janeiro, Brazil",
      description: "Legendary beach lined with hotels, lively bars, and an iconic tiled promenade.",
      activities: ["Beach soccer", "Swimming", "Sunbathing", "Live music"]
    },
    {
      name: "Anse Lazio",
      location: "Praslin Island, Seychelles",
      description: "Secluded, pristine beach surrounded by lush tropical greenery and boulders.",
      activities: ["Snorkeling", "Swimming", "Photography", "Relaxing"]
    },
    {
      name: "Navagio Beach (Shipwreck Beach)",
      location: "Zakynthos, Greece",
      description: "Secluded cove with bright turquoise water and a famous shipwreck on the sand.",
      activities: ["Boat tours", "Swimming", "Photography", "Snorkeling"]
    },
    {
      name: "Whitehaven Beach",
      location: "Whitsunday Island, Australia",
      description: "Spectacular white silica sand beach accessible only by boat or seaplane.",
      activities: ["Boating", "Hiking", "Swimming", "Eco tours"]
    }
  ];
  

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
            <p>{beach.location}</p>
            <p>{beach.description}</p>
            <ul>
              {beach.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeachCard;