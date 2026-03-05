export interface TeamMember { id: number; name: string; role: string; avatar: string; bio: string; social: { github?: string; linkedin?: string; twitter?: string; }; }
export const teamMembers: TeamMember[] = [
  { id: 1, name: 'Mai Tran Thien Tam', role: 'Founder & Lead Developer', avatar: '/img/team-1.jpg', bio: 'Full-stack developer with a passion for education technology.', social: { github: 'maitamdev', linkedin: 'maitamdev' } },
  { id: 2, name: 'Le Thi Huong', role: 'AI/ML Engineer', avatar: '/img/team-2.jpg', bio: 'AI researcher focused on personalized learning algorithms.', social: { github: 'huongle', linkedin: 'huongle' } },
  { id: 3, name: 'Nguyen Van Minh', role: 'Backend Developer', avatar: '/img/team-1.jpg', bio: 'Cloud infrastructure specialist building scalable systems.', social: { github: 'minhng', linkedin: 'minhng' } },
  { id: 4, name: 'Pham Duc Anh', role: 'UI/UX Designer', avatar: '/img/team-2.jpg', bio: 'Creative designer crafting beautiful learning experiences.', social: { github: 'anhduc', linkedin: 'anhduc' } },
];
