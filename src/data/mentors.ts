export interface InstructorData { id: number; name: string; title: string; avatar: string; specializations: string[]; bio: string; rating: number; totalStudents: number; courseCount: number; }
export const instructors: InstructorData[] = [
  { id: 1, name: 'Mai Tran Thien Tam', title: 'Full Stack Developer', avatar: '/img/team-1.jpg', specializations: ['React', 'Node.js', 'TypeScript'], bio: 'Experienced developer with passion for teaching', rating: 4.9, totalStudents: 12500, courseCount: 5 },
  { id: 2, name: 'Le Thi Huong', title: 'Data Scientist', avatar: '/img/team-2.jpg', specializations: ['Python', 'Machine Learning', 'Data Analysis'], bio: 'AI researcher and educator', rating: 4.8, totalStudents: 8400, courseCount: 3 },
  { id: 3, name: 'Nguyen Van Minh', title: 'DevOps Engineer', avatar: '/img/team-1.jpg', specializations: ['AWS', 'Docker', 'CI/CD'], bio: 'Cloud infrastructure expert',  rating: 4.9, totalStudents: 4500, courseCount: 2 },
  { id: 4, name: 'Pham Duc Anh', title: 'UI/UX Designer', avatar: '/img/team-2.jpg', specializations: ['Figma', 'UI Design', 'User Research'], bio: 'Creative designer focused on user experience', rating: 4.9, totalStudents: 15600, courseCount: 4 },
];
