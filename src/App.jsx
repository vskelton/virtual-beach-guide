import React, { useState } from "react";
import Map from "./components/Map";
import BeachCard from "./components/BeachCard";
//import ReviewForm from "./components/ReviewForm";
import "./App.css";

function App() {
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);

  return (
    <div className="App">
      <h1>Welcome to the Virtual Beach Guide</h1>
      <Map selectedCoordinates={selectedCoordinates}/>
      <BeachCard setSelectedCoordinates={setSelectedCoordinates} />
      <div className="footer">
        <p></p>
      </div>
    </div>
  );
}

export default App;
