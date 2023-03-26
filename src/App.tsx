import React, {useEffect, useRef, useState} from "react";
import "./App.css";
import Header from "./components/header";
import Opmode from "./components/opmode";
import MapComp from "./components/mapcomp";
import Latlonglocation from "./components/latlonglocation";
import Loadpath from "./components/loadpath";
import Diagnostics from "./components/diagnostics";
import Resetconnection from "./components/resetconnection";
import Battery from "./components/battery";
import Gamepad from "./components/gamepad";

function App() {
    return (
        <>
            <Header />
            <div className="body">
                <div className="row">
                    <Opmode />
                    <Latlonglocation />
                    <Loadpath />
                    <Diagnostics />
                </div>

                <div className="row">
                    <Battery />
                    <Gamepad />
                </div>

                <MapComp />


                <Resetconnection />
            </div>
        </>
    );
}

export default App;
