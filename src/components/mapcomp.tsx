import React, {useEffect, useRef, useState} from 'react';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import osmProviders from "../osm-providers";
import "leaflet/dist/leaflet.css";
import "../styles/map.css";

const MapComp = () => {
    const [center, setCenter] = useState([19.06388889, 72.87194444]);
    const ZOOM_LEVEL = 16;
    const mapRef = useRef();
    const robotPosition = {lat: 19.06388889, lng: 72.87194444};

    const OnResetView = () => {
        const map = mapRef.current;

        // @ts-ignore
        map.flyTo([robotPosition.lat, robotPosition.lng], ZOOM_LEVEL, {
            duration: 2
        });
    }

    return (
        <div className={"mapParent"}>
            <div className={"MapComp"}>
                <h1>Interactive Map</h1>
                <MapContainer
                    // @ts-ignore
                    center={center}
                    zoom={ZOOM_LEVEL}
                    scrollWheelZoom={true}
                    ref={mapRef}
                    zoomControl={false}
                >

                    <TileLayer
                        url={osmProviders.maptiler.url}
                        //@ts-ignore
                        attribution={osmProviders.maptiler.attributions}
                    />

                    <Marker position={[robotPosition.lat, robotPosition.lng]}>
                        <Popup>
                            <b>Robot Location</b> <br/>
                            <b>Latitude: </b> {robotPosition.lat} <br/>
                            <b>Longitude: </b> {robotPosition.lng}
                        </Popup>
                    </Marker>

                </MapContainer>

                <button className={"resetButton"} onClick={OnResetView}>Reset View</button>
            </div>
        </div>
    );
};
export default MapComp;