"use client";
import AirportInfoCard from "@/components/AirportInfoCard";
import { useAirportDetail } from "@/hooks/useAirport";
import { useParams } from "next/navigation";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";
import { TileLayer } from "react-leaflet/TileLayer";

import "leaflet/dist/leaflet.css";
import { LatLngExpression, Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: "/icons/flight.svg",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function LocationPage() {
  const { id } = useParams();
  const airport = useAirportDetail(String(id));
  const position = [
    parseFloat(airport.latitude),
    parseFloat(airport.longitude),
  ] as LatLngExpression;
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
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <Marker position={position} icon={customIcon}>
            <Popup autoPan={true}>
              Hi from {airport.airport_name}! <br />
            </Popup>
          </Marker>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </section>
    </div>
  );
}
