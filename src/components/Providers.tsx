import React from 'react';

export const Providers: React.FC = () => {
  const providers = [
    { name: 'Demo Studios', logo: '🎰' },
    { name: 'Virtual Games', logo: '🎲' },
    { name: 'Test Provider', logo: '🃏' },
    { name: 'Mock Gaming', logo: '🎯' },
    { name: 'Sample Slots', logo: '🎊' },
    { name: 'Demo Live', logo: '📺' },
    { name: 'Test Table', logo: '♠️' },
    { name: 'Mock Sports', logo: '⚽' },
  ];

  return (
    <section className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            Demo Game <span className="text-yellow-400">Providers</span>
          </h3>
          <p className="text-gray-400">Featuring games from leading demo providers</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-700 transition-colors group"
            >
              <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">
                {provider.logo}
              </div>
              <div className="text-gray-300 text-sm font-medium">{provider.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};