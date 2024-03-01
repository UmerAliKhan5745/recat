
import { useState } from 'react';
import './App.css';
import Square from './Square';
function App( ) {
  const [xIsNext,setXisNext]=useState(true)
  const [square,setsquare]=useState(Array(9).fill(null))
  const handleClick=(i:any)=>{
    const Netsquare= square.slice()
    if(square[i]){
      return 
    }
    if(xIsNext){
      Netsquare[i]='x';
    }else{
      Netsquare[i]='o';

    }
    setsquare(Netsquare) 
    setXisNext(!xIsNext)
  }
  return (
    <div className="App">
      <div className='row-1'>
      <Square value={square[0]}  ohanbleclick={()=>handleClick(0)}/>
      <Square value={square[1]}  ohanbleclick={()=>handleClick(1)}/>
      <Square value={square[2]}  ohanbleclick={()=>handleClick(2)}/>
      </div>
      <div className='row-2'>
      <Square value={square[3]}  ohanbleclick={()=>handleClick(3)}/>
      <Square value={square[4]}  ohanbleclick={()=>handleClick(4)}/>
      <Square value={square[5]}  ohanbleclick={()=>handleClick(5)}/>
      </div>
      <div className='row-3'>
      <Square value={square[6]}  ohanbleclick={()=>handleClick(6)}/>
      <Square value={square[7]}  ohanbleclick={()=>handleClick(7)}/>
      <Square value={square[8]}  ohanbleclick={()=>handleClick(8)}/>
      </div>
    </div>
  );
}

export default App;
