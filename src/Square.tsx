import React, { useState } from 'react'

function Square({value,ohanbleclick}:any) {
    

  return (
    <>
    <button onClick={ohanbleclick}>{value}</button>
    </>
  )
}

export default Square