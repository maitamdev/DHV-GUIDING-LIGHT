import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* Hero Carousel */}
      <div className="relative w-full mb-20">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          loop
          className="h-[600px]"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img className="w-full h-full object-cover" src="/img/carousel-1.jpg" alt="Carousel 1" />
              <div className="absolute inset-0 bg-[rgba(24,29,56,0.7)] flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <motion.h5 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-[#06BBCC] uppercase mb-3 text-lg font-semibold"
                    >
                      Khóa Học Trực Tuyến Tốt Nhất
                    </motion.h5>
                    <motion.h1 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white text-5xl md:text-6xl font-bold mb-4"
                    >
                      Nền Tảng Học Tập Trực Tuyến Hàng Đầu
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white text-xl mb-8"
                    >
                      Học tập mọi lúc, mọi nơi với hàng trăm khóa học chất lượng cao. Được hướng dẫn bởi các chuyên gia hàng đầu trong ngành, giúp bạn phát triển kỹ năng và đạt được mục tiêu nghề nghiệp.
                    </motion.p>
                    <div className="flex gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                          Tìm Hiểu Thêm
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/signup" className="bg-white text-[#06BBCC] px-8 py-4 rounded hover:bg-gray-100 transition-all inline-block font-semibold">
                          Tham Gia Ngay
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <img className="w-full h-full object-cover" src="/img/carousel-2.jpg" alt="Carousel 2" />
              <div className="absolute inset-0 bg-[rgba(24,29,56,0.7)] flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-3xl">
                    <motion.h5 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-[#06BBCC] uppercase mb-3 text-lg font-semibold"
                    >
                      Khóa Học Trực Tuyến Tốt Nhất
                    </motion.h5>
                    <motion.h1 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white text-5xl md:text-6xl font-bold mb-4"
                    >
                      Học Trực Tuyến Từ Nhà - Tiện Lợi & Hiệu Quả
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white text-xl mb-8"
                    >
                      Tiết kiệm thời gian di chuyển, linh hoạt lịch học, nội dung được cập nhật liên tục. Kết nối với mentor và cộng đồng học viên năng động để cùng nhau phát triển.
                    </motion.p>
                    <div className="flex gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                          Tìm Hiểu Thêm
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/signup" className="bg-white text-[#06BBCC] px-8 py-4 rounded hover:bg-gray-100 transition-all inline-block font-semibold">
                          Tham Gia Ngay
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Service Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-graduation-cap', title: 'Giảng Viên Giỏi', description: 'Đội ngũ giảng viên giàu kinh nghiệm và tâm huyết, sẵn sàng hỗ trợ bạn đạt mục tiêu', delay: 0.1 },
              { icon: 'fa-globe', title: 'Lớp Học Trực Tuyến', description: 'Học mọi lúc mọi nơi với công nghệ hiện đại, tương tác trực tiếp với giảng viên', delay: 0.3 },
              { icon: 'fa-home', title: 'Dự Án Thực Tế', description: 'Áp dụng kiến thức vào các dự án thực tế để tích lũy kinh nghiệm làm việc', delay: 0.5 },
              { icon: 'fa-book-open', title: 'Thư Viện Học Liệu', description: 'Kho tài liệu phong phú được cập nhật liên tục, hỗ trợ học tập hiệu quả', delay: 0.7 }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow"
              >
                <i className={`fa fa-3x ${service.icon} text-[#06BBCC] mb-6`}></i>
                <h5 className="text-xl font-bold mb-3">{service.title}</h5>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="relative h-[500px]">
              <img className="w-full h-full object-cover rounded-lg shadow-xl" src="/img/about.jpg" alt="About" />
            </motion.div>
            <motion.div variants={fadeInRight}>
              <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Về Chúng Tôi</h6>
              <h1 className="text-4xl font-bold mb-6">Chào Mừng Đến Với DHV GUIDING LIGHT</h1>
              <p className="text-gray-600 mb-4">Nền tảng học tập trực tuyến hàng đầu Việt Nam, kết nối học viên với các chuyên gia và mentor giàu kinh nghiệm. Chúng tôi cam kết mang đến trải nghiệm học tập chất lượng cao và hiệu quả.</p>
              <p className="text-gray-600 mb-6">Với hệ thống quản lý mentor tiên tiến, bạn có thể dễ dàng tìm kiếm, đặt lịch và tham gia các buổi mentoring trực tuyến. Học tập linh hoạt, phát triển kỹ năng và đạt được mục tiêu nghề nghiệp của bạn.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  'Giảng Viên Giỏi',
                  'Lớp Học Trực Tuyến',
                  'Chứng Chỉ Quốc Tế',
                  'Mentor Chuyên Nghiệp',
                  'Hỗ Trợ 24/7',
                  'Dự Án Thực Tế'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fa fa-arrow-right text-[#06BBCC] mr-2"></i>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                Tìm Hiểu Thêm
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Categories</h6>
            <h1 className="text-4xl font-bold">Courses Categories</h1>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7">
              <div className="grid gap-4">
                <motion.div variants={fadeInUp} className="relative overflow-hidden rounded-lg group cursor-pointer">
                  <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src="/img/cat-1.jpg" alt="Web Design" />
                  <div className="absolute bottom-4 right-4 bg-white px-6 py-3 rounded shadow-lg">
                    <h5 className="text-xl font-bold mb-1">Web Design</h5>
                    <small className="text-[#06BBCC]">49 Courses</small>
                  </div>
                </motion.div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { img: 'cat-2.jpg', title: 'Graphic Design', courses: 49, delay: 0.3 },
                    { img: 'cat-3.jpg', title: 'Video Editing', courses: 49, delay: 0.5 }
                  ].map((cat, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="relative overflow-hidden rounded-lg group cursor-pointer"
                    >
                      <img className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" src={`/img/${cat.img}`} alt={cat.title} />
                      <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow-lg">
                        <h5 className="text-lg font-bold mb-1">{cat.title}</h5>
                        <small className="text-[#06BBCC]">{cat.courses} Courses</small>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="grid gap-4">
                {[
                  { img: 'cat-4.jpg', title: 'Online Marketing', courses: 49, delay: 0.1 },
                  { img: 'cat-5.jpg', title: 'SEO Optimization', courses: 49, delay: 0.3 }
                ].map((cat, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp}
                    className="relative overflow-hidden rounded-lg group cursor-pointer h-64"
                  >
                    <img className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" src={`/img/${cat.img}`} alt={cat.title} />
                    <div className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded shadow-lg">
                      <h5 className="text-lg font-bold mb-1">{cat.title}</h5>
                      <small className="text-[#06BBCC]">{cat.courses} Courses</small>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Khóa Học</h6>
            <h1 className="text-4xl font-bold">Khóa Học Phổ Biến</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'course-1.jpg', price: '3.490.000đ', rating: 5, reviews: 123, title: 'Khóa Học Thiết Kế & Phát Triển Web Cho Người Mới', instructor: 'Trần Văn Minh', students: 30 },
              { img: 'course-2.jpg', price: '2.990.000đ', rating: 5, reviews: 98, title: 'React & Node.js Full Stack Development', instructor: 'Lê Thị Hương', students: 45 },
              { img: 'course-3.jpg', price: '4.290.000đ', rating: 5, reviews: 156, title: 'UI/UX Design Chuyên Nghiệp Với Figma', instructor: 'Phạm Đức Anh', students: 67 }
            ].map((course, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500" src={`/img/${course.img}`} alt={course.title} />
                  <div className="absolute top-4 right-4 bg-[#06BBCC] text-white px-4 py-2 rounded">
                    {course.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(course.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-sm"></i>
                      ))}
                      <small className="text-gray-600 ml-2">({course.reviews})</small>
                    </div>
                  </div>
                  <h5 className="text-xl font-bold mb-4">{course.title}</h5>
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center text-gray-600">
                      <i className="fa fa-user mr-2"></i>
                      <small>{course.instructor}</small>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fa fa-clock mr-2"></i>
                      <small>1.49 Hrs</small>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <i className="fa fa-users mr-2"></i>
                      <small>{course.students} Students</small>
                    </div>
                  </div>
                  <Link to="/courses" className="mt-4 block text-center bg-[#06BBCC] text-white py-3 rounded hover:bg-[#05a3b3] transition-all">
                    Read More<i className="fa fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Giảng Viên</h6>
            <h1 className="text-4xl font-bold">Đội Ngũ Giảng Viên Chuyên Nghiệp</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: 'team-1.jpg', name: 'Trần Văn Minh', designation: 'Senior Full Stack Developer' },
              { img: 'team-2.jpg', name: 'Lê Thị Hương', designation: 'UI/UX Design Lead' },
              { img: 'team-3.jpg', name: 'Phạm Đức Anh', designation: 'AI/ML Engineer' },
              { img: 'team-4.jpg', name: 'Ngô Thị Mai', designation: 'Mobile Developer' }
            ].map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500" src={`/img/${member.img}`} alt={member.name} />
                  <div className="absolute inset-0 bg-[rgba(6,187,204,0.7)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex gap-2">
                      <a href="#" className="w-10 h-10 bg-white text-[#06BBCC] rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-all">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white text-[#06BBCC] rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-all">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="w-10 h-10 bg-white text-[#06BBCC] rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-all">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="text-xl font-bold mb-1">{member.name}</h5>
                <small className="text-gray-600">{member.designation}</small>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Phản Hồi</h6>
            <h1 className="text-4xl font-bold">Học Viên Nói Gì Về Chúng Tôi!</h1>
          </motion.div>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }}
            className="pb-16"
          >
            {[
              { name: 'Nguyễn Văn An', profession: 'Full Stack Developer', img: 'testimonial-1.jpg', feedback: 'Khóa học rất chất lượng, giảng viên tận tâm. Sau 3 tháng học tôi đã có công việc mơ ước tại công ty công nghệ hàng đầu!' },
              { name: 'Trần Thị Bình', profession: 'UI/UX Designer', img: 'testimonial-2.jpg', feedback: 'Nền tảng học tập tuyệt vời! Giao diện thân thiện, nội dung cập nhật liên tục. Mentor rất nhiệt tình hỗ trợ.' },
              { name: 'Lê Hoàng Cường', profession: 'Data Analyst', img: 'testimonial-3.jpg', feedback: 'Tôi đã thử nhiều nền tảng nhưng DHV Guiding Light là tốt nhất. Dự án thực tế giúp tôi tự tin hơn rất nhiều!' },
              { name: 'Phạm Thị Diễm', profession: 'Mobile Developer', img: 'testimonial-4.jpg', feedback: 'Khóa học React Native giúp tôi chuyển đổi sự nghiệp thành công. Cảm ơn đội ngũ giảng viên và mentor!' }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <i className="fa fa-quote-left fa-3x text-[#06BBCC] mb-4"></i>
                  <p className="text-gray-600 mb-6">{testimonial.feedback}</p>
                  <img className="w-20 h-20 rounded-full mx-auto mb-4 object-cover" src={`/img/${testimonial.img}`} alt={testimonial.name} />
                  <h5 className="text-xl font-bold">{testimonial.name}</h5>
                  <p className="text-gray-600">{testimonial.profession}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </>
  );
};

export default Home;
