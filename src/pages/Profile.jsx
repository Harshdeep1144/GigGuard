import React, { useEffect, useState, useRef } from 'react';
import { User, Shield, Key, Building2, Phone, MapPin, Briefcase, Edit2, Save, X, Camera } from 'lucide-react';

export default function Profile({ user, token, logout, setUser }) {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [saving, setSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const fetchProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setProfileData(data);
        if (setUser) {
          const updatedGlobalUser = { ...user, name: data.name, profilePic: data.profilePic };
          setUser(updatedGlobalUser);
          localStorage.setItem('user', JSON.stringify(updatedGlobalUser));
        }

        setFormData({
          name: data.name || '',
          company: data.company || '',
          phone: data.phone || '',
          experience: data.experience || '',
          street: data.address?.street || '',
          landmark: data.address?.landmark || '',
          pincode: data.address?.pincode || '',
          profilePic: data.profilePic || ''
        });
      } else {
        setError('Failed to load profile. Please login again.');
        logout();
      }
    } catch (err) {
      setError('Connection error.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const uploadData = new FormData();
    uploadData.append('profilePic', file);

    try {
      const res = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: uploadData
      });

      if (res.ok) {
        const data = await res.json();
        setFormData(prev => ({ ...prev, profilePic: data.imageUrl }));
        setProfileData(prev => ({ ...prev, profilePic: data.imageUrl }));
      } else {
        setError('Image upload failed.');
      }
    } catch (err) {
      setError('Server connection error during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    
    try {
      const payload = {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        experience: formData.experience,
        profilePic: formData.profilePic,
        address: {
          street: formData.street,
          landmark: formData.landmark,
          pincode: formData.pincode
        }
      };

      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const updatedData = await response.json();
        setProfileData(updatedData);
        setIsEditing(false);
        
        if (setUser) {
          const globalUserUpdate = { ...user, name: updatedData.name, profilePic: updatedData.profilePic };
          setUser(globalUserUpdate);
          localStorage.setItem('user', JSON.stringify(globalUserUpdate));
        }

      } else {
        const data = await response.json();
        setError(data.message || 'Failed to update profile');
      }
    } catch (err) {
      setError('Connection error while saving');
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: profileData.name || '',
      company: profileData.company || '',
      phone: profileData.phone || '',
      experience: profileData.experience || '',
      street: profileData.address?.street || '',
      landmark: profileData.address?.landmark || '',
      pincode: profileData.address?.pincode || '',
      profilePic: profileData.profilePic || ''
    });
    setIsEditing(false);
    setError('');
  };

  if (loading) {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
    );
  }

  if (error && !profileData) {
    return (
        <div className="text-center py-20 text-red-500 px-4 bg-slate-900 border border-slate-800 rounded-xl shadow-xl">
            <h2 className="text-2xl font-extrabold mb-2">Notice</h2>
            <p className="font-medium text-slate-300">{error || "You must be logged in to view this page."}</p>
        </div>
    );
  }

  const profileImageUrl = formData.profilePic 
    ? `http://localhost:5000${formData.profilePic}` 
    : (profileData.profilePic ? `http://localhost:5000${profileData.profilePic}` : null);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center space-x-6">
          <div className="relative group w-24 h-24">
             {profileImageUrl ? (
                <img 
                  src={profileImageUrl} 
                  alt="Profile" 
                  className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-slate-700 group-hover:border-indigo-500 transition-colors"
                />
             ) : (
                <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-800">
                   <span className="text-4xl font-extrabold text-white">
                     {profileData.name.charAt(0).toUpperCase()}
                   </span>
                </div>
             )}

             {isEditing && (
                 <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] rounded-full flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity overflow-hidden border border-indigo-500/50 cursor-pointer">
                   {isUploading ? (
                     <div className="animate-spin rounded-full h-6 w-6 border-2 border-t-2 border-white"></div>
                   ) : (
                   <>
                     <Camera className="w-6 h-6 mb-1 text-slate-200" />
                     <span className="text-xs font-bold text-slate-200">Upload</span>
                     <input 
                       type="file" 
                       onClick={(e) => { e.target.value = null }}
                       className="opacity-0 absolute inset-0 w-full h-full cursor-pointer" 
                       accept="image/*" 
                       onChange={handleImageUpload} 
                     />
                   </>
                   )}
                 </div>
             )}
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-white mb-1 tracking-tight">{profileData.name}</h1>
            <p className="text-slate-400 font-medium">{profileData.email}</p>
            <div className="mt-3 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-bold border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                <Shield className="w-4 h-4" />
                <span>Verified Account</span>
            </div>
          </div>
        </div>
        
        <div>
          {!isEditing ? (
            <button 
              onClick={() => setIsEditing(true)}
              className="px-6 py-2.5 bg-slate-800 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-slate-200 rounded-xl font-bold transition-all flex items-center shadow-md hover:-translate-y-0.5"
            >
              <Edit2 className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          ) : (
            <div className="flex gap-3">
              <button 
                onClick={handleCancel}
                disabled={saving}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-bold transition flex items-center border border-slate-700"
              >
                <X className="w-4 h-4 mr-1" />
                Cancel
              </button>
              <button 
                onClick={handleSave}
                disabled={saving || isUploading}
                className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white rounded-xl font-bold border border-indigo-400/30 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] active:scale-95 transition-all duration-300 flex items-center"
              >
                <Save className="w-4 h-4 mr-2" />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          )}
        </div>
      </div>

      {error && isEditing && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl shadow-inner text-sm font-semibold">
          {error}
        </div>
      )}

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Professional Information */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-extrabold text-white mb-6 border-b border-slate-800 pb-4 flex items-center">
                <Briefcase className="w-5 h-5 mr-3 text-indigo-400" />
                Professional Details
            </h2>
            
            <div className="space-y-6">
                <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Full Name</label>
                    {isEditing ? (
                      <input 
                        type="text" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium transition"
                      />
                    ) : (
                      <p className="text-slate-100 text-lg font-bold">{profileData.name}</p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Working Company</label>
                    {isEditing ? (
                      <input 
                        type="text" 
                        placeholder="e.g. Blinkit, Zomato, Uber"
                        value={formData.company} 
                        onChange={e => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium transition"
                      />
                    ) : (
                      <p className="text-slate-100 text-lg font-bold">
                        {profileData.company ? profileData.company : <span className="text-slate-500 font-medium italic">Not specified</span>}
                      </p>
                    )}
                </div>

                <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Work Experience</label>
                    {isEditing ? (
                      <textarea 
                        rows="3"
                        placeholder="Describe your work experience..."
                        value={formData.experience} 
                        onChange={e => setFormData({...formData, experience: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium resize-none transition"
                      />
                    ) : (
                      <p className="text-slate-300 font-medium">
                        {profileData.experience ? profileData.experience : <span className="text-slate-500 italic">Not specified</span>}
                      </p>
                    )}
                </div>
            </div>
        </div>

        {/* Contact & Address */}
        <div className="bg-slate-900 border border-slate-800 p-6 md:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
            <h2 className="text-xl font-extrabold text-white mb-6 border-b border-slate-800 pb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-indigo-400" />
                Contact & Address
            </h2>
            
            <div className="space-y-6">
                <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Phone Number</label>
                    {isEditing ? (
                      <input 
                        type="tel" 
                        placeholder="+91 9876543210"
                        value={formData.phone} 
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium transition"
                      />
                    ) : (
                      <div className="flex items-center text-slate-100 text-lg font-bold">
                        {profileData.phone ? (
                          <><Phone className="w-5 h-5 mr-2 text-slate-500" /> {profileData.phone}</>
                        ) : (
                          <span className="text-slate-500 font-medium italic">Not specified</span>
                        )}
                      </div>
                    )}
                </div>

                <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-400 block">Residential Address</label>
                    
                    {isEditing ? (
                      <>
                        <input 
                          type="text" 
                          placeholder="Street Address / Flat No."
                          value={formData.street} 
                          onChange={e => setFormData({...formData, street: e.target.value})}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium transition mb-4"
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input 
                            type="text" 
                            placeholder="Landmark"
                            value={formData.landmark} 
                            onChange={e => setFormData({...formData, landmark: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium transition"
                          />
                          <input 
                            type="text" 
                            placeholder="PIN Code"
                            value={formData.pincode} 
                            onChange={e => setFormData({...formData, pincode: e.target.value})}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 font-medium transition"
                          />
                        </div>
                      </>
                    ) : (
                      <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 shadow-inner">
                        {profileData.address?.street || profileData.address?.pincode ? (
                          <div className="space-y-1.5 text-slate-300 font-medium">
                            <p className="text-white font-bold">{profileData.address?.street}</p>
                            {profileData.address?.landmark && <p className="text-sm text-slate-400">Near {profileData.address.landmark}</p>}
                            {profileData.address?.pincode && <p className="text-sm font-bold tracking-wide text-indigo-400 mt-2 pt-2 border-t border-slate-800/80 inline-block">PIN: {profileData.address.pincode}</p>}
                          </div>
                        ) : (
                          <p className="text-slate-500 italic text-sm font-medium">No address added yet.</p>
                        )}
                      </div>
                    )}
                </div>
            </div>
        </div>

      </div>

      {!isEditing && (
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="p-3 bg-red-500/10 rounded-xl border border-red-500/20 text-red-400">
                    <Key className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-white font-extrabold tracking-tight">Account Security</h3>
                    <p className="text-slate-400 font-medium text-sm mt-0.5">Secure your account or sign out</p>
                </div>
            </div>
            <button 
                onClick={logout} 
                className="px-6 py-2.5 bg-slate-900 border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500/50 font-bold rounded-xl transition-all shadow-sm flex items-center gap-2"
            >
                Sign Out
            </button>
        </div>
      )}
    </div>
  );
}
