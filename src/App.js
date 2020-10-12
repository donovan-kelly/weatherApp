import React from 'react';
import './App.css';
import Home from './components/Home'

// Font Awesome

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faSun } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faSun)

const api = {
  key: 'd6af8dede317fd610a52e712bbd7c205',
  base: "https://api.openweathermap.org/data/2.5/"
}



function App() {
  return (
    <div className="app">
        <Home />

    </div>
  );
}

export default App;
