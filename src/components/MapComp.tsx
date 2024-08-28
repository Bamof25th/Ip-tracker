// import React from "react";
import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Positons = {
  region: string;
  timezone: string;
  lat: string;
  lng: string;
};

const MapComp = ({ positions, isp }: { positions: Positons; isp: string }) => {
  const mapRef = useRef(null);
  return (
    <div className="flex  flex-col justify-center items-center w-[100vw] h-[55vh] absolute bottom-0 z-10">
      <MapContainer
        key={JSON.stringify([positions.lat, positions.lng])}
        center={[Number(positions.lat) || 0, Number(positions.lng) || 0]}
        zoom={18}
        id="map"
        ref={mapRef}
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[Number(positions.lat) || 0, Number(positions.lng) || 0]}>
          <Popup>{isp || "not available"}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComp;
