import React from 'react';
import '../styles/diagnostics.css';
const Diagnostics = () => {
    return (
        <div className={"diagEl"}>
            <h1>Diagnostics</h1>

            <div className="row">
                <button className={"logBut"}>Download Log</button>
                <button className={"logBut"}>Restart</button>
            </div>
        </div>
    );
};

export default Diagnostics;