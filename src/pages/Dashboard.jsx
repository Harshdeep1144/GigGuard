import React from 'react';
import Card from '../components/Card';
import { Activity, Zap, BarChart3, Wallet, AlertTriangle, Shield, TrendingUp, Clock } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { 
      label: "Platform Activity", 
      value: "98%", 
      icon: Activity, 
      trend: "+2%", 
      bgColor: "bg-emerald-500/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20"
    },
    { 
      label: "Active Risk", 
      value: "Low", 
      icon: BarChart3, 
      trend: "Secure", 
      bgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/20"
    },
    { 
      label: "Protection Pool", 
      value: "₹120,400", 
      icon: Shield, 
      trend: "Active", 
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20"
    },
    { 
      label: "Available Funds", 
      value: "₹4,250", 
      icon: Wallet, 
      trend: "Ready", 
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-500/20"
    }
  ];

  const activities = [
    { time: "14:05", message: "Uber platform heartbeat received", status: "normal" },
    { time: "13:42", message: "Weather conditions updated for your zone", status: "warning" },
    { time: "13:15", message: "Income threshold detection: All clear", status: "normal" }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 md:space-y-10 animate-fadeIn">
      {/* Header */}
      <div className="space-y-2 pb-2 sm:pb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight">Dashboard</h1>
        <p className="text-base sm:text-lg text-slate-400 font-medium">Real-time monitoring of your gig platforms with AI-powered protection.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {stats.map((s, i) => (
          <Card 
            key={i}
            className={`border-t-2 ${s.borderColor}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl border ${s.bgColor} ${s.borderColor}`}>
                <s.icon className={`w-5 h-5 ${s.iconColor}`} />
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-slate-800 ${s.iconColor} border ${s.borderColor}`}>
                {s.trend}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">{s.label}</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">{s.value}</h2>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 pt-4">
        {/* Disruption Log */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Zap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-wide">Activity Log</h3>
                <p className="text-xs font-semibold text-slate-500 mt-0.5">Last 24 hours</p>
              </div>
            </div>
            <TrendingUp className="w-5 h-5 text-emerald-500" />
          </div>
          
          <div className="space-y-3">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/40 hover:bg-slate-800 transition-all duration-300">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className={`w-2 h-2 flex-shrink-0 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
                    style={{
                      backgroundColor: activity.status === 'warning' ? '#f59e0b' : '#10b981',
                      boxShadow: activity.status === 'warning' ? '0 0 10px rgba(245, 158, 11, 0.5)' : '0 0 10px rgba(16, 185, 129, 0.5)'
                    }}
                  ></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-slate-200">{activity.message}</p>
                    <p className="text-[10px] text-slate-500 mt-1 font-bold tracking-widest uppercase">2026-03-20 {activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alert Card */}
        <Card className="border-t-2 border-amber-500/50 bg-gradient-to-br from-slate-900 to-slate-900/40">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
            </div>
            <h3 className="font-bold text-white text-lg tracking-wide">Active Alert</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed font-medium">
            Heavy rain detected in your area. Your income protection triggers have been adjusted to <span className="text-amber-400 font-extrabold bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">75% coverage</span> for the next 4 hours.
          </p>
          <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
             <div className="flex items-center gap-2 text-xs text-amber-500 font-bold">
               <Clock className="w-4 h-4" />
               <span>Expires at 18:05</span>
             </div>
             <button className="text-xs font-bold bg-slate-800 text-amber-500 px-3 py-1.5 rounded-lg border border-slate-700 hover:border-amber-500/30 transition shadow-sm">Details</button>
          </div>
        </Card>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        {[
          { label: "Active", value: "5", color: "text-blue-400" },
          { label: "Earnings", value: "₹42k", color: "text-emerald-400" },
          { label: "Protection", value: "24/7", color: "text-indigo-400" },
          { label: "Risk Score", value: "12/100", color: "text-emerald-400" }
        ].map((stat, i) => (
          <Card key={i} className="text-center py-6">
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-2">{stat.label}</p>
            <p className={`text-3xl font-extrabold tracking-tight ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;