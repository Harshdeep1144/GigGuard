import React, { useState } from 'react';
import { Shield, Bell, Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab, userName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Dashboard', 'Plans', 'About', 'Claims'];

  const handleNavClick = (item) => {
    setActiveTab(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <nav className="border-b border-slate-800/50 bg-slate-950/40 backdrop-blur-2xl sticky top-0 z-50 shadow-lg shadow-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="h-16 sm:h-20 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-slate-950 p-2 rounded-xl">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">GigGuard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === item.toLowerCase() 
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
            <button className="relative p-2 text-slate-400 hover:text-white transition-colors hidden sm:block">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse-gentle"></span>
            </button>

            {/* User Profile */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800/50 hidden sm:flex">
              <div className="text-right">
                <p className="text-sm font-semibold text-white leading-none">{userName}</p>
                <p className="text-xs text-emerald-400 font-medium mt-1">● ACTIVE</p>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-sm font-bold text-white border border-indigo-400/30">
                {userName.split(' ').map(n => n[0]).join('')}
              </div>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-slideInDown">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === item.toLowerCase() 
                    ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;