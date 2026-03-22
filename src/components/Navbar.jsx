import React, { useState, useRef, useEffect } from 'react';
import { Shield, Bell, Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 70) {
        setIsVisible(false);
        setIsNotificationsOpen(false);
        setIsOpen(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [notificationsRef]);

  const notifications = [
    { id: 1, title: 'Storm Alert', message: 'Heavy rain expected in your zone within 45 mins. Protection thresholds activated.', time: '10m ago', type: 'warning' },
    { id: 2, title: 'Payout Processed', message: 'Your instant income protection payout of ₹250 was successful.', time: '1h ago', type: 'success' },
    { id: 3, title: 'Protection Active', message: 'AQI Protection tracking is active for the next 8 hours.', time: '3h ago', type: 'info' }
  ];

  const navItems = ['Home', 'Dashboard', 'Plans', 'Claims'];

  const handleNavClick = (item) => {
    setActiveTab(item.toLowerCase());
    setIsOpen(false);
  };

  return (
    <nav className={`border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="h-16 sm:h-20 flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer group"
            onClick={() => handleNavClick('Home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
              <div className="relative bg-slate-900 border border-slate-700 p-2 rounded-xl shadow-md">
                <Shield className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-indigo-400 transition-colors">GigGuard</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 active:scale-[0.96] overflow-hidden group ${
                    isActive
                      ? 'text-indigo-300' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {/* Hover background for inactive */}
                  <span className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${!isActive ? 'opacity-0 group-hover:opacity-100 bg-slate-800/60' : 'opacity-0'}`} />
                  
                  {/* Active background */}
                  <span 
                    className={`absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  />
                  
                  {/* Text content */}
                  <span className="relative z-10">{item}</span>
                  
                  {/* Active bottom indicator */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-400 rounded-t-full shadow-[0_-2px_10px_rgba(99,102,241,0.8)] transition-all duration-500 ${
                      isActive ? 'w-1/2 opacity-100' : 'w-0 opacity-0'
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            {/* Notification Bell */}
           {user && (
             <div className="relative hidden sm:block" ref={notificationsRef}>
               <button 
                 onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                 className={`relative p-2.5 transition-colors focus:outline-none rounded-xl ${isNotificationsOpen ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
               >
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse-gentle shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
               </button>

               {isNotificationsOpen && (
                 <div className="absolute right-0 mt-3 w-80 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden z-50 animate-fadeIn origin-top-right transition transform">
                   <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/30">
                     <h3 className="text-sm font-bold text-white">Notifications</h3>
                     <span className="text-xs text-indigo-300 bg-indigo-500/20 px-2.5 py-1 rounded-full font-bold border border-indigo-500/30">3 New</span>
                   </div>
                   <div className="max-h-[320px] overflow-y-auto custom-scrollbar">
                     {notifications.map(notif => (
                       <div key={notif.id} className="p-4 border-b border-slate-800/50 hover:bg-slate-800/60 transition cursor-pointer group">
                         <div className="flex items-start gap-3">
                           <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(0,0,0,0.5)] ${
                             notif.type === 'warning' ? 'bg-amber-500 shadow-amber-500/50' : 
                             notif.type === 'success' ? 'bg-emerald-500 shadow-emerald-500/50' : 'bg-blue-500 shadow-blue-500/50'
                           }`} />
                           <div>
                             <h4 className="text-sm font-bold text-slate-200 group-hover:text-indigo-400 transition-colors">{notif.title}</h4>
                             <p className="text-xs text-slate-400 mt-1 leading-relaxed font-medium">{notif.message}</p>
                             <p className="text-[10px] text-slate-500 mt-2 font-bold uppercase tracking-wider">{notif.time}</p>
                           </div>
                         </div>
                       </div>
                     ))}
                   </div>
                   <div 
                      className="p-3 text-center bg-slate-950/80 border-t border-slate-800 hover:bg-slate-800 cursor-pointer transition"
                      onClick={() => setIsNotificationsOpen(false)}
                   >
                     <span className="text-sm text-indigo-400 font-bold hover:text-indigo-300">Mark all as read</span>
                   </div>
                 </div>
               )}
             </div>
           )}

            {/* Auth/Profile Section */}
            <div className="hidden sm:flex items-center gap-3 pl-4 border-l border-slate-800/50">
              {user ? (
                <div 
                  className="flex items-center gap-3 cursor-pointer group transition-all"
                  onClick={() => handleNavClick('profile')}
                >
                  <div className="text-right group-hover:opacity-80">
                    <p className="text-sm font-bold text-white leading-none">{user.name}</p>
                    <p className="text-xs text-emerald-400 font-bold mt-1 tracking-wider">● ACTIVE</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-white shadow-md group-hover:border-indigo-500/50 transition-colors">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button 
                    onClick={() => handleNavClick('login')}
                    className="px-4 py-2.5 text-sm font-bold text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-xl transition-colors"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => handleNavClick('signup')}
                    className="px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl border border-indigo-400/30 shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] active:scale-95 transition-all duration-300"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 animate-slideInDown border-t border-slate-800/50 pt-4 mt-2">
            <div className="space-y-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.toLowerCase();
                return (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className={`relative block w-full text-left px-4 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 active:scale-[0.98] overflow-hidden group ${
                      isActive
                        ? 'text-indigo-300' 
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {/* Hover background for inactive */}
                    <span className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${!isActive ? 'opacity-0 group-hover:opacity-100 bg-slate-800/40' : 'opacity-0'}`} />
                    
                    {/* Active background */}
                    <span 
                      className={`absolute inset-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    
                    <div className="relative z-10 flex items-center justify-between">
                      <span>{item}</span>
                      
                      {/* Active indicator dot */}
                      <span 
                        className={`w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)] transition-all duration-300 ${
                          isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-slate-800/50 pt-4 px-4">
              {user ? (
                <button 
                  onClick={() => handleNavClick('profile')}
                  className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-slate-800/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lg font-bold text-white">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-white">{user.name}</p>
                    <p className="text-xs font-semibold text-slate-400">View Profile & Settings</p>
                  </div>
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleNavClick('login')}
                    className="w-full px-4 py-3 text-sm font-bold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => handleNavClick('signup')}
                    className="w-full px-4 py-3 text-sm font-bold bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl border border-indigo-400/30 shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] active:scale-95 transition-all duration-300"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;