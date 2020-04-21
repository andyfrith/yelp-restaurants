import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

interface Props {
  formattedAddress: string;
  latitude: number;
  longitude: number;
}

interface DefaultCenter {
  lat: number;
  lng: number;
}

const Marker = (props: any) => {
  const { color, name, id } = props;
  return (
    <div
      className="marker"
      style={{ backgroundColor: color, cursor: "pointer" }}
      title={name}
    />
  );
};

export const Map: React.FC<Props> = (props) => {
  const [center, setCenter] = useState({ lat: 11.0168, lng: 76.9558 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "replace your api" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={11.0168} lng={76.9558} name="My Marker" color="blue" />
      </GoogleMapReact>
    </div>
  );
};
