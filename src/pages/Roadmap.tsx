import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaDatabase, FaRobot, FaServer, FaChartLine } from 'react-icons/fa';

const roadmaps = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Lộ trình trở thành Full Stack Web Developer',
    icon: FaCode,
    color: 'bg-blue-500',
    courses: 12,
    duration: '6 tháng'
  },
  {
    id: 'mobile-app',
    title: 'Mobile App Development',
    description: 'Phát triển ứng dụng di động đa nền tảng',
    icon: FaMobile,
    color: 'bg-green-500',
    courses: 10,
    duration: '5 tháng'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Khoa học dữ liệu và phân tích',
    icon: FaChartLine,
    color: 'bg-purple-500',
    courses: 15,
    duration: '8 tháng'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Trí tuệ nhân tạo và học máy',
    icon: FaRobot,
    color: 'bg-red-500',
    courses: 14,
    duration: '9 tháng'
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    description: 'Quản lý hệ thống và triển khai tự động',
    icon: FaServer,
    color: 'bg-yellow-500',
    courses: 8,
    duration: '4 tháng'
  },
  {
    id: 'database',
    title: 'Database Administrator',
    description: 'Quản trị cơ sở dữ liệu chuyên sâu',
    icon: FaDatabase,
    color: 'bg-indigo-500',
    courses: 9,
    duration: '5 tháng'
  },
];

const Roadmap = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">Lộ trình học tập</h1>
          <p className="text-xl text-center text-gray-100">
            Chọn lộ trình phù hợp với mục tiêu nghề nghiệp của bạn
          </p>
        </div>
      </section>

      {/* Roadmaps Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmaps.map((roadmap) => {
              const Icon = roadmap.icon;
              return (
                <Link
                  key={roadmap.id}
                  to={`/roadmap/${roadmap.id}`}
                  className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`${roadmap.color} p-8 text-white`}>
                    <Icon className="text-6xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{roadmap.title}</h3>
                    <p className="text-gray-100">{roadmap.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-book mr-2"></i>
                        <span>{roadmap.courses} khóa học</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="fas fa-clock mr-2"></i>
                        <span>{roadmap.duration}</span>
                      </div>
                    </div>
                    <div className="w-full py-3 bg-[#06BBCC] text-white text-center rounded-full font-semibold">
                      Xem chi tiết
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">
            Chưa chắc chắn về lộ trình của mình?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Đặt lịch tư vấn miễn phí với chuyên gia của chúng tôi
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#06BBCC] text-white rounded-full font-semibold hover:bg-[#05a3b3] transition-colors duration-300"
          >
            Đặt lịch tư vấn
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;
