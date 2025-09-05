import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedGames } from './components/FeaturedGames';
import { Promotions } from './components/Promotions';
import { Providers } from './components/Providers';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleLoginClick = () => {
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setAuthModalOpen(true);
  };

  const handleAuthModeSwitch = () => {
    setAuthMode(authMode === 'login' ? 'register' : 'login');
  };

  const handleLogin = (email: string, password: string) => {
    // Demo login - just set as logged in
    console.log('Demo login:', email);
    setIsLoggedIn(true);
    setAuthModalOpen(false);
  };

  const handleCloseModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        isLoggedIn={isLoggedIn}
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <Hero />
      <FeaturedGames />
      <Promotions />
      <Providers />
      <Footer />
      <AuthModal
        isOpen={authModalOpen}
        mode={authMode}
        onClose={handleCloseModal}
        onModeSwitch={handleAuthModeSwitch}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;