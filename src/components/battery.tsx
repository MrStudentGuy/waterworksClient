import React, {useState} from 'react';
import '../styles/battery.css';
import {
    MdOutlineBattery1Bar,
    MdOutlineBattery2Bar,
    MdOutlineBattery3Bar,
    MdOutlineBattery4Bar,
    MdOutlineBattery5Bar,
    MdOutlineBattery6Bar, MdOutlineBatteryAlert,
    MdOutlineBatteryFull
} from "react-icons/all";

const Battery = () => {
    const [battery, setBattery] = useState(84.0);

    const BatteryRenderer = () => {
        if (battery >= 90){
            return <MdOutlineBatteryFull size={52} color={"#fff"}/>
        } else if (battery < 90 && battery >= 80){
            return <MdOutlineBattery6Bar size={52} color={"#fff"}/>
        } else if (battery < 80 && battery >= 70){
            return <MdOutlineBattery5Bar size={52} color={"#fff"}/>
        } else if (battery < 70 && battery >= 50){
            return <MdOutlineBattery4Bar size={52} color={"#fff"}/>
        } else if (battery < 50 && battery >= 30){
            return <MdOutlineBattery3Bar size={52} color={"#fff"}/>
        } else if (battery < 30 && battery >= 20){
            return <MdOutlineBattery2Bar size={52} color={"#fff"}/>
        } else if (battery < 20 && battery >= 10){
            return <MdOutlineBattery1Bar size={52} color={"#fff"}/>
        } else if (battery < 10) {
            return <MdOutlineBatteryAlert size={52} color={"#fff"}/>
        }

        return null;
    }

    return (
        <div className={"batteryPercel"}>
            <h1>Battery Level</h1>
            <BatteryRenderer />
            <h3>{battery}%</h3>
        </div>
    );
};

export default Battery;