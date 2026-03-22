import React from 'react';

const Card = ({ children, className = "", hover = true, interactive = false }) => {
  return (
    <div className={`
      relative rounded-3xl p-6 sm:p-8 bg-slate-900/80 backdrop-blur-xl
      border border-slate-800 shadow-xl
      transition-all duration-300 ease-out
      ${hover ? 'hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;