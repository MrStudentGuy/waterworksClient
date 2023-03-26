import React, {useEffect, useState} from 'react';
import '../styles/headbar.css';
import '../styles/controlpanel.css';
import {motion} from "framer-motion";
import {MdOutlinePause, MdOutlinePlayArrow, MdOutlineStop} from "react-icons/all";
import useSound from 'use-sound';

import successFx from '../Audio/Success.wav'
import qFx from '../Audio/Warning.wav'
import errorFx from '../Audio/Error.wav'

const Header = () => {
    const [playSuccess] = useSound(successFx);
    const [playWarning] = useSound(qFx);
    const [playError] = useSound(errorFx);

    const start = () => {
        // emitter.emit('playStart');
        playSuccess();
    }

    const pause = () => {
        // emitter.emit('playPause');
        playWarning();
    }

    const stop = () => {
        // emitter.emit('playStop');
        playError();
    }

    return (
        <div className={"header"}>
            <div className={"titleP"}>
                <h1 className={"title"}>Waterworks</h1>
                <h3>Version 0.1</h3>
            </div>

            <div className="buttonHStack">
                <motion.button whileHover={{ scale: 1.2, transition: { duration: 0.2 },}} whileTap={{ scale: 1 }} className={"start"} onClick={start}>
                    <MdOutlinePlayArrow color={"#fff"} size={"48"} className={"icon"}/>
                    <h1>Play</h1>
                </motion.button>

                <motion.button whileHover={{ scale: 1.2, transition: { duration: 0.2 },}} whileTap={{ scale: 1 }} className={"pause"} onClick={pause}>
                    <MdOutlinePause color={"#fff"} size={"54"} className={"icon"}/>
                    <h1>Pause</h1>
                </motion.button>

                <motion.button whileHover={{ scale: 1.2, transition: { duration: 0.2 },}} whileTap={{ scale: 1 }} className={"stopButton"} onClick={stop}>
                    <MdOutlineStop color={"#fff"} size={"54"} className={"icon"}/>
                    <h1>Stop</h1>
                </motion.button>
            </div>
        </div>
    );
};

export default Header;