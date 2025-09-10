import React, { useEffect, useState } from 'react'
import { connectSerial, getdevice } from '../utils/serial'
const ConnectionStatus = () => {

    const [isconnected, setisconnected] = useState(false);
    const [device, setdevice]=useState("");

    useEffect(() => {
        const checkconnection = async () => {
            const success = await connectSerial();
            setisconnected(success);
        };

        const checkdevice = async()=> {
            const t = await getdevice();
            if(t==="TX")
                setdevice("[Transmitter]");
            else
                setdevice("[Receiver]")
        }

        checkconnection();
        checkdevice();
    }, [])
   return (
  <div className="flex items-center justify-center gap-2 text-2xl bg-[#2a2a47] rounded-[10px] h-[7vh] mb-3 w-[80vw] text-white px-4">
    <span className="relative flex h-[15px] w-[15px]">
      {isconnected ? (
        <>
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-green-500 shadow-[0_0_10px_2px_rgba(34,197,94,0.8)]"></span>
        </>
      ) : (
        <>
          
          <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.8)]"></span>
        </>
      )}
    </span>

    <p>{isconnected ? "Device Connected " : "Device Not Connected"}</p>
    <p>{device}</p>
  </div>
);

}

export default ConnectionStatus
