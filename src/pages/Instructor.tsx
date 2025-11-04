import { motion } from 'framer-motion';
import { FaStar, FaUsers, FaBook, FaClock } from 'react-icons/fa';

const instructors = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    title: 'Senior Web Developer',
    specialty: 'JavaScript, React, Node.js',
    image: '/img/team-1.jpg',
    rating: 4.9,
    students: 1234,
    courses: 12,
    experience: '10+ năm'
  },
  {
    id: 2,
    name: 'Trần Thị B',
    title: 'Data Science Expert',
    specialty: 'Python, Machine Learning, AI',
    image: '/img/team-2.jpg',
    rating: 4.8,
    students: 856,
    courses: 8,
    experience: '8+ năm'
  },
  {
    id: 3,
    name: 'Lê Văn C',
    title: 'Mobile Developer',
    specialty: 'React Native, Flutter, iOS',
    image: '/img/team-3.jpg',
    rating: 4.9,
    students: 2341,
    courses: 15,
    experience: '12+ năm'
  },
  {
    id: 4,
    name: 'Phạm Thị D',
    title: 'UX/UI Designer',
    specialty: 'Figma, Adobe XD, User Research',
    image: '/img/team-4.jpg',
    rating: 5.0,
    students: 678,
    courses: 10,
    experience: '7+ năm'
  }
];

const Instructor = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Giảng Viên Của Chúng Tôi
          </motion.h1>
          <p className="text-xl text-center text-white/90">
            Học từ những chuyên gia hàng đầu trong ngành
          </p>
        </div>
      </div>

      {/* Instructors Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={instructor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span className="font-bold">{instructor.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{instructor.name}</h3>
                  <p className="text-[#06BBCC] font-semibold mb-2">{instructor.title}</p>
                  <p className="text-gray-600 text-sm mb-4">{instructor.specialty}</p>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FaUsers className="mr-2 text-[#06BBCC]" />
                      <span>{instructor.students} HV</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaBook className="mr-2 text-[#06BBCC]" />
                      <span>{instructor.courses} khóa</span>
                    </div>
                    <div className="flex items-center text-gray-600 col-span-2">
                      <FaClock className="mr-2 text-[#06BBCC]" />
                      <span>{instructor.experience} kinh nghiệm</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-[#06BBCC] hover:bg-[#05a3b3] text-white font-semibold rounded-lg transition-colors">
                    Xem hồ sơ
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructor;
