import React, { useState } from 'react';
import Card from '../components/Card';
import { CheckCircle2, Zap, Shield, Sparkles, ArrowRight } from 'lucide-react';

const Plans = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');
  const [subscribingTo, setSubscribingTo] = useState(null);
  const [activePlan, setActivePlan] = useState(null);

  const handleSubscribe = (planTitle) => {
    setSubscribingTo(planTitle);
    setTimeout(() => {
      setSubscribingTo(null);
      setActivePlan(planTitle);
    }, 1500); // Simulate network delay
  };

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
      iconColor: 'text-indigo-400',
      iconBg: 'bg-indigo-500/10 border-indigo-500/20',
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
      iconColor: 'text-white',
      iconBg: 'bg-indigo-600 border-indigo-500',
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
      iconColor: 'text-purple-400',
      iconBg: 'bg-purple-500/10 border-purple-500/20',
      isFeatured: false
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12 md:space-y-16 animate-fadeIn">
      {/* Header */}
      <div className="text-center space-y-3 sm:space-y-4 pb-4 sm:pb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto px-2">Choose the protection plan that fits your gig work lifestyle. Mix and match or get everything with our Whole Package.</p>
        
        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-full mt-6 shadow-inner">
          <button
            onClick={() => setBillingPeriod('weekly')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              billingPeriod === 'weekly' 
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700' 
                : 'text-slate-500 hover:text-white'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setBillingPeriod('monthly')}
            className={`px-6 py-2 rounded-full font-bold transition-all ${
              billingPeriod === 'monthly' 
                ? 'bg-slate-800 text-white shadow-sm border border-slate-700' 
                : 'text-slate-500 hover:text-white'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {packages.map((pkg, i) => (
          <Card 
            key={i}
            className={`
              flex flex-col
              ${pkg.isFeatured ? 'ring-2 ring-indigo-500 shadow-2xl shadow-indigo-900/50 md:scale-105 md:z-10' : ''}
            `}
          >
            {/* Badge */}
            {pkg.isFeatured && (
              <div className="flex justify-center mb-6 mt-[-40px]">
                <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-100 bg-indigo-600 shadow-lg shadow-indigo-500/40 rounded-full border border-indigo-400/50">
                  Most Popular
                </span>
              </div>
            )}

            {/* Icon */}
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${pkg.isFeatured ? 'bg-indigo-600 shadow-md shadow-indigo-500/20' : pkg.iconBg}`}>
              <pkg.icon className={`w-7 h-7 ${pkg.iconColor}`} />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-extrabold text-white mb-2 tracking-tight">{pkg.title}</h3>
            <p className="text-slate-400 text-sm font-medium mb-6">
              {pkg.title === 'Rain Protection' ? 'Heavy weather coverage for gig workers' : 
               pkg.title === 'AQI Protection' ? 'Health protection from air pollution' : 
               'Everything you need for complete peace of mind'}
            </p>

            {/* Price */}
            <div className="mb-8 p-4 bg-slate-950/50 rounded-2xl border border-slate-800 shadow-inner">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white px-1 tracking-tight">{pkg.price}</span>
                <span className="text-slate-500 font-bold text-sm tracking-wide">{pkg.period}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => handleSubscribe(pkg.title)}
              disabled={subscribingTo !== null || activePlan === pkg.title}
              className={`w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 origin-center
                ${activePlan === pkg.title 
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 cursor-default shadow-none' 
                  : pkg.isFeatured 
                  ? 'bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white border border-indigo-400/30 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]' 
                  : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]'}`}
            >
              {activePlan === pkg.title ? (
                <><CheckCircle2 className="w-5 h-5" /> Enrolled</>
              ) : subscribingTo === pkg.title ? (
                <><div className="w-5 h-5 border-2 border-slate-500 border-t-white rounded-full animate-spin" /> Processing...</>
              ) : pkg.isFeatured ? (
                <>Best Value <ArrowRight className="w-4 h-4" /></>
              ) : (
                <>Subscribe <ArrowRight className="w-4 h-4" /></>
              )}
            </button>

            {/* Features List */}
            <div className="space-y-4 pt-6 border-t border-slate-800/50 flex-1">
              {pkg.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 group">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.isFeatured ? 'text-indigo-400 group-hover:text-indigo-300' : 'text-slate-500 group-hover:text-slate-400'} transition-colors`} />
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <div className="max-w-3xl mx-auto mt-16 sm:mt-20 px-2 sm:px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white tracking-tight mb-8 sm:mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { q: 'Can I combine multiple protections?', a: 'Yes! You can subscribe to Rain Protection and AQI Protection separately, or get both with our Whole Package and save up to ₹10 per month.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, bank transfers, UPI, and digital wallets securely processed through Stripe.' },
            { q: 'Can I cancel anytime?', a: 'Absolutely! You can cancel your subscription at any time with no penalties. Your coverage continues until the end of your billing period.' },
            { q: 'Is there a free trial?', a: 'Yes, all new users get a 7-day free trial with full access to all protections. No credit card required.' }
          ].map((item, i) => (
            <Card key={i} className="hover:bg-slate-800">
              <h4 className="font-bold text-slate-200 mb-2">{item.q}</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.a}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;