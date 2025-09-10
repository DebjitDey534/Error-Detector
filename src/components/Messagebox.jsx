import React from 'react'

const Messagebox = ({message}) => {
  return (
    <div className= ' flex items-center m-5 w-max min-w-[20vw] px-2 rounded-2xl h-[5vh] bg-white/60 backdrop-blur-lg border border-white/60 '>
      <p >{message}</p>
    </div>
  )
}

export default Messagebox
