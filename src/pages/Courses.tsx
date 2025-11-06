import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: 'Web Development Full Stack',
    instructor: 'Nguyen Van A',
    students: 1234,
    price: '$129',
    image: '/img/course-1.jpg',
    category: 'web-development',
    level: 'Intermediate',
    duration: '6 months'
  },
  {
    id: 2,
    title: 'React & Node.js Bootcamp',
    instructor: 'Tran Van B',
    students: 987,
    price: '$139',
    image: '/img/course-2.jpg',
    category: 'web-development',
    level: 'Advanced',
    duration: '4 months'
  },
  {
    id: 3,
    title: 'Mobile App Development',
    instructor: 'Tran Thi C',
    students: 856,
    price: '$149',
    image: '/img/course-3.jpg',
    category: 'mobile-app',
    level: 'Intermediate',
    duration: '5 months'
  },
  {
    id: 4,
    title: 'Flutter & Dart Complete Guide',
    instructor: 'Le Van D',
    students: 654,
    price: '$119',
    image: '/img/course-1.jpg',
    category: 'mobile-app',
    level: 'Beginner',
    duration: '3 months'
  },
  {
    id: 5,
    title: 'Data Science & Analytics',
    instructor: 'Pham Thi E',
    students: 2341,
    price: '$169',
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '8 months'
  },
  {
    id: 6,
    title: 'Machine Learning A-Z',
    instructor: 'Hoang Van F',
    students: 1876,
    price: '$189',
    image: '/img/course-3.jpg',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '9 months'
  },
  {
    id: 7,
    title: 'Python for Data Science',
    instructor: 'Nguyen Thi G',
    students: 1523,
    price: '$109',
    image: '/img/course-1.jpg',
    category: 'data-science',
    level: 'Beginner',
    duration: '4 months'
  },
  {
    id: 8,
    title: 'DevOps & Cloud Engineering',
    instructor: 'Vu Van H',
    students: 743,
    price: '$159',
    image: '/img/course-2.jpg',
    category: 'devops',
    level: 'Advanced',
    duration: '5 months'
  },
  {
    id: 9,
    title: 'UI/UX Design Masterclass',
    instructor: 'Dang Thi I',
    students: 1098,
    price: '$99',
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'Intermediate',
    duration: '3 months'
  },
  {
    id: 10,
    title: 'Cybersecurity Fundamentals',
    instructor: 'Bui Van K',
    students: 892,
    price: '$155',
    image: '/img/course-1.jpg',
    category: 'security',
    level: 'Intermediate',
    duration: '6 months'
  },
  {
    id: 11,
    title: 'Blockchain Development',
    instructor: 'Trinh Thi L',
    students: 567,
    price: '$179',
    image: '/img/course-2.jpg',
    category: 'blockchain',
    level: 'Advanced',
    duration: '7 months'
  },
  {
    id: 12,
    title: 'Digital Marketing Pro',
    instructor: 'Mai Van M',
    students: 1432,
    price: '$89',
    image: '/img/course-3.jpg',
    category: 'marketing',
    level: 'Beginner',
    duration: '3 months'
  },
];

const Courses = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Our Courses</h1>
          <p className="text-xl text-center text-white/90">
            Discover hundreds of high-quality courses
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
                      <span>{course.students} students</span>
                    </div>
                    <span className="text-2xl font-bold text-[#06BBCC]">{course.price}</span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full py-3 bg-[#06BBCC] text-white text-center rounded-full font-semibold hover:bg-[#05a3b3] transition-colors duration-300"
                  >
                    View Details
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
