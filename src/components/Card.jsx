import React from 'react';

const Card = ({ children, className = "", hover = true, interactive = false }) => {
  return (
    <div className={`
      relative rounded-2xl p-6 sm:p-8 backdrop-blur-xl
      bg-slate-900/40 border border-slate-800/60
      transition-all duration-500 ease-out
      ${hover ? 'hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;