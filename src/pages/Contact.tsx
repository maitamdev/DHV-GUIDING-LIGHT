const Contact = () => {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Contact Us</h1>
          <p className="text-xl text-center">We're always ready to support you</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
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
