import React from 'react';
import { Shield, Clock, Users, Phone, Mail, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      {/* Responsible Gaming Banner */}
      <div className="bg-red-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center">
            <Shield className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">
              DEMO ONLY - 18+ - GAMBLE RESPONSIBLY - NO REAL MONEY GAMBLING
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              <span className="text-yellow-400">Demo</span>Casino
            </div>
            <p className="text-gray-400 text-sm mb-4">
              A demonstration casino website for educational purposes only. 
              No real money gambling occurs on this site.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 p-2 rounded">
                <Shield className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <Clock className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="bg-gray-800 p-2 rounded">
                <Users className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Demo Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Demo Promotions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Demo Tournament</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Demo VIP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Responsible Gaming */}
          <div>
            <h3 className="text-white font-semibold mb-4">Demo Responsible Gaming</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Demo Limits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Self Assessment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Problem Gambling</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Educational Resources</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Support Organizations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Demo Support</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                Demo: 1-800-DEMO (24/7)
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                demo@democasino.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MessageCircle className="w-4 h-4 mr-2" />
                Live Demo Chat
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="text-white text-sm font-semibold mb-2">Demo Certifications</h4>
              <div className="flex space-x-2">
                <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-400">DEMO-CERT</div>
                <div className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-400">TEST-LIC</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DemoCasino. All rights reserved. This is a demonstration website only.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Demo Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};