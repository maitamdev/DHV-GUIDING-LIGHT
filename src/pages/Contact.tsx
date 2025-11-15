const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Info (40%) */}
      <div className="lg:w-2/5 bg-gradient-to-br from-[#27E0A7] via-[#1BC6D5] to-[#06BBCC] text-white p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Address</h3>
                <p className="text-white/80">123 DHV Street, District 1<br />Ho Chi Minh City, Vietnam</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Email</h3>
                <p className="text-white/80">contact@dhvguidinglight.com<br />support@dhvguidinglight.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">Phone</h3>
                <p className="text-white/80">+84 123 456 789<br />Mon-Fri: 9AM - 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form (60%) */}
      <div className="lg:w-3/5 bg-white p-12 lg:p-16 flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">Send us a Message</h2>
            <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all"
                placeholder="+84 123 456 789"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all"
                placeholder="How can we help you?"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea
                rows={6}
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-[#1BC6D5] focus:outline-none transition-all resize-none"
                placeholder="Tell us more about your inquiry..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#27E0A7] to-[#1BC6D5] text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
