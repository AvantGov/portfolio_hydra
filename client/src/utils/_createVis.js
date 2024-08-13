//depends 
import Hydra from 'hydra-synth';
// import { _renderAudio } from './_renderAudio';
// import { _renderAnalysis } from './_renderAudio';

export const _createVis = (context) => {

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
    canvas.id = "canvas2"
    const hydra = new Hydra({
      detectAudio: false,
      canvas: canvas,
      makeGlobal: false
    }).synth
    hydra.setResolution(getResoWidth(),getResoHeight())
    hydra.fps = 30
    hydra.bpm = 96
    console.log("hydra:",hydra)
    hydra.osc([-3,-2,-1,0.01,0.1,1,3], (hydra.bpm/20000), 100)
    .color(0.9, (Math.random() * 10), 0.8)
    .diff(hydra.osc(.35, 0.01, 200)
      .color((Math.random() * 10), (Math.random() * 10), (Math.random() * 10))
      .rotate((hydra.bpm/40000))
      .pixelate([1.543,2.542345,3.542,4.6234,5.342,6.85904234])
      .kaleid())
    .scrollX(1)
    .colorama()
    .luma()
    .repeatX(7.139)
    .repeatY(0.566)
    .modulate(hydra.osc(1, -.174, 1))
    .scale(2)
    .out();

    return canvas
}