import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div className="py-24 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Smarter. Cleaner. Safer.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Engineered with whisper-quiet motors and advanced sensors to provide the ultimate experience for you and your cat.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            {FEATURES.map((feature, index) => (
              <div key={index} className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-xl bg-brand-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <dt className="text-lg leading-6 font-medium text-gray-900">{feature.title}</dt>
                  <dd className="mt-2 text-base text-gray-500">{feature.description}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
