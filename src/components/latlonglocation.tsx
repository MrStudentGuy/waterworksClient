import React from 'react';
import {MdInfoOutline} from "react-icons/all";
import '../styles/latlong.css';

const Latlonglocation = () => {
    return (
        <div className="latlonglocEl">
            <h1>Current Location</h1>
            <h2>Latitude: 19.063</h2>
            <h2>Longitude: 72.871</h2>
            <div className="infoEl">
                <h4>Last known location- Robot Offline</h4>
            </div>
        </div>
    );
};

export default Latlonglocation;