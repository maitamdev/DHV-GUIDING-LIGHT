import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
interface State { hasError: boolean; error?: Error; }
class ErrorBoundary extends React.Component<{ children: React.ReactNode; fallback?: React.ReactNode }, State> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error: Error): State { return { hasError: true, error }; }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { console.error('ErrorBoundary caught:', error, errorInfo); }
  render() {
    if (this.state.hasError) return this.props.fallback || (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"><div className="text-center max-w-md">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><FaExclamationTriangle className="text-red-500 text-3xl" /></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2><p className="text-gray-600 mb-6">An unexpected error occurred. Please try refreshing the page.</p>
        <button onClick={() => window.location.reload()} className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">Refresh Page</button>
      </div></div>);
    return this.props.children;
  }
}
export default ErrorBoundary;
