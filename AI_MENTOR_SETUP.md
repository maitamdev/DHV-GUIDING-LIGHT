# 🤖 AI Mentor Setup Guide

## Cách lấy Google Gemini API Key (MIỄN PHÍ)

### Bước 1: Truy cập Google AI Studio
1. Mở trình duyệt và truy cập: **https://makersuite.google.com/app/apikey**
2. Đăng nhập bằng tài khoản Google của bạn

### Bước 2: Tạo API Key
1. Click nút **"Create API Key"** hoặc **"Get API Key"**
2. Chọn project (hoặc tạo project mới nếu chưa có)
3. Copy API Key (dạng: `AIzaSy...`)

### Bước 3: Thêm API Key vào Project
1. Tạo file `.env` trong thư mục `dhv/` (cùng cấp với package.json):
   ```bash
   # Tạo file .env
   touch .env   # Mac/Linux
   # hoặc
   New-Item .env   # Windows PowerShell
   ```

2. Mở file `.env` và thêm API key:
   ```env
   VITE_GEMINI_API_KEY=AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   ```
   **Lưu ý:** Thay `AIzaSyDxxx...` bằng API key thực của bạn

3. Save file `.env`

### Bước 4: Restart Dev Server
```bash
# Tắt server hiện tại (Ctrl + C)
# Sau đó chạy lại:
npm run dev
```

## ✅ Test AI Mentor

1. Đăng nhập vào Student Dashboard
2. Click tab **"AI Mentor"**
3. Điền thông tin:
   - **Skills:** React, TypeScript, Node.js
   - **Interests:** Web Development, Full Stack
   - **Goals:** Become a Senior Developer
   - **Experience Level:** Intermediate
   - **Preferred Fields:** Backend, Frontend

4. Click **"Get AI Recommendations"**
5. Đợi 5-10 giây để AI phân tích
6. Xem kết quả:
   - ✅ Top 3 mentors phù hợp nhất
   - ✅ Match score (%)
   - ✅ Lý do tại sao phù hợp
   - ✅ Learning path được đề xuất
   - ✅ Topics cần học

7. Click **"Schedule Meeting"** để đặt lịch hẹn với mentor

## 🎯 Tính năng AI Mentor

### 1. Phân tích Profile
- AI đọc skills, interests, goals của mentee
- So sánh với database 5 mentors (sẽ mở rộng lên 50+)
- Tính toán match score dựa trên:
  * Skill alignment
  * Experience level
  * Industry relevance
  * Teaching style

### 2. Gợi ý Mentor
- Top 3 mentors phù hợp nhất
- Match score từ 0-100%
- Reasoning chi tiết tại sao phù hợp
- Suggested topics có thể học
- Learning path 4 bước

### 3. Kết nối Lịch Hẹn
- Xem available time slots của mentor
- Chọn thời gian phù hợp
- Nhập topic muốn discuss
- Send meeting request
- Mentor sẽ nhận email và confirm

## 🔧 Nâng cao

### Option 1: Training AI với dữ liệu riêng
Nếu muốn AI học từ dữ liệu mentors của bạn:

1. **Fine-tuning Gemini** (Có phí):
   - Upload mentor profiles
   - Train model với examples
   - Deploy custom model

2. **Prompt Engineering** (Miễn phí - Đang dùng):
   - Gửi toàn bộ mentor data trong prompt
   - AI analyze và match on-the-fly
   - Faster, không cần training

### Option 2: Thêm nhiều mentors
File: `dhv/src/data/mentors.ts`

Thêm mentors mới theo format:
```typescript
{
  id: 6,
  name: 'Your Mentor Name',
  title: 'Senior Developer',
  specialty: 'Web Development',
  skills: ['React', 'Node.js', 'AWS'],
  experience: '8+ years',
  bio: 'Experienced developer...',
  rating: 4.9,
  students: 1000,
  // ... thêm các fields khác
}
```

AI sẽ tự động phân tích và gợi ý mentor mới!

## 📊 Fallback System

Nếu Gemini API fail (network, quota, etc):
- ✅ Tự động chuyển sang **Rule-based matching**
- ✅ Dùng keyword matching algorithm
- ✅ Vẫn cho kết quả, chỉ kém chính xác hơn AI

## 💡 Tips

1. **API Quota:**
   - Free tier: 60 requests/minute
   - Đủ dùng cho development
   - Production: upgrade lên paid plan

2. **Response Time:**
   - Gemini Pro: 2-8 seconds
   - Phụ thuộc network và load
   - UI có loading animation

3. **Security:**
   - ✅ API key trong `.env` (not committed to git)
   - ✅ `.gitignore` đã bao gồm `.env`
   - ❌ KHÔNG share API key public

## 🐛 Troubleshooting

**Error: "Failed to get recommendations"**
- Check API key đúng chưa
- Check `.env` file có đúng vị trí không
- Restart dev server
- Check console logs

**AI response chậm:**
- Bình thường, Gemini cần 5-10s
- Check network connection
- Có thể do API quota

**Match score thấp:**
- Mentee nhập thông tin chưa đủ chi tiết
- AI cần ít nhất skills + goals
- Thêm interests và experience cho chính xác hơn

## 🚀 Next Steps

1. ✅ Get API key và test
2. ⏳ Thêm 45 mentors nữa (hiện có 5)
3. ⏳ Integrate email notifications cho mentors
4. ⏳ Add calendar sync (Google Calendar)
5. ⏳ Build rating system sau meeting

---
**Powered by Google Gemini Pro 🤖**
