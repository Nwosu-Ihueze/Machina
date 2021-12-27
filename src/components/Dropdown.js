import React from "react";
import { Link } from 'react-router-dom';

const Dropdown = ({isOpen, toggle}) => {
  return (
  <div className={isOpen ? "grid grid-rows-4 text-center items-center bg-black" : 'hidden'}onClick={toggle}>
    <Link className='p-4 font-mono hover:text-purple-900 text-white' to='/about'>About</Link>
    <Link className='p-4 font-mono hover:text-purple-900 text-white' to='/roadmap'>Roadmap</Link>
    <Link className='p-4 font-mono hover:text-purple-900 text-white' to='/faq'>FAQ</Link>
    <Link className='p-4 font-mono hover:text-purple-900 text-white' to='/team'>Team</Link>
    <Link className='p-4 font-mono hover:text-purple-900 text-white' to='/'>Marketplace</Link>
    <Link className='p-4 font-mono hover:text-purple-900 text-white' to='/'>Connect Wallet</Link>
  </div>
  );
};

export default Dropdown