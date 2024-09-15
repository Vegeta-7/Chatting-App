import React from 'react'

const ChatBubble = ({ message, type, time, isSender }) => {  
    const messageClasses = isSender
      ? "bg-purple-400 text-white rounded-lg text-sm"
      : "bg-gray-200 text-black rounded-lg text-sm";
      
    const audioClasses = isSender
      ? "bg-purple-400 text-white rounded-lg text-sm"
      : "bg-gray-200 text-black rounded-lg text-sm";
      
    return (
      <div className={`flex ${isSender ? "items-end" : "items-start"} my-2 flex-col`}>
        <div className={`p-3 max-w-xs ${type === "text" ? messageClasses : audioClasses}`}>
          {type === "text" ? (
            <p>{message}</p>
          ) : (
            <audio controls>
              <source src={message} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
        <span className="block text-xs text-gray-500 mt-1 text-right">{time}</span>
      </div>
    );
  };

export default ChatBubble