import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaShoppingCart, FaCreditCard, FaPlay } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How do I enroll in a course?',
    answer: 'You need to create an account, then go to the courses page, select the course you want to learn, and click "Enroll Now". After successful payment, you can immediately access the learning curriculum.'
  },
  {
    question: 'Can I learn anytime, anywhere?',
    answer: 'Yes! All courses are available online 24/7. You can learn on your computer, tablet, or mobile device at your own pace.'
  },
  {
    question: 'Do courses provide certificates?',
    answer: 'Yes! After completing the course and passing the final exam, you will receive a course completion certificate from DHV Guiding Light.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'We have a 7-day refund policy if you haven\'t completed more than 20% of the course. Please contact support for assistance.'
  },
  {
    question: 'How can I contact instructors?',
    answer: 'You can ask questions directly in the Q&A section of each lesson, or join online classroom sessions according to the schedule announced by the instructor.'
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Depending on the course, the duration ranges from 3-9 months. However, you can learn faster or slower depending on your progress. Courses have no time limit.'
  },
  {
    question: 'What prior knowledge do I need?',
    answer: 'Each course has different knowledge requirements, clearly stated on the course detail page. Many beginner courses require no prior knowledge.'
  },
  {
    question: 'Is there job placement support after the course?',
    answer: 'Yes! We partner with many employers. Outstanding students will be recommended for jobs and receive support with CVs and interviews.'
  },
  {
    question: 'What payment methods are accepted?',
    answer: 'We accept payment via ATM cards, credit cards, e-wallets (Momo, ZaloPay), and bank transfers.'
  },
  {
    question: 'Can I take multiple courses at once?',
    answer: 'Yes! You can enroll in and take multiple courses simultaneously. However, we recommend focusing on 1-2 courses for the best results.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90">
              Find answers to common questions
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4">
          {/* How to Register Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">How to Register for Courses?</h2>
              <p className="text-xl text-gray-600">Simple 3-step process to start learning</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform">
                    <FaShoppingCart className="text-6xl text-gray-600" />
                  </div>
                  <div className="bg-emerald-500 text-white font-bold text-lg px-6 py-2 rounded-full mb-4">
                    Step 1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Choose Your Course</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse our course catalog and select the perfect course for your learning goals.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform">
                    <FaCreditCard className="text-6xl text-gray-600" />
                  </div>
                  <div className="bg-teal-500 text-white font-bold text-lg px-6 py-2 rounded-full mb-4">
                    Step 2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Complete Payment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Securely pay using your preferred payment method - credit card, e-wallet, or bank transfer.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-6 rounded-2xl shadow-md mb-6 group-hover:scale-110 transition-transform">
                    <FaPlay className="text-6xl text-gray-600" />
                  </div>
                  <div className="bg-cyan-500 text-white font-bold text-lg px-6 py-2 rounded-full mb-4">
                    Step 3
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Start Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Access your course immediately and start your learning journey with expert instructors.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl mb-2">🔒</div>
                <h4 className="font-bold text-gray-800 mb-1">Secure Learning</h4>
                <p className="text-sm text-gray-600">SSL Protected</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl mb-2">📜</div>
                <h4 className="font-bold text-gray-800 mb-1">Certified</h4>
                <p className="text-sm text-gray-600">Industry Recognized</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-bold text-gray-800 mb-1">4.9/5 Rating</h4>
                <p className="text-sm text-gray-600">12,000+ Reviews</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md text-center">
                <div className="text-3xl mb-2">👥</div>
                <h4 className="font-bold text-gray-800 mb-1">50K+ Students</h4>
                <p className="text-sm text-gray-600">Worldwide</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Questions</h2>
              <p className="text-xl text-gray-600">Everything you need to know about our courses</p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-left font-semibold text-lg text-gray-800">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-emerald-500 flex-shrink-0 ml-4" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0 ml-4" />
                    )}
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl p-12 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Can't find your answer?
              </h2>
              <p className="text-xl text-white/90 mb-6">
                Contact us and our support team will help you right away!
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Contact Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
