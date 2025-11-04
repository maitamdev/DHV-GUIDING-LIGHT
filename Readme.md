# DHV GUIDING LIGHT 🌟
Nền tảng web kết nối **mentor – mentee** dành cho sinh viên Trường Đại học Hùng Vương TP.HCM, giúp sinh viên được đào tạo năng lực 1:1, hỏi đáp định hướng nghề nghiệp và tiếp cận người đi trước (giảng viên, cựu sinh viên, chuyên gia).

Dự án được xây dựng trên **React + TypeScript + Vite** và sử dụng **Firebase** cho xác thực và lưu trữ, triển khai lên **Vercel**.

> Demo: *(update link nếu cần)*  
> https://dhv-guiding-light.vercel.app

---

## 🎯 Mục tiêu
- Tạo một kênh chính thống để sinh viên tìm mentor phù hợp theo chuyên ngành/kỹ năng.
- Hỗ trợ mentoring 1-vs-1 (one-to-one) thay vì lớp đông.
- Quản lý hồ sơ mentor/mentee tập trung để nhà trường dễ theo dõi.
- Làm nền tảng mẫu cho các dự án chuyển đổi số nội bộ.

---

## ✨ Tính năng chính
- Đăng ký / đăng nhập bằng Firebase Auth
- Phân vai trò cơ bản: Mentor / Mentee
- Trang giới thiệu mentor, xem thông tin và lĩnh vực hỗ trợ
- Kết nối mentor – mentee 1 vs 1
- Giao diện responsive (Tailwind)
- Quản lý nội dung tĩnh trong thư mục `public/`

*(Bạn có thể bổ sung các tính năng mới như đặt lịch, chat, đánh giá sau buổi mentoring… trong roadmap.)*

---

## 🛠️ Công nghệ sử dụng
- **Frontend:** React, TypeScript, Vite
- **Styling:** Tailwind CSS / SCSS
- **Auth & Backend-as-a-Service:** Firebase
- **Build & Tooling:** npm, Vite
- **Deployment:** Vercel

---

## 📁 Cấu trúc thư mục
```text
DHV-GUIDING-LIGHT/
├── css/
├── js/
├── lib/
├── public/
│   └── img/         # hình ảnh dùng trong giao diện
├── scss/
├── src/             # source React + TS chính
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
🚀 Cài đặt & chạy local
1. Clone repo
git clone https://github.com/maitamdev/DHV-GUIDING-LIGHT.git
cd DHV-GUIDING-LIGHT

2. Cài đặt package
npm install

3. Chạy dev
npm run dev


Mở trình duyệt tại địa chỉ Vite hiển thị (thường là http://localhost:5173/).

🔐 Cấu hình Firebase

Tạo project Firebase mới.

Bật Authentication (Email/Password hoặc provider bạn dùng).

Lấy config từ Firebase → dán vào file config trong src/ (ví dụ firebase.ts hoặc file bạn đang dùng).

Build lại dự án.

📌 Roadmap (dự kiến)

Scheduling: đặt lịch mentoring 1:1

Chat/Message giữa mentor – mentee

Gợi ý mentor phù hợp (AI)

Trang admin quản lý người dùng

👤 Tác giả

Mai Trần Thiện Tâm – Full Stack & AI Developer (Student)

Dự án học tập & tốt nghiệp: DHV Guiding Light – Mentor–Mentee Community Platform

📄 License

Dự án phục vụ mục đích học tập, demo và nghiên cứu. Có thể mở rộng cho nhà trường/doanh nghiệp.
