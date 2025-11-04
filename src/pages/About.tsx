import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRocket, FaHeart, FaUsers, FaLightbulb, FaGraduationCap, FaStar, FaChartLine, FaGlobe } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: FaUsers, number: '10,000+', label: 'Học Viên', color: 'from-blue-500 to-cyan-500' },
    { icon: FaGraduationCap, number: '200+', label: 'Khóa Học', color: 'from-purple-500 to-pink-500' },
    { icon: FaStar, number: '150+', label: 'Giảng Viên', color: 'from-yellow-500 to-orange-500' },
    { icon: FaGlobe, number: '50+', label: 'Quốc Gia', color: 'from-green-500 to-emerald-500' },
  ];

  const values = [
    {
      icon: FaRocket,
      title: 'Đổi Mới & Sáng Tạo',
      description: 'Ứng dụng công nghệ hiện đại nhất để tạo ra trải nghiệm học tập độc đáo và hiệu quả.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaHeart,
      title: 'Tận Tâm & Chất Lượng',
      description: 'Cam kết mang đến chất lượng giáo dục tốt nhất, luôn lắng nghe và hỗ trợ học viên.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: FaUsers,
      title: 'Cộng Đồng Gắn Kết',
      description: 'Xây dựng một cộng đồng học tập năng động, nơi mọi người cùng nhau phát triển.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FaLightbulb,
      title: 'Học Tập Suốt Đời',
      description: 'Khuyến khích văn hóa học tập liên tục, phát triển bản thân không ngừng nghỉ.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  const milestones = [
    { year: '2020', title: 'Khởi Đầu', description: 'Ra mắt nền tảng với 10 khóa học đầu tiên' },
    { year: '2021', title: 'Phát Triển', description: 'Đạt 1000+ học viên và mở rộng chương trình' },
    { year: '2022', title: 'Mở Rộng', description: 'Hợp tác với 50+ doanh nghiệp lớn' },
    { year: '2023', title: 'Vươn Xa', description: 'Có mặt tại 20+ quốc gia trên thế giới' },
    { year: '2024', title: 'Đột Phá', description: 'Ra mắt tính năng AI Mentor và AR Learning' },
  ];

  return (
    <>
      {/* Hero Section với Gradient */}
      <div className="relative w-full bg-gradient-to-br from-[#06BBCC] via-blue-600 to-purple-700 py-32 overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center mx-auto">
                <FaGraduationCap className="text-6xl text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              DHV GUIDING LIGHT
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              🌟 Thắp Sáng Tương Lai - Dẫn Lối Thành Công 🌟
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nền tảng học tập trực tuyến hàng đầu Việt Nam, kết nối bạn với tri thức, 
              mentor và cơ hội phát triển nghề nghiệp không giới hạn.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-block p-6 bg-gradient-to-br ${stat.color} rounded-2xl shadow-2xl mb-4 transform hover:scale-110 transition-transform`}>
                  <stat.icon className="text-5xl text-white" />
                </div>
                <h3 className="text-4xl font-extrabold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-semibold text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Sứ Mệnh & Tầm Nhìn</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-[#06BBCC] to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl p-10 shadow-2xl border-l-8 border-[#06BBCC] hover:shadow-3xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-[#06BBCC] rounded-2xl">
                  <FaRocket className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Sứ Mệnh</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>DHV Guiding Light</strong> ra đời với sứ mệnh <strong>dân chủ hóa giáo dục</strong>, 
                mang kiến thức chất lượng cao đến với mọi người, mọi nơi. Chúng tôi tin rằng học tập 
                không có rào cản, mỗi cá nhân đều xứng đáng có cơ hội phát triển tối đa tiềm năng của mình.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl text-[#06BBCC] mt-1" />
                  <p className="text-gray-700">Cung cấp khóa học chất lượng cao với giá cả phải chăng</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl text-[#06BBCC] mt-1" />
                  <p className="text-gray-700">Kết nối học viên với mentor giàu kinh nghiệm</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaChartLine className="text-2xl text-[#06BBCC] mt-1" />
                  <p className="text-gray-700">Ứng dụng công nghệ AI để cá nhân hóa lộ trình học tập</p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-10 shadow-2xl border-l-8 border-purple-600 hover:shadow-3xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-purple-600 rounded-2xl">
                  <FaLightbulb className="text-4xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800">Tầm Nhìn</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Trở thành <strong>nền tảng giáo dục trực tuyến số 1 Đông Nam Á</strong> vào năm 2030, 
                nơi hàng triệu người học tin tượng và lựa chọn để phát triển sự nghiệp. Chúng tôi hướng 
                đến một thế giới nơi học tập là niềm vui, không phải gánh nặng.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-2xl text-purple-600 mt-1" />
                  <p className="text-gray-700">Mở rộng ra 100+ quốc gia trên toàn thế giới</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-2xl text-purple-600 mt-1" />
                  <p className="text-gray-700">Đào tạo 10 triệu+ học viên với kỹ năng thế kỷ 21</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaGlobe className="text-2xl text-purple-600 mt-1" />
                  <p className="text-gray-700">Dẫn đầu xu hướng học tập với AI và thực tế ảo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Những giá trị định hướng mọi hành động và quyết định của chúng tôi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className={`inline-block p-5 bg-gradient-to-br ${value.gradient} rounded-2xl mb-6`}>
                  <value.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Hành Trình Phát Triển</h2>
            <p className="text-xl text-gray-600">Những cột mốc quan trọng trong chặng đường của chúng tôi</p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-3xl font-bold text-[#06BBCC] mb-2">{milestone.year}</h3>
                  <h4 className="text-2xl font-bold text-gray-800 mb-2">{milestone.title}</h4>
                  <p className="text-gray-600 text-lg">{milestone.description}</p>
                </div>
                
                <div className="relative">
                  <div className="w-6 h-6 bg-gradient-to-br from-[#06BBCC] to-purple-600 rounded-full shadow-lg"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute left-1/2 top-6 w-1 h-20 bg-gradient-to-b from-[#06BBCC] to-purple-600 transform -translate-x-1/2"></div>
                  )}
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-[#06BBCC] to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold text-white mb-6">
              Sẵn Sàng Bắt Đầu Hành Trình?
            </h2>
            <p className="text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Tham gia cùng hàng ngàn học viên đang thay đổi cuộc đời họ mỗi ngày
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <Link 
                to="/courses" 
                className="px-10 py-5 bg-white text-[#06BBCC] rounded-full font-bold text-xl hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 transform"
              >
                Khám Phá Khóa Học
              </Link>
              <Link 
                to="/signup" 
                className="px-10 py-5 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-bold text-xl hover:from-yellow-500 hover:to-orange-600 transition-all shadow-2xl hover:scale-105 transform"
              >
                Đăng Ký Ngay
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
