// components/MechanicsMap.jsx
import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px", // adjust as needed
};

const mechanicsLocation = [
  { name: "John Doe", lat: 6.5244, lng: 3.3792 }, // Lagos
  { name: "Sarah Johnson", lat: 6.435, lng: 3.421 }, // nearby location
  { name: "Mike Lee", lat: 6.51, lng: 3.36 },
];

const center = {
  lat: 6.5244, // default latitude (example: Lagos, Nigeria)
  lng: 3.3792, // default longitude
};

const MechanicsMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // set your API key in .env
  });

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div className="w-full h-96 rounded-lg shadow-lg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {mechanicsLocation.map((mechanic, index) => (
          <Marker
            key={index}
            position={{ lat: mechanic.lat, lng: mechanic.lng }}
            title={mechanic.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default MechanicsMap;
