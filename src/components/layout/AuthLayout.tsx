import React from 'react';
import { Link } from 'react-router-dom';
interface Props { children: React.ReactNode; title: string; subtitle?: string; }
const AuthLayout: React.FC<Props> = ({ children, title, subtitle }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-4">
    <div className="absolute inset-0 overflow-hidden opacity-20"><div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" /><div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" /></div>
    <div className="relative w-full max-w-md">
      <div className="text-center mb-8"><Link to="/"><img src="/img/dhv-logo.png" alt="DHV" className="w-16 h-16 mx-auto mb-4" /></Link>
        <h1 className="text-3xl font-bold text-white">{title}</h1>{subtitle && <p className="text-white/70 mt-2">{subtitle}</p>}
      </div>
      <div className="bg-white rounded-2xl shadow-2xl p-8">{children}</div>
    </div>
  </div>
);
export default AuthLayout;
