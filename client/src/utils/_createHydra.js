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
    console.log("hydra:",hydra)
    hydra.gradient(.75).color(0.253,0.098,0.158).add(hydra.osc(3,-0.25,50).color(0.253,0.098,0.158)).pixelate(10,1).out()

    return canvas
}

