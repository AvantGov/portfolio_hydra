// depends
import { _createVis } from "./_createVis";
import { _createHydra } from "./_createHydra";

// ? handles re-rendering hydra for visualizer 
export const handlePlay = () => {
    const App = document.getElementById("App")
    const canvas = document.getElementById("canvas1")
    const canvas_vis = document.getElementById("canvas2")
    if (canvas_vis) {
        App.replaceChild(canvas_vis, canvas)
    } else {
        App.replaceChild(_createVis(), canvas)
    }
}

// ? handles the opposite to get back to the display comp 
// TODO: there seems to be some degredation in the performance when switching back .. 
export const handleInterfaceReturn = () => {
    const App = document.getElementById("App")
    const canvas_1 = document.getElementById("canvas1")
    const canvas_2 = document.getElementById("canvas2")
    if(canvas_1 && canvas_2) {
        App.replaceChild(canvas_1,canvas_2)
    } else if (!canvas_2) {
        null
    } else {
        App.replaceChild(_createHydra(),canvas_2)
    }

    // ? had to add the null case in there to cover when user goes to syn mode but does not play

    var display = window.document.getElementById("main_display")
    var AudCont = window.document.getElementById("Comp_AudCont")
    display.style.display = "flex"
    AudCont.style.display = "none"

    var audio = window.document.getElementById("mda_audio_th")
    audio.pause()
}