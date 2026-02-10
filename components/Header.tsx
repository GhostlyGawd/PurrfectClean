import React from 'react';
import { Cat, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
            <Cat className="h-8 w-8 text-brand-600 mr-2" />
            <span className="font-bold text-xl tracking-tight text-gray-900">Purrfect<span className="text-brand-600">Clean</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#features" 
              onClick={(e) => scrollToSection(e, 'features')} 
              className="text-gray-500 hover:text-brand-600 font-medium transition-colors"
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              onClick={(e) => scrollToSection(e, 'how-it-works')} 
              className="text-gray-500 hover:text-brand-600 font-medium transition-colors"
            >
              How it Works
            </a>
            <a 
              href="#reviews" 
              onClick={(e) => scrollToSection(e, 'reviews')} 
              className="text-gray-500 hover:text-brand-600 font-medium transition-colors"
            >
              Reviews
            </a>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className="flex items-center bg-gray-900 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors shadow-md">
              <ShoppingBag size={18} className="mr-2" />
              <span className="font-medium">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;