//depends 
import Hydra from 'hydra-synth';
// import { _renderAudio } from './_renderAudio';
// import { _renderAnalysis } from './_renderAudio';

export const _createHydra = (context) => {

    var controller = {
      connected: false,
    }

    const getResoHeight = () => {
        const height = window.innerHeight
        if (height > 1080) {
          return height
        } else {
          return 1080
        }
    }

    const getResoWidth = () => {
      const width = window.innerWidth;
      if (width > 1920) {
        return width
      } else {
        return 1920
      }
    }

    var canvas = document.createElement("canvas")
    canvas.id = "canvas1"
    const hydra = new Hydra({
      detectAudio: false,
      canvas: canvas,
      makeGlobal: false
    }).synth
    hydra.setResolution(getResoWidth(),getResoHeight())
    hydra.fps = 30
    hydra.bpm = 96
    console.log("hydra:",hydra)
    hydra.osc(10, 0.01).rotate(0, 0.01).mult(hydra.osc(5, 0.1).modulate(hydra.osc(5).rotate(7, -0.1), .5)).color(1.25,0.21,8.19).out()

    return canvas
}

