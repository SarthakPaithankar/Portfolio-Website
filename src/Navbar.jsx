import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const prompt = location.pathname === "/" ? ">_ ls portfolio" : `>_ ${location.pathname}`;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-black text-white px-4 py-4 md:px-12 shadow-md font-Terminal">
      <div className="flex justify-between items-center text-2xl md:text-4xl font-bold">
        <Link to="/" className="text-green-600 hover:text-blue-400 whitespace-nowrap">{prompt}</Link>

        <Link to="/" className="hidden md:block text-green-600 hover:text-blue-400 text-center">Sarthak Paithankar</Link>
        <button onClick={toggleMenu} className="md:hidden text-green-600">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <ul className="hidden md:flex space-x-6 text-xl md:text-2xl font-semibold whitespace-nowrap">
          <li><Link to="/resume" className="text-green-600 hover:text-blue-400">Experience</Link></li>
          <li><Link to="/photography" className="text-green-600 hover:text-blue-400">Photography</Link></li>
          <li><Link to="/contact" className="text-green-600 hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-xl font-semibold">
            <li><Link to="/resume" className="block text-green-600 hover:text-blue-400" onClick={toggleMenu}>Experience</Link></li>
            <li><Link to="/photography" className="block text-green-600 hover:text-blue-400" onClick={toggleMenu}>Photography</Link></li>
            <li><Link to="/contact" className="block text-green-600 hover:text-blue-400" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
