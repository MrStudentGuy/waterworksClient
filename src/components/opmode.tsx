import React, {useState} from 'react';
import '../styles/opmode.css';
import IPut from 'iput';
import {useConnectionIP} from "../zustand";

const Opmode = () => {
    const [running, setRunning] = useState(false);
    const [ip, setIP] = useState("");

    const connectionIP = useConnectionIP(
        (state) => ({
                connectionIP: state.connectionIP,
            }
    ));

    const validateIp = (e :any) => {
        e.preventDefault();

        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
            alert("Switching IP connection to " + ip + ".");
            connectionIP.connectionIP = ip;
            console.log(connectionIP);
            return;
        }
        alert("Invalid IP address.")
        return;
    }


    return (
        <div className="opMode">
            <h1>Status</h1>
            {running ? ( <h2 style={{color:"#00FF00"}}>Connected</h2> ) : ( <h2 style={{color:"#FF0000"}}>Disconnected</h2> )}

            <form onSubmit={(evt) => {validateIp(evt)} }>
                <IPut onChange={(e)=>{setIP(e)}} className={"ipInput"}/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Opmode;

/*


            <form onSubmit={() => {{validateIp(event)}}}>
                <IPut onChange={(e)=>{setIp(e)}} className={"ipInput"}/>
                <button>Submit</button>
            </form>

 */