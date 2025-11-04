import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaStar, FaChalkboardTeacher, FaBook, FaCertificate, FaShoppingCart } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const coursesData: any = {
  '1': {
    id: '1',
    title: 'Web Development Full Stack',
    instructor: 'Nguyễn Văn A',
    students: 1234,
    price: 2999000,
    priceDisplay: '2,999,000đ',
    image: '/img/course-1.jpg',
    category: 'web-development',
    level: 'Trung cấp',
    duration: '6 tháng',
    rating: 4.8,
    totalRatings: 456,
    description: 'Khóa học Web Development Full Stack toàn diện, từ cơ bản đến nâng cao. Học viên sẽ thành thạo HTML, CSS, JavaScript, React, Node.js và MongoDB.',
    whatYouLearn: [
      'HTML5 & CSS3 hiện đại',
      'JavaScript ES6+ và TypeScript',
      'React.js và Redux',
      'Node.js và Express',
      'MongoDB và cơ sở dữ liệu',
      'RESTful API và GraphQL',
      'Authentication & Authorization',
      'Deployment và DevOps cơ bản'
    ],
    requirements: [
      'Máy tính có kết nối internet',
      'Không cần kiến thức lập trình trước đó',
      'Đam mê học tập và kiên trì'
    ],
    curriculum: [
      { module: 'HTML & CSS Cơ bản', lessons: 15, duration: '3 tuần' },
      { module: 'JavaScript Fundamentals', lessons: 20, duration: '4 tuần' },
      { module: 'React Framework', lessons: 25, duration: '5 tuần' },
      { module: 'Backend với Node.js', lessons: 22, duration: '4 tuần' },
      { module: 'Database MongoDB', lessons: 18, duration: '3 tuần' },
      { module: 'Full Stack Project', lessons: 30, duration: '7 tuần' }
    ]
  },
  // Add more courses...
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { currentUser, userData, purchaseCourse } = useAuth();
  const [loading, setLoading] = useState(false);
  
  const course = coursesData[courseId || '1'];

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Khóa học không tồn tại</h2>
          <Link to="/courses" className="text-[#06BBCC] hover:underline">
            ← Quay lại danh sách khóa học
          </Link>
        </div>
      </div>
    );
  }

  const hasPurchased = userData?.purchasedCourses?.includes(courseId || '');

  const handlePurchase = async () => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      await purchaseCourse(courseId || '');
      alert('Mua khóa học thành công! Bạn có thể bắt đầu học ngay.');
      navigate(`/roadmap/${course.category}`);
    } catch (error) {
      alert('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-semibold">
                  {course.level}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-6 text-white mb-6">
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-300" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="opacity-80">({course.totalRatings} đánh giá)</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUsers />
                  <span>{course.students} học viên</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock />
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <img src="/img/team-1.jpg" alt={course.instructor} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="text-white/80 text-sm">Giảng viên</p>
                  <p className="text-white font-semibold">{course.instructor}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {hasPurchased ? (
                  <Link
                    to={`/roadmap/${course.category}`}
                    className="px-8 py-4 bg-white text-[#06BBCC] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                  >
                    Vào học ngay
                  </Link>
                ) : (
                  <button
                    onClick={handlePurchase}
                    disabled={loading}
                    className="px-8 py-4 bg-white text-[#06BBCC] rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center gap-2"
                  >
                    <FaShoppingCart />
                    {loading ? 'Đang xử lý...' : `Mua khóa học - ${course.priceDisplay}`}
                  </button>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={course.image} alt={course.title} className="rounded-lg shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaBook className="text-[#06BBCC]" />
                  Bạn sẽ học được gì?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <FaChalkboardTeacher className="text-[#06BBCC]" />
                  Nội dung khóa học
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((module: any, index: number) => (
                    <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#06BBCC] transition-colors">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{module.module}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{module.lessons} bài học</span>
                        <span>•</span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Yêu cầu</h2>
                <ul className="space-y-3">
                  {course.requirements.map((req: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#06BBCC] text-xl">•</span>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-[#06BBCC] mb-2">
                    {course.priceDisplay}
                  </div>
                  <p className="text-gray-600">Thanh toán một lần</p>
                </div>

                {hasPurchased ? (
                  <Link
                    to={`/roadmap/${course.category}`}
                    className="block w-full py-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-lg font-bold transition-colors mb-4"
                  >
                    ✓ Đã mua - Vào học
                  </Link>
                ) : (
                  <button
                    onClick={handlePurchase}
                    disabled={loading}
                    className="w-full py-4 bg-[#06BBCC] hover:bg-[#05a3b3] text-white rounded-lg font-bold transition-colors mb-4 disabled:opacity-50"
                  >
                    {loading ? 'Đang xử lý...' : 'Mua khóa học ngay'}
                  </button>
                )}

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCertificate className="text-[#06BBCC]" />
                    <span>Cấp chứng chỉ sau khóa học</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaClock className="text-[#06BBCC]" />
                    <span>Học mọi lúc, mọi nơi</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaChalkboardTeacher className="text-[#06BBCC]" />
                    <span>Hỗ trợ trực tiếp từ giảng viên</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
