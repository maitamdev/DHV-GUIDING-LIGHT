export interface TestimonialData { id: number; name: string; course: string; avatar: string; comment: string; rating: number; role?: string; }
export const testimonials: TestimonialData[] = [
  { id: 1, name: 'Nguyen Van An', course: 'Full Stack Development', avatar: '/img/testimonial-1.jpg', comment: 'Excellent course! Quality teaching with enthusiastic instructors. DHV Guiding Light brought a great learning experience.', rating: 5, role: 'Software Engineer at FPT' },
  { id: 2, name: 'Tran Thi Binh', course: 'UI/UX Design', avatar: '/img/testimonial-2.jpg', comment: 'Amazing course quality! The instructors are kind and teach clearly. Currently taking Java and C++ courses, very worth it.', rating: 5, role: 'UX Designer at VNG' },
  { id: 3, name: 'Le Hoang Cuong', course: 'Data Science', avatar: '/img/testimonial-3.jpg', comment: 'Really good teaching quality with complete exercises from basic to advanced. My coding ability improved significantly.', rating: 5, role: 'Data Analyst at Tiki' },
  { id: 4, name: 'Pham Thi Diem', course: 'React Native', avatar: '/img/testimonial-4.jpg', comment: 'Wonderful course with lots of exercises. Teachers are enthusiastic, theory is easy to understand, members exchange knowledge freely.', rating: 5, role: 'Mobile Developer at Shopee' },
];
