
import './App.css'
import AliensProvider from './contexts/AliensContext'
import React from 'react'
import Intro from './components/Intro'
import Game from './components/Game'
import GameOver from './components/GameOver'

function App() {


  return (
    <AliensProvider>
            <div className="container">
                <Intro />
                <Game />
                <GameOver />
            </div>
    </AliensProvider>
  );
}

export default App
