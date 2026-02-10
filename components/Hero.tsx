import React from 'react';
import { Star, Check } from 'lucide-react';
import { PRODUCT_PRICE, PRODUCT_OLD_PRICE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium mb-6 border border-brand-100">
              <Star size={14} className="mr-1 fill-brand-600" />
              #1 Rated Smart Litter Box of 2025
            </div>
            
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Never Scoop Again.</span>{' '}
              <span className="block text-brand-600 xl:inline">The Future of Cat Care.</span>
            </h1>
            
            <p className="mt-4 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              The PurrfectClean Ultra automatically cleans, neutralizes odors, and tracks your cat's health. Reclaim your time and give your pet the cleanest bathroom experience possible.
            </p>

            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center lg:justify-start">
                <button className="w-full sm:w-auto px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-brand-600 hover:bg-brand-700 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  Get Yours Now
                </button>
                <div className="text-center sm:text-left">
                  <p className="text-2xl font-bold text-gray-900">${PRODUCT_PRICE}</p>
                  <p className="text-sm text-gray-500 line-through">${PRODUCT_OLD_PRICE}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-y-2 gap-x-6 text-sm text-gray-500">
                <span className="flex items-center"><Check size={16} className="text-green-500 mr-1" /> Free Shipping</span>
                <span className="flex items-center"><Check size={16} className="text-green-500 mr-1" /> 90-Day Guarantee</span>
                <span className="flex items-center"><Check size={16} className="text-green-500 mr-1" /> 1-Year Warranty</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-3xl shadow-2xl lg:max-w-md overflow-hidden group">
              <div className="relative block w-full bg-gray-100 overflow-hidden aspect-[4/3]">
                <img 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src="https://picsum.photos/seed/catlitterhero/800/600"
                  alt="PurrfectClean Smart Litter Box"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                 <div className="flex items-center space-x-3">
                   <div className="bg-green-100 p-2 rounded-full">
                     <Check size={20} className="text-green-600"/>
                   </div>
                   <div>
                     <p className="text-xs text-gray-500 uppercase font-semibold">Status</p>
                     <p className="text-sm font-bold text-gray-800">Self-Cleaning Active</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
