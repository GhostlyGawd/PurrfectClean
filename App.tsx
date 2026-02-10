import React from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProductDisplay />
        <Features />
        <div id="how-it-works">
          <ProductShowcase />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default App;