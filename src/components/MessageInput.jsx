import React, { useState, useContext, useEffect } from 'react';
import { MessageContext } from '../context/MessageContext';
import { receiveMessages, sendMessage } from '../utils/serial';

const MessageInput = () => {
  const { messages, setMessages } = useContext(MessageContext);
  const [message, setMessage] = useState('');

  
 const handleKeyPress = (e) => {
    if (e.key === 'Enter' && message.trim() !== '') {
      setMessages(prev => [...prev, message]); 
    setMessage('');
    sendMessage(message)
    }
  };
  return (
    <div className='flex justify-center'>
      <input
        type="text"
        placeholder='Type your message...'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
         onKeyDown={handleKeyPress}
        className='w-[50vw] h-10 text-center bg-white/80 backdrop-blur-lg border-white/60 border-1 rounded-2xl focus:outline-none focus:ring-0 focus:shadow-[0_0_15px_rgba(168,85,247,0.8)]'
      />
    </div>
  );
};

export default MessageInput;
