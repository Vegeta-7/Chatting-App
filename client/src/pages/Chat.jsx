import React, { useState, useEffect } from 'react';
import { BiCommentMinus } from 'react-icons/bi';
import ChatBubble from '../components/ChatBubble';
import { GoPaperclip } from 'react-icons/go'
import { MdSend, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import profile from '../assets/profile.jpg'
import oranges from '../assets/oranges.jpg'
import cucumber from '../assets/cucumber.jpg'
import { LuMoreVertical } from "react-icons/lu";
import Product from '../components/Product';
import Navbar from '../components/Navbar';

const Chat = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // Duration to show Welcome component

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='static navbar w-full'>
        <Navbar />
      </div>
      <div className='flex justify-center'>
        {visible ? <Welcome /> : <ChatApp />}
      </div>
    </>
  );
};

const Welcome = () => {
  return (
    <div className={`w-full min-h-screen flex flex-col justify-center items-center ml-8 transition-opacity duration-1000 opacity-100'`}>
      <div className='flex flex-col items-start justify-center gap-2'>
        <BiCommentMinus className='text-purple-600 text-3xl' />
        <p className='text-3xl'>Hello</p>
        <p className='text-3xl text-purple-500 font-bold'>Chat.</p>
        <p className='text-gray-500'>The Last Chat app you will ever need</p>
      </div>
    </div>
  );
};

const ChatApp = () => {
  const messages = [
    { id: 1, message: "This is a sample big message with a longer text paragraph", type: "text", time: "10:30 AM", isSender: false },
    { id: 2, message: "This is a sample big message with a longer text paragraph", type: "text", time: "10:30 AM", isSender: true },
    { id: 3, message: "/path/to/audiofile.mp3", type: "audio", time: "10:30 AM", isSender: false },
    { id: 4, message: "/path/to/audiofile.mp3", type: "audio", time: "10:30 AM", isSender: true },
    { id: 5, message: "This is a sample message for a chat", type: "text", time: "10:30 AM", isSender: false },
    { id: 6, type: "product", text: "Orange", quantity: 2, total: "$16.00", price: "$8.00", image: oranges },        
    { id: 7, type: "product", text: "Cucumber", quantity: 1, total: "$11.78", price: "$11.78", image: cucumber },        
    { id: 8, message: "This is a sample message for a chat", type: "text", time: "10:30 AM", isSender: true },    
  ];

  return (
    <div className='h-screen flex flex-col p-4 w-3/6'>
      <div className='flex justify-between border-b-2 border-b-gray-400 items-center'>
        <div className='flex  p-2 items-center gap-3'>
          <MdOutlineKeyboardArrowLeft className='text-3xl'/>
          <img src={profile} alt="profile" className='h-8 w-8 rounded-full ml-5'/>
          <div>
            <p className='text-md font-bold text-black'>John Doe</p>
            <p className='text-xs text-purple-500'>Online</p>
          </div>
        </div>
        <LuMoreVertical className='mr-8 text-lg'/>
      </div>
      <div className='flex-grow overflow-y-auto p-3'>
        {messages.map((msg) => {
          return msg.type === "product" ? (
            <Product 
              key={msg.id} 
              type={msg.type} 
              text={msg.text} 
              quantity={msg.quantity} 
              total={msg.total} 
              price={msg.price} 
              image={msg.image}
            />
          ) : (
            <ChatBubble 
              key={msg.id} 
              message={msg.message} 
              type={msg.type} 
              time={msg.time} 
              isSender={msg.isSender} 
            />
          );
        })}
      </div>
      <div className="flex items-center border-t border-gray-200 p-2 gap-2">
        <GoPaperclip className='cursor-pointer'/>
        <input
          type="text"
          placeholder="Message..."
          className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button className="ml-2 bg-purple-400 text-white p-2 rounded-lg">
          <MdSend />
        </button>
      </div>
    </div>
  );
};

export default Chat;