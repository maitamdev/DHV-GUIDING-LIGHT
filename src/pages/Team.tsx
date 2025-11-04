import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const teamMembers = [
  {
    id: 1,
    name: 'Nguyễn Văn A',
    role: 'CEO & Founder',
    image: '/img/team-1.jpg',
    bio: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực giáo dục và công nghệ, tôi sáng lập DHV Guiding Light với sứ mệnh mang đến giáo dục chất lượng cao cho tất cả mọi người.',
    social: { facebook: '#', twitter: '#', linkedin: '#', instagram: '#' }
  }
];

const Team = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Đội Ngũ Của Chúng Tôi
          </motion.h1>
          <p className="text-xl text-center text-white/90">
            Gặp gỡ những người đam mê giáo dục và công nghệ
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex space-x-3">
                      <a href={member.social.facebook} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-colors">
                        <FaFacebookF />
                      </a>
                      <a href={member.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-colors">
                        <FaTwitter />
                      </a>
                      <a href={member.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-colors">
                        <FaLinkedinIn />
                      </a>
                      <a href={member.social.instagram} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#06BBCC] hover:text-white transition-colors">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h4>
                  <p className="text-[#06BBCC] font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
