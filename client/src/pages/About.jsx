import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <div className='static navbar w-full'>
        <Navbar />
      </div>
      <div className="h-screen flex flex-col justify-center items-center navbar">      
        <div className="flex gap-4 mb-8">        
          <div className="h-12 w-12 bg-purple-500 rounded-full blur-lg"></div>
          <div className="h-12 w-12 bg-purple-400 rounded-full blur-lg"></div>
          <div className="h-12 w-12 bg-purple-300 rounded-full blur-lg"></div>
        </div>

        <div className="bg-white rounded-3xl p-6 text-center shadow-lg max-w-lg w-full">
          <h1 className="text-2xl font-bold mb-4">Fruit.AI</h1>
          <p className="text-gray-600 mb-6">
          Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
          </p>
          <button className="bg-black text-white font-bold py-2 px-4 rounded-full">About</button>
        </div>
      </div>
    </>
  );
}

export default About;
