import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  FaSearch, FaClock, FaUsers, FaStar, FaCode, FaMobile, FaDatabase, 
  FaCloud, FaShieldAlt, FaPalette, FaChartLine, 
  FaHeart, FaRegHeart, FaPlay, FaShoppingCart, FaCertificate, FaInfinity,
  FaFire, FaAward, FaGraduationCap, FaBriefcase, FaCamera
} from 'react-icons/fa';

interface Course {
  id: number;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  students: number;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  reviews: number;
  description: string;
  badge?: 'bestseller' | 'new' | 'advanced' | 'trending';
  lessons: number;
  enrolled?: number;
}

const coursesData: Course[] = [
  // Web Development (8 courses)
  {
    id: 1,
    title: 'Complete Web Development Bootcamp 2024',
    instructor: 'David Miller',
    instructorAvatar: '/img/team-1.jpg',
    students: 12500,
    price: 149,
    originalPrice: 299,
    image: '/img/course-1.jpg',
    category: 'web-dev',
    level: 'Beginner',
    duration: '42 hours',
    rating: 4.9,
    reviews: 1234,
    description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB',
    badge: 'bestseller',
    lessons: 256,
    enrolled: 15600
  },
  {
    id: 2,
    title: 'Advanced React & Redux Mastery',
    instructor: 'Sarah Johnson',
    instructorAvatar: '/img/team-2.jpg',
    students: 8900,
    price: 169,
    originalPrice: 339,
    image: '/img/course-2.jpg',
    category: 'web-dev',
    level: 'Advanced',
    duration: '38 hours',
    rating: 4.8,
    reviews: 892,
    description: 'Deep dive into React hooks, Redux toolkit, and advanced patterns',
    badge: 'advanced',
    lessons: 198,
    enrolled: 10200
  },
  {
    id: 3,
    title: 'Full Stack JavaScript Development',
    instructor: 'Michael Chen',
    instructorAvatar: '/img/team-3.jpg',
    students: 11200,
    price: 159,
    originalPrice: 319,
    image: '/img/course-3.jpg',
    category: 'web-dev',
    level: 'Intermediate',
    duration: '50 hours',
    rating: 4.9,
    reviews: 1045,
    description: 'Build complete web applications with MERN stack',
    badge: 'bestseller',
    lessons: 276,
    enrolled: 13400
  },
  {
    id: 4,
    title: 'Vue.js 3 - The Complete Guide',
    instructor: 'Emma Wilson',
    instructorAvatar: '/img/team-4.jpg',
    students: 7800,
    price: 139,
    originalPrice: 279,
    image: '/img/course-1.jpg',
    category: 'web-dev',
    level: 'Beginner',
    duration: '36 hours',
    rating: 4.7,
    reviews: 678,
    description: 'Learn Vue.js 3, Vuex, Vue Router, and Composition API',
    badge: 'new',
    lessons: 189,
    enrolled: 8900
  },
  {
    id: 5,
    title: 'Angular - The Complete Course',
    instructor: 'James Anderson',
    instructorAvatar: '/img/team-1.jpg',
    students: 6500,
    price: 149,
    originalPrice: 299,
    image: '/img/course-2.jpg',
    category: 'web-dev',
    level: 'Intermediate',
    duration: '44 hours',
    rating: 4.6,
    reviews: 567,
    description: 'Master Angular 17, TypeScript, RxJS, and NgRx',
    badge: 'trending',
    lessons: 234,
    enrolled: 7800
  },
  {
    id: 6,
    title: 'Next.js & Server-Side Rendering',
    instructor: 'Robert Taylor',
    instructorAvatar: '/img/team-2.jpg',
    students: 9200,
    price: 179,
    originalPrice: 359,
    image: '/img/course-3.jpg',
    category: 'web-dev',
    level: 'Advanced',
    duration: '40 hours',
    rating: 4.9,
    reviews: 945,
    description: 'Build production-ready apps with Next.js 14 and App Router',
    badge: 'bestseller',
    lessons: 212,
    enrolled: 11000
  },
  {
    id: 7,
    title: 'TypeScript Fundamentals & Advanced Types',
    instructor: 'Linda Martinez',
    instructorAvatar: '/img/team-3.jpg',
    students: 10500,
    price: 129,
    originalPrice: 259,
    image: '/img/course-1.jpg',
    category: 'web-dev',
    level: 'All Levels',
    duration: '32 hours',
    rating: 4.8,
    reviews: 823,
    description: 'Complete TypeScript guide from basics to advanced patterns',
    badge: 'trending',
    lessons: 165,
    enrolled: 12300
  },
  {
    id: 8,
    title: 'GraphQL & Apollo Complete Guide',
    instructor: 'Kevin Brown',
    instructorAvatar: '/img/team-4.jpg',
    students: 5800,
    price: 159,
    originalPrice: 319,
    image: '/img/course-2.jpg',
    category: 'web-dev',
    level: 'Advanced',
    duration: '35 hours',
    rating: 4.7,
    reviews: 478,
    description: 'Master GraphQL, Apollo Client, Apollo Server, and Subscriptions',
    badge: 'advanced',
    lessons: 178,
    enrolled: 6900
  },

  // Mobile Development (5 courses)
  {
    id: 9,
    title: 'React Native - Complete Mobile Development',
    instructor: 'Anna Davis',
    instructorAvatar: '/img/team-1.jpg',
    students: 9800,
    price: 169,
    originalPrice: 339,
    image: '/img/course-3.jpg',
    category: 'mobile-dev',
    level: 'Intermediate',
    duration: '48 hours',
    rating: 4.8,
    reviews: 891,
    description: 'Build iOS and Android apps with React Native and Expo',
    badge: 'bestseller',
    lessons: 245,
    enrolled: 11500
  },
  {
    id: 10,
    title: 'Flutter & Dart - Complete Guide',
    instructor: 'Daniel Lee',
    instructorAvatar: '/img/team-2.jpg',
    students: 11200,
    price: 179,
    originalPrice: 359,
    image: '/img/course-1.jpg',
    category: 'mobile-dev',
    level: 'Beginner',
    duration: '52 hours',
    rating: 4.9,
    reviews: 1123,
    description: 'Master Flutter and Dart for cross-platform mobile development',
    badge: 'bestseller',
    lessons: 289,
    enrolled: 13800
  },
  {
    id: 11,
    title: 'iOS Development with Swift & SwiftUI',
    instructor: 'Jessica White',
    instructorAvatar: '/img/team-3.jpg',
    students: 7200,
    price: 189,
    originalPrice: 379,
    image: '/img/course-2.jpg',
    category: 'mobile-dev',
    level: 'Intermediate',
    duration: '46 hours',
    rating: 4.8,
    reviews: 678,
    description: 'Build native iOS apps with Swift 5 and SwiftUI',
    badge: 'new',
    lessons: 234,
    enrolled: 8500
  },
  {
    id: 12,
    title: 'Android Development with Kotlin',
    instructor: 'Mark Thompson',
    instructorAvatar: '/img/team-4.jpg',
    students: 8500,
    price: 169,
    originalPrice: 339,
    image: '/img/course-3.jpg',
    category: 'mobile-dev',
    level: 'Intermediate',
    duration: '50 hours',
    rating: 4.7,
    reviews: 745,
    description: 'Complete Android development using Kotlin and Jetpack Compose',
    badge: 'trending',
    lessons: 267,
    enrolled: 9800
  },
  {
    id: 13,
    title: 'Mobile App Design & User Experience',
    instructor: 'Rachel Green',
    instructorAvatar: '/img/team-1.jpg',
    students: 6800,
    price: 139,
    originalPrice: 279,
    image: '/img/course-1.jpg',
    category: 'mobile-dev',
    level: 'All Levels',
    duration: '28 hours',
    rating: 4.9,
    reviews: 589,
    description: 'Design beautiful and intuitive mobile app interfaces',
    badge: 'new',
    lessons: 145,
    enrolled: 7900
  },

  // Data Science & AI/ML (7 courses)
  {
    id: 14,
    title: 'Data Science & Machine Learning A-Z',
    instructor: 'Dr. Richard Smith',
    instructorAvatar: '/img/team-2.jpg',
    students: 13500,
    price: 189,
    originalPrice: 399,
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '60 hours',
    rating: 4.9,
    reviews: 1456,
    description: 'Complete data science with Python, Pandas, NumPy, and ML algorithms',
    badge: 'bestseller',
    lessons: 345,
    enrolled: 16200
  },
  {
    id: 15,
    title: 'Deep Learning & Neural Networks',
    instructor: 'Dr. Emily Zhang',
    instructorAvatar: '/img/team-3.jpg',
    students: 9200,
    price: 199,
    originalPrice: 419,
    image: '/img/course-3.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '55 hours',
    rating: 4.8,
    reviews: 892,
    description: 'Master TensorFlow, PyTorch, CNN, RNN, and Transformers',
    badge: 'advanced',
    lessons: 298,
    enrolled: 10800
  },
  {
    id: 16,
    title: 'Python for Data Analysis',
    instructor: 'Jennifer Liu',
    instructorAvatar: '/img/team-4.jpg',
    students: 11800,
    price: 149,
    originalPrice: 299,
    image: '/img/course-1.jpg',
    category: 'data-science',
    level: 'Beginner',
    duration: '42 hours',
    rating: 4.9,
    reviews: 1078,
    description: 'Learn Python, Pandas, NumPy, Matplotlib, and data visualization',
    badge: 'bestseller',
    lessons: 234,
    enrolled: 14200
  },
  {
    id: 17,
    title: 'Natural Language Processing with Python',
    instructor: 'Dr. Steven Park',
    instructorAvatar: '/img/team-1.jpg',
    students: 6700,
    price: 179,
    originalPrice: 359,
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '48 hours',
    rating: 4.8,
    reviews: 567,
    description: 'Master NLP, NLTK, spaCy, and transformer models',
    badge: 'advanced',
    lessons: 256,
    enrolled: 7900
  },
  {
    id: 18,
    title: 'Computer Vision & Image Processing',
    instructor: 'Dr. Maria Rodriguez',
    instructorAvatar: '/img/team-2.jpg',
    students: 7500,
    price: 189,
    originalPrice: 379,
    image: '/img/course-3.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '50 hours',
    rating: 4.7,
    reviews: 634,
    description: 'OpenCV, image processing, object detection, and segmentation',
    badge: 'trending',
    lessons: 267,
    enrolled: 8800
  },
  {
    id: 19,
    title: 'SQL for Data Science & Analytics',
    instructor: 'Thomas Anderson',
    instructorAvatar: '/img/team-3.jpg',
    students: 10200,
    price: 129,
    originalPrice: 259,
    image: '/img/course-1.jpg',
    category: 'data-science',
    level: 'Beginner',
    duration: '36 hours',
    rating: 4.8,
    reviews: 923,
    description: 'Master SQL queries, database design, and data analysis',
    badge: 'trending',
    lessons: 189,
    enrolled: 12000
  },
  {
    id: 20,
    title: 'Big Data & Apache Spark',
    instructor: 'Dr. William Chen',
    instructorAvatar: '/img/team-4.jpg',
    students: 5900,
    price: 199,
    originalPrice: 419,
    image: '/img/course-2.jpg',
    category: 'data-science',
    level: 'Advanced',
    duration: '52 hours',
    rating: 4.7,
    reviews: 478,
    description: 'Hadoop, Spark, Kafka, and big data processing pipelines',
    badge: 'advanced',
    lessons: 278,
    enrolled: 6900
  },

  // Digital Marketing (6 courses)
  {
    id: 21,
    title: 'Digital Marketing Masterclass 2024',
    instructor: 'Amanda Clark',
    instructorAvatar: '/img/team-1.jpg',
    students: 14200,
    price: 139,
    originalPrice: 279,
    image: '/img/course-3.jpg',
    category: 'marketing',
    level: 'All Levels',
    duration: '40 hours',
    rating: 4.9,
    reviews: 1345,
    description: 'Complete digital marketing: SEO, SEM, social media, and analytics',
    badge: 'bestseller',
    lessons: 212,
    enrolled: 17500
  },
  {
    id: 22,
    title: 'Social Media Marketing Strategy',
    instructor: 'Brian Wilson',
    instructorAvatar: '/img/team-2.jpg',
    students: 11500,
    price: 129,
    originalPrice: 259,
    image: '/img/course-1.jpg',
    category: 'marketing',
    level: 'Intermediate',
    duration: '32 hours',
    rating: 4.8,
    reviews: 987,
    description: 'Facebook, Instagram, TikTok, LinkedIn, and Twitter marketing',
    badge: 'trending',
    lessons: 167,
    enrolled: 13800
  },
  {
    id: 23,
    title: 'SEO & Content Marketing Bootcamp',
    instructor: 'Sophia Martinez',
    instructorAvatar: '/img/team-3.jpg',
    students: 9800,
    price: 149,
    originalPrice: 299,
    image: '/img/course-2.jpg',
    category: 'marketing',
    level: 'Beginner',
    duration: '38 hours',
    rating: 4.9,
    reviews: 876,
    description: 'Master SEO techniques, keyword research, and content strategy',
    badge: 'bestseller',
    lessons: 198,
    enrolled: 11700
  },
  {
    id: 24,
    title: 'Google Ads & PPC Advertising',
    instructor: 'Christopher Lee',
    instructorAvatar: '/img/team-4.jpg',
    students: 7600,
    price: 159,
    originalPrice: 319,
    image: '/img/course-3.jpg',
    category: 'marketing',
    level: 'Intermediate',
    duration: '35 hours',
    rating: 4.7,
    reviews: 654,
    description: 'Google Ads, Facebook Ads, and paid advertising campaigns',
    badge: 'new',
    lessons: 178,
    enrolled: 8900
  },
  {
    id: 25,
    title: 'Email Marketing & Automation',
    instructor: 'Olivia Harris',
    instructorAvatar: '/img/team-1.jpg',
    students: 6500,
    price: 119,
    originalPrice: 239,
    image: '/img/course-1.jpg',
    category: 'marketing',
    level: 'Beginner',
    duration: '28 hours',
    rating: 4.8,
    reviews: 567,
    description: 'Build email campaigns, automation workflows, and lead nurturing',
    badge: 'trending',
    lessons: 145,
    enrolled: 7800
  },
  {
    id: 26,
    title: 'Affiliate Marketing Complete Guide',
    instructor: 'Matthew Brown',
    instructorAvatar: '/img/team-2.jpg',
    students: 8200,
    price: 139,
    originalPrice: 279,
    image: '/img/course-2.jpg',
    category: 'marketing',
    level: 'All Levels',
    duration: '30 hours',
    rating: 4.6,
    reviews: 478,
    description: 'Build passive income through affiliate marketing strategies',
    badge: 'new',
    lessons: 156,
    enrolled: 9500
  },

  // Design & Creative (7 courses)
  {
    id: 27,
    title: 'UI/UX Design Masterclass',
    instructor: 'Isabella Taylor',
    instructorAvatar: '/img/team-3.jpg',
    students: 15600,
    price: 179,
    originalPrice: 359,
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'All Levels',
    duration: '48 hours',
    rating: 4.9,
    reviews: 1567,
    description: 'Complete UI/UX with Figma, Adobe XD, user research, and prototyping',
    badge: 'bestseller',
    lessons: 256,
    enrolled: 19200
  },
  {
    id: 28,
    title: 'Graphic Design Complete Course',
    instructor: 'Jacob Anderson',
    instructorAvatar: '/img/team-4.jpg',
    students: 13400,
    price: 149,
    originalPrice: 299,
    image: '/img/course-1.jpg',
    category: 'design',
    level: 'Beginner',
    duration: '42 hours',
    rating: 4.9,
    reviews: 1234,
    description: 'Master Photoshop, Illustrator, and InDesign for professional design',
    badge: 'bestseller',
    lessons: 223,
    enrolled: 16500
  },
  {
    id: 29,
    title: 'Adobe Photoshop CC - Advanced Techniques',
    instructor: 'Emma Johnson',
    instructorAvatar: '/img/team-1.jpg',
    students: 10800,
    price: 129,
    originalPrice: 259,
    image: '/img/course-2.jpg',
    category: 'design',
    level: 'Advanced',
    duration: '36 hours',
    rating: 4.8,
    reviews: 892,
    description: 'Advanced photo editing, retouching, and compositing techniques',
    badge: 'advanced',
    lessons: 189,
    enrolled: 12900
  },
  {
    id: 30,
    title: 'Motion Graphics & Animation with After Effects',
    instructor: 'Nathan Walker',
    instructorAvatar: '/img/team-2.jpg',
    students: 8900,
    price: 169,
    originalPrice: 339,
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'Intermediate',
    duration: '44 hours',
    rating: 4.8,
    reviews: 745,
    description: 'Create stunning animations and motion graphics',
    badge: 'trending',
    lessons: 234,
    enrolled: 10500
  },
  {
    id: 31,
    title: '3D Modeling & Rendering with Blender',
    instructor: 'Charlotte Davis',
    instructorAvatar: '/img/team-3.jpg',
    students: 9500,
    price: 159,
    originalPrice: 319,
    image: '/img/course-1.jpg',
    category: 'design',
    level: 'Beginner',
    duration: '50 hours',
    rating: 4.9,
    reviews: 823,
    description: 'Master 3D modeling, texturing, lighting, and rendering',
    badge: 'new',
    lessons: 267,
    enrolled: 11200
  },
  {
    id: 32,
    title: 'Logo Design & Brand Identity',
    instructor: 'Alexander Martinez',
    instructorAvatar: '/img/team-4.jpg',
    students: 7200,
    price: 139,
    originalPrice: 279,
    image: '/img/course-2.jpg',
    category: 'design',
    level: 'All Levels',
    duration: '32 hours',
    rating: 4.7,
    reviews: 567,
    description: 'Create professional logos and complete brand identity systems',
    badge: 'trending',
    lessons: 167,
    enrolled: 8600
  },
  {
    id: 33,
    title: 'Web Design & Figma Mastery',
    instructor: 'Victoria Brown',
    instructorAvatar: '/img/team-1.jpg',
    students: 11200,
    price: 149,
    originalPrice: 299,
    image: '/img/course-3.jpg',
    category: 'design',
    level: 'Intermediate',
    duration: '40 hours',
    rating: 4.9,
    reviews: 1045,
    description: 'Design beautiful websites and web applications with Figma',
    badge: 'bestseller',
    lessons: 212,
    enrolled: 13500
  },

  // Business & Finance (6 courses)
  {
    id: 34,
    title: 'Business Management & Entrepreneurship',
    instructor: 'Jonathan Wilson',
    instructorAvatar: '/img/team-2.jpg',
    students: 11800,
    price: 169,
    originalPrice: 339,
    image: '/img/course-1.jpg',
    category: 'business',
    level: 'Intermediate',
    duration: '45 hours',
    rating: 4.8,
    reviews: 987,
    description: 'Business strategy, startup, leadership, and management principles',
    badge: 'bestseller',
    lessons: 234,
    enrolled: 14200
  },
  {
    id: 35,
    title: 'Financial Analysis & Investment',
    instructor: 'Katherine Moore',
    instructorAvatar: '/img/team-3.jpg',
    students: 9200,
    price: 179,
    originalPrice: 359,
    image: '/img/course-2.jpg',
    category: 'finance',
    level: 'Advanced',
    duration: '48 hours',
    rating: 4.9,
    reviews: 823,
    description: 'Financial modeling, valuation, and investment strategies',
    badge: 'advanced',
    lessons: 256,
    enrolled: 10800
  },
  {
    id: 36,
    title: 'Accounting & Bookkeeping Fundamentals',
    instructor: 'Andrew Taylor',
    instructorAvatar: '/img/team-4.jpg',
    students: 8700,
    price: 149,
    originalPrice: 299,
    image: '/img/course-3.jpg',
    category: 'finance',
    level: 'Beginner',
    duration: '38 hours',
    rating: 4.7,
    reviews: 678,
    description: 'Complete accounting fundamentals and QuickBooks training',
    badge: 'trending',
    lessons: 198,
    enrolled: 10200
  },
  {
    id: 37,
    title: 'Project Management Professional (PMP)',
    instructor: 'Michelle Garcia',
    instructorAvatar: '/img/team-1.jpg',
    students: 10500,
    price: 189,
    originalPrice: 379,
    image: '/img/course-1.jpg',
    category: 'business',
    level: 'All Levels',
    duration: '52 hours',
    rating: 4.8,
    reviews: 945,
    description: 'PMP certification prep and project management best practices',
    badge: 'bestseller',
    lessons: 278,
    enrolled: 12600
  },
  {
    id: 38,
    title: 'Cryptocurrency & Blockchain Technology',
    instructor: 'Ryan Thompson',
    instructorAvatar: '/img/team-2.jpg',
    students: 7800,
    price: 159,
    originalPrice: 319,
    image: '/img/course-2.jpg',
    category: 'finance',
    level: 'Intermediate',
    duration: '40 hours',
    rating: 4.7,
    reviews: 567,
    description: 'Bitcoin, Ethereum, DeFi, NFTs, and blockchain development',
    badge: 'new',
    lessons: 212,
    enrolled: 9100
  },
  {
    id: 39,
    title: 'Excel for Business & Data Analysis',
    instructor: 'Patricia Lee',
    instructorAvatar: '/img/team-3.jpg',
    students: 12500,
    price: 129,
    originalPrice: 259,
    image: '/img/course-3.jpg',
    category: 'business',
    level: 'All Levels',
    duration: '35 hours',
    rating: 4.9,
    reviews: 1123,
    description: 'Master Excel formulas, pivot tables, macros, and VBA',
    badge: 'bestseller',
    lessons: 178,
    enrolled: 15000
  },

  // Photography & Video (5 courses)
  {
    id: 40,
    title: 'Photography Masterclass: Complete Guide',
    instructor: 'Brandon Scott',
    instructorAvatar: '/img/team-4.jpg',
    students: 10500,
    price: 159,
    originalPrice: 319,
    image: '/img/course-1.jpg',
    category: 'photography',
    level: 'All Levels',
    duration: '42 hours',
    rating: 4.9,
    reviews: 1034,
    description: 'Professional photography from basics to advanced techniques',
    badge: 'bestseller',
    lessons: 223,
    enrolled: 12800
  },
  {
    id: 41,
    title: 'Video Production & Editing with Premiere Pro',
    instructor: 'Samantha White',
    instructorAvatar: '/img/team-1.jpg',
    students: 9200,
    price: 169,
    originalPrice: 339,
    image: '/img/course-2.jpg',
    category: 'photography',
    level: 'Intermediate',
    duration: '46 hours',
    rating: 4.8,
    reviews: 892,
    description: 'Complete video editing, color grading, and post-production',
    badge: 'trending',
    lessons: 245,
    enrolled: 11000
  },
  {
    id: 42,
    title: 'YouTube Content Creation & Growth',
    instructor: 'Justin Martin',
    instructorAvatar: '/img/team-2.jpg',
    students: 13800,
    price: 139,
    originalPrice: 279,
    image: '/img/course-3.jpg',
    category: 'photography',
    level: 'Beginner',
    duration: '32 hours',
    rating: 4.9,
    reviews: 1245,
    description: 'Build a successful YouTube channel from scratch',
    badge: 'bestseller',
    lessons: 167,
    enrolled: 16500
  },
  {
    id: 43,
    title: 'Portrait Photography & Retouching',
    instructor: 'Melissa Rodriguez',
    instructorAvatar: '/img/team-3.jpg',
    students: 7500,
    price: 149,
    originalPrice: 299,
    image: '/img/course-1.jpg',
    category: 'photography',
    level: 'Intermediate',
    duration: '38 hours',
    rating: 4.8,
    reviews: 678,
    description: 'Master portrait lighting, posing, and professional retouching',
    badge: 'new',
    lessons: 198,
    enrolled: 8900
  },
  {
    id: 44,
    title: 'Cinematography & Filmmaking',
    instructor: 'Gregory Adams',
    instructorAvatar: '/img/team-4.jpg',
    students: 6800,
    price: 179,
    originalPrice: 359,
    image: '/img/course-2.jpg',
    category: 'photography',
    level: 'Advanced',
    duration: '50 hours',
    rating: 4.7,
    reviews: 567,
    description: 'Professional cinematography techniques and visual storytelling',
    badge: 'advanced',
    lessons: 267,
    enrolled: 7900
  },

  // Cloud & DevOps (4 courses)
  {
    id: 45,
    title: 'AWS Cloud Practitioner Complete Course',
    instructor: 'Daniel Roberts',
    instructorAvatar: '/img/team-1.jpg',
    students: 11200,
    price: 169,
    originalPrice: 339,
    image: '/img/course-3.jpg',
    category: 'cloud',
    level: 'Beginner',
    duration: '48 hours',
    rating: 4.9,
    reviews: 1123,
    description: 'Master AWS cloud services and prepare for certification',
    badge: 'bestseller',
    lessons: 256,
    enrolled: 13500
  },
  {
    id: 46,
    title: 'Docker & Kubernetes Complete Guide',
    instructor: 'Eric Campbell',
    instructorAvatar: '/img/team-2.jpg',
    students: 9500,
    price: 179,
    originalPrice: 359,
    image: '/img/course-1.jpg',
    category: 'cloud',
    level: 'Advanced',
    duration: '52 hours',
    rating: 4.8,
    reviews: 892,
    description: 'Container orchestration, microservices, and DevOps practices',
    badge: 'advanced',
    lessons: 278,
    enrolled: 11200
  },
  {
    id: 47,
    title: 'DevOps Engineering - CI/CD Pipelines',
    instructor: 'Laura Phillips',
    instructorAvatar: '/img/team-3.jpg',
    students: 7800,
    price: 169,
    originalPrice: 339,
    image: '/img/course-2.jpg',
    category: 'cloud',
    level: 'Intermediate',
    duration: '45 hours',
    rating: 4.7,
    reviews: 678,
    description: 'Jenkins, GitLab CI, GitHub Actions, and automation',
    badge: 'trending',
    lessons: 234,
    enrolled: 9200
  },
  {
    id: 48,
    title: 'Microsoft Azure Fundamentals',
    instructor: 'Steven Evans',
    instructorAvatar: '/img/team-4.jpg',
    students: 8600,
    price: 159,
    originalPrice: 319,
    image: '/img/course-3.jpg',
    category: 'cloud',
    level: 'Beginner',
    duration: '42 hours',
    rating: 4.8,
    reviews: 745,
    description: 'Azure cloud services and AZ-900 certification preparation',
    badge: 'new',
    lessons: 223,
    enrolled: 10200
  },

  // Cybersecurity (3 courses)
  {
    id: 49,
    title: 'Ethical Hacking & Penetration Testing',
    instructor: 'Richard Turner',
    instructorAvatar: '/img/team-1.jpg',
    students: 9800,
    price: 189,
    originalPrice: 379,
    image: '/img/course-1.jpg',
    category: 'security',
    level: 'Advanced',
    duration: '55 hours',
    rating: 4.9,
    reviews: 892,
    description: 'Complete ethical hacking and cybersecurity certification prep',
    badge: 'bestseller',
    lessons: 298,
    enrolled: 11500
  },
  {
    id: 50,
    title: 'Network Security & CompTIA Security+',
    instructor: 'Nicole King',
    instructorAvatar: '/img/team-2.jpg',
    students: 7500,
    price: 169,
    originalPrice: 339,
    image: '/img/course-2.jpg',
    category: 'security',
    level: 'Intermediate',
    duration: '48 hours',
    rating: 4.8,
    reviews: 678,
    description: 'Network security fundamentals and Security+ certification',
    badge: 'trending',
    lessons: 256,
    enrolled: 8900
  },
  {
    id: 51,
    title: 'Cybersecurity Fundamentals',
    instructor: 'Kevin Mitchell',
    instructorAvatar: '/img/team-3.jpg',
    students: 10200,
    price: 149,
    originalPrice: 299,
    image: '/img/course-3.jpg',
    category: 'security',
    level: 'Beginner',
    duration: '40 hours',
    rating: 4.7,
    reviews: 823,
    description: 'Information security basics, threat analysis, and risk management',
    badge: 'new',
    lessons: 212,
    enrolled: 12000
  },

  // Personal Development (3 courses)
  {
    id: 52,
    title: 'Public Speaking & Presentation Skills',
    instructor: 'Barbara Collins',
    instructorAvatar: '/img/team-4.jpg',
    students: 8900,
    price: 119,
    originalPrice: 239,
    image: '/img/course-1.jpg',
    category: 'business',
    level: 'All Levels',
    duration: '28 hours',
    rating: 4.9,
    reviews: 945,
    description: 'Master public speaking, storytelling, and persuasive presentations',
    badge: 'bestseller',
    lessons: 145,
    enrolled: 10500
  },
  {
    id: 53,
    title: 'Time Management & Productivity Mastery',
    instructor: 'Donald Stewart',
    instructorAvatar: '/img/team-1.jpg',
    students: 11500,
    price: 99,
    originalPrice: 199,
    image: '/img/course-2.jpg',
    category: 'business',
    level: 'All Levels',
    duration: '24 hours',
    rating: 4.8,
    reviews: 1234,
    description: 'Boost productivity, eliminate procrastination, and achieve goals',
    badge: 'trending',
    lessons: 123,
    enrolled: 13800
  },
  {
    id: 54,
    title: 'Leadership & Team Management',
    instructor: 'Susan Morris',
    instructorAvatar: '/img/team-2.jpg',
    students: 9600,
    price: 139,
    originalPrice: 279,
    image: '/img/course-3.jpg',
    category: 'business',
    level: 'Intermediate',
    duration: '35 hours',
    rating: 4.9,
    reviews: 876,
    description: 'Effective leadership strategies and team building techniques',
    badge: 'bestseller',
    lessons: 178,
    enrolled: 11200
  }
];

