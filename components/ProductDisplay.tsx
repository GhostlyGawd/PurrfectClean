import React, { useState } from 'react';
import { Star, ShoppingCart, Minus, Plus, Check, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCT_NAME, PRODUCT_PRICE, PRODUCT_OLD_PRICE, PRODUCT_IMAGES } from '../constants';

const ProductDisplay: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
     setQuantity(prev => Math.max(1, prev + delta));
  };

  return (
    <div className="bg-white pt-6 pb-16 lg:pt-12 lg:pb-24">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
            {/* Image Gallery */}
            <div className="flex flex-col space-y-4">
               {/* Main Image */}
               <div className="aspect-square w-full rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 relative group">
                  <img
                    src={PRODUCT_IMAGES[selectedImage]}
                    alt={PRODUCT_NAME}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                    Best Seller
                  </div>
               </div>
               {/* Thumbnails */}
               <div className="grid grid-cols-4 gap-4">
                  {PRODUCT_IMAGES.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden bg-gray-50 border-2 transition-all ${selectedImage === idx ? 'border-brand-600 ring-2 ring-brand-100' : 'border-transparent hover:border-gray-200'}`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
               </div>
            </div>

            {/* Product Info */}
            <div className="mt-10 px-0 sm:mt-16 sm:px-0 lg:mt-0">
               <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{PRODUCT_NAME}</h1>

               {/* Reviews */}
               <div className="mt-4 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
                 <div className="flex items-center">
                   {[0, 1, 2, 3, 4].map((rating) => (
                     <Star
                       key={rating}
                       className="text-yellow-400 h-5 w-5 fill-yellow-400"
                     />
                   ))}
                 </div>
                 <p className="ml-3 text-sm text-gray-500 font-medium">4.9 (1,240 Reviews)</p>
               </div>

               {/* Price */}
               <div className="mt-6 flex items-baseline space-x-3">
                 <p className="text-4xl font-extrabold text-gray-900">${PRODUCT_PRICE}</p>
                 <p className="text-xl text-gray-400 line-through">${PRODUCT_OLD_PRICE}</p>
                 <span className="text-green-700 font-bold text-xs uppercase tracking-wide bg-green-100 px-2 py-1 rounded-md">Save ${(PRODUCT_OLD_PRICE - PRODUCT_PRICE).toFixed(0)}</span>
               </div>

               <div className="mt-6 space-y-6">
                 <p className="text-base text-gray-600 leading-relaxed">
                   Experience the future of pet care with the {PRODUCT_NAME}. Designed for modern homes, it automatically separates waste, monitors your cat's health via our app, and eliminates odors completely. It's not just a litter box; it's freedom from scooping.
                 </p>
               </div>

               {/* Quick Features */}
               <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                 <div className="flex items-center text-sm text-gray-600">
                    <Truck className="h-5 w-5 text-brand-500 mr-2" /> Free 2-Day Shipping
                 </div>
                 <div className="flex items-center text-sm text-gray-600">
                    <ShieldCheck className="h-5 w-5 text-brand-500 mr-2" /> 1-Year Warranty Included
                 </div>
                 <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-5 w-5 text-brand-500 mr-2" /> 90-Day Money Back
                 </div>
                 <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-5 w-5 text-brand-500 mr-2" /> Works with Clumping Litter
                 </div>
               </div>

               {/* Add to Cart Section */}
               <div className="mt-10 border-t border-gray-100 pt-10">
                 <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-gray-900">Quantity</span>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button 
                        onClick={() => handleQuantityChange(-1)} 
                        className="p-3 hover:bg-gray-50 text-gray-600 transition-colors rounded-l-lg"
                        disabled={quantity <= 1}
                      >
                        <Minus size={16}/>
                      </button>
                      <span className="px-4 py-2 font-medium text-gray-900 min-w-[3rem] text-center">{quantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(1)} 
                        className="p-3 hover:bg-gray-50 text-gray-600 transition-colors rounded-r-lg"
                      >
                        <Plus size={16}/>
                      </button>
                    </div>
                 </div>

                 <button
                   type="button"
                   className="w-full bg-brand-600 border border-transparent rounded-full py-4 px-8 flex items-center justify-center text-base font-bold text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                 >
                   <ShoppingCart className="mr-2 h-5 w-5" />
                   Add to Cart - ${(PRODUCT_PRICE * quantity).toFixed(2)}
                 </button>
                 <div className="mt-4 flex justify-center items-center space-x-2 text-xs text-gray-500">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                   <p>High demand! Only 14 units left in stock.</p>
                 </div>
               </div>
            </div>
         </div>
       </div>
    </div>
  );
};

export default ProductDisplay;