import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Top 10 Kỹ Năng Lập Trình Cần Có Năm 2024',
    excerpt: 'Khám phá những kỹ năng lập trình quan trọng nhất mà mọi developer nên học trong năm 2024. Từ AI, Cloud Computing đến Web3...',
    author: 'Nguyễn Văn A',
    date: '15/11/2024',
    readTime: '5 phút đọc',
    image: '/img/course-1.jpg',
    category: 'Lập Trình'
  },
  {
    id: 2,
    title: 'Làm Thế Nào Để Trở Thành Full Stack Developer?',
    excerpt: 'Lộ trình chi tiết từ zero đến hero để trở thành một Full Stack Developer chuyên nghiệp với mức lương hấp dẫn...',
    author: 'Trần Thị B',
    date: '12/11/2024',
    readTime: '8 phút đọc',
    image: '/img/course-2.jpg',
    category: 'Nghề Nghiệp'
  },
  {
    id: 3,
    title: 'React vs Vue vs Angular: Nên Chọn Framework Nào?',
    excerpt: 'So sánh chi tiết 3 framework JavaScript phổ biến nhất hiện nay. Ưu nhược điểm và lời khuyên cho người mới bắt đầu...',
    author: 'Lê Văn C',
    date: '10/11/2024',
    readTime: '6 phút đọc',
    image: '/img/course-3.jpg',
    category: 'Công Nghệ'
  },
  {
    id: 4,
    title: 'AI và Machine Learning: Cơ Hội Việc Làm Trong Tương Lai',
    excerpt: 'Tìm hiểu về xu hướng AI/ML và những cơ hội nghề nghiệp đầy tiềm năng trong lĩnh vực này...',
    author: 'Phạm Thị D',
    date: '08/11/2024',
    readTime: '7 phút đọc',
    image: '/img/course-1.jpg',
    category: 'AI & ML'
  },
  {
    id: 5,
    title: '5 Sai Lầm Thường Gặp Của Người Mới Học Lập Trình',
    excerpt: 'Những sai lầm phổ biến mà người mới học lập trình thường mắc phải và cách khắc phục hiệu quả...',
    author: 'Hoàng Văn E',
    date: '05/11/2024',
    readTime: '4 phút đọc',
    image: '/img/course-2.jpg',
    category: 'Học Tập'
  },
  {
    id: 6,
    title: 'Tìm Hiểu Về DevOps: Vai Trò và Công Cụ Cần Thiết',
    excerpt: 'DevOps đang trở thành xu hướng quan trọng. Cùng tìm hiểu vai trò, kỹ năng và công cụ cần thiết...',
    author: 'Vũ Thị F',
    date: '02/11/2024',
    readTime: '6 phút đọc',
    image: '/img/course-3.jpg',
    category: 'DevOps'
  }
];

const Blog = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
              Blog & Tin Tức
            </h1>
            <p className="text-xl text-white/90">
              Cập nhật kiến thức và xu hướng công nghệ mới nhất
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#06BBCC] text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#06BBCC] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <FaUser />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-[#06BBCC] font-semibold flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Đọc thêm
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center gap-2"
          >
            <button className="px-4 py-2 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors">
              1
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2">
              2
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2">
              3
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors border-2">
              →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Subscribe */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Đăng Ký Nhận Bản Tin
            </h2>
            <p className="text-gray-600 mb-8">
              Nhận tin tức, bài viết và khóa học mới nhất qua email của bạn
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#06BBCC] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
