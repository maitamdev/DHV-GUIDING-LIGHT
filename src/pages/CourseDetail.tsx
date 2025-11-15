import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUsers, FaClock, FaChalkboardTeacher, FaBook, FaCertificate, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

const coursesData: any = {
  '1': {
    id: '1',
    title: 'Web Development Full Stack',
    instructor: 'Nguyen Van A',
    students: 1234,
    price: 129,
    priceDisplay: '$129',
    image: '/img/course-1.jpg',
    category: 'web-development',
    level: 'Intermediate',
    duration: '6 months',
    rating: 4.8,
    totalRatings: 456,
    description: 'Comprehensive Web Development Full Stack course from basics to advanced. Master HTML, CSS, JavaScript, React, Node.js and MongoDB.',
    whatYouLearn: [
      'Modern HTML5 & CSS3',
      'JavaScript ES6+ and TypeScript',
      'React.js and Redux',
      'Node.js and Express',
      'MongoDB and databases',
      'RESTful API and GraphQL',
      'Authentication & Authorization',
      'Deployment and basic DevOps'
    ],
    requirements: [
      'Computer with internet connection',
      'No prior programming knowledge required',
      'Passion for learning and persistence'
    ],
    curriculum: [
      { module: 'HTML & CSS Basics', lessons: 15, duration: '3 weeks' },
      { module: 'JavaScript Fundamentals', lessons: 20, duration: '4 weeks' },
      { module: 'React Framework', lessons: 25, duration: '5 weeks' },
      { module: 'Backend with Node.js', lessons: 22, duration: '4 weeks' },
      { module: 'MongoDB Database', lessons: 18, duration: '3 weeks' },
      { module: 'Full Stack Project', lessons: 30, duration: '7 weeks' }
    ],
    projects: [
      'Responsive Portfolio Website',
      'E-commerce Shopping Cart',
      'Social Media Dashboard',
      'Full Stack Blog Platform',
      'Real-time Chat Application'
    ]
  },
  '2': {
    id: '2',
    title: 'React & Node.js Bootcamp',
    instructor: 'Tran Van B',
    students: 987,
    price: 139,
    priceDisplay: '$139',
    image: '/img/course-2.jpg',
    category: 'web-development',
    level: 'Advanced',
    duration: '4 months',
    rating: 4.9,
    totalRatings: 342,
    description: 'Intensive bootcamp focused on React and Node.js ecosystem. Build production-ready applications with modern tools and best practices.',
    whatYouLearn: [
      'Advanced React Hooks and Context',
      'React Router and Navigation',
      'State Management with Redux Toolkit',
      'Node.js REST APIs',
      'Express.js Middleware',
      'JWT Authentication',
      'WebSockets and Real-time Apps',
      'Testing with Jest and Cypress'
    ],
    requirements: [
      'Basic JavaScript knowledge',
      'Understanding of HTML/CSS',
      'Familiarity with Git'
    ],
    curriculum: [
      { module: 'React Advanced Concepts', lessons: 18, duration: '3 weeks' },
      { module: 'State Management', lessons: 12, duration: '2 weeks' },
      { module: 'Node.js Deep Dive', lessons: 20, duration: '4 weeks' },
      { module: 'Database Integration', lessons: 15, duration: '3 weeks' },
      { module: 'Authentication & Security', lessons: 10, duration: '2 weeks' },
      { module: 'Deployment & CI/CD', lessons: 8, duration: '2 weeks' }
    ],
    projects: [
      'Task Management System',
      'Video Streaming Platform',
      'Marketplace with Payment Integration',
      'Social Network with Real-time Features'
    ]
  },
  '3': {
    id: '3',
    title: 'Mobile App Development',
    instructor: 'Tran Thi C',
    students: 856,
    price: 149,
    priceDisplay: '$149',
    image: '/img/course-3.jpg',
    category: 'mobile-app',
    level: 'Intermediate',
    duration: '5 months',
    rating: 4.7,
    totalRatings: 289,
    description: 'Learn to build native mobile applications for iOS and Android. Master React Native and mobile development best practices.',
    whatYouLearn: [
      'React Native fundamentals',
      'Mobile UI/UX patterns',
      'Native modules integration',
      'Push notifications',
      'Mobile databases (SQLite, Realm)',
      'Camera and geolocation APIs',
      'App store deployment',
      'Performance optimization'
    ],
    requirements: [
      'JavaScript basics',
      'React knowledge helpful but not required',
      'Mac for iOS development (optional)'
    ],
    curriculum: [
      { module: 'React Native Basics', lessons: 20, duration: '4 weeks' },
      { module: 'Navigation and Routing', lessons: 12, duration: '2 weeks' },
      { module: 'State Management', lessons: 15, duration: '3 weeks' },
      { module: 'Native Features', lessons: 18, duration: '4 weeks' },
      { module: 'Backend Integration', lessons: 14, duration: '3 weeks' },
      { module: 'Publishing Apps', lessons: 10, duration: '3 weeks' }
    ],
    projects: [
      'Weather Forecast App',
      'Food Delivery Application',
      'Fitness Tracker',
      'Social Media Mobile App'
    ]
  },
  '4': {
    id: '4',
    title: 'Flutter & Dart Complete Guide',
    instructor: 'Le Van D',
    students: 654,
    price: 119,
    priceDisplay: '$119',
    image: '/img/course-1.jpg',
    category: 'mobile-app',
    level: 'Beginner',
    duration: '3 months',
    rating: 4.8,
    totalRatings: 198,
    description: 'Master Flutter and Dart to create beautiful, native cross-platform applications. Build for iOS, Android, and Web from a single codebase.',
    whatYouLearn: [
      'Dart programming language',
      'Flutter widgets and layouts',
      'State management (Provider, Riverpod)',
      'Firebase integration',
      'Animations and gestures',
      'REST API integration',
      'Local data persistence',
      'App deployment'
    ],
    requirements: [
      'Basic programming concepts',
      'No prior mobile development experience needed',
      'Computer with Android Studio or VS Code'
    ],
    curriculum: [
      { module: 'Dart Language Basics', lessons: 12, duration: '2 weeks' },
      { module: 'Flutter Fundamentals', lessons: 18, duration: '3 weeks' },
      { module: 'UI Design in Flutter', lessons: 16, duration: '3 weeks' },
      { module: 'State Management', lessons: 14, duration: '3 weeks' },
      { module: 'Backend Integration', lessons: 12, duration: '2 weeks' },
      { module: 'Final Projects', lessons: 8, duration: '3 weeks' }
    ],
    projects: [
      'Todo List App',
      'Shopping Cart Application',
      'Chat Messenger',
      'News Reader App'
    ]
  },
  '5': {
    id: '5',
    title: 'Data Science & Analytics',
    instructor: 'Pham Thi E',
    students: 2341,
    price: 169,
    priceDisplay: '$169',
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '8 months',
    rating: 4.9,
    totalRatings: 567,
    description: 'Comprehensive Data Science course covering statistics, machine learning, data visualization, and real-world analytics projects.',
    whatYouLearn: [
      'Python for Data Science',
      'NumPy and Pandas',
      'Data visualization (Matplotlib, Seaborn)',
      'Statistical analysis',
      'Machine Learning algorithms',
      'Deep Learning basics',
      'SQL and databases',
      'Big Data with Spark'
    ],
    requirements: [
      'Basic Python knowledge',
      'High school mathematics',
      'Analytical mindset'
    ],
    curriculum: [
      { module: 'Python Data Science Stack', lessons: 20, duration: '4 weeks' },
      { module: 'Statistics and Probability', lessons: 18, duration: '4 weeks' },
      { module: 'Data Visualization', lessons: 16, duration: '3 weeks' },
      { module: 'Machine Learning', lessons: 25, duration: '6 weeks' },
      { module: 'Deep Learning', lessons: 20, duration: '5 weeks' },
      { module: 'Real-world Projects', lessons: 30, duration: '10 weeks' }
    ],
    projects: [
      'Customer Churn Prediction',
      'Stock Price Forecasting',
      'Sentiment Analysis',
      'Recommendation System',
      'Image Classification'
    ]
  },
  '6': {
    id: '6',
    title: 'Machine Learning A-Z',
    instructor: 'Hoang Van F',
    students: 1876,
    price: 189,
    priceDisplay: '$189',
    image: '/img/course-3.jpg',
    category: 'ai-ml',
    level: 'Advanced',
    duration: '9 months',
    rating: 4.9,
    totalRatings: 423,
    description: 'Master Machine Learning from fundamentals to advanced topics. Learn supervised, unsupervised learning, deep learning, and deploy ML models.',
    whatYouLearn: [
      'ML fundamentals and algorithms',
      'Supervised learning (Regression, Classification)',
      'Unsupervised learning (Clustering, PCA)',
      'Neural Networks and Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Model deployment',
      'MLOps practices'
    ],
    requirements: [
      'Strong Python skills',
      'Linear algebra and calculus',
      'Statistics knowledge'
    ],
    curriculum: [
      { module: 'ML Fundamentals', lessons: 22, duration: '4 weeks' },
      { module: 'Supervised Learning', lessons: 25, duration: '5 weeks' },
      { module: 'Unsupervised Learning', lessons: 18, duration: '4 weeks' },
      { module: 'Deep Learning', lessons: 30, duration: '8 weeks' },
      { module: 'NLP and Computer Vision', lessons: 28, duration: '7 weeks' },
      { module: 'Model Deployment', lessons: 15, duration: '5 weeks' }
    ],
    projects: [
      'Spam Detection System',
      'Face Recognition',
      'Chatbot with NLP',
      'Object Detection',
      'Autonomous Driving Simulation'
    ]
  },
  '7': {
    id: '7',
    title: 'Python for Data Science',
    instructor: 'Nguyen Thi G',
    students: 1523,
    price: 109,
    priceDisplay: '$109',
    image: '/img/course-1.jpg',
    category: 'data-science',
    level: 'Beginner',
    duration: '4 months',
    rating: 4.7,
    totalRatings: 312,
    description: 'Start your Data Science journey with Python. Learn essential libraries, data manipulation, and basic machine learning concepts.',
    whatYouLearn: [
      'Python basics for data science',
      'NumPy arrays and operations',
      'Pandas DataFrames',
      'Data cleaning techniques',
      'Exploratory data analysis',
      'Basic statistics',
      'Data visualization',
      'Introduction to ML'
    ],
    requirements: [
      'No programming experience needed',
      'Basic computer skills',
      'Interest in data'
    ],
    curriculum: [
      { module: 'Python Basics', lessons: 15, duration: '3 weeks' },
      { module: 'NumPy Library', lessons: 12, duration: '2 weeks' },
      { module: 'Pandas for Data', lessons: 18, duration: '4 weeks' },
      { module: 'Data Visualization', lessons: 14, duration: '3 weeks' },
      { module: 'Statistics Basics', lessons: 12, duration: '3 weeks' },
      { module: 'ML Introduction', lessons: 10, duration: '3 weeks' }
    ],
    projects: [
      'Sales Data Analysis',
      'COVID-19 Dashboard',
      'Customer Segmentation',
      'Basic Prediction Model'
    ]
  },
  '8': {
    id: '8',
    title: 'DevOps & Cloud Engineering',
    instructor: 'Vu Van H',
    students: 743,
    price: 159,
    priceDisplay: '$159',
    image: '/img/course-2.jpg',
    category: 'devops',
    level: 'Advanced',
    duration: '5 months',
    rating: 4.8,
    totalRatings: 234,
    description: 'Master DevOps practices and cloud infrastructure. Learn Docker, Kubernetes, CI/CD, AWS, and infrastructure as code.',
    whatYouLearn: [
      'Linux and shell scripting',
      'Docker containerization',
      'Kubernetes orchestration',
      'CI/CD pipelines',
      'AWS cloud services',
      'Terraform and IaC',
      'Monitoring and logging',
      'Security best practices'
    ],
    requirements: [
      'Programming experience',
      'Basic networking knowledge',
      'Familiarity with command line'
    ],
    curriculum: [
      { module: 'Linux Fundamentals', lessons: 16, duration: '3 weeks' },
      { module: 'Docker Mastery', lessons: 18, duration: '4 weeks' },
      { module: 'Kubernetes', lessons: 20, duration: '5 weeks' },
      { module: 'CI/CD Automation', lessons: 15, duration: '3 weeks' },
      { module: 'AWS Cloud', lessons: 22, duration: '5 weeks' },
      { module: 'Infrastructure as Code', lessons: 14, duration: '4 weeks' }
    ],
    projects: [
      'Containerized Microservices',
      'Kubernetes Cluster Deployment',
      'CI/CD Pipeline Setup',
      'Cloud Infrastructure Automation'
    ]
  },
  '9': {
    id: '9',
    title: 'UI/UX Design Masterclass',
    instructor: 'Dang Thi I',
    students: 1098,
    price: 99,
    priceDisplay: '$99',
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'Intermediate',
    duration: '4 months',
    rating: 4.9,
    totalRatings: 289,
    description: 'Master UI/UX design principles, tools, and workflows. Create stunning designs and learn user-centered design thinking.',
    whatYouLearn: [
      'Design thinking process',
      'User research methods',
      'Wireframing and prototyping',
      'Figma and Adobe XD',
      'Visual design principles',
      'Interaction design',
      'Usability testing',
      'Design systems'
    ],
    requirements: [
      'No design experience needed',
      'Creative mindset',
      'Computer with design software'
    ],
    curriculum: [
      { module: 'Design Fundamentals', lessons: 14, duration: '3 weeks' },
      { module: 'User Research', lessons: 12, duration: '2 weeks' },
      { module: 'Wireframing', lessons: 16, duration: '3 weeks' },
      { module: 'Visual Design', lessons: 18, duration: '4 weeks' },
      { module: 'Prototyping', lessons: 15, duration: '3 weeks' },
      { module: 'Portfolio Projects', lessons: 20, duration: '5 weeks' }
    ],
    projects: [
      'Mobile App UI Design',
      'E-commerce Website',
      'Dashboard Design',
      'Design System Creation'
    ]
  }
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
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-[#06BBCC] hover:underline">
            ← Back to Courses
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
      alert('Course purchased successfully! You can start learning now.');
      navigate(`/roadmap/${course.category}`);
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header - Navy Blue like DHV image */}
      <div className="w-full bg-[#001f3f] py-12">
        <div className="container mx-auto px-4">
          <nav className="text-white/80 text-sm mb-6 flex items-center gap-2">
            <Link to="/" className="hover:text-white">Trang chủ</Link>
            <span>•</span>
            <Link to="/courses" className="hover:text-white">Khóa học online</Link>
            <span>•</span>
            <span className="text-white">{course.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Course Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Course Title & Label */}
              <div>
                <div className="inline-block px-4 py-1 bg-green-500 text-white rounded-full text-sm font-semibold mb-4">
                  NỔI BẬT
                </div>
                <h1 className="text-3xl font-bold text-[#001f3f] mb-4">
                  {course.title}
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {course.description}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★★★★★</span>
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-gray-400" />
                    <span>{course.totalRatings} bình luận</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-gray-400" />
                    <span>{course.students} học viên</span>
                  </div>
                </div>
              </div>

              {/* Tabs - Matching DHV style */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="border-b border-gray-200">
                  <div className="flex gap-8 px-6">
                    <button className="py-4 border-b-2 border-blue-500 text-blue-500 font-medium">
                      Tổng quan
                    </button>
                    <button className="py-4 text-gray-600 hover:text-blue-500">
                      Nội dung khóa học
                    </button>
                    <button className="py-4 text-gray-600 hover:text-blue-500">
                      Giảng viên
                    </button>
                    <button className="py-4 text-gray-600 hover:text-blue-500">
                      Đánh giá
                    </button>
                    <button className="py-4 text-gray-600 hover:text-blue-500">
                      Bình luận
                    </button>
                  </div>
                </div>

                {/* Tab Content - What You'll Learn */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-[#001f3f] mb-6">
                    Bạn sẽ học được gì?
                  </h2>
                  <div className="space-y-3">
                    {course.whatYouLearn.map((item: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FaCheckCircle className="text-green-600 text-xs" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Purchase Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden sticky top-24">
                {/* Course Image/Video */}
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                      <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-blue-600 border-b-8 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  {/* Course Stats Overlay */}
                  <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                    KHÓA HỌC LẬP TRÌNH C
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-2 rounded text-xs">
                    <div className="font-semibold text-blue-600">QUA 130 VIDEO</div>
                    <div className="text-gray-600">VÀ 310 BÀI TẬP HACKERRANK</div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="p-6">
                  <div className="flex items-baseline gap-3 mb-4">
                    <div className="text-3xl font-bold text-blue-600">
                      {course.priceDisplay}
                    </div>
                    <div className="text-lg text-gray-400 line-through">
                      ${Math.round(course.price * 2.2)}
                    </div>
                  </div>

                  {hasPurchased ? (
                    <Link
                      to={`/roadmap/${course.category}`}
                      className="w-full block text-center px-6 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors mb-4"
                    >
                      Đăng Ký Học
                    </Link>
                  ) : (
                    <button
                      onClick={handlePurchase}
                      disabled={loading}
                      className="w-full px-6 py-4 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors disabled:opacity-50 mb-4"
                    >
                      {loading ? 'Processing...' : 'Đăng Ký Học'}
                    </button>
                  )}

                  {/* Course Details */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaBook className="text-gray-400" />
                        <span>Bài giảng</span>
                      </div>
                      <span className="font-semibold text-gray-800">170</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock className="text-gray-400" />
                        <span>Thời lượng</span>
                      </div>
                      <span className="font-semibold text-gray-800">150 giờ</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaBook className="text-gray-400" />
                        <span>Bài tập</span>
                      </div>
                      <span className="font-semibold text-gray-800">520</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaCertificate className="text-gray-400" />
                        <span>Số hữu</span>
                      </div>
                      <span className="font-semibold text-gray-800">Trọn đời</span>
                    </div>
                  </div>

                  {/* Social Share */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-center gap-4">
                      <a href="#" className="text-blue-600 hover:text-blue-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      </a>
                      <a href="#" className="text-blue-400 hover:text-blue-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </a>
                      <a href="#" className="text-red-600 hover:text-red-700">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                      </a>
                      <a href="#" className="text-blue-700 hover:text-blue-800">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Original content continues below */}
      <div className="py-20 bg-white" style={{ display: 'none' }}>
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
                  What You'll Learn
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.whatYouLearn.map((item: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <FaCheckCircle className="text-green-600 text-sm" />
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
                  Course Curriculum
                </h2>
                <div className="space-y-4">
                  {course.curriculum.map((module: any, index: number) => (
                    <div key={index} className="border-2 border-gray-200 rounded-lg p-4 hover:border-[#06BBCC] transition-colors">
                      <h3 className="font-bold text-lg text-gray-800 mb-2">{module.module}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>{module.lessons} lessons</span>
                        <span>•</span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Projects */}
              {course.projects && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Real-World Projects</h2>
                  <ul className="space-y-3">
                    {course.projects.map((project: string, index: number) => (
                      <li key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-[#06BBCC] text-xl font-bold">{index + 1}</span>
                        <span className="text-gray-700 font-medium">{project}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Requirements</h2>
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
                  <p className="text-gray-600">One-time payment</p>
                </div>

                {hasPurchased ? (
                  <Link
                    to={`/roadmap/${course.category}`}
                    className="block w-full py-4 bg-green-500 hover:bg-green-600 text-white text-center rounded-lg font-bold transition-colors mb-4"
                  >
                    ✓ Purchased - Start Learning
                  </Link>
                ) : (
                  <button
                    onClick={handlePurchase}
                    disabled={loading}
                    className="w-full py-4 bg-[#06BBCC] hover:bg-[#05a3b3] text-white rounded-lg font-bold transition-colors mb-4 disabled:opacity-50"
                  >
                    {loading ? 'Processing...' : 'Enroll Now'}
                  </button>
                )}

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaCertificate className="text-[#06BBCC]" />
                    <span>Certificate upon completion</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaClock className="text-[#06BBCC]" />
                    <span>Learn anytime, anywhere</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaChalkboardTeacher className="text-[#06BBCC]" />
                    <span>Direct instructor support</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <FaUsers className="text-[#06BBCC]" />
                    <span>Join learning community</span>
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
