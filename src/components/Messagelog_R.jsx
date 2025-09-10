import React, { useEffect, useState } from 'react';
import { receiveBinary, receiveMessages } from '../utils/serial';
import Messagebox from './Messagebox';
const Messagelog_R = () => {
  const [message,setMessage]=useState('');
  useEffect(() => {
    const fetchMessage = async () => {
     const msg = await receiveMessages();
     await receiveBinary()
      setMessage(msg)
    };
    fetchMessage();
  }, []);
  return (
    <div id="message-log" className="bg-violet-400 h-[25vh] w-[60vw] sm:h-[55vh] sm:w-[50vw] rounded-2xl overflow-y-scroll scrollbar-hide ">
     <Messagebox key={0} message={message} />
    </div>
  );
};

export default Messagelog_R;
