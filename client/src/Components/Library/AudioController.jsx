// depends
import React from "react";

// utils 
import { handlePlay, handleInterfaceReturn } from "../../utils/handleVis";
import { _createVis } from "../../utils/_createVis";
import { _createHydra } from "../../utils/_createHydra";


// css 
import "../../CSS/Library/AudioController.css"

const AudioController = () => {

    return (
        <div className="AudioController" id="Comp_AudCont">
            <audio className="AudioController__audio" id="mda_audio_th" controls onPlay={handlePlay}>
                <source src="thighhighs_instru.mp3" type="audio/mpeg" />
                Your browser does not support the audio tag.
            </audio>
            <button className="AudioController__esc" onClick={handleInterfaceReturn}>return</button>
        </div>
    )
};

export default AudioController;