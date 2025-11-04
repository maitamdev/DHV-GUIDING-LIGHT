import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBook } from 'react-icons/fa';

const mentees = [
  { id: 1, name: 'Nguyễn Văn A', email: 'nguyenvana@email.com', phone: '0901234567', course: 'Web Development', status: 'active' },
  { id: 2, name: 'Trần Thị B', email: 'tranthib@email.com', phone: '0907654321', course: 'Data Science', status: 'active' },
  { id: 3, name: 'Lê Văn C', email: 'levanc@email.com', phone: '0909876543', course: 'Mobile App', status: 'pending' },
  { id: 4, name: 'Phạm Thị D', email: 'phamthid@email.com', phone: '0905551234', course: 'AI & ML', status: 'active' },
  { id: 5, name: 'Hoàng Văn E', email: 'hoangvane@email.com', phone: '0903334567', course: 'DevOps', status: 'completed' },
];

const MenteeList = () => {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] py-20 mb-12">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl text-white font-bold text-center mb-4"
          >
            Danh Sách Học Viên
          </motion.h1>
          <p className="text-xl text-center text-white/90">
            Quản lý thông tin học viên
          </p>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-[#06BBCC] to-[#05a3b3] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">ID</th>
                      <th className="px-6 py-4 text-left">Họ tên</th>
                      <th className="px-6 py-4 text-left">Email</th>
                      <th className="px-6 py-4 text-left">Điện thoại</th>
                      <th className="px-6 py-4 text-left">Khóa học</th>
                      <th className="px-6 py-4 text-left">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mentees.map((mentee, index) => (
                      <motion.tr
                        key={mentee.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-b hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4">{mentee.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <FaUser className="text-[#06BBCC] mr-2" />
                            <span className="font-medium">{mentee.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-gray-600">
                            <FaEnvelope className="text-[#06BBCC] mr-2" />
                            {mentee.email}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-gray-600">
                            <FaPhone className="text-[#06BBCC] mr-2" />
                            {mentee.phone}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center text-gray-600">
                            <FaBook className="text-[#06BBCC] mr-2" />
                            {mentee.course}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            mentee.status === 'active' ? 'bg-green-100 text-green-700' :
                            mentee.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {mentee.status === 'active' ? 'Đang học' :
                             mentee.status === 'pending' ? 'Chờ duyệt' :
                             'Hoàn thành'}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MenteeList;
