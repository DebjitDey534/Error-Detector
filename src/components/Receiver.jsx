import React from 'react'
import Decoder from './Decoder'
import Messagelog_R from './Messagelog_R'
const Receiver = () => {
    return (
        <div className='flex flex-col sm:flex-row  bg-[#2a2a47] rounded-2xl m-2 p-10 gap-5 w-[80vw] sm:w-[90vw] sm:h-[77vh] animate-glow-purple'>
            <div className='flex flex-col '>
                <p className='flex justify-center text-3xl m-2 text-white'>DECODER</p>
                <Decoder />
            </div>
            <div className='flex flex-col'>
                <p className='flex justify-center text-3xl m-2 text-white'>MESSAGE LOG</p>
                <Messagelog_R />
            </div>
        </div>
    )
}

export default Receiver