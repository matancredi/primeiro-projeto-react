import React from 'react'
import './App.css'
import {Filme} from './Filme'
import imagem from './logo.png';

function App() {

  return (
    <div className="App">
      
      <img src={imagem} />
      
    <Filme />    
    </div>
  )
}

export default App
