import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'John Anderson',
    role: 'Web Developer',
    image: '/img/testimonial-1.jpg',
    rating: 5,
    text: 'The course quality is excellent, instructors are very enthusiastic. I learned a lot of practical knowledge and applied it to my work immediately.'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Data Analyst',
    image: '/img/testimonial-2.jpg',
    rating: 5,
    text: 'Wonderful learning platform with a clear roadmap. The mentor is very dedicated and helped me a lot during the learning process.'
  },
  {
    id: 3,
    name: 'David Williams',
    role: 'Mobile Developer',
    image: '/img/testimonial-3.jpg',
    rating: 5,
    text: 'I am very satisfied with the course quality. Updated content, rich practical exercises and 24/7 mentor support.'
  },
  {
    id: 4,
    name: 'Emily Parker',
    role: 'UI/UX Designer',
    image: '/img/testimonial-4.jpg',
    rating: 5,
    text: 'DHV Guiding Light helped me successfully transition my career. The mentoring program is very useful and practical.'
  }
];

const Testimonial = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center"
          >
            What Our Students Say
          </motion.h1>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 relative"
              >
                <FaQuoteLeft className="text-4xl text-[#06BBCC] opacity-20 absolute top-4 right-4" />
                
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
