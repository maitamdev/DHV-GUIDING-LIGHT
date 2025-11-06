const Contact = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/carousel-1.jpg" 
          alt="Contact Background" 
          className="w-full h-full object-cover fixed"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#06BBCC]/95 via-blue-600/90 to-purple-700/95"></div>
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden z-0 fixed">
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-20 left-20 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-20 right-20 animate-pulse delay-1000"></div>
      </div>

      <section className="relative z-10 text-white py-32 pt-40">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-4 drop-shadow-lg">Contact Us</h1>
          <p className="text-2xl text-center text-white/90">We're always ready to support you</p>
        </div>
      </section>

      <section className="relative z-10 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                  placeholder="Enter your email..."
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] outline-none"
                  placeholder="Enter your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#06BBCC] text-white rounded-full font-semibold hover:bg-[#05a3b3] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
