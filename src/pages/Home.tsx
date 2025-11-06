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
                      Best Online Courses
                    </motion.h5>
                    <motion.h1 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white text-5xl md:text-6xl font-bold mb-4"
                    >
                      Leading Online Learning Platform
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white text-xl mb-8"
                    >
                      Learn anytime, anywhere with hundreds of high-quality courses. Guided by top industry experts, helping you develop skills and achieve your career goals.
                    </motion.p>
                    <div className="flex gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                          Learn More
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/signup" className="bg-white text-[#06BBCC] px-8 py-4 rounded hover:bg-gray-100 transition-all inline-block font-semibold">
                          Join Now
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
                      Best Online Courses
                    </motion.h5>
                    <motion.h1 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-white text-5xl md:text-6xl font-bold mb-4"
                    >
                      Learn Online From Home - Convenient & Effective
                    </motion.h1>
                    <motion.p 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-white text-xl mb-8"
                    >
                      Save commuting time, flexible schedules, continuously updated content. Connect with mentors and a dynamic student community to grow together.
                    </motion.p>
                    <div className="flex gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                          Learn More
                        </Link>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        <Link to="/signup" className="bg-white text-[#06BBCC] px-8 py-4 rounded hover:bg-gray-100 transition-all inline-block font-semibold">
                          Join Now
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
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'fa-graduation-cap', title: 'Professional Mentors', description: 'Expert mentors with rich experience and dedication, ready to help you achieve your goals', delay: 0.1 },
              { icon: 'fa-globe', title: 'Online Classes', description: 'Learn anytime, anywhere with modern technology, interact directly with mentors', delay: 0.3 },
              { icon: 'fa-home', title: 'Practical Projects', description: 'Apply knowledge to real-world projects to gain valuable work experience', delay: 0.5 },
              { icon: 'fa-book-open', title: 'Learning Library', description: 'Rich resource library continuously updated to support effective learning', delay: 0.7 }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#06BBCC]/20 group"
              >
                <div className="inline-block p-4 bg-gradient-to-br from-[#06BBCC] to-blue-600 rounded-2xl mb-6 group-hover:rotate-6 transition-transform duration-300">
                  <i className={`fa fa-3x ${service.icon} text-white`}></i>
                </div>
                <h5 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h5>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
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
              <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">About Us</h6>
              <h1 className="text-4xl font-bold mb-6">Welcome To DHV GUIDING LIGHT</h1>
              <p className="text-gray-600 mb-4">Vietnam's leading online learning platform, connecting students with experienced experts and professional mentors. We are committed to delivering high-quality and effective learning experiences.</p>
              <p className="text-gray-600 mb-6">With an advanced mentor management system, you can easily search, schedule and join online mentoring sessions. Learn flexibly, develop skills and achieve your career goals.</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  'Professional Mentors',
                  'Online Classes',
                  'Practical Certification',
                  'Expert Mentoring',
                  '24/7 Support',
                  'Real Projects'
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fa fa-arrow-right text-[#06BBCC] mr-2"></i>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/about" className="bg-[#06BBCC] text-white px-8 py-4 rounded hover:bg-[#05a3b3] transition-all inline-block font-semibold">
                Learn More
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
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Courses</h6>
            <h1 className="text-4xl font-bold">Popular Courses</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: 'course-1.jpg', price: '$149', rating: 5, reviews: 123, title: 'Web Design & Development For Beginners', instructor: 'Mai Tran Thien Tam', students: 30 },
              { img: 'course-2.jpg', price: '$129', rating: 5, reviews: 98, title: 'React & Node.js Full Stack Development', instructor: 'Le Thi Huong', students: 45 },
              { img: 'course-3.jpg', price: '$179', rating: 5, reviews: 156, title: 'Professional UI/UX Design With Figma', instructor: 'Pham Duc Anh', students: 67 }
            ].map((course, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -8 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-[#06BBCC]/20"
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
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Mentors</h6>
            <h1 className="text-4xl font-bold">Our Professional Mentor Team</h1>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { img: 'team-1.jpg', name: 'Mai Trần Thiện Tâm', designation: 'Senior Full Stack Developer' },
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
            <h6 className="text-[#06BBCC] text-lg font-semibold mb-2">Testimonials</h6>
            <h1 className="text-4xl font-bold">What Our Students Say!</h1>
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
              { name: 'Nguyen Van An', profession: 'Full Stack Developer', img: 'testimonial-1.jpg', feedback: 'High-quality courses, dedicated mentors. After 3 months of learning, I landed my dream job at a leading tech company!' },
              { name: 'Tran Thi Binh', profession: 'UI/UX Designer', img: 'testimonial-2.jpg', feedback: 'Excellent learning platform! User-friendly interface, continuously updated content. Mentors are very enthusiastic and supportive.' },
              { name: 'Le Hoang Cuong', profession: 'Data Analyst', img: 'testimonial-3.jpg', feedback: 'I tried many platforms but DHV Guiding Light is the best. Real projects boosted my confidence tremendously!' },
              { name: 'Pham Thi Diem', profession: 'Mobile Developer', img: 'testimonial-4.jpg', feedback: 'The React Native course helped me successfully transition my career. Thank you to the mentors and teaching team!' }
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
