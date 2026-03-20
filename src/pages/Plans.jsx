import React, { useState } from 'react';
import Card from '../components/Card';
import { CheckCircle2, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const packages = [
    { 
      title: 'Rain Protection', 
      price: billingPeriod === 'monthly' ? '₹120' : '₹30',
      period: billingPeriod === 'monthly' ? '/month' : '/week',
      icon: Zap, 
      features: [
        'Heavy Rain Coverage',
        'Outage Protection',
        'Weather Alerts',
        'Basic Dashboard',
        'Email Support'
      ],
      color: 'from-blue-500/10 to-blue-600/5',
      borderColor: 'border-blue-500/20',
      isFeatured: false
    },
    { 
      title: 'Whole Package', 
      price: billingPeriod === 'monthly' ? '₹200-280' : '₹50-70',
      period: billingPeriod === 'monthly' ? '/month' : '/week',
      icon: Sparkles, 
      features: [
        'Rain Protection',
        'AQI Protection',
        'Vehicle Breakdown Coverage',
        'Short-term Illness Protection',
        'Instant Payouts',
        'Priority AI Support',
        'Advanced Analytics',
        'API Access'
      ],
      color: 'from-indigo-500/20 to-purple-600/10',
      borderColor: 'border-indigo-500/50',
      isFeatured: true
    },
    { 
      title: 'AQI Protection', 
      price: billingPeriod === 'monthly' ? '₹80' : '₹20',
      period: billingPeriod === 'monthly' ? '/month' : '/week',
      icon: Shield, 
      features: [
        'Air Quality Index Monitoring',
        'Pollution Alerts',
        'Health Recommendations',
        'Daily AQI Reports',
        'Email Support'
      ],
      color: 'from-purple-500/10 to-pink-600/5',
      borderColor: 'border-purple-500/20',
      isFeatured: false
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12 md:space-y-16 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 pb-4 sm:pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">Simple, Transparent Pricing</h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-2">Choose the protection plan that fits your gig work lifestyle. Mix and match or get everything with our Whole Package.</p>
        
        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-4 p-1 bg-slate-800/50 border border-slate-700/50 rounded-full mt-6 sm:mt-8 md:mt-10">
          <button
            onClick={() => setBillingPeriod('weekly')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingPeriod === 'weekly' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              billingPeriod === 'monthly' 
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {packages.map((pkg, i) => (
          <Card 
            key={i}
            className={`
              flex flex-col bg-gradient-to-br ${pkg.color}
              ${pkg.borderColor}
              ${pkg.isFeatured ? 'ring-2 ring-indigo-500/30 md:scale-105 md:z-10' : ''}
            `}
          >
            {/* Badge */}
            {pkg.isFeatured && (
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest text-indigo-300 bg-indigo-500/20 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            {/* Icon */}
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${pkg.isFeatured ? 'bg-indigo-500/30' : 'bg-slate-800/50'}`}>
              <pkg.icon className={`w-6 h-6 ${pkg.isFeatured ? 'text-indigo-400' : 'text-slate-400'}`} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-1">{pkg.title}</h3>
            <p className="text-slate-400 text-sm mb-6">
              {pkg.title === 'Rain Protection' ? 'Heavy weather coverage for gig workers' : 
               pkg.title === 'AQI Protection' ? 'Health protection from air pollution' : 
               'Everything you need for complete protection'}
            </p>

            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">{pkg.price}</span>
                <span className="text-slate-400 text-sm">{pkg.period}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button className={`
              w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 mb-8
              ${pkg.isFeatured
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/30'
                : 'bg-slate-800/50 text-slate-200 border border-slate-700/50 hover:bg-slate-700/50 hover:border-slate-600/50'
              }
            `}>
              {pkg.isFeatured ? 'Best Value' : 'Subscribe'}
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Features List */}
            <div className="space-y-3 pt-8 border-t border-slate-700/30 flex-1">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.isFeatured ? 'text-indigo-400' : 'text-emerald-500'}`} />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-12 sm:mt-16 md:mt-20 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-6 sm:mb-8 md:mb-12">Frequently Asked Questions</h2>
        <div className="space-y-3 sm:space-y-4">
          {[
            { q: 'Can I combine multiple protections?', a: 'Yes! You can subscribe to Rain Protection and AQI Protection separately, or get both with our Whole Package and save up to ₹10 per month.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, bank transfers, UPI, and digital wallets.' },
            { q: 'Can I cancel anytime?', a: 'Absolutely! You can cancel your subscription at any time with no penalties. Your coverage continues until the end of your billing period.' },
            { q: 'Is there a free trial?', a: 'Yes, all new users get a 7-day free trial with full access to all protections.' }
          ].map((item, i) => (
            <Card key={i}>
              <h4 className="font-semibold text-white mb-2">{item.q}</h4>
              <p className="text-slate-400 text-sm">{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;