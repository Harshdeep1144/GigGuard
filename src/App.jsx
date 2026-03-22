import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Plans from './pages/Plans';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Claims from './pages/Claims';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  // Restore user session on load
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    const savedToken = localStorage.getItem('token');
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser));
      setToken(savedToken);
    }
  }, []);

  // Update theme class on HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const setAuth = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', userToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setActiveTab('login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} />;
      case 'dashboard':
        return <Dashboard />;
      case 'plans':
        return <Plans />;
      case 'about':
        return <About />;
      case 'claims':
        return <Claims />;
      case 'login':
        return <Login setAuth={setAuth} setActiveTab={setActiveTab} />;
      case 'signup':
        return <Signup setAuth={setAuth} setActiveTab={setActiveTab} />;
      case 'profile':
        return <Profile user={user} token={token} logout={logout} setUser={setUser} />;
      default:
        return <Home setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-100 text-slate-200">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        user={user} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <main className={`flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${activeTab === 'home' ? 'pt-0 pb-10' : 'py-10'}`}>
        {renderContent()}
      </main>

      <Footer />
    </div>
  );
}