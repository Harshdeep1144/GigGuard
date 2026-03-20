import React from 'react';
import { Shield, Twitter, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-slate-800/50 bg-gradient-to-b from-slate-900/50 to-slate-950">
      {/* Newsletter CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16">
        <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border border-indigo-500/20 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-14">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-slate-400">Get real-time alerts about disruptions affecting your income.</p>
            </div>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all flex items-center gap-2">
                <span className="hidden sm:inline">Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white">GigGuard</span>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              AI-powered parametric income protection for independent workers.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
                { icon: Github, label: 'GitHub' },
                { icon: Mail, label: 'Email' }
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="p-2 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-indigo-600/20 hover:text-indigo-400 transition-all duration-300"
                  title={label}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-3 text-sm">
              {['How it works', 'Pricing', 'API Access', 'Dashboard'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About Us', 'Blog', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/50 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs text-slate-500">© {currentYear} GigGuard. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-gentle"></span>
            <span>System Status: Nominal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;