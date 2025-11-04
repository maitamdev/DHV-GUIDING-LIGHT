import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'Web Developer',
    image: '/img/testimonial-1.jpg',
    rating: 5,
    text: 'Khóa học rất chất lượng, giảng viên nhiệt tình. Tôi đã học được rất nhiều kiến thức thực tế và áp dụng vào công việc ngay lập tức.'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    role: 'Data Analyst',
    image: '/img/testimonial-2.jpg',
    rating: 5,
    text: 'Nền tảng học tập tuyệt vời với lộ trình rõ ràng. Mentor rất tận tâm và giúp đỡ tôi rất nhiều trong quá trình học tập.'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    role: 'Mobile Developer',
    image: '/img/testimonial-3.jpg',
    rating: 5,
    text: 'Tôi rất hài lòng với chất lượng khóa học. Nội dung cập nhật, bài tập thực hành phong phú và có mentor hỗ trợ 24/7.'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    role: 'UI/UX Designer',
    image: '/img/testimonial-4.jpg',
    rating: 5,
    text: 'DHV Guiding Light đã giúp tôi chuyển đổi nghề nghiệp thành công. Chương trình mentoring rất hữu ích và thực tế.'
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
            Học viên nói gì về chúng tôi
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
