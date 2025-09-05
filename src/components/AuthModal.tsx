import React, { useState } from 'react';
import { X, Eye, EyeOff, AlertTriangle } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  mode: 'login' | 'register';
  onClose: () => void;
  onModeSwitch: () => void;
  onLogin: (email: string, password: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  mode,
  onClose,
  onModeSwitch,
  onLogin,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      onLogin(email, password);
    } else {
      // Registration logic would go here
      console.log('Demo registration attempt');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-2xl font-bold text-white">
            {mode === 'login' ? 'Demo Login' : 'Demo Registration'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Demo Warning */}
        <div className="m-6 bg-yellow-600 border border-yellow-500 rounded-lg p-4">
          <div className="flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-100 mr-2" />
            <span className="text-yellow-100 text-sm font-semibold">Demo Only</span>
          </div>
          <p className="text-yellow-100 text-xs mt-1">
            This is a demonstration. No real accounts are created or real money transactions processed.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent pr-10"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Confirm Password for Registration */}
            {mode === 'register' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            {/* Age Confirmation for Registration */}
            {mode === 'register' && (
              <div className="space-y-3">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="ageConfirmed"
                    checked={ageConfirmed}
                    onChange={(e) => setAgeConfirmed(e.target.checked)}
                    className="mt-1 rounded border-gray-600 bg-gray-800 text-yellow-400 focus:ring-yellow-400"
                    required
                  />
                  <label htmlFor="ageConfirmed" className="ml-2 text-sm text-gray-300">
                    I confirm that I am 18 years of age or older (Demo purposes only)
                  </label>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="termsAccepted"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 rounded border-gray-600 bg-gray-800 text-yellow-400 focus:ring-yellow-400"
                    required
                  />
                  <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-300">
                    I accept the <a href="#" className="text-yellow-400 hover:underline">Demo Terms</a> and{' '}
                    <a href="#" className="text-yellow-400 hover:underline">Demo Privacy Policy</a>
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-3 px-4 rounded-lg font-semibold transition-colors mt-6"
            disabled={mode === 'register' && (!ageConfirmed || !termsAccepted)}
          >
            {mode === 'login' ? 'Demo Login' : 'Create Demo Account'}
          </button>

          {/* Mode Switch */}
          <div className="text-center mt-4">
            <span className="text-gray-400 text-sm">
              {mode === 'login' ? "Don't have a demo account?" : 'Already have a demo account?'}
            </span>
            <button
              type="button"
              onClick={onModeSwitch}
              className="text-yellow-400 hover:underline text-sm ml-1"
            >
              {mode === 'login' ? 'Create Demo Account' : 'Demo Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};