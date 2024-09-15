import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick=()=>{
    localStorage.removeItem("token")
    window.location.href="/";
  }

  return (
    <nav className='app__navbar'>
      <div className='text-white logo cursor-pointer hover:text-yellow-400 hover:scale-105 transition duration-300 tracking-wide justify-start items-center'>
        Fruits.Ai
      </div>
      <ul className='app__navbar-links gap-8'>
        <Link to="/home" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
          Home
        </Link>        
        <Link to="/chat" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
          Chat
        </Link>
        <Link to="/faq" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
          FAQ
        </Link>
        <Link to="/about" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
          About
        </Link>        
      </ul>
      <div className='app__navbar-login'>
        <Link to="/" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
          <button className='bg-orange-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300' onClick={handleClick}>
            LOGOUT
          </button>
        </Link>                
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setToggleMenu(true)}} className='cursor-pointer' />          
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex justify-center items-center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close cursor-pointer' onClick={()=>{setToggleMenu(false)}}/>
            <ul className='app__navbar-smallscreen-links'>
              <Link to="/home" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
                Home
              </Link>        
              <Link to="/chat" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
                Chat
              </Link>
              <Link to="/faq" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
                FAQ
              </Link>
              <Link to="/about" className='text-white text-lg font-medium uppercase tracking-wide hover:text-yellow-400 hover:scale-105 transition duration-300'>
                About
              </Link>              
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
