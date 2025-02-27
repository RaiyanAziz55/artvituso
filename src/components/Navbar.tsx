// src/components/Navbar.tsx

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 border-2 border-gray-900">
      <Link to={'/artvituso'} >
      <div className="text-3xl font-serif font-bold">
        ART<span className="italic">VIRTUOSO</span>
      </div>
      </Link>
      <div className="flex space-x-6">
        <Link to="/artvituso/about" className="text-lg font-serif hover:underline">ABOUT</Link>
        <Link to="/artvituso/events" className="text-lg font-serif hover:underline">EVENTS</Link>
        <Link to="/artvituso/explore" className="text-lg font-serif hover:underline">EXPLORE</Link>
        <Link to="/artvituso/sell" className="text-lg font-serif hover:underline">SELL</Link>
      </div>
      <div className="flex items-center border border-gray-400 rounded">
        <input
          type="text"
          className="px-2 py-1 outline-none"
          placeholder="Search..."
        />
        <button className="px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
