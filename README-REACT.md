# DHV E-Learning Platform

Nền tảng học tập trực tuyến hiện đại được xây dựng với React + TypeScript + Vite.

## Tính năng chính

### 1. 🎓 Quản lý khóa học
- Danh sách khóa học đa dạng
- Chi tiết khóa học với mô tả đầy đủ
- Đánh giá và feedback từ học viên

### 2. 🗺️ Lộ trình học tập (Roadmap)
- Lộ trình chi tiết cho từng ngành (Web Dev, Mobile, AI/ML, DevOps, v.v.)
- Video bài giảng chất lượng cao
- Theo dõi tiến độ học tập
- Đánh dấu bài học đã hoàn thành

### 3. 📹 Phòng học trực tuyến (Video Conferencing)
- Tạo và tham gia phòng học trực tuyến
- Video call với giảng viên và học viên
- Chat real-time trong phòng học
- Điều khiển camera và microphone
- Lịch phòng học và đặt lịch

### 4. 👥 Quản lý người dùng
- Đăng ký / Đăng nhập
- Profile học viên
- Quản lý khóa học đã đăng ký

## Công nghệ sử dụng

### Frontend
- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool (nhanh hơn CRA)
- **React Router v6** - Routing
- **Tailwind CSS** - Styling (kết hợp với CSS hiện có)
- **React Player** - Video Player
- **React Icons** - Icon Library
- **date-fns** - Date utilities

### Video Conferencing
- **WebRTC** - Peer-to-peer video/audio
- **Jitsi Meet API** - Video conferencing (alternative)

## Cài đặt và chạy dự án

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

Dự án sẽ chạy tại: `http://localhost:3000`

### 3. Build cho production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## Cấu trúc thư mục

```
src/
├── components/          # Các React components tái sử dụng
│   ├── Layout.tsx      # Layout chính với Navbar và Footer
│   ├── Navbar.tsx      # Navigation bar
│   └── Footer.tsx      # Footer
├── pages/              # Các trang của ứng dụng
│   ├── Home.tsx        # Trang chủ
│   ├── Courses.tsx     # Danh sách khóa học
│   ├── Roadmap.tsx     # Danh sách lộ trình
│   ├── RoadmapDetail.tsx  # Chi tiết lộ trình với video
│   ├── MeetingSchedule.tsx # Lịch phòng học
│   ├── MeetingRoom.tsx # Phòng học trực tuyến
│   ├── About.tsx       # Giới thiệu
│   ├── Contact.tsx     # Liên hệ
│   └── ...             # Các pages khác
├── App.tsx             # Root component với routes
├── main.tsx            # Entry point
└── index.css           # Global styles

css/                    # CSS gốc từ template
img/                    # Images và assets
lib/                    # Libraries (Bootstrap, jQuery plugins)
```

## Hướng dẫn phát triển tiếp

### Thêm lộ trình mới
1. Mở `src/pages/Roadmap.tsx`
2. Thêm object mới vào array `roadmaps`
3. Mở `src/pages/RoadmapDetail.tsx`
4. Thêm data vào `roadmapData` object

### Thêm video bài giảng
1. Mở `src/pages/RoadmapDetail.tsx`
2. Thêm lessons mới với `videoUrl` (YouTube/Vimeo URL)

### Tích hợp Backend API (Optional)
- Tạo folder `src/services/` cho API calls
- Sử dụng Axios đã được cài đặt
- Ví dụ:
```typescript
// src/services/api.ts
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const courseService = {
  getAll: () => api.get('/courses'),
  getById: (id: string) => api.get(`/courses/${id}`)
};
```

### Tích hợp Database
- Có thể sử dụng:
  - **Firebase** (Realtime, dễ setup)
  - **Supabase** (PostgreSQL, open-source)
  - **Node.js + Express + MongoDB** (Full control)

## Roadmap phát triển tiếp theo

### Phase 2 (Đề xuất)
- [ ] Hệ thống authentication hoàn chỉnh (JWT)
- [ ] Quản lý profile người dùng
- [ ] Thanh toán online cho khóa học
- [ ] Quiz và bài tập sau mỗi bài học
- [ ] Chứng chỉ sau khi hoàn thành khóa học
- [ ] Forum thảo luận
- [ ] Notification system
- [ ] Mobile responsive improvements

### Phase 3 (Advanced)
- [ ] Backend API với Node.js/Express
- [ ] Database (MongoDB hoặc PostgreSQL)
- [ ] WebRTC server tự host
- [ ] AI chatbot hỗ trợ học tập
- [ ] Recommendation system
- [ ] Analytics dashboard cho instructor
- [ ] Mobile app (React Native)

## Scripts

```bash
# Development
npm run dev           # Chạy dev server

# Build
npm run build        # Build cho production
npm run preview      # Preview production build

# Linting
npm run lint         # Check code quality
```

## Đóng góp

Dự án này là đồ án tốt nghiệp. Mọi đóng góp và ý kiến đều được chào đón!

## License

MIT License - Tự do sử dụng cho mục đích học tập và thương mại.

---

**Phát triển bởi DHV Team** 🚀
