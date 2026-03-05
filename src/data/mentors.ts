export interface InstructorData {
  id: number;
  name: string;
  title: string;
  avatar: string;
  image?: string;
  specializations: string[];
  skills: string[];
  bio: string;
  rating: number;
  totalStudents: number;
  courseCount: number;
  experience: string;
  students: number;
  specialty: string;
  company?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  courses?: number;
  mentoringAreas?: string[];
  mentoringPhilosophy?: string;
  softSkills?: string[];
  workExperience?: { position: string; company: string; role: string; period: string; duration: string; description: string; achievements: string[] }[];
  achievements?: { title: string; year: string }[];
  certifications?: { name: string; title: string; issuer: string; year: string }[];
  testimonials?: { name: string; role: string; content: string; rating: number; feedback: string; studentName: string; outcome: string }[];
  availability?: { day: string; time: string; available: boolean }[];
  mentoringSupport?: { responseTime: string; availability: string; tools: string; mode: string; maxMentees: number };
}
export const instructors: InstructorData[] = [
  { id: 1, name: 'Mai Tran Thien Tam', title: 'Full Stack Developer', avatar: '/img/team-1.jpg', image: '/img/team-1.jpg', specializations: ['React', 'Node.js', 'TypeScript'], skills: ['React', 'Node.js', 'TypeScript', 'Firebase', 'MongoDB'], bio: 'Experienced developer with passion for teaching', rating: 4.9, totalStudents: 12500, courseCount: 5, experience: '5 years', students: 12500, specialty: 'Full Stack Development', company: 'DHV Tech', email: 'tam@dhv.edu.vn', linkedin: 'maitamdev', github: 'maitamdev', website: 'https://maitam.dev' },
  { id: 2, name: 'Le Thi Huong', title: 'Data Scientist', avatar: '/img/team-2.jpg', image: '/img/team-2.jpg', specializations: ['Python', 'Machine Learning', 'Data Analysis'], skills: ['Python', 'TensorFlow', 'Pandas', 'SQL', 'Data Visualization'], bio: 'AI researcher and educator', rating: 4.8, totalStudents: 8400, courseCount: 3, experience: '4 years', students: 8400, specialty: 'Data Science', company: 'AI Vietnam' },
  { id: 3, name: 'Nguyen Van Minh', title: 'DevOps Engineer', avatar: '/img/team-1.jpg', image: '/img/team-1.jpg', specializations: ['AWS', 'Docker', 'CI/CD'], skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Linux'], bio: 'Cloud infrastructure expert', rating: 4.9, totalStudents: 4500, courseCount: 2, experience: '6 years', students: 4500, specialty: 'Cloud & DevOps', company: 'Cloud VN' },
  { id: 4, name: 'Pham Duc Anh', title: 'UI/UX Designer', avatar: '/img/team-2.jpg', image: '/img/team-2.jpg', specializations: ['Figma', 'UI Design', 'User Research'], skills: ['Figma', 'Adobe XD', 'CSS', 'Design Systems', 'Prototyping'], bio: 'Creative designer focused on user experience', rating: 4.9, totalStudents: 15600, courseCount: 4, experience: '5 years', students: 15600, specialty: 'UI/UX Design', company: 'Design Studio' },
];
