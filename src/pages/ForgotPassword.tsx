import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../config/firebase';
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Failed to send reset email. Please check your email address.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl w-full"
      >
        {/* Back to Login */}
        <Link
          to="/login"
          className="inline-flex items-center gap-3 text-blue-600 hover:text-blue-700 mb-8 text-lg font-semibold"
        >
          <FaArrowLeft className="text-xl" /> Back to Login
        </Link>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 text-white text-center">
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <FaEnvelope className="text-6xl" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Forgot Password?</h1>
            <p className="text-xl text-blue-100">
              No worries! Enter your email and we'll send you reset instructions.
            </p>
          </div>

          {/* Form */}
          <div className="p-12">
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <FaCheckCircle className="text-7xl text-green-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Check Your Email!</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We've sent password reset instructions to:
                </p>
                <p className="text-2xl font-semibold text-blue-600 mb-10">{email}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                  <p className="text-base text-gray-700">
                    <strong>Note:</strong> If you don't see the email, check your spam folder or try again.
                  </p>
                </div>
                <Link
                  to="/login"
                  className="block w-full py-4 text-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Back to Login
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleResetPassword}>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8 text-lg"
                  >
                    {error}
                  </motion.div>
                )}

                <div className="mb-8">
                  <label className="block text-gray-700 font-semibold mb-3 text-xl">
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email address"
                      className="w-full pl-14 pr-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none text-gray-700 transition-colors"
                    />
                  </div>
                  <p className="text-base text-gray-500 mt-3">
                    Enter the email address associated with your account
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Reset Link'
                  )}
                </button>

                <div className="mt-8 text-center">
                  <p className="text-gray-600 text-lg">
                    Remember your password?{' '}
                    <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                      Login here
                    </Link>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="font-bold text-gray-800 mb-4 text-2xl flex items-center gap-3">
            <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Security Tips
          </h3>
          <ul className="space-y-3 text-base text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 text-xl">•</span>
              The reset link will expire in 1 hour for security reasons
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 text-xl">•</span>
              Never share your reset link with anyone
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1 text-xl">•</span>
              If you didn't request this, please contact support immediately
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
