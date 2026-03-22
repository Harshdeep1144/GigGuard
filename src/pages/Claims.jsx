import React, { useState } from 'react';
import Card from '../components/Card';
import { AlertCircle, FileText, CheckCircle2, Clock, Activity, FileStack, ArrowRight } from 'lucide-react';

export default function Claims() {
  const [isFiling, setIsFiling] = useState(false);
  const [claimType, setClaimType] = useState('Rain Outage');
  const [showSuccess, setShowSuccess] = useState(false);

  const pastClaims = [
    { id: 'CLM-0042', date: 'March 15, 2026', type: 'Rain Protection', status: 'Approved', amount: '₹120', payout: 'Instant' },
    { id: 'CLM-0038', date: 'February 28, 2026', type: 'AQI Health Stop', status: 'Approved', amount: '₹250', payout: 'Instant' },
    { id: 'CLM-0021', date: 'January 10, 2026', type: 'Vehicle Breakdown', status: 'Processing', amount: '₹400', payout: 'Pending' }
  ];

  const handleFileClaim = (e) => {
    e.preventDefault();
    setIsFiling(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Claims Center</h1>
          <p className="text-slate-400 font-medium mt-2">File a new claim or track your existing AI-processed payouts.</p>
        </div>
        <button 
          onClick={() => setIsFiling(true)}
          className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-bold border border-indigo-400/30 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] active:scale-95 transition-all duration-300 flex items-center shrink-0"
        >
          <FileText className="w-5 h-5 mr-2" />
          File New Claim
        </button>
      </div>

      {showSuccess && (
        <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-center gap-3 text-emerald-400 shadow-sm animate-slideInDown">
          <CheckCircle2 className="w-6 h-6 shrink-0 text-emerald-500" />
          <p className="font-semibold text-slate-200">Your claim has been successfully filed and is being analyzed by our AI engine. Most claims are processed within 10 minutes!</p>
        </div>
      )}

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="relative overflow-hidden border-emerald-500/20 bg-emerald-500/5 hover:border-emerald-500/40">
          <div className="absolute top-0 right-0 p-4 text-emerald-500/10"><CheckCircle2 className="w-24 h-24" /></div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Total Payouts Received</p>
          <h2 className="text-3xl font-extrabold text-white">₹370</h2>
        </Card>
        <Card className="relative overflow-hidden border-amber-500/20 bg-amber-500/5 hover:border-amber-500/40">
          <div className="absolute top-0 right-0 p-4 text-amber-500/10"><Clock className="w-24 h-24" /></div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Pending Claims</p>
          <h2 className="text-3xl font-extrabold text-white">1</h2>
        </Card>
        <Card className="relative overflow-hidden border-indigo-500/20 bg-indigo-500/5 hover:border-indigo-500/40">
          <div className="absolute top-0 right-0 p-4 text-indigo-500/10"><Activity className="w-24 h-24" /></div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">Avg AI Process Time</p>
          <h2 className="text-3xl font-extrabold text-white">4.2 min</h2>
        </Card>
      </div>

      {/* Filing Form */}
      {isFiling && (
        <Card className="border-indigo-500/30 bg-indigo-500/5 p-6 md:p-8 animate-fadeIn">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
              <AlertCircle className="text-indigo-400 w-6 h-6" /> 
              File a Claim
            </h2>
            <button onClick={() => setIsFiling(false)} className="text-slate-400 hover:text-white font-bold text-sm px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg transition">Cancel</button>
          </div>
          <form onSubmit={handleFileClaim} className="space-y-6 max-w-2xl">
            <div>
              <label className="text-slate-300 text-sm font-bold mb-2 block">What happened?</label>
              <select 
                value={claimType}
                onChange={(e) => setClaimType(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 shadow-inner"
              >
                <option>Rain Outage (Income Loss)</option>
                <option>AQI Danger Threshold Met</option>
                <option>Vehicle Technical Breakdown</option>
                <option>Medical Emergency</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm font-bold mb-2 block">Upload Evidence (Photos/Screenshots)</label>
              <div className="border-2 border-dashed border-slate-700 bg-slate-900/50 rounded-xl p-8 text-center cursor-pointer hover:border-indigo-500/50 transition-colors">
                <FileStack className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <p className="text-slate-400 text-sm font-medium">Click to upload or drag and drop screenshots of your platform app.</p>
              </div>
            </div>
            <div>
              <label className="text-slate-300 text-sm font-bold mb-2 block">Additional Details</label>
              <textarea 
                rows="3" 
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 resize-none shadow-inner"
                placeholder="Briefly describe the exact time and context..."
              />
            </div>
            <button type="submit" className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-bold border border-indigo-400/30 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] active:scale-95 transition-all duration-300">
              Submit Claim for Processing
            </button>
          </form>
        </Card>
      )}

      {/* Past Claims List */}
      <div>
        <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
          <Clock className="w-6 h-6 text-indigo-400" /> Past Claims History
        </h3>
        <div className="space-y-4">
          {pastClaims.map((claim, idx) => (
            <Card key={idx} className="p-5 border border-slate-800 shadow-md hover:shadow-lg transition-all hover:bg-slate-800/80">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-sm font-bold font-mono text-slate-500">{claim.id}</span>
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-extrabold uppercase tracking-wide border ${
                      claim.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 
                      'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {claim.status}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white">{claim.type}</h4>
                  <p className="text-sm font-medium text-slate-400">{claim.date}</p>
                </div>
                <div className="md:text-right w-full md:w-auto flex justify-between md:block border-t border-slate-800 md:border-0 pt-4 md:pt-0 mt-2 md:mt-0">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 md:block">Claim Value</span>
                    <p className="text-2xl font-extrabold text-white">{claim.amount}</p>
                  </div>
                  <button className="md:mt-1 text-sm font-bold text-indigo-400 flex items-center gap-1 hover:text-indigo-300 transition-colors">
                    View Docs <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
