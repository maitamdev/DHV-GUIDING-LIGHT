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
    title: 'Top 10 Programming Skills You Need in 2024',
    excerpt: 'Discover the most important programming skills every developer should learn in 2024. From AI, Cloud Computing to Web3...',
    author: 'John Anderson',
    date: 'November 15, 2024',
    readTime: '5 min read',
    image: '/img/course-1.jpg',
    category: 'Programming'
  },
  {
    id: 2,
    title: 'How to Become a Full Stack Developer?',
    excerpt: 'Complete roadmap from zero to hero to become a professional Full Stack Developer with an attractive salary...',
    author: 'Sarah Chen',
    date: 'November 12, 2024',
    readTime: '8 min read',
    image: '/img/course-2.jpg',
    category: 'Career'
  },
  {
    id: 3,
    title: 'React vs Vue vs Angular: Which Framework Should You Choose?',
    excerpt: 'Detailed comparison of the 3 most popular JavaScript frameworks today. Pros and cons and advice for beginners...',
    author: 'David Williams',
    date: 'November 10, 2024',
    readTime: '6 min read',
    image: '/img/course-3.jpg',
    category: 'Technology'
  },
  {
    id: 4,
    title: 'AI and Machine Learning: Career Opportunities in the Future',
    excerpt: 'Learn about AI/ML trends and promising career opportunities in this field...',
    author: 'Emily Parker',
    date: 'November 8, 2024',
    readTime: '7 min read',
    image: '/img/course-1.jpg',
    category: 'AI & ML'
  },
  {
    id: 5,
    title: '5 Common Mistakes Beginner Programmers Make',
    excerpt: 'Common mistakes that beginner programmers often make and effective ways to fix them...',
    author: 'Michael Johnson',
    date: 'November 5, 2024',
    readTime: '4 min read',
    image: '/img/course-2.jpg',
    category: 'Learning'
  },
  {
    id: 6,
    title: 'Understanding DevOps: Role and Essential Tools',
    excerpt: 'DevOps is becoming an important trend. Learn about the role, skills and essential tools...',
    author: 'Lisa Nguyen',
    date: 'November 2, 2024',
    readTime: '6 min read',
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
              Blog & News
            </h1>
            <p className="text-xl text-white/90">
              Stay updated with the latest knowledge and technology trends
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
                      Read more
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
              Subscribe to Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Receive the latest news, articles and courses via your email
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-lg border-2 border-gray-300 focus:border-[#06BBCC] focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#06BBCC] text-white rounded-lg font-semibold hover:bg-[#05a3b3] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
