import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { FaCheckCircle, FaLock, FaPlayCircle } from 'react-icons/fa';

interface Lesson {
  id: number;
  title: string;
  duration: string;
  videoUrl: string;
  completed: boolean;
  locked: boolean;
}

interface Course {
  id: number;
  title: string;
  lessons: Lesson[];
}

const roadmapData: { [key: string]: Course[] } = {
  'web-development': [
    {
      id: 1,
      title: 'HTML & CSS Cơ bản',
      lessons: [
        { id: 1, title: 'Giới thiệu về HTML', duration: '15:30', videoUrl: 'https://www.youtube.com/watch?v=UB1O30fR-EE', completed: false, locked: false },
        { id: 2, title: 'CSS Styling cơ bản', duration: '20:45', videoUrl: 'https://www.youtube.com/watch?v=yfoY53QXEnI', completed: false, locked: false },
        { id: 3, title: 'Flexbox Layout', duration: '18:20', videoUrl: 'https://www.youtube.com/watch?v=JJSoEo8JSnc', completed: false, locked: false },
        { id: 4, title: 'Grid Layout', duration: '22:10', videoUrl: 'https://www.youtube.com/watch?v=EiNiSFIPIQE', completed: false, locked: true },
      ],
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      lessons: [
        { id: 5, title: 'JavaScript Introduction', duration: '25:00', videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk', completed: false, locked: true },
        { id: 6, title: 'Variables & Data Types', duration: '30:15', videoUrl: 'https://www.youtube.com/watch?v=hdI2bqOjy3c', completed: false, locked: true },
        { id: 7, title: 'Functions & Scope', duration: '28:40', videoUrl: 'https://www.youtube.com/watch?v=N8ap4k_1QEQ', completed: false, locked: true },
      ],
    },
    {
      id: 3,
      title: 'React Framework',
      lessons: [
        { id: 8, title: 'React Introduction', duration: '20:00', videoUrl: 'https://www.youtube.com/watch?v=Ke90Tje7VS0', completed: false, locked: true },
        { id: 9, title: 'Components & Props', duration: '35:20', videoUrl: 'https://www.youtube.com/watch?v=dGcsHMXbSOA', completed: false, locked: true },
        { id: 10, title: 'State & Hooks', duration: '40:30', videoUrl: 'https://www.youtube.com/watch?v=O6P86uwfdR0', completed: false, locked: true },
      ],
    },
  ],
  'mobile-app': [
    {
      id: 1,
      title: 'React Native Basics',
      lessons: [
        { id: 1, title: 'Introduction to React Native', duration: '22:00', videoUrl: 'https://www.youtube.com/watch?v=0-S5a0eXPoc', completed: false, locked: false },
        { id: 2, title: 'Components & Styling', duration: '30:00', videoUrl: 'https://www.youtube.com/watch?v=ur6I5m2nTvk', completed: false, locked: false },
      ],
    },
  ],
};

const RoadmapDetail = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const courses = category ? roadmapData[category] : [];

  const handleCompleteLesson = () => {
    if (selectedLesson && !completedLessons.includes(selectedLesson.id)) {
      setCompletedLessons([...completedLessons, selectedLesson.id]);
      
      // Unlock next lesson
      const allLessons = courses.flatMap(c => c.lessons);
      const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
      if (currentIndex < allLessons.length - 1) {
        allLessons[currentIndex + 1].locked = false;
        // Auto play next video
        const nextLesson = allLessons[currentIndex + 1];
        setSelectedVideo(nextLesson.videoUrl);
        setSelectedLesson(nextLesson);
      }
    }
  };

  if (!courses || courses.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Lộ trình đang được cập nhật</h2>
          <Link to="/roadmap" className="text-[#06BBCC] hover:underline">
            ← Quay lại danh sách lộ trình
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/roadmap" className="inline-flex items-center text-[#06BBCC] hover:underline mb-6">
          <i className="fas fa-arrow-left mr-2"></i>
          Quay lại lộ trình
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Course Content - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-dark mb-6">Nội dung khóa học</h2>
              
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {courses.map((course) => (
                  <div key={course.id} className="border-b pb-4">
                    <h3 className="font-semibold text-lg text-dark mb-3">{course.title}</h3>
                    <ul className="space-y-2">
                      {course.lessons.map((lesson) => (
                        <li key={lesson.id}>
                          <button
                            onClick={() => {
                              if (!lesson.locked) {
                                setSelectedVideo(lesson.videoUrl);
                                setSelectedLesson(lesson);
                              }
                            }}
                            disabled={lesson.locked}
                            className={`w-full text-left p-3 rounded-lg transition-colors duration-200 ${
                              lesson.locked
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                : selectedLesson?.id === lesson.id
                                ? 'bg-[#06BBCC] text-white'
                                : 'hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                {lesson.locked ? (
                                  <FaLock className="text-sm" />
                                ) : completedLessons.includes(lesson.id) ? (
                                  <FaCheckCircle className="text-green-500 text-sm" />
                                ) : (
                                  <FaPlayCircle className="text-sm" />
                                )}
                                <span className="text-sm">{lesson.title}</span>
                              </div>
                              <span className="text-xs">{lesson.duration}</span>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {selectedVideo ? (
                <>
                  <div className="relative pt-[56.25%]">
                    <ReactPlayer
                      url={selectedVideo}
                      controls
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-3xl font-bold text-dark mb-4">
                      {selectedLesson?.title}
                    </h2>
                    <div className="flex items-center gap-4 text-gray-600 mb-6">
                      <span className="flex items-center gap-2">
                        <i className="fas fa-clock"></i>
                        {selectedLesson?.duration}
                      </span>
                      <span className="flex items-center gap-2">
                        <i className="fas fa-eye"></i>
                        1,234 lượt xem
                      </span>
                    </div>
                    <div className="prose max-w-none">
                      <h3 className="text-xl font-semibold mb-3">Mô tả bài học</h3>
                      <p className="text-gray-700">
                        Trong bài học này, bạn sẽ học được những kiến thức cơ bản và nâng cao về {selectedLesson?.title}.
                        Chúng tôi sẽ đi qua từng khái niệm một cách chi tiết và dễ hiểu.
                      </p>
                      
                      <h3 className="text-xl font-semibold mt-6 mb-3">Nội dung chính</h3>
                      <ul className="list-disc pl-6 text-gray-700">
                        <li>Giới thiệu tổng quan</li>
                        <li>Các khái niệm cơ bản</li>
                        <li>Thực hành với ví dụ</li>
                        <li>Bài tập và quiz</li>
                      </ul>

                      <div className="mt-8 flex gap-4">
                        <button 
                          onClick={handleCompleteLesson}
                          disabled={selectedLesson ? completedLessons.includes(selectedLesson.id) : false}
                          className={`px-6 py-3 rounded-full font-semibold transition-colors duration-300 ${
                            selectedLesson && completedLessons.includes(selectedLesson.id)
                              ? 'bg-green-500 text-white cursor-not-allowed'
                              : 'bg-[#06BBCC] text-white hover:bg-[#05a3b3]'
                          }`}
                        >
                          {selectedLesson && completedLessons.includes(selectedLesson.id) ? '✓ Đã hoàn thành' : 'Đánh dấu đã hoàn thành'}
                        </button>
                        <Link
                          to="/meeting"
                          className="px-6 py-3 border-2 border-[#06BBCC] text-[#06BBCC] rounded-full font-semibold hover:bg-[#06BBCC] hover:text-white transition-all duration-300"
                        >
                          Tham gia phòng học
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-20 text-center">
                  <FaPlayCircle className="text-8xl text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                    Chọn một bài học để bắt đầu
                  </h3>
                  <p className="text-gray-500">
                    Chọn bài học từ danh sách bên trái để xem video
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapDetail;
