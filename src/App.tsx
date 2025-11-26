import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navigation } from './components/Navigation';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { CoffeeBeansShop } from './pages/CoffeeBeansShop';
import { OurStory } from './pages/OurStory';
import { Checkout } from './pages/Checkout';
import { Reviews } from './pages/Reviews';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen">
          <ScrollToTop />
          <Navigation />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/shop" element={<CoffeeBeansShop />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
