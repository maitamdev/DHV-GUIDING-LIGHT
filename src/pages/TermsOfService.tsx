import { usePageTitle } from '../hooks/usePageTitle';
const TermsOfService = () => { usePageTitle('Terms of Service');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
    <div className="bg-white rounded-2xl shadow-md p-8 space-y-6">
      <p className="text-gray-600">Last updated: January 2024</p>
      <section><h2 className="text-2xl font-bold text-gray-800">1. Acceptance of Terms</h2><p className="text-gray-600">By using DHV Guiding Light, you agree to these terms and our Privacy Policy.</p></section>
      <section><h2 className="text-2xl font-bold text-gray-800">2. User Accounts</h2><p className="text-gray-600">You are responsible for maintaining the security of your account and all activities under it.</p></section>
      <section><h2 className="text-2xl font-bold text-gray-800">3. Course Content</h2><p className="text-gray-600">All course materials are for personal educational use only. Redistribution is prohibited.</p></section>
      <section><h2 className="text-2xl font-bold text-gray-800">4. Refund Policy</h2><p className="text-gray-600">We offer a 30-day money-back guarantee for all course purchases.</p></section>
    </div>
  </div></div>);
};
export default TermsOfService;
