// depends 
import React from 'react'
import ReactDOM from 'react-dom/client'

import './init.js'

// comps
import App from './Components/App.jsx'

// cass 
import './CSS/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
