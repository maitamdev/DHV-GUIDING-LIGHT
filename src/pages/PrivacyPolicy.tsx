import { usePageTitle } from '../hooks/usePageTitle';
const PrivacyPolicy = () => { usePageTitle('Privacy Policy');
  return (<div className="min-h-screen bg-gray-50 pt-24 pb-16"><div className="container mx-auto px-4 max-w-4xl">
    <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
    <div className="bg-white rounded-2xl shadow-md p-8 prose prose-lg max-w-none space-y-6">
      <p className="text-gray-600">Last updated: January 2024</p>
      <section><h2 className="text-2xl font-bold text-gray-800">1. Information We Collect</h2><p className="text-gray-600">We collect information you provide directly, such as name, email, and profile data when you create an account.</p></section>
      <section><h2 className="text-2xl font-bold text-gray-800">2. How We Use Your Information</h2><p className="text-gray-600">We use your information to provide and improve our services, communicate with you, and personalize your experience.</p></section>
      <section><h2 className="text-2xl font-bold text-gray-800">3. Data Security</h2><p className="text-gray-600">We implement appropriate security measures to protect your personal information against unauthorized access.</p></section>
      <section><h2 className="text-2xl font-bold text-gray-800">4. Contact Us</h2><p className="text-gray-600">If you have questions about this policy, contact us at support@dhv.edu.vn</p></section>
    </div>
  </div></div>);
};
export default PrivacyPolicy;
