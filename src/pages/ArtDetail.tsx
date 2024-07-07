// src/pages/ArtDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

interface ArtDetail {
    name: string;
    artist: string;
    format: string;
    date: string;
    price: string;
    description: string;
    image: string;
  }
  
  const artDetails: { [key: string]: ArtDetail } = {
    '1': {
      name: 'Art Piece Name',
      artist: 'Person 1',
      format: 'Painting',
      date: '1999',
      price: '$19.99',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
      image: '/src/assets/images/1B4A2755.jpg', // Placeholder image
    },
    '2': {
        name: 'Art Piece Name',
        artist: 'Person 1',
        format: 'Painting',
        date: '1999',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/src/assets/images/1B4A2755.jpg', // Placeholder image
      },
      '3': {
        name: 'Art Piece Name',
        artist: 'Person 1',
        format: 'Painting',
        date: '1999',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/src/assets/images/1B4A2755.jpg', // Placeholder image
      },
      '4': {
        name: 'Art Piece Name',
        artist: 'Person 1',
        format: 'Painting',
        date: '1999',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/src/assets/images/1B4A2755.jpg', // Placeholder image
      },
      '5': {
        name: 'Art Piece Name',
        artist: 'Person 1',
        format: 'Painting',
        date: '1999',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/src/assets/images/1B4A2755.jpg', // Placeholder image
      },
      '6': {
        name: 'Art Piece Name',
        artist: 'Person 1',
        format: 'Painting',
        date: '1999',
        price: '$19.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        image: '/src/assets/images/1B4A2755.jpg', // Placeholder image
      },
    // Add more art items here
  };
  
  const ArtDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    if (!id || !artDetails[id]) {
      return <div>Art piece not found</div>;
    }
  
    const art = artDetails[id];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center">
        <img src={art.image} alt={art.name} className="w-1/2 h-auto mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-4">{art.name}</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <img src={art.image} alt={art.name} className="w-16 h-auto" />
          {/* Add more thumbnails if needed */}
        </div>
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">Artist: {art.artist}</h3>
          <h3 className="text-xl font-bold mb-2">Art Format: {art.format}</h3>
          <h3 className="text-xl font-bold mb-2">Date: {art.date}</h3>
          <h3 className="text-xl font-bold mb-2">Price: {art.price}</h3>
          <h3 className="text-xl font-bold mb-2">About this artwork</h3>
          <p>{art.description}</p>
          <Link className="mt-4 bg-gray-800 text-white py-2 px-4 rounded" to={`/artvituso/explore/${id}/purchase`}>Purchase this artwork</Link>
        </div>
      </section>
    </div>
  );
};

export default ArtDetail;
