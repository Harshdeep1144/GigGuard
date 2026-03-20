import React from 'react';
import Card from '../components/Card';
import { Target, Users, ShieldCheck, Zap, BarChart3, Brain } from 'lucide-react';

const About = () => {
  const values = [
    { 
      title: "Parametric Insurance", 
      desc: "No lengthy claim processes. If our AI detects a platform disruption, you get paid automatically.", 
      icon: Target,
      color: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400"
    },
    { 
      title: "Community-Driven", 
      desc: "Built by gig workers, for gig workers. We understand your challenges firsthand.", 
      icon: Users,
      color: "from-emerald-500/20 to-emerald-600/10",
      iconColor: "text-emerald-400"
    },
    { 
      title: "Bank-Level Security", 
      desc: "Military-grade encryption with zero access to your personal data. Only API integration.", 
      icon: ShieldCheck,
      color: "from-purple-500/20 to-purple-600/10",
      iconColor: "text-purple-400"
    }
  ];

  const features = [
    { title: "AI-Powered", desc: "Real-time disruption detection", icon: Brain },
    { title: "Multi-Platform", desc: "Uber, DoorDash, Lyft & more", icon: BarChart3 },
    { title: "Instant Payouts", desc: "Money in your account within 1 hour", icon: Zap }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 md:space-y-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="text-center space-y-4 sm:space-y-6 py-6 sm:py-10 md:py-12 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white\">Protecting Your Hustle</h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Gig workers are the backbone of the modern economy, yet they face the most volatility. 
          <span className="text-indigo-400 font-semibold"> GigGuard</span> was founded to turn that volatility 
          into <span className="text-emerald-400 font-semibold">predictable, reliable protection.</span>
        </p>
      </section>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {values.map((item, i) => (
          <Card 
            key={i} 
            className={`bg-gradient-to-br ${item.color} border-l-4`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-slate-800/50">
                <item.icon className={`w-6 h-6 ${item.iconColor}`} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">{item.desc}</p>
          </Card>
        ))}
      </div>

      {/* The GigGuard Difference */}
      <Card className="bg-gradient-to-br from-indigo-600/15 to-purple-600/15 border-indigo-500/30 border-l-4 border-l-indigo-500 p-6 sm:p-8 md:p-10">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl font-bold text-white">Why GigGuard is Different</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-indigo-300 text-sm uppercase tracking-widest">Traditional Insurance</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>❌ Long claims process (weeks)</li>
                <li>❌ Requires documentation</li>
                <li>❌ Doesn't understand gig economy</li>
                <li>❌ Limited coverage</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-emerald-300 text-sm uppercase tracking-widest">GigGuard</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ Instant payouts (1 hour)</li>
                <li>✓ Zero paperwork required</li>
                <li>✓ Built for the gig economy</li>
                <li>✓ Comprehensive AI protection</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-300 pt-4 border-t border-slate-700/30">
            We don't ask for papers or medical records. We look at your platform APIs. We correlate weather patterns, traffic conditions, and platform status in real-time to protect your income <span className="font-semibold text-white">automatically.</span>
          </p>
        </div>
      </Card>

      {/* How It Works */}
      <section className="space-y-8 sm:space-y-10 md:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white\">How GigGuard Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {[
            {
              step: "01",
              title: "Connect Your Platforms",
              desc: "Link your Uber, DoorDash, or other gig accounts securely via encrypted API."
            },
            {
              step: "02",
              title: "AI Monitors 24/7",
              desc: "Our AI analyzes weather, traffic, and platform status in real-time."
            },
            {
              step: "03",
              title: "Get Protected",
              desc: "When disruption is detected, protection triggers automatically and you get paid."
            }
          ].map((item, i) => (
            <Card key={i} className="text-center">
              <span className="text-5xl font-black text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">{item.step}</span>
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-8 sm:space-y-10 md:space-y-12\">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white\">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, i) => (
            <Card key={i} className="flex flex-col items-center text-center">
              <div className="p-4 rounded-xl bg-slate-800/50 mb-4">
                <feature.icon className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <Card className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 border-indigo-500/30 text-center p-8 sm:p-12 md:p-16\">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4\">Ready to Protect Your Income?</h2>
        <p className="text-base sm:text-lg text-slate-400 mb-6 sm:mb-8 max-w-xl mx-auto px-2\">Join thousands of gig workers already using GigGuard for peace of mind.</p>
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-purple-500 transition-all">
          Start Your Free 14-Day Trial
        </button>
      </Card>
    </div>
  );
};

export default About;