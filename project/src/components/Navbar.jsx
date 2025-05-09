import React from 'react';
import { CircleDollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <CircleDollarSign className="h-8 w-8 text-[#FF1493]" />
          <span className="text-2xl font-bold">FinGo</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-[#FF00C8] transition-colors">Home</Link>
          <Link to="/chat" className="hover:text-[#FF00C8] transition-colors">Chat Assistant</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 