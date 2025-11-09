import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaUser, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaShare } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content: string[];
}

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Blog posts database
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'How to Choose the Right Programming Language for Your Career',
      excerpt: 'Discover which programming language aligns best with your career goals and industry trends.',
      author: 'Sarah Johnson',
      date: 'November 5, 2024',
      category: 'Career Guidance',
      image: '/img/blog-1.jpg',
      readTime: '8 min read',
      content: [
        'Choosing the right programming language is one of the most important decisions in your tech career. With dozens of languages available, each with its own strengths and use cases, making the right choice can feel overwhelming.',
        
        'First, consider your career goals. Are you interested in web development? JavaScript, Python, and TypeScript are excellent choices. For mobile development, Swift (iOS) and Kotlin (Android) are industry standards. If you\'re drawn to data science and machine learning, Python is the clear winner.',
        
        'Industry demand is another crucial factor. According to recent surveys, JavaScript remains the most popular language, used by over 65% of developers worldwide. Python follows closely, especially in data science, AI, and automation fields.',
        
        'Don\'t forget about job market trends. Research job postings in your target location and industry. Languages like Java and C# remain highly valuable in enterprise environments, while newer languages like Go and Rust are gaining traction in cloud infrastructure and systems programming.',
        
        'Learning curve matters too. Python is known for its beginner-friendly syntax, making it an excellent first language. JavaScript\'s versatility - running both in browsers and on servers - makes it another great starting point.',
        
        'Remember: The best language to learn is the one you\'ll actually use. Start with one language, build real projects, and expand your skills over time. Most successful developers know multiple languages and choose the right tool for each job.',
        
        'At DHV Guiding Light, our mentors can help you navigate this decision based on your unique goals and learning style. Book a free consultation today to get personalized guidance!'
      ]
    },
    {
      id: 2,
      title: 'Top 5 Skills Every Developer Should Master in 2024',
      excerpt: 'Essential technical and soft skills that will make you stand out in the competitive tech industry.',
      author: 'Michael Chen',
      date: 'November 3, 2024',
      category: 'Skills Development',
      image: '/img/blog-2.jpg',
      readTime: '10 min read',
      content: [
        'The tech industry evolves rapidly, and staying relevant requires continuous learning. Here are the five critical skills every developer should master in 2024:',
        
        '1. Cloud Computing & DevOps\nCloud platforms like AWS, Azure, and Google Cloud are no longer optional - they\'re essential. Understanding containerization (Docker), orchestration (Kubernetes), and CI/CD pipelines will make you invaluable to any team. Companies are moving to cloud-native architectures, and developers who can deploy and manage applications in the cloud have a significant advantage.',
        
        '2. API Design & Microservices Architecture\nMonolithic applications are giving way to microservices. Learn how to design RESTful APIs, work with GraphQL, and understand service-oriented architecture. This knowledge is crucial for building scalable, maintainable systems.',
        
        '3. Version Control & Collaboration\nGit is the industry standard, but mastering it goes beyond basic commits and pushes. Learn branching strategies, pull request workflows, code reviews, and collaboration tools like GitHub, GitLab, or Bitbucket. Strong collaboration skills differentiate good developers from great ones.',
        
        '4. Security Best Practices\nWith cyber threats increasing, security is everyone\'s responsibility. Understand common vulnerabilities (OWASP Top 10), authentication methods (OAuth, JWT), encryption, and secure coding practices. Security-conscious developers are highly sought after.',
        
        '5. Problem-Solving & System Design\nTechnical skills are important, but the ability to break down complex problems and design scalable systems is what defines senior developers. Practice algorithmic thinking, study system design patterns, and work on real-world projects that challenge you.',
        
        'Bonus: Communication & Soft Skills\nThe stereotype of the solitary coder is outdated. Modern developers collaborate with designers, product managers, and stakeholders. Strong communication, empathy, and teamwork skills are as important as your technical abilities.',
        
        'DHV Guiding Light offers comprehensive courses covering all these skills, with hands-on projects and mentor support. Start your learning journey today!'
      ]
    },
    {
      id: 3,
      title: 'The Role of AI in Modern Education and Learning',
      excerpt: 'Exploring how artificial intelligence is transforming education and personalized learning experiences.',
      author: 'Dr. Emily Williams',
      date: 'November 1, 2024',
      category: 'Technology Trends',
      image: '/img/blog-3.jpg',
      readTime: '12 min read',
      content: [
        'Artificial Intelligence is revolutionizing education in ways we couldn\'t imagine a decade ago. From personalized learning paths to intelligent tutoring systems, AI is making education more accessible, effective, and engaging.',
        
        'Personalized Learning at Scale\nTraditional classrooms struggle to adapt to individual learning paces and styles. AI-powered platforms analyze student performance, identify knowledge gaps, and adjust content difficulty in real-time. At DHV Guiding Light, we use AI to match students with the perfect mentor and suggest courses based on their goals and progress.',
        
        'Intelligent Content Recommendations\nJust like Netflix recommends shows, AI can recommend learning resources. By analyzing thousands of successful learning journeys, AI identifies the most effective learning paths for specific goals. This eliminates guesswork and helps students reach their objectives faster.',
        
        'Automated Assessment & Feedback\nAI can grade assignments, provide instant feedback, and identify common mistakes across student cohorts. This frees up instructors to focus on high-value interactions like mentorship, discussion, and project guidance.',
        
        'Natural Language Processing for Learning\nChatbots and AI assistants can answer student questions 24/7, explain concepts in multiple ways, and provide code reviews. While they don\'t replace human mentors, they offer immediate support when you\'re stuck at 2 AM.',
        
        'Predictive Analytics for Student Success\nAI can predict which students might struggle and intervene early with additional support. It can also identify when a student is ready for more advanced material, preventing boredom and maintaining engagement.',
        
        'The Human Touch Remains Essential\nWhile AI enhances learning, human mentors provide something irreplaceable: empathy, motivation, real-world context, and career guidance. The future of education is a partnership between AI efficiency and human wisdom.',
        
        'At DHV Guiding Light, we combine cutting-edge AI technology with experienced mentors to create the ultimate learning experience. Experience the future of education today!'
      ]
    },
    {
      id: 4,
      title: 'Building Your Developer Portfolio: Best Practices',
      excerpt: 'Learn how to create an impressive portfolio that showcases your skills and attracts employers.',
      author: 'Alex Martinez',
      date: 'October 28, 2024',
      category: 'Career Development',
      image: '/img/course-1.jpg',
      readTime: '9 min read',
      content: [
        'Your portfolio is your professional identity in the tech world. It\'s often the first impression you make on potential employers or clients. Here\'s how to build a portfolio that stands out:',
        
        '1. Quality Over Quantity\nDon\'t showcase every project you\'ve ever built. Select 4-6 of your best, most diverse projects that demonstrate different skills. Each project should tell a story and solve a real problem.',
        
        '2. Include Detailed Case Studies\nFor each project, explain:\n- The problem you were solving\n- Your technical decisions and why you made them\n- Challenges you overcame\n- The impact or results\n- Technologies used',
        
        '3. Show Live Demos\nEmployers want to see working applications, not just code. Deploy your projects using platforms like Vercel, Netlify, or Heroku. Include links to both the live site and the GitHub repository.',
        
        '4. Write Clean, Well-Documented Code\nRemember: recruiters will read your code. Use meaningful variable names, write comments where necessary, include README files with setup instructions, and follow best practices for your chosen language.',
        
        '5. Demonstrate Range\nShowcase different types of projects:\n- A full-stack web application\n- A mobile app or responsive design\n- An API or backend service\n- Open source contributions\n- A personal project that shows passion',
        
        '6. Keep It Updated\nYour portfolio should evolve with your skills. Remove outdated projects and add new ones that reflect your current expertise. Set a reminder to review and update every 3-4 months.',
        
        '7. Professional Presentation\nDesign matters. Your portfolio site should be:\n- Fast loading\n- Mobile responsive\n- Easy to navigate\n- Visually appealing\n- Accessible',
        
        '8. Add a Personal Touch\nInclude an "About Me" section that shows your personality, not just your skills. Share your journey, interests, and what drives you as a developer.',
        
        'DHV Guiding Light\'s Portfolio Building course teaches you to create professional portfolios that get results. Our mentors review your work and provide personalized feedback. Enroll today!'
      ]
    },
    {
      id: 5,
      title: 'Remote Work Best Practices for Developers',
      excerpt: 'Master the art of remote work with proven strategies for productivity and work-life balance.',
      author: 'Jessica Taylor',
      date: 'October 25, 2024',
      category: 'Productivity',
      image: '/img/course-2.jpg',
      readTime: '7 min read',
      content: [
        'Remote work is now the norm for many developers, but it comes with unique challenges. Here\'s how to thrive in a remote environment:',
        
        'Create a Dedicated Workspace\nYour environment affects productivity. Set up a dedicated work area with:\n- Ergonomic chair and desk\n- Good lighting (natural light is best)\n- Minimal distractions\n- Proper equipment (good monitor, keyboard, mouse)',
        
        'Establish a Routine\nWithout office structure, it\'s easy to blur work and personal time. Set consistent work hours, take regular breaks using the Pomodoro technique (25 min work, 5 min break), and have a clear "end of workday" ritual.',
        
        'Over-Communicate\nRemote work requires more deliberate communication:\n- Update your team on progress regularly\n- Use video calls for complex discussions\n- Document decisions in writing\n- Be responsive during work hours',
        
        'Use the Right Tools\n- Communication: Slack, Discord, Microsoft Teams\n- Video: Zoom, Google Meet\n- Project Management: Jira, Trello, Asana\n- Code Collaboration: GitHub, GitLab\n- Documentation: Notion, Confluence',
        
        'Combat Isolation\nRemote work can be lonely. Schedule virtual coffee chats with teammates, join online developer communities, attend virtual meetups and conferences, and consider co-working spaces occasionally.',
        
        'Set Boundaries\nWork-life balance is challenging when home is the office:\n- Log off at a set time\n- Turn off notifications after hours\n- Communicate your availability clearly\n- Take real lunch breaks away from your desk',
        
        'Invest in Professional Development\nRemote work offers flexibility for learning. Use saved commute time for online courses, tutorials, and reading. DHV Guiding Light offers flexible learning perfect for remote developers!',
        
        'Join our Remote Work Success course to master these skills and connect with other remote developers worldwide!'
      ]
    },
    {
      id: 6,
      title: 'Understanding Web3 and Blockchain Development',
      excerpt: 'A comprehensive guide to blockchain technology and decentralized application development.',
      author: 'David Kim',
      date: 'October 22, 2024',
      category: 'Emerging Technologies',
      image: '/img/course-3.jpg',
      readTime: '15 min read',
      content: [
        'Web3 and blockchain technology are reshaping how we think about the internet, ownership, and applications. Here\'s what developers need to know:',
        
        'What is Web3?\nWeb3 represents the next evolution of the internet:\n- Web1: Read-only (static websites)\n- Web2: Read-write (social media, interactive apps)\n- Web3: Read-write-own (decentralized, user-owned)',
        
        'Core Blockchain Concepts\nBlockchain is a distributed ledger technology where:\n- Data is stored in blocks linked together\n- No central authority controls the network\n- Transactions are transparent and immutable\n- Consensus mechanisms ensure agreement',
        
        'Smart Contracts\nSelf-executing contracts with terms written in code. Popular platforms:\n- Ethereum: Most established, uses Solidity\n- Solana: High speed, low fees\n- Polygon: Ethereum scaling solution\n- Binance Smart Chain: EVM-compatible',
        
        'Decentralized Applications (dApps)\ndApps run on blockchain networks rather than centralized servers. Key characteristics:\n- Open source code\n- Decentralized storage\n- Cryptocurrency integration\n- Token-based incentives',
        
        'Development Skills Needed\nTo build in Web3, learn:\n- Solidity (Ethereum smart contracts)\n- Web3.js or Ethers.js (blockchain interaction)\n- IPFS (decentralized storage)\n- Wallet integration (MetaMask)\n- Testing frameworks (Hardhat, Truffle)',
        
        'Real-World Applications\n- DeFi (Decentralized Finance): Lending, trading, yield farming\n- NFTs: Digital ownership and art\n- DAOs: Decentralized organizations\n- Supply Chain: Transparent tracking\n- Identity: Self-sovereign identity',
        
        'Challenges and Considerations\n- Scalability issues (high gas fees)\n- Security vulnerabilities in smart contracts\n- Regulatory uncertainty\n- User experience complexity\n- Environmental concerns (proof-of-work)',
        
        'Is Web3 Right for You?\nWeb3 offers exciting opportunities, but it\'s not replacing Web2 soon. Learn the fundamentals, build side projects, and stay informed about the space.',
        
        'DHV Guiding Light offers a comprehensive Blockchain Development course with hands-on smart contract projects. Start your Web3 journey today!'
      ]
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-semibold"
        >
          <FaArrowLeft /> Back to Blog
        </motion.button>

        {/* Article Header */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Article Meta */}
          <div className="px-8 py-6 bg-gray-50 border-b border-gray-200">
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <FaUser className="text-blue-600" />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendar className="text-blue-600" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="text-blue-600" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 md:px-12 py-12">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-6 text-lg"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <FaShare /> Share this article
              </h3>
              <div className="flex gap-3">
                <button className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <FaFacebookF />
                </button>
                <button className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                  <FaTwitter />
                </button>
                <button className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  <FaLinkedinIn />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <div
                  key={relatedPost.id}
                  onClick={() => navigate(`/blog/${relatedPost.id}`)}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:-translate-y-2"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-sm text-blue-600 font-semibold">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaClock />
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogDetail;
