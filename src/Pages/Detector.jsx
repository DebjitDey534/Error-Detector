import React from 'react'
import ConnectionStatus from '../components/ConnectionStatus'
import { getdevice } from '../utils/serial'
import { useState, useEffect } from 'react'
import Receiver from '../components/Receiver'
import Transmitter from '../components/Transmitter'
const Detector = () => {
    const [device, setdevice] = useState("");

    useEffect(() => {
        const checkdevice = async () => {
            const t = await getdevice();
            if (t === "TX")
                setdevice("Transmitter");
            else
                setdevice("Receiver")
        }
        checkdevice();
    }, [])
     const toggleDevice = () => {
    setdevice((prev) => (prev === "Transmitter" ? "Receiver" : "Transmitter"));
  };
    return (
        <div className='flex flex-col items-center'>
            <ConnectionStatus />
            <button onClick={toggleDevice} className="px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700">
        Switch to {device === "Transmitter" ? "Receiver" : "Transmitter"}
      </button>
            {device === "Transmitter" && <Transmitter />}
            {device === "Receiver" && <Receiver />}
        </div>
    )
}

export default Detector
