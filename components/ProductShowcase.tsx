import React from 'react';
import { Smartphone, Wifi, Zap } from 'lucide-react';

const ProductShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Control from Anywhere
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              The PurrfectClean App gives you total control. Monitor usage, start a cleaning cycle, or check waste levels from your office or vacation spot.
            </p>

            <dl className="mt-10 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Real-time Notifications</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Get notified when the drawer is full or if any safety sensors are triggered.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <Wifi className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Wi-Fi Connected</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Connects seamlessly to your 2.4GHz home network for reliable updates.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-brand-500 text-white">
                    <Zap className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Insights Dashboard</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Track your cat's weight and bathroom frequency to spot health issues early.
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <div className="relative mx-auto rounded-3xl shadow-2xl overflow-hidden bg-gray-900 aspect-[9/16] max-w-[320px]">
               {/* Mock App UI */}
               <div className="absolute inset-0 bg-gray-800 flex flex-col">
                  {/* Status Bar */}
                  <div className="h-8 bg-gray-900 flex justify-between px-4 items-center text-white text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 p-6 text-white bg-gradient-to-b from-gray-800 to-gray-900">
                    <div className="flex justify-between items-center mb-8">
                       <h2 className="font-bold text-xl">My Devices</h2>
                       <div className="w-8 h-8 bg-brand-500 rounded-full flex items-center justify-center font-bold">L</div>
                    </div>

                    <div className="bg-gray-700/50 rounded-2xl p-6 mb-6 border border-gray-600">
                       <div className="flex justify-between items-start mb-4">
                         <div>
                           <p className="text-gray-400 text-sm">Status</p>
                           <p className="text-green-400 font-medium flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span> Ready</p>
                         </div>
                         <div className="text-right">
                           <p className="text-gray-400 text-sm">Waste Level</p>
                           <p className="text-white font-medium">15%</p>
                         </div>
                       </div>
                       <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                         <div className="bg-green-500 h-full w-[15%]"></div>
                       </div>
                    </div>

                    <div className="bg-gray-700/50 rounded-2xl p-6 border border-gray-600">
                       <p className="text-gray-400 text-sm mb-4">Recent Activity</p>
                       <div className="space-y-4">
                         <div className="flex justify-between items-center text-sm">
                           <span>Cleaning Cycle</span>
                           <span className="text-gray-400">10m ago</span>
                         </div>
                         <div className="flex justify-between items-center text-sm">
                           <span>Cat Detected (Luna)</span>
                           <span className="text-gray-400">15m ago</span>
                         </div>
                          <div className="flex justify-between items-center text-sm">
                           <span>Drawer Emptied</span>
                           <span className="text-gray-400">2d ago</span>
                         </div>
                       </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                       <button className="bg-brand-600 w-full py-3 rounded-xl font-semibold shadow-lg shadow-brand-500/20">Cycle Now</button>
                    </div>

                  </div>
               </div>
            </div>
            
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
