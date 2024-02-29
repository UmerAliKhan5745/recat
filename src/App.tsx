
import { useState } from 'react';
import './App.css';
import Square from './Square';

function App( ) {
  const [square,setsquare]=useState(Array(9).fill(null))
  return (
    <div className="App">
      <div className='row-1'>
      <Square value={square[1]}/>
      <Square value={square[2]}/>
      <Square value={square[3]}/>
      </div>
      <div className='row-2'>
      <Square value={square[4]}/>
      <Square value={square[5]}/>
      <Square value={square[6]}/>
      </div>
      <div className='row-3'>
      <Square value={square[7]}/>
      <Square value={square[8]}/>
      <Square value={square[9]}/>
      </div>
    </div>
  );
}

export default App;