const categories = [
  { id: 'all', label: 'All Courses', icon: FaGraduationCap },
  { id: 'web-dev', label: 'Web Development', icon: FaCode },
  { id: 'mobile-dev', label: 'Mobile Dev', icon: FaMobile },
  { id: 'data-science', label: 'Data Science', icon: FaDatabase },
  { id: 'marketing', label: 'Marketing', icon: FaChartLine },
  { id: 'design', label: 'Design', icon: FaPalette },
  { id: 'business', label: 'Business', icon: FaBriefcase },
  { id: 'finance', label: 'Finance', icon: FaAward },
  { id: 'photography', label: 'Photography', icon: FaCamera },
  { id: 'cloud', label: 'Cloud', icon: FaCloud },
  { id: 'security', label: 'Security', icon: FaShieldAlt }
];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const getBadgeStyles = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
      case 'new':
        return 'bg-gradient-to-r from-green-400 to-emerald-500 text-white';
      case 'advanced':
        return 'bg-gradient-to-r from-purple-500 to-pink-600 text-white';
      case 'trending':
        return 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white';
      default:
        return '';
    }
  };

  const getBadgeText = (badge?: string) => {
    switch (badge) {
      case 'bestseller':
        return 'Bestseller';
      case 'new':
        return 'New';
      case 'advanced':
        return 'Advanced';
      case 'trending':
        return 'Trending';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section with Gradient & Wave */}
      <div className="relative bg-gradient-to-r from-[#001A66] via-[#3A0CA3] to-[#4361EE] pt-24 pb-20 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Wave at Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-16 fill-current text-gray-50">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              DHV Courses
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent mt-2">
                Guiding Light
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Discover 54 high-quality courses from top experts worldwide
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, instructors, topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-full border-none focus:outline-none focus:ring-4 focus:ring-white/30 text-lg shadow-2xl"
                  style={{ fontFamily: "'Poppins', 'Inter', sans-serif" }}
                />
                <FaSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-2xl text-gray-400" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Category Filter - Compact Modern Style */}
      <div className="sticky top-16 z-40 backdrop-blur-xl bg-white/80 border-b border-gray-200/30 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          {/* Horizontal Scroll Layout for Compact Cards */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: index * 0.03,
                    duration: 0.25
                  }}
                  whileHover={{ 
                    scale: isActive ? 1.02 : 1.03,
                    y: -2
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setCurrentPage(1);
                  }}
                  className={`
                    group relative flex flex-col items-center justify-center gap-2 min-w-[90px] p-4 rounded-2xl 
                    font-medium transition-all duration-250 flex-shrink-0
                    ${isActive
                      ? 'bg-gradient-to-br from-[#27E0A7] to-[#1BC6D5] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:shadow-md border border-[#E8E8E8]'
                    }
                  `}
                  style={{
                    fontFamily: "'Inter', 'Poppins', sans-serif",
                    boxShadow: isActive ? '0 4px 12px rgba(39, 224, 167, 0.25), inset 0 1px 2px rgba(255,255,255,0.3)' : undefined
                  }}
                >
                  {/* Soft Glow for Active */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <Icon className={`text-2xl transition-colors duration-250 ${
                      isActive ? 'text-white' : 'text-[#3A4750] group-hover:text-[#27E0A7]'
                    }`} />
                  </div>
                  
                  {/* Label */}
                  <span className={`relative z-10 text-sm font-medium text-center leading-tight transition-colors duration-250 ${
                    isActive ? 'text-white' : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {category.label}
                  </span>

                  {/* Active Check Icon */}
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full shadow-md flex items-center justify-center"
                    >
                      <svg className="w-3 h-3 text-[#27E0A7]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCourses.length} courses
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedCategory === 'all' ? 'All categories' : categories.find(c => c.id === selectedCategory)?.label}
            </p>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-250"
              >
                {/* Course Image */}
                <div className="relative overflow-hidden h-44">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250"></div>

                  {/* Badge */}
                  {course.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-md flex items-center gap-1 ${getBadgeStyles(course.badge)}`}>
                        {course.badge === 'bestseller' && <FaFire className="text-xs" />}
                        {course.badge === 'new' && <FaAward className="text-xs" />}
                        {course.badge === 'trending' && <FaChartLine className="text-xs" />}
                        {getBadgeText(course.badge)}
                      </span>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-md"
                  >
                    {favorites.includes(course.id) ? (
                      <FaHeart className="text-red-500 text-sm" />
                    ) : (
                      <FaRegHeart className="text-gray-600 text-sm" />
                    )}
                  </button>

                  {/* Level Badge */}
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      {course.level}
                    </span>
                  </div>

                  {/* Play Button on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <FaPlay className="text-blue-600 text-base ml-1" />
                    </div>
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-xs" />
                      <span className="font-semibold text-sm text-gray-900">{course.rating}</span>
                    </div>
                    <span className="text-gray-500 text-xs">({course.reviews.toLocaleString()})</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors min-h-[48px]" style={{ fontSize: '15px' }}>
                    {course.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full object-cover"
                    />
                    <p className="text-xs text-gray-600 font-medium truncate">{course.instructor}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <FaClock className="text-gray-400 text-xs" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaUsers className="text-gray-400 text-xs" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <FaCertificate className="text-green-500 text-xs" />
                      <span>Certificate</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaInfinity className="text-blue-500 text-xs" />
                      <span>Lifetime</span>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-blue-600">${course.price}</span>
                        <span className="text-xs text-gray-400 line-through">${course.originalPrice}</span>
                      </div>
                    </div>
                    <Link
                      to={`/courses/${course.id}`}
                      className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm hover:shadow-md"
                    >
                      <FaShoppingCart className="text-base" />
                    </Link>
                  </div>

                  {/* View Details Button */}
                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full py-2.5 px-4 bg-[#0066CC] text-white text-center text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
              }`}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                  currentPage === index + 1
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-110'
                    : 'bg-white text-gray-700 hover:bg-blue-100 shadow-md'
                }`}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                currentPage === totalPages
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white shadow-md'
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaSearch className="text-6xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">No courses found</h3>
            <p className="text-gray-600 mb-6">Try searching with different keywords or select another category</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
            >
              View All Courses
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Courses;
