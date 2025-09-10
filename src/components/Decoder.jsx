import React, { useEffect, useState } from 'react'
import { receiveBinary } from '../utils/serial'

const Decoder = () => {
  const [bin, setBin] = useState('');

  useEffect(() => {
    const fetchBinary = async () => {
      const result = await receiveBinary(); // wait for async function
      setBin(result); // store in state
    };

    fetchBinary();
  }, []); // runs once when component mounts

  return (
    <div className="bg-violet-400 h-[25vh] w-[60vw] sm:h-[55vh] sm:w-[30vw] rounded-2xl p-3 text-white overflow-auto">
      <div>
        {bin ? `Received binary: ${bin}` : "Waiting for binary..."}
      </div>
    </div>
  )
}

export default Decoder
