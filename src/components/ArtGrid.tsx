
import Card from "./Card";
import placeholderImage from '../assets/images/1B4A2755.jpg';
import { Link } from "react-router-dom";

const ArtGrid = () => {
    const artItems = [
        { id: 1, title: 'art 1', description: 'Description of first product', price: '$10.99', image: placeholderImage },
        { id: 2, title: 'art 2', description: 'Description of second product', price: '$10.99', image: placeholderImage },
        { id: 3, title: 'art 3', description: 'Description of third product', price: '$10.99', image: placeholderImage },
        { id: 4, title: 'art 4', description: 'Description of fourth product', price: '$10.99', image: placeholderImage },
        { id: 5, title: 'art 5', description: 'Description of fifth product', price: '$10.99', image: placeholderImage },
        { id: 6, title: 'art 6', description: 'Description of sixth product', price: '$10.99', image: placeholderImage },
      ];
    return (
        <div className="w-3/4 grid grid-cols-2 gap-4">
        {artItems.map(item => (
            <Link to={`/artvituso/explore/${item.id}`} key={item.id}>
              <Card 
                image={item.image} 
                title={item.title} 
                description={item.description} 
                price={item.price} 
              />
            </Link>
          ))}
      </div>
    );

};

export default ArtGrid;