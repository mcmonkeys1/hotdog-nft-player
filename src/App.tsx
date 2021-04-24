import React from 'react';
import logo from './assets/icon.png';
import './App.css';
import FlatSquareButton from './components/FlatSquareButton';
import { play101, sample101 } from './audio/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{margin: 20,}}>Hotdog NFT Player</p>
      </header>

      <div className="main">
        <FlatSquareButton onClick={play101} onDoubleClick={()=>console.log('double-click')}/>
        <FlatSquareButton onClick={sample101} onDoubleClick={()=>console.log('double-click')}/>
        <FlatSquareButton onClick={()=>console.log('click')} onDoubleClick={()=>console.log('double-click')}/>
        <FlatSquareButton onClick={()=>console.log('click')} onDoubleClick={()=>console.log('double-click')}/>
      </div>
    </div>
  );
}

export default App;
