"use client";
import AirportInfoCard from "@/components/AirportInfoCard";
import { useAirport } from "@/hooks/useAirport";
import { useParams } from "next/navigation";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";

import "leaflet/dist/leaflet.css";

export default function LocationPage() {
  const { id } = useParams();
  const airport = useAirport(String(id));
  return (
    <div>
      <AirportInfoCard
        title="Location"
        iconTitle="/icons/map_point.svg"
        data={{
          Latitude: airport.latitude,
          Longitude: airport.longitude,
          ["ID Geoname"]: airport.geoname_id,
        }}
      />
      <section className="mt-10 h-96">
        <MapContainer
          center={[parseFloat(airport.latitude), parseFloat(airport.longitude)]}
          zoom={13}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </section>
    </div>
  );
}
