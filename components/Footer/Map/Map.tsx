import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import * as St from "components/Footer/Map/Map.styled";

const Map = () => {
  type positionType = [number, number];
  const mapCenter: positionType = [49.930961, 8.5981609];
  const myPosition: positionType = [49.802843886930255, 8.603871231920898];
  return (
    <St.MapWrapper>
      <MapContainer center={mapCenter} zoom={9} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={myPosition}>
          <Popup>
            I am here :&#41; <br />
            Pfungstadt is a town of 25,117 inhabitants,
            <br />
            in the district of Darmstadt-Dieburg <br /> state of Hesse, Germany.
          </Popup>
        </Marker>
      </MapContainer>
    </St.MapWrapper>
  );
};

export default Map;
