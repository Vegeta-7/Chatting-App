import React from 'react';
import { SiGoogletranslate } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center navbar justify-center pt-10 w-full">      
      <div className="text-center mb-8">
        <div className="font-semibold text-3xl text-white h-9">Fruit.Ai</div>
        <p className="text-sm text-white font-extrabold">"Be Healthy!"</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 sm:p-0">        
        <Link
          to="/chat"
          className="bg-yellow-200 hover:bg-yellow-300 text-pink-600 text-2xl font-bold rounded-2xl flex items-center justify-center h-32 w-64 shadow-lg transition transform hover:scale-105"
        >
          Chat.
        </Link>

        {/* Google Translate Button */}
        <Link
          to="/translate"
          className="bg-blue-200 hover:bg-blue-300 text-blue-600 text-2xl font-bold rounded-2xl flex items-center justify-center h-32 w-64 shadow-lg transition transform hover:scale-105"
        >          
          <SiGoogletranslate size={40}/>
        </Link>

        {/* FAQs Button */}
        <Link
          to="/faq"
          className="bg-purple-200 hover:bg-purple-300 text-blue-800 text-2xl font-bold rounded-2xl flex items-center justify-center h-32 w-64 shadow-lg transition transform hover:scale-105"
        >
          FAQs
        </Link>

        {/* About Button */}
        <Link
          to="/about"
          className="bg-pink-200 hover:bg-pink-300 text-pink-600 text-2xl font-bold rounded-2xl flex items-center justify-center h-32 w-64 shadow-lg transition transform hover:scale-105"
        >
          About
        </Link>
      </div>

      {/* Dots for Page Indication */}
      <div className="flex mt-8 space-x-2">
        <span className="h-2 w-2 bg-white rounded-full"></span>
        <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
        <span className="h-2 w-2 bg-white rounded-full opacity-50"></span>
      </div>
    </div>
  );
}

export default Home