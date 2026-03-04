import { db } from '../config/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  email: string;
  github: string;
  linkedin: string;
  website: string;
  profileImage: string;
  stats: {
    coursesCompleted: number;
    projectsBuilt: number;
    certificatesEarned: number;
    totalHours: number;
    skillsMastered: number;
  };
  completedCourses: Array<{
    id: number;
    title: string;
    completedDate: string;
    grade: number;
    certificate: string;
  }>;
  projects: Array<{
    id: number;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    githubLink: string;
    liveLink: string | null;
    completedDate: string;
  }>;
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
  certificates: Array<{
    id: number;
    title: string;
    issueDate: string;
    credentialId: string;
    image: string;
  }>;
}

// Default portfolio data for new users
const getDefaultPortfolioData = (email: string, name?: string): PortfolioData => ({
  name: name || 'Student Name',
  title: 'Full Stack Developer | Data Science Enthusiast',
  bio: 'Passionate learner on DHV Guiding Light platform. Completed multiple courses and built real-world projects in web development and data science.',
  email: email,
  github: 'github.com/username',
  linkedin: 'linkedin.com/in/username',
  website: 'yourwebsite.com',
  profileImage: '/img/team-1.jpg',
  stats: {
    coursesCompleted: 0,
    projectsBuilt: 0,
    certificatesEarned: 0,
    totalHours: 0,
    skillsMastered: 0
  },
  completedCourses: [],
  projects: [],
  skills: [],
  certificates: []
});

// Get user's portfolio data from Firestore
export const getUserPortfolio = async (userId: string): Promise<PortfolioData | null> => {
  try {
    const portfolioRef = doc(db, 'portfolios', userId);
    const portfolioSnap = await getDoc(portfolioRef);

    if (portfolioSnap.exists()) {
      return portfolioSnap.data() as PortfolioData;
    }
    return null;
  } catch (error) {
    console.error('Error getting portfolio:', error);
    return null;
  }
};

// Create initial portfolio for new user
export const createUserPortfolio = async (
  userId: string,
  email: string,
  name?: string
): Promise<PortfolioData> => {
  try {
    const defaultData = getDefaultPortfolioData(email, name);
    const portfolioRef = doc(db, 'portfolios', userId);
    await setDoc(portfolioRef, {
      ...defaultData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });
    return defaultData;
  } catch (error) {
    console.error('Error creating portfolio:', error);
    throw error;
  }
};

// Update user's portfolio data
export const updateUserPortfolio = async (
  userId: string,
  portfolioData: Partial<PortfolioData>
): Promise<void> => {
  try {
    const portfolioRef = doc(db, 'portfolios', userId);
    await updateDoc(portfolioRef, {
      ...portfolioData,
      updatedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('Error updating portfolio:', error);
    throw error;
  }
};

// Get or create portfolio (useful for initialization)
export const getOrCreatePortfolio = async (
  userId: string,
  email: string,
  name?: string
): Promise<PortfolioData> => {
  try {
    let portfolio = await getUserPortfolio(userId);
    
    if (!portfolio) {
      portfolio = await createUserPortfolio(userId, email, name);
    }
    
    return portfolio;
  } catch (error) {
    console.error('Error in getOrCreatePortfolio:', error);
    throw error;
  }
};
