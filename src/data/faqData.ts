export interface FAQItem { id: number; question: string; answer: string; category: string; }
export const faqCategories = ['General', 'Courses', 'Account', 'Payment', 'Certificates', 'Technical'];
export const faqItems: FAQItem[] = [
  { id: 1, question: 'How do I create an account?', answer: 'Click Sign Up on the top right, fill in your details, and verify your email.', category: 'Account' },
  { id: 2, question: 'Are there free courses available?', answer: 'Yes! We offer several free courses to help you get started.', category: 'Courses' },
  { id: 3, question: 'How do I earn certificates?', answer: 'Complete all lessons and pass the final assessment with at least 70%.', category: 'Certificates' },
  { id: 4, question: 'Can I access courses on mobile?', answer: 'Yes, our platform is fully responsive and works on all devices.', category: 'General' },
  { id: 5, question: 'What payment methods are accepted?', answer: 'We accept credit cards, PayPal, and bank transfers.', category: 'Payment' },
  { id: 6, question: 'How does AI mentor matching work?', answer: 'Our AI analyzes your learning goals and matches you with the best mentor.', category: 'General' },
  { id: 7, question: 'Can I download course materials?', answer: 'Yes, enrolled students can download slides and code samples.', category: 'Courses' },
  { id: 8, question: 'How do I reset my password?', answer: 'Click Forgot Password on the login page and follow the instructions.', category: 'Account' },
  { id: 9, question: 'Is there a refund policy?', answer: 'Yes, we offer a 30-day money-back guarantee on all paid courses.', category: 'Payment' },
  { id: 10, question: 'What browsers are supported?', answer: 'Chrome, Firefox, Safari, and Edge (latest versions).', category: 'Technical' },
];
