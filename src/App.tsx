import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import ArtDetail from './pages/ArtDetail';
import Event from './pages/Event';
import EventDetail from './pages/EventDetail';
import Purchase from './pages/Purchase';
import About from './pages/About';
import Sell from './pages/Sell';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<ArtDetail />} />
        <Route path="/explore/:id/purchase" element={<Purchase />} />
        <Route path="/events" element={<Event />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
