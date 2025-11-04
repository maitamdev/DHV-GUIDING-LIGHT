import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Web Development Full Stack',
    instructor: 'Nguyễn Văn A',
    students: 1234,
    price: '2,999,000đ',
    image: '/img/course-1.jpg',
    category: 'web-development',
    level: 'Trung cấp',
    duration: '6 tháng'
  },
  {
    id: 2,
    title: 'React & Node.js Bootcamp',
    instructor: 'Trần Văn B',
    students: 987,
    price: '3,299,000đ',
    image: '/img/course-2.jpg',
    category: 'web-development',
    level: 'Nâng cao',
    duration: '4 tháng'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    instructor: 'Trần Thị C',
    students: 856,
    price: '3,499,000đ',
    image: '/img/course-3.jpg',
    category: 'mobile-app',
    level: 'Trung cấp',
    duration: '5 tháng'
  },
  {
    id: 4,
    title: 'Flutter & Dart Complete Guide',
    instructor: 'Lê Văn D',
    students: 654,
    price: '2,799,000đ',
    image: '/img/course-1.jpg',
    category: 'mobile-app',
    level: 'Cơ bản',
    duration: '3 tháng'
  },
  {
    id: 5,
    title: 'Data Science & Analytics',
    instructor: 'Phạm Thị E',
    students: 2341,
    price: '3,999,000đ',
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Nâng cao',
    duration: '8 tháng'
  },
  {
    id: 6,
    title: 'Machine Learning A-Z',
    instructor: 'Hoàng Văn F',
    students: 1876,
    price: '4,499,000đ',
    image: '/img/course-3.jpg',
    category: 'ai-ml',
    level: 'Nâng cao',
    duration: '9 tháng'
  },
  {
    id: 7,
    title: 'Python for Data Science',
    instructor: 'Nguyễn Thị G',
    students: 1523,
    price: '2,499,000đ',
    image: '/img/course-1.jpg',
    category: 'data-science',
    level: 'Cơ bản',
    duration: '4 tháng'
  },
  {
    id: 8,
    title: 'DevOps & Cloud Engineering',
    instructor: 'Vũ Văn H',
    students: 743,
    price: '3,799,000đ',
    image: '/img/course-2.jpg',
    category: 'devops',
    level: 'Nâng cao',
    duration: '5 tháng'
  },
  {
    id: 9,
    title: 'UI/UX Design Masterclass',
    instructor: 'Đặng Thị I',
    students: 1098,
    price: '2,299,000đ',
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'Trung cấp',
    duration: '3 tháng'
  },
  {
    id: 10,
    title: 'Cybersecurity Fundamentals',
    instructor: 'Bùi Văn K',
    students: 892,
    price: '3,599,000đ',
    image: '/img/course-1.jpg',
    category: 'security',
    level: 'Trung cấp',
    duration: '6 tháng'
  },
  {
    id: 11,
    title: 'Blockchain Development',
    instructor: 'Trịnh Thị L',
    students: 567,
    price: '4,299,000đ',
    image: '/img/course-2.jpg',
    category: 'blockchain',
    level: 'Nâng cao',
    duration: '7 tháng'
  },
  {
    id: 12,
    title: 'Digital Marketing Pro',
    instructor: 'Mai Văn M',
    students: 1432,
    price: '1,999,000đ',
    image: '/img/course-3.jpg',
    category: 'marketing',
    level: 'Cơ bản',
    duration: '3 tháng'
  },
];

const Courses = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Khóa học của chúng tôi</h1>
          <p className="text-xl text-center text-white/90">
            Khám phá hàng trăm khóa học chất lượng cao
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-[#06BBCC]/10 text-[#06BBCC] rounded-full text-xs font-semibold">
                      {course.level}
                    </span>
                    <span className="text-gray-500 text-sm">{course.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <i className="fas fa-user-tie mr-2"></i>
                    <span>{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-600">
                      <i className="fas fa-users mr-2"></i>
                      <span>{course.students} học viên</span>
                    </div>
                    <span className="text-2xl font-bold text-[#06BBCC]">{course.price}</span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full py-3 bg-[#06BBCC] text-white text-center rounded-full font-semibold hover:bg-[#05a3b3] transition-colors duration-300"
                  >
                    Xem chi tiết
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
