import React, {useEffect, useState} from 'react';
import {MdInfoOutline, MdOutlineGamepad} from "react-icons/all";
import '../styles/gamepad.css';

const Gamepad = () => {
    const [gamepadName, setGamepadName] = useState("");
    const [gamepads, setGamepads] = useState([]);
    const [gamepadConnected, setGamepadConnected] = useState(false);

    const displayGamepadName = () => {
        alert("Connected gamepad: " + gamepadName);
    }

    useEffect(() => {

        //@ts-ignore
        const handleGamepadConnected = (event) => {
            console.log(`Gamepad ${event.gamepad.index} connected`);
            setGamepads(event.gamepad)
            setGamepadConnected(true);
            setGamepadName(event.gamepad.id);
            console.log(event.gamepad);
        };

        //@ts-ignore
        const handleGamepadDisconnected = (event) => {
            console.log(`Gamepad ${event.gamepad.index} disconnected`);
            setGamepadConnected(false);
            setGamepadName("");
            setGamepads([]);
        };

        window.addEventListener('gamepadconnected', handleGamepadConnected);
        window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

        return () => {
            window.removeEventListener('gamepadconnected', handleGamepadConnected);
            window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
        };
    }, []);


    const gamePadDetected = () => {
       return (
           <div className={"detectedEl"}>
               <MdOutlineGamepad size={54} color={"#fff"} />
               <div className="gamepadStack">
                   <h2 className={"text"}>Gamepad Detected</h2>
                   <div className={"infoOutline"}>
                       <MdInfoOutline size={24} color={"#fff"} onClick={displayGamepadName}/>
                   </div>
               </div>
           </div>
       )
    }

    const gamePadNotDetected = () => {
        return (
            <div className={"undetectedEl"}>
                <MdOutlineGamepad size={54} color={"#808080"} />
                <h3 className={"text"}>Gamepad Not Detected</h3>
            </div>
        )
    }

    return (
        <>
            <div className={"gamepadEl"}>
                {gamepadConnected ? gamePadDetected() : gamePadNotDetected()}
            </div>
        </>

    );
};

export default Gamepad;

//green hex code: #