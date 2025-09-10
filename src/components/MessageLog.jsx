import React, {useEffect, useContext } from 'react'
import { MessageContext } from '../context/MessageContext'
import Messagebox from './Messagebox';
const MessageLog = () => {
    const { messages} = useContext(MessageContext);
    useEffect(() => {
    const container = document.querySelector('#message-log');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);
    return (
        <div id="message-log" className='bg-violet-400 h-[25vh] w-[60vw] sm:h-[55vh] sm:w-[50vw] rounded-2xl overflow-y-scroll scrollbar-hide  '>
            <div>
                {
                    messages.map((mssg,i)=>(
                        <Messagebox key={i} message={mssg} />)

                    )
                }
            </div>
        </div>
    )
}

export default MessageLog
