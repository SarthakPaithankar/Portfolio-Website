import React from 'react';
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const prompt = location.pathname === "/" ? ">_ ls portfolio" : `>_ ${location.pathname}`;
  return (
    <div>
      <div className="relative flex items-center bg-black text-white px-12 py-6 shadow-md font-Terminal">
        <div className="text-4xl font-bold">
          <Link to="/" className="text-4xl font-bold text-green-600 hover:text-blue-400">
            {prompt}
          </Link>
        </div>
        <div className="flex absolute left-1/2 transform -translate-x-1/2 text-4xl font-bold">
          <a href="/" className="text-green-600 hover:text-blue-400">Sarthak Paithankar</a>
        </div>
        <div className="ml-auto">
          <ul className="flex space-x-8 text-3xl font-semibold">
            <li>
              <a href="./resume" className="text-green-600 hover:text-blue-400">Experience</a>
            </li>
            <li>
              <a href="/photography" className="text-green-600 hover:text-blue-400">Photography</a>
            </li>
            <li>
              <a href="/contact" className="text-green-600 hover:text-blue-400">Contact</a>
            </li>
          </ul>
        </div>
  
      </div>
    </div>
  );
  
};

export default Navbar;