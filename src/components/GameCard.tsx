import React from 'react';
import { Play, Star, TrendingUp } from 'lucide-react';

interface GameCardProps {
  id: string;
  name: string;
  provider: string;
  category: string;
  rtp: string;
  volatility: 'Low' | 'Medium' | 'High';
  imageUrl: string;
  isHot?: boolean;
  isNew?: boolean;
  minBet: string;
  maxBet: string;
}

export const GameCard: React.FC<GameCardProps> = ({
  name,
  provider,
  category,
  rtp,
  volatility,
  imageUrl,
  isHot,
  isNew,
  minBet,
  maxBet,
}) => {
  const volatilityColor = {
    Low: 'text-green-400',
    Medium: 'text-yellow-400',
    High: 'text-red-400',
  }[volatility];

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-48 object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center">
            <button className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-6 py-3 rounded-lg text-sm font-semibold transition-colors mb-3 flex items-center">
              <Play className="w-4 h-4 mr-2" />
              Demo Play
            </button>
            <p className="text-white text-xs">No real money - Demo only</p>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-1">
          {isHot && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" />
              HOT
            </span>
          )}
          {isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
              NEW
            </span>
          )}
        </div>

        {/* RTP Badge */}
        <div className="absolute top-2 right-2">
          <span className="bg-gray-900 bg-opacity-75 text-yellow-400 px-2 py-1 rounded text-xs font-semibold">
            RTP {rtp}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg mb-1 truncate">{name}</h3>
        <p className="text-gray-400 text-sm mb-3">{provider}</p>
        
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-300 text-xs">{category}</span>
          <span className={`text-xs font-semibold ${volatilityColor}`}>
            {volatility} Vol.
          </span>
        </div>

        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>Min: {minBet}</span>
          <span>Max: {maxBet}</span>
        </div>
      </div>
    </div>
  );
};