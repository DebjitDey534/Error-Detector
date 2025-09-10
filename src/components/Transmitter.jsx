import React from 'react'
import MessageLog from './MessageLog'
import AlgorithmSelector from './AlgorithmSelector'
import MessageInput from './MessageInput'

const Transmitter = () => {
  return (
    <div className='flex flex-col  bg-[#2a2a47] rounded-2xl m-3 p-3 gap-3 animate-glow-purple w-[80vw] sm:w-[90vw] sm:h-[77vh] '>
      <div className='flex flex-col sm:flex-row gap-3 justify-center items-center m-3'>
        <div className='flex flex-col'>
          <p className='flex justify-center text-3xl m-2 text-white'>MESSAGE LOG</p>
          <MessageLog />
        </div>
        <div className='flex flex-col'>
          <p className='flex justify-center text-3xl m-2 text-white'>ALGORITHM</p>
          <AlgorithmSelector />
        </div>
      </div>
      <MessageInput />
    </div>

  )
}

export default Transmitter
