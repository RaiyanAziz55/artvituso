// src/pages/Explore.tsx
import React from 'react';
import placeholderImage from '../assets/images/1B4A2755.jpg'; // Your placeholder image
import EventGrid from '../components/EventGrid';

const Event = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">OUR EVENTS</h1>
      <EventGrid/>
    </div>
  );
};

export default Event;
