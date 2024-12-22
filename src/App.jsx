import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventList from './components/EventList';
import EventDetail from './components/EventDetail';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (bet) => {
    setCart([...cart, bet]);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/event/:eventID" element={<EventDetail addToCart={addToCart} />} />
        </Routes>
        <Cart cart={cart} setCart={setCart} />
      </div>
    </BrowserRouter>
  );
}

export default App;