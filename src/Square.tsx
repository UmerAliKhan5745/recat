import React, { useState } from 'react'

function Square({value}:any) {
    const [valuee,setvalue]=useState('')
    const handleClick=()=>{
        setvalue('X')

    }

  return (
    <>
    <button onClick={handleClick}>{value}</button>
    </>
  )
}

export default Square