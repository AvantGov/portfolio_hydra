// depends.
import { useEffect, useRef } from 'react';

//comps
import Display from './Library/Display';
import AudioController from './Library/AudioController';

// utils 
import {_createHydra} from '../utils/_createHydra.js';

// CSS 
import '../CSS/App.css';

function App() {

  useEffect(() => {
    // _createHydra()
    const App = document.getElementById("App")
    App.insertBefore(_createHydra(), App.childNodes[0]);

    // hides the audiocontroller on inital render 
    const AudCont = window.document.getElementById("Comp_AudCont")
    AudCont.style.display = "none"
    
    // const audioElem = window.document.getElementById("mda_audio_th")
    // audioElem.onplay(console.log(audioElem))    
  }, [])

  return (
    <div id='App' className='App'>
      <Display />
      <AudioController/>
    </div>
  )
}

export default App
