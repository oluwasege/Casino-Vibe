import React from 'react';
import { Gift, Clock, Users, Trophy } from 'lucide-react';

export const Promotions: React.FC = () => {
  const promotions = [
    {
      id: '1',
      title: 'Welcome Demo Bonus',
      description: 'Get 1000 demo credits to explore our games',
      badge: 'New Players',
      icon: <Gift className="w-6 h-6" />,
      color: 'from-yellow-400 to-yellow-600',
      cta: 'Claim Demo Credits',
    },
    {
      id: '2',
      title: 'Daily Demo Spins',
      description: '50 free demo spins every day on selected slots',
      badge: 'Daily',
      icon: <Clock className="w-6 h-6" />,
      color: 'from-green-400 to-green-600',
      cta: 'Get Free Spins',
    },
    {
      id: '3',
      title: 'Demo Tournament',
      description: 'Compete in weekly demo tournaments for prizes',
      badge: 'Tournament',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-purple-400 to-purple-600',
      cta: 'Join Tournament',
    },
    {
      id: '4',
      title: 'VIP Demo Program',
      description: 'Exclusive demo features and priority support',
      badge: 'VIP',
      icon: <Users className="w-6 h-6" />,
      color: 'from-red-400 to-red-600',
      cta: 'Learn More',
    },
  ];

  return (
    <section className="bg-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Demo <span className="text-yellow-400">Promotions</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Enjoy our demonstration promotions - experience the full casino experience without real money
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className={`bg-gradient-to-r ${promo.color} p-4`}>
                <div className="flex items-center justify-between mb-2">
                  {promo.icon}
                  <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-xs font-semibold">
                    {promo.badge}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg">{promo.title}</h3>
              </div>
              
              <div className="p-4">
                <p className="text-gray-300 text-sm mb-4">{promo.description}</p>
                <button className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-4 rounded-lg text-sm font-semibold transition-colors">
                  {promo.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Notice */}
        <div className="bg-blue-900 border border-blue-700 rounded-lg p-6 text-center">
          <h3 className="text-blue-300 font-semibold text-lg mb-2">Demo Promotions Only</h3>
          <p className="text-blue-200 text-sm">
            These are demonstration promotions to showcase functionality. No real money or prizes are awarded.
            All promotions are for educational and demonstration purposes only.
          </p>
        </div>
      </div>
    </section>
  );
};