import React, {useEffect} from 'react';
import '../styles/loadpath.css';
import useSound from 'use-sound';
import qFx from '../Audio/Warning.wav'
import successFx from '../Audio/Success.wav'
import errorFx from '../Audio/Error.wav'

const Loadpath = () => {
    const [file, setFile] = React.useState<File | null>(null);
    const [playSuccess] = useSound(successFx);
    const [playWarning] = useSound(qFx);
    const [playError] = useSound(errorFx);

    const FilePicker = () => {
        return (
            <input
                type="file"
                id="file"
                accept=".json"
                onChange={(e) => {
                    if (e.target.files) {
                        if (e.target.files[0].type !== "application/json") {
                            playError();
                            alert("Please select a valid JSON file");
                            return;
                        } else {
                            playSuccess();
                            setFile(e.target.files[0]);
                            alert("Path " + e.target.files[0].name + " loaded successfully.");
                        }
                    }
                }}
            />
        )
    }

    const FileDisplay = () => {

        if (!file) return null;
        return (
            <div>
                <h3>{file.name}</h3>

                <button className={"rmButton"} onClick={() => {
                    setFile(null)
                    playWarning();
                }}>Remove</button>
            </div>
        )
    }

    return (
        <div className={"loadPathEl"}>
            {file ? <h1>Path Selected</h1> : <h1>Load Path</h1>}

            <div className={"loadPathButton"}>
                {file ? <FileDisplay /> : <FilePicker />}
            </div>
        </div>
    );
};

export default Loadpath;