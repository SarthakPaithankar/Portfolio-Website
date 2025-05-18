import React from 'react';
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();
  const prompt = location.pathname === "/" ? ">_ ls portfolio" : `>_ ${location.pathname}`;
  return (
    <div className="bg-black text-white px-4 md:px-12 py-6 shadow-md font-Terminal">
      <div className="grid grid-cols-3 items-center text-4xl font-bold w-full">
        <div>
          <Link to="/" className="text-green-600 hover:text-blue-400 whitespace-nowrap">
            {prompt}
          </Link>
        </div>
        <div className="text-center">
          <a href="/" className="text-green-600 hover:text-blue-400">Sarthak Paithankar</a>
        </div>
        <div className="flex justify-end">
          <ul className="flex space-x-4 text-2xl md:text-3xl font-semibold whitespace-nowrap">
            <li>
              <a href="/resume" className="text-green-600 hover:text-blue-400">Experience</a>
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