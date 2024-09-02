/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FaHome, FaBell, FaUserFriends, FaSearch, FaSignOutAlt } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { auth } from '../Firebase/config';

const Navbar: React.FC = () => {
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md sticky top-0 z-50">
      {/* Left: Logo and Search Bar */}
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img src="/logo.jpg" alt="Facebook Logo" className="h-10 w-10" />
        </Link>
        <div className="hidden sm:flex items-center bg-gray-200 p-2 rounded-full">
          <FaSearch className="text-gray-600 h-5 w-5" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none pl-2"
          />
        </div>
      </div>

      {/* Center: Navigation Icons */}
      <div className="flex flex-row space-x-20">
        <Link to="/" className="flex items-center text-gray-600 hover:text-blue-500">
          <FaHome className="h-6 w-6" />
          <span className="hidden md:inline-block ml-1">Home</span>
        </Link>
        <Link to="/friends" className="flex items-center text-gray-600 hover:text-blue-500">
          <FaUserFriends className="h-6 w-6" />
          <span className="hidden md:inline-block ml-1">Friends</span>
        </Link>
        <Link to="/notifications" className="flex items-center text-gray-600 hover:text-blue-500">
          <FaBell className="h-6 w-6" />
          <span className="hidden md:inline-block ml-1">Notifications</span>
        </Link>
      </div>

      {/* Right: Logout Button */}
      <div className="flex items-center space-x-4">
        {currentUser && (
          <button
            onClick={handleLogout}
            className="flex items-center text-red-700 hover:text-red-500"
          >
            <FaSignOutAlt className="h-6 w-6" />
            <span className="hidden md:inline-block ml-1">Logout</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
