import React from 'react';
import Card from '../components/Card';
import { Shield, Zap, TrendingUp, CloudRain, Wind, Activity, ArrowRight, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export default function Home({ setActiveTab }) {
  return (
    <div className="space-y-16 sm:space-y-20 pb-12 animate-fadeIn">
      
      {/* Hero Section */}
      <div className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center w-full pt-16 lg:pt-20">
        {/* Decorative background glows bleeding into margins */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-0 right-10 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 space-y-8 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter max-w-4xl mx-auto leading-tight">
            Gig Work is Unpredictable. <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-400">Your Income Shouldn't Be.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
            AI-powered parametric insurance that pays you instantly and automatically when bad weather, severe AQI outbreaks, or platform outages disrupt your daily earnings.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <button 
                onClick={() => setActiveTab('signup')}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-bold border border-indigo-400/30 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group text-base"
            >
              Get Protected Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
                onClick={() => setActiveTab('plans')}
                className="w-full sm:w-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl font-bold shadow-lg transition-all flex items-center justify-center hover:-translate-y-1 text-base"
            >
              View Coverages
            </button>
          </div>

          <div className="pt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-bold text-slate-500">
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> No manual claims</span>
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Instant payouts via UPI</span>
             <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500"/> Starts at ₹20/week</span>
          </div>
        </div>
      </div>

      {/* Risks We Cover */}
      <div className="space-y-12 relative z-10">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">Coverage Built for the Streets</h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto">Our AI constantly monitors environmental and digital factors to trigger your payouts.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-4">
          <Card className="hover:border-blue-500/50 hover:shadow-blue-500/10 group">
            <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex flex-col items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <CloudRain className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Severe Weather</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              When heavy rain or flooding prevents you from completing rides or deliveries, our weather Oracles trigger your lost income compensation instantly.
            </p>
          </Card>
          
          <Card className="hover:border-purple-500/50 hover:shadow-purple-500/10 group">
            <div className="w-14 h-14 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex flex-col items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-colors">
              <Wind className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Hazardous AQI</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              Air Quality Index (AQI) thresholds trigger automatic health compensation if you're forced to stop working to protect your lungs in polluted metros.
            </p>
          </Card>

          <Card className="hover:border-amber-500/50 hover:shadow-amber-500/10 group">
            <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-2xl flex flex-col items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <Activity className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Platform Outages</h3>
            <p className="text-slate-400 font-medium leading-relaxed">
              If Uber, Swiggy, or Zomato servers go down, you aren't left stranded without pay. We monitor platform status APIs and credit you for downtime.
            </p>
          </Card>
        </div>
      </div>

      {/* How It Works Layer */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden backdrop-blur-sm">
         <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-900/0 to-slate-900/0"></div>
         
         <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Parametric Insurance, Explained.</h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                Traditional insurance requires filing a claim, arguing with adjusters, and waiting weeks for money. GigGuard is <strong>Parametric</strong>—meaning payouts are triggered automatically by predefined data sources.
              </p>
              
              <div className="space-y-6">
                 {[
                   {icon: Shield, title: "1. Connect Your Scope", desc: "Select which city you operate in and which platforms you rely on for income."},
                   {icon: Zap, title: "2. Real-Time Monitoring", desc: "Our AI scans meteorological data and server statuses 24/7."},
                   {icon: Clock, title: "3. Wait 10 Minutes", desc: "When a disruption occurs, the trigger is verified. Money arrives in your wallet immediately."}
                 ].map((step, idx) => {
                   const Icon = step.icon;
                   return (
                   <div key={idx} className="flex gap-4">
                     <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-indigo-400 flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-5 h-5" />
                     </div>
                     <div>
                       <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
                       <p className="text-slate-400 font-medium">{step.desc}</p>
                     </div>
                   </div>
                   )
                 })}
              </div>
            </div>

            {/* Visual Dashboard Demo */}
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20"></div>
               <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 relative z-10 shadow-2xl overflow-hidden shadow-black/60">
                  <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                     <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                     <span className="text-xs text-slate-500 font-mono ml-2 font-bold uppercase">AI Processing Network</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex justify-between items-center opacity-70">
                       <div className="flex gap-3 items-center">
                          <Activity className="w-5 h-5 text-indigo-400" />
                          <div><p className="text-sm font-bold text-slate-300">Evaluating Weather APIS...</p><p className="text-xs text-slate-500 font-mono">200 OK</p></div>
                       </div>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-xl flex justify-between items-center relative overflow-hidden">
                       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                       <div className="flex gap-3 items-center relative z-10">
                          <AlertTriangle className="w-5 h-5 text-amber-500 animate-pulse" />
                          <div><p className="text-sm font-bold text-white tracking-wide">Anomaly Detected: Flash Flood</p><p className="text-xs text-slate-400 font-mono">Executing Trigger Logic</p></div>
                       </div>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl flex justify-between items-center">
                       <div className="flex gap-3 items-center">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          <div><p className="text-sm font-bold text-white tracking-wide">Payout Sent (₹250)</p><p className="text-xs text-emerald-500/70 font-mono font-bold">Transaction Success</p></div>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      {/* Final CTA */}
      <div className="text-center space-y-6 pt-6">
         <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Stop Wasting Working Hours.</h2>
         <p className="text-lg text-slate-400 font-medium">Join thousands of smart gig workers shielding their income today.</p>
         <button 
             onClick={() => setActiveTab('signup')}
             className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 rounded-xl font-bold shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 mx-auto text-lg group"
         >
           Create Free Account
           <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
         </button>
      </div>

    </div>
  );
}
