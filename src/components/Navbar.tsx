import React from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../store/authStore';

function Navbar() {
  return (
    <nav className="w-full bg-pink-100 border-b border-pink-200 py-4 px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/hk.png"
          alt="Logo"
          className="h-10 w-auto rounded-full shadow-md"
        />
        
      </Link>

      
      <div className="flex gap-4">
        <Link
          to="/"
          className="text-pink-600 hover:text-pink-800 font-medium"
        >
          Home
        </Link>
        <Link
          to="/addTask"
          className="text-pink-600 hover:text-pink-800 font-medium"
        >
          Add Task
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
