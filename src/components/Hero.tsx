import React from 'react';
import { Play, Gift, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="text-center">
          {/* Demo Notice */}
          <div className="mb-8 inline-block bg-red-600 text-white px-6 py-3 rounded-lg border border-red-500">
            <p className="text-sm font-semibold">🚨 DEMO ONLY - NO REAL MONEY GAMBLING 🚨</p>
            <p className="text-xs mt-1">This is an educational demonstration. No real money transactions.</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            The Ultimate <span className="text-yellow-400">Gaming</span> Experience
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover thousands of premium slots, live dealer games, and sports betting - all in one place.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Play className="inline-block w-5 h-5 mr-2" />
              Play Demo Games
            </button>
            <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              <Gift className="inline-block w-5 h-5 mr-2" />
              View Promotions
            </button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-gray-300">Demo Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-gray-300">Live Tables</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Demo Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 -left-4 w-16 h-16 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-yellow-400 rounded-full opacity-10 animate-pulse delay-2000"></div>
      </div>
    </div>
  );
};