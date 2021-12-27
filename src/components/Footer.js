import React from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-gray-400 border-t">
       <p className="text-center font-mono">Copyright © 2021 <Link className="text-purple-900" to='/'>Skull Machina.</Link> All rights reserved.</p>
    </div>
  );
};

export default Footer