import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="bg-brand-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Loved by 10,000+ Cats
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            (And their humans too)
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-sm p-8 transition-transform hover:-translate-y-1 duration-300">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 min-h-[80px]">"{review.text}"</p>
              <div className="flex items-center">
                <img className="h-10 w-10 rounded-full object-cover" src={review.avatar} alt={review.author} />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{review.author}</p>
                  <p className="text-sm text-gray-500">Verified Buyer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
