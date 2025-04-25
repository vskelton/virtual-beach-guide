import React from "react";
import Map from "./components/Map";
import BeachCard from "./components/BeachCard";

function App() {
  const beaches = [
    { id: 1, name: "Miami Beach", description: "A popular beach in Miami." },
    { id: 2, name: "South Beach", description: "Famous for its nightlife." },
    { id: 3, name: "Key Biscayne", description: "A quieter beach experience." },
  ];
  return (
    <div className="App">
      <h1>Virtual Beach Guide</h1>
      <Map />
      <BeachCard beaches={beaches}/>
    </div>
  );
}

export default App
