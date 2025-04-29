import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: 25.7617,
  lng: -80.1918,
};

function Map({ selectedCoordinates }) {

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={selectedCoordinates || defaultCenter} zoom={10}>
        <Marker position={selectedCoordinates || defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;