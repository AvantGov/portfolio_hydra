import Meyda from 'meyda';

export const _renderAudio = () => {
    const audioCtx = new window.AudioContext();
    const audioElem = window.document.getElementById("mda_audio_th")
    const source = audioCtx.createMediaElementSource(audioElem);
    source.connect(audioCtx.destination)
    console.log(source)
    return source
}

export const _renderAnalysis = (source) => {
    if (typeof Meyda === "undefined") {
        console.log("Meyda could not be found! Have you included it?");
      } else {
        const analyzer = Meyda.createMeydaAnalyzer({
          audioContext: source.context,
          source: source,
          bufferSize: 512,
          featureExtractors: ["rms"],
          callback: (features) => {
            console.log("render analysis ran?",features);
          },
        });
        analyzer.start();
      }
}

