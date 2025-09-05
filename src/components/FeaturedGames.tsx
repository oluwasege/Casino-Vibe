import React, { useState } from 'react';
import { GameCard } from './GameCard';
import { Filter, Grid, List } from 'lucide-react';

export const FeaturedGames: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Slots', 'Table Games', 'Live Casino', 'Jackpots'];

  const games = [
    {
      id: '1',
      name: 'Mystic Fortune',
      provider: 'Demo Studios',
      category: 'Slots',
      rtp: '96.5%',
      volatility: 'High' as const,
      imageUrl: 'https://images.pexels.com/photos/6114993/pexels-photo-6114993.jpeg?auto=compress&cs=tinysrgb&w=400',
      isHot: true,
      minBet: '$0.10',
      maxBet: '$100',
    },
    {
      id: '2',
      name: 'Golden Dragon',
      provider: 'Demo Play',
      category: 'Slots',
      rtp: '95.8%',
      volatility: 'Medium' as const,
      imageUrl: 'https://images.pexels.com/photos/6114991/pexels-photo-6114991.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      minBet: '$0.20',
      maxBet: '$50',
    },
    {
      id: '3',
      name: 'Blackjack Classic',
      provider: 'Table Masters',
      category: 'Table Games',
      rtp: '99.5%',
      volatility: 'Low' as const,
      imageUrl: 'https://images.pexels.com/photos/6114988/pexels-photo-6114988.jpeg?auto=compress&cs=tinysrgb&w=400',
      minBet: '$1.00',
      maxBet: '$500',
    },
    {
      id: '4',
      name: 'Live Roulette VIP',
      provider: 'Live Studios',
      category: 'Live Casino',
      rtp: '97.3%',
      volatility: 'Medium' as const,
      imageUrl: 'https://images.pexels.com/photos/6114987/pexels-photo-6114987.jpeg?auto=compress&cs=tinysrgb&w=400',
      isHot: true,
      minBet: '$0.50',
      maxBet: '$1000',
    },
    {
      id: '5',
      name: 'Mega Fortune',
      provider: 'Jackpot Games',
      category: 'Jackpots',
      rtp: '96.4%',
      volatility: 'High' as const,
      imageUrl: 'https://images.pexels.com/photos/6114990/pexels-photo-6114990.jpeg?auto=compress&cs=tinysrgb&w=400',
      isNew: true,
      minBet: '$0.25',
      maxBet: '$125',
    },
    {
      id: '6',
      name: 'Poker Master',
      provider: 'Card Kings',
      category: 'Table Games',
      rtp: '98.9%',
      volatility: 'Low' as const,
      imageUrl: 'https://images.pexels.com/photos/6114989/pexels-photo-6114989.jpeg?auto=compress&cs=tinysrgb&w=400',
      minBet: '$2.00',
      maxBet: '$200',
    },
  ];

  const filteredGames = selectedCategory === 'All' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-yellow-400">Games</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover our most popular demo games across all categories
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 text-sm">View:</span>
            <div className="flex bg-gray-800 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-l-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-r-lg transition-colors ${
                  viewMode === 'list' ? 'bg-yellow-400 text-gray-900' : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1 sm:grid-cols-2'
        }`}>
          {filteredGames.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
            Load More Games
          </button>
        </div>
      </div>
    </section>
  );
};