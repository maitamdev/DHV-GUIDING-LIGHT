export interface FAQItem { id: number; question: string; answer: string; category: string; }
export const faqData: FAQItem[] = [
  { id: 1, question: 'How do I register for a course?', answer: 'Browse our course catalog, select a course, click "Enroll Now", complete payment, and start learning immediately.', category: 'Getting Started' },
  { id: 2, question: 'Can I get a refund?', answer: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with the course content.', category: 'Payment' },
  { id: 3, question: 'How does mentoring work?', answer: 'After enrolling, you can book 1-on-1 sessions with expert mentors through our scheduling system.', category: 'Mentoring' },
  { id: 4, question: 'Do I get a certificate?', answer: 'Yes, upon completing a course you receive a verified certificate that you can share on LinkedIn.', category: 'Certificates' },
  { id: 5, question: 'What payment methods are accepted?', answer: 'We accept credit cards, bank transfers, MoMo, ZaloPay, and other popular payment methods.', category: 'Payment' },
  { id: 6, question: 'Can I access courses on mobile?', answer: 'Yes, our platform is fully responsive and works on all devices including smartphones and tablets.', category: 'Getting Started' },
  { id: 7, question: 'How long do I have access to a course?', answer: 'Once enrolled, you have lifetime access to the course materials including future updates.', category: 'Courses' },
  { id: 8, question: 'How do I become a mentor?', answer: 'Apply through the Mentor Application form with your credentials and experience. Our team reviews within 5 business days.', category: 'Mentoring' },
];
