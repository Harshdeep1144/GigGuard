import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import About from './pages/About';

/**
 * Harsh Deep's GigGuard Application Entry Point
 * Handles Page Navigation Routing via State
 */

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userName] = useState('Harsh Deep');

  // Simple Router Implementation
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'plans':
        return <Plans />;
      case 'about':
        return <About />;
      case 'claims':
        return (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold text-white">Claims Engine</h2>
            <p className="text-slate-500 mt-2">No active claims found. AI monitoring is active.</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        userName={userName} 
      />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}