import React, { useState } from "react";
import Map from "./components/Map";
import BeachCard from "./components/BeachCard";

function App() {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  return (
    <div className="App">
      <h1>Virtual Beach Guide</h1>
      <Map selectedCoordinates={selectedCoordinates}/>
      <BeachCard setSelectedCoordinates={setSelectedCoordinates} />
    </div>
  );
}

export default App;
