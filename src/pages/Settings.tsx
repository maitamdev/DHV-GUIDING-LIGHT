import { useState } from 'react';
import { usePageTitle } from '../hooks/usePageTitle';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaBell, FaPalette, FaShieldAlt, FaGlobe } from 'react-icons/fa';
const Settings = () => { usePageTitle('Settings');
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [{ id: 'profile', label: 'Profile', icon: FaUser }, { id: 'notifications', label: 'Notifications', icon: FaBell }, { id: 'appearance', label: 'Appearance', icon: FaPalette }, { id: 'privacy', label: 'Privacy', icon: FaShieldAlt }, { id: 'language', label: 'Language', icon: FaGlobe }];
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-5xl">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="lg:w-64 space-y-1">{tabs.map(t => (
        <button key={t.id} onClick={() => setActiveTab(t.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-colors ${activeTab === t.id ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}><t.icon />{t.label}</button>
      ))}</div>
      <div className="flex-1 bg-white rounded-2xl shadow-md p-8">
        {activeTab === 'profile' && <div><h2 className="text-xl font-bold mb-6">Profile Settings</h2><div className="space-y-4">
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label><input className="w-full px-4 py-2.5 rounded-xl border border-gray-300" defaultValue={currentUser?.displayName || ''} /></div>
          <div><label className="block text-sm font-medium text-gray-700 mb-1">Email</label><input className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50" defaultValue={currentUser?.email || ''} disabled /></div>
          <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700">Save Changes</button>
        </div></div>}
        {activeTab === 'appearance' && <div><h2 className="text-xl font-bold mb-6">Appearance</h2><p className="text-gray-600">Theme and display settings coming soon.</p></div>}
        {activeTab !== 'profile' && activeTab !== 'appearance' && <div><h2 className="text-xl font-bold mb-6 capitalize">{activeTab}</h2><p className="text-gray-600">Settings for {activeTab} coming soon.</p></div>}
      </div>
    </div>
  </div></div>);
};
export default Settings;
