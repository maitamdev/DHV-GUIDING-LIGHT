import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaVideo, FaClock, FaDollarSign, FaListAlt, FaTimes } from 'react-icons/fa';

const CreateCourse = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    level: 'Beginner',
    duration: '',
    price: '',
    thumbnail: '',
    whatYouLearn: [''],
    requirements: [''],
    curriculum: [{ title: '', lessons: [''] }]
  });

  const handleAddItem = (field: 'whatYouLearn' | 'requirements') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const handleRemoveItem = (field: 'whatYouLearn' | 'requirements', index: number) => {
    const newItems = formData[field].filter((_, i) => i !== index);
    setFormData({ ...formData, [field]: newItems });
  };

  const handleItemChange = (field: 'whatYouLearn' | 'requirements', index: number, value: string) => {
    const newItems = [...formData[field]];
    newItems[index] = value;
    setFormData({ ...formData, [field]: newItems });
  };

  const handleAddModule = () => {
    setFormData({
      ...formData,
      curriculum: [...formData.curriculum, { title: '', lessons: [''] }]
    });
  };

  const handleModuleTitleChange = (index: number, value: string) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[index].title = value;
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const handleAddLesson = (moduleIndex: number) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex].lessons.push('');
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const handleLessonChange = (moduleIndex: number, lessonIndex: number, value: string) => {
    const newCurriculum = [...formData.curriculum];
    newCurriculum[moduleIndex].lessons[lessonIndex] = value;
    setFormData({ ...formData, curriculum: newCurriculum });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Save to Firestore
    console.log('Course Data:', formData);
    setTimeout(() => {
      setLoading(false);
      navigate('/instructor-dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
              <FaBook className="text-[#06BBCC]" />
              Tạo Khóa Học Mới
            </h1>
            <button
              onClick={() => navigate('/instructor-dashboard')}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#06BBCC] pb-2">
                Thông Tin Cơ Bản
              </h3>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Tên Khóa Học *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                  placeholder="VD: Web Development từ Zero đến Hero"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Mô Tả Khóa Học *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                  placeholder="Mô tả chi tiết về khóa học..."
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Danh Mục</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                  >
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>Data Science</option>
                    <option>UI/UX Design</option>
                    <option>DevOps</option>
                    <option>Marketing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Cấp Độ</label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                  >
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <FaClock className="text-[#06BBCC]" />
                    Thời Lượng (giờ)
                  </label>
                  <input
                    type="number"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                    placeholder="VD: 40"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
                    <FaDollarSign className="text-[#06BBCC]" />
                    Giá (VND)
                  </label>
                  <input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                    placeholder="VD: 2990000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">URL Ảnh Thumbnail</label>
                <input
                  type="text"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                  placeholder="/img/course-1.jpg"
                />
              </div>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#06BBCC] pb-2">
                Bạn Sẽ Học Được Gì
              </h3>
              {formData.whatYouLearn.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange('whatYouLearn', index, e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                    placeholder="VD: Xây dựng website hoàn chỉnh"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('whatYouLearn', index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddItem('whatYouLearn')}
                className="px-6 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#0099AA] transition-colors"
              >
                + Thêm Mục
              </button>
            </div>

            {/* Requirements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#06BBCC] pb-2">
                Yêu Cầu
              </h3>
              {formData.requirements.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleItemChange('requirements', index, e.target.value)}
                    className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                    placeholder="VD: Biết sử dụng máy tính cơ bản"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveItem('requirements', index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddItem('requirements')}
                className="px-6 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#0099AA] transition-colors"
              >
                + Thêm Yêu Cầu
              </button>
            </div>

            {/* Curriculum */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-[#06BBCC] pb-2 flex items-center gap-2">
                <FaListAlt className="text-[#06BBCC]" />
                Chương Trình Học
              </h3>
              {formData.curriculum.map((module, moduleIndex) => (
                <div key={moduleIndex} className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <input
                    type="text"
                    value={module.title}
                    onChange={(e) => handleModuleTitleChange(moduleIndex, e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none font-semibold"
                    placeholder={`Module ${moduleIndex + 1}: Tên chương`}
                  />
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex gap-2 ml-6">
                      <FaVideo className="text-[#06BBCC] mt-3" />
                      <input
                        type="text"
                        value={lesson}
                        onChange={(e) => handleLessonChange(moduleIndex, lessonIndex, e.target.value)}
                        className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                        placeholder={`Bài ${lessonIndex + 1}: Tên bài học`}
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => handleAddLesson(moduleIndex)}
                    className="ml-6 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                  >
                    + Thêm Bài Học
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddModule}
                className="px-6 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#0099AA] transition-colors"
              >
                + Thêm Module
              </button>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6 border-t-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#06BBCC] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#0099AA] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Đang Tạo Khóa Học...' : 'Tạo Khóa Học'}
              </button>
              <button
                type="button"
                onClick={() => navigate('/instructor-dashboard')}
                className="px-8 py-4 bg-gray-200 text-gray-700 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Huỷ
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateCourse;
