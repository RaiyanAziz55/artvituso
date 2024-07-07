// src/pages/Explore.tsx
import React from 'react';
import placeholderImage from '../assets/images/1B4A2755.jpg'; // Your placeholder image
import ArtGrid from '../components/ArtGrid';

const Explore = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">BROWSE OUR COLLECTION</h1>
      <div className="flex">
        <div className="w-1/4 pr-4">
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="search">SEARCH</label>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="w-full border border-gray-400 rounded py-2 px-4"
            />
          </div>
          <div className="mb-6">
            <label className="block text-lg font-bold mb-2" htmlFor="filter">FILTER</label>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="artist">Artist</label>
              <select id="artist" className="w-full border border-gray-400 rounded py-2 px-4">
                <option value="">Select Artist</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="format">Art Format</label>
              <select id="format" className="w-full border border-gray-400 rounded py-2 px-4">
                <option value="">Select Format</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1" htmlFor="time-period">Time-Period</label>
              <select id="time-period" className="w-full border border-gray-400 rounded py-2 px-4">
                <option value="">Select Time-Period</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <button className="w-full bg-gray-800 text-white py-2 rounded">Apply</button>
          </div>
        </div>
        <ArtGrid/>
      </div>
    </div>
  );
};

export default Explore;
