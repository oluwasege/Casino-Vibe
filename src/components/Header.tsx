import React, { useState } from 'react';
import { Search, Menu, X, User, Wallet, Settings } from 'lucide-react';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                <span className="text-yellow-400">Demo</span>Casino
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Slots
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Table Games
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Live Casino
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Sports
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Promotions
              </a>
            </div>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-600 rounded-md leading-5 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 sm:text-sm"
                placeholder="Search games..."
              />
            </div>

            {/* User Actions */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-white hover:text-yellow-400 transition-colors"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block">Account</span>
                </button>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      <Wallet className="h-4 w-4 mr-3" />
                      Wallet
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      <Settings className="h-4 w-4 mr-3" />
                      Settings
                    </a>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button
                  onClick={onLoginClick}
                  className="text-white hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={onRegisterClick}
                  className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Register
                </button>
              </div>
            )}

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Slots
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Table Games
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Live Casino
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Sports
            </a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Promotions
            </a>
          </div>
        </div>
      )}
    </header>
  );
};