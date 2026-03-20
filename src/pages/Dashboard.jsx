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
      color: "from-emerald-500/20 to-emerald-600/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-500/20"
    },
    { 
      label: "Active Risk", 
      value: "Low", 
      icon: BarChart3, 
      trend: "Secure", 
      color: "from-indigo-500/20 to-indigo-600/10",
      iconColor: "text-indigo-400",
      borderColor: "border-indigo-500/20"
    },
    { 
      label: "Protection Pool", 
      value: "$1,200", 
      icon: Shield, 
      trend: "Active", 
      color: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-400",
      borderColor: "border-blue-500/20"
    },
    { 
      label: "Available Funds", 
      value: "$124.50", 
      icon: Wallet, 
      trend: "Ready", 
      color: "from-purple-500/20 to-purple-600/10",
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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">Dashboard</h1>
        <p className="text-base sm:text-lg text-slate-400">Real-time monitoring of your gig platforms with AI-powered protection.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {stats.map((s, i) => (
          <Card 
            key={i}
            className={`border-l-4 ${s.borderColor} bg-gradient-to-br ${s.color}`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${s.color}`}>
                <s.icon className={`w-5 h-5 ${s.iconColor}`} />
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${s.iconColor} bg-slate-800/50`}>
                {s.trend}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-semibold uppercase tracking-widest mb-2">{s.label}</p>
            <h2 className="text-3xl font-bold text-white">{s.value}</h2>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 pt-4 sm:pt-6 md:pt-8">
        {/* Disruption Log */}
        <Card className="lg:col-span-2 border-indigo-500/20">
          <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-indigo-500/20">
                <Zap className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Activity Log</h3>
                <p className="text-xs text-slate-400 mt-1">Last 24 hours</p>
              </div>
            </div>
            <TrendingUp className="w-5 h-5 text-emerald-400" />
          </div>
          
          <div className="space-y-3">
            {activities.map((activity, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-2 h-2 flex-shrink-0 rounded-full" 
                    style={{backgroundColor: activity.status === 'warning' ? '#f59e0b' : '#10b981'}}
                  ></div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-200">{activity.message}</p>
                    <p className="text-xs text-slate-500 mt-1 font-mono">2026-03-20 {activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Alert Card */}
        <Card className="border-l-4 border-amber-500/50 bg-gradient-to-br from-amber-500/10 to-orange-600/10">
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2 rounded-lg bg-amber-500/20 flex-shrink-0">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="font-bold text-white text-lg">Alert</h3>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Heavy rain detected in your area. Your income protection triggers have been adjusted to <span className="text-amber-300 font-semibold">75% coverage</span> for the next 4 hours.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-amber-300 font-medium">
            <Clock className="w-4 h-4" />
            <span>Expires at 18:05</span>
          </div>
        </Card>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 pt-6 sm:pt-8 md:pt-10">
        {[
          { label: "Active Platforms", value: "5", color: "text-blue-400" },
          { label: "Monthly Earnings", value: "$4.2k", color: "text-emerald-400" },
          { label: "Protection Active", value: "24/7", color: "text-indigo-400" },
          { label: "Risk Score", value: "12/100", color: "text-emerald-400" }
        ].map((stat, i) => (
          <Card key={i} className="text-center">
            <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;