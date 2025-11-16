import { GoogleGenerativeAI } from '@google/generative-ai';
import { instructors, Instructor } from '../data/mentors';

// Initialize Gemini AI
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'AIzaSyDSR8xFqOVz9vLKhPxLxJxKxJxKxJxKxJx'; // Replace with your API key
const genAI = new GoogleGenerativeAI(API_KEY);

interface MenteeRequest {
  skills: string;
  interests: string;
  goals: string;
  experience: string;
  preferredFields: string;
}

interface AIRecommendation {
  mentorId: number;
  mentor: Instructor;
  matchScore: number;
  reasoning: string;
  suggestedTopics: string[];
  learningPath: string[];
}

interface AIResponse {
  analysis: string;
  recommendations: AIRecommendation[];
  careerAdvice: string;
  nextSteps: string[];
}

/**
 * Create a comprehensive prompt for AI to analyze mentee needs and recommend mentors
 */
function createPrompt(request: MenteeRequest, mentorsData: Instructor[]): string {
  const mentorSummaries = mentorsData.map(m => ({
    id: m.id,
    name: m.name,
    title: m.title,
    specialty: m.specialty,
    company: m.company,
    skills: m.skills,
    experience: m.experience,
    rating: m.rating,
    students: m.students,
    bio: m.bio,
    mentoringAreas: m.mentoringAreas,
    mentoringPhilosophy: m.mentoringPhilosophy,
    softSkills: m.softSkills
  }));

  return `You are an AI Career Advisor for DHV Learning Platform. Analyze the mentee's profile and recommend the TOP 3 most suitable mentors from our database.

**MENTEE PROFILE:**
- Current Skills: ${request.skills || 'Not specified'}
- Interests: ${request.interests || 'Not specified'}
- Career Goals: ${request.goals || 'Not specified'}
- Experience Level: ${request.experience || 'Beginner'}
- Preferred Fields: ${request.preferredFields || 'Not specified'}

**AVAILABLE MENTORS:**
${JSON.stringify(mentorSummaries, null, 2)}

**INSTRUCTIONS:**
1. Analyze the mentee's current skills, goals, and interests
2. Match them with the TOP 3 most suitable mentors based on:
   - Skill alignment (mentor's expertise matches mentee's goals)
   - Experience level (appropriate for mentee's current level)
   - Industry relevance (mentor's company/field matches interests)
   - Teaching style compatibility (mentor's philosophy suits mentee)
3. For each recommended mentor, provide:
   - Match score (0-100%)
   - Detailed reasoning why this mentor is suitable
   - 4-5 specific topics the mentor can help with
   - A structured learning path (3-4 steps)

**RESPONSE FORMAT (JSON ONLY):**
{
  "analysis": "Brief analysis of mentee's profile and career direction (2-3 sentences)",
  "recommendations": [
    {
      "mentorId": <mentor_id>,
      "matchScore": <0-100>,
      "reasoning": "Why this mentor is perfect for you (focus on specific skills, experience, and goals alignment)",
      "suggestedTopics": ["Topic 1", "Topic 2", "Topic 3", "Topic 4"],
      "learningPath": ["Step 1: ...", "Step 2: ...", "Step 3: ...", "Step 4: ..."]
    }
  ],
  "careerAdvice": "Personalized career advice based on mentee's profile (3-4 sentences)",
  "nextSteps": ["Action 1", "Action 2", "Action 3", "Action 4"]
}

**IMPORTANT:**
- Return ONLY valid JSON, no markdown formatting
- Recommend exactly 3 mentors, ranked by match score
- Be specific and personalized in reasoning
- Use mentee's actual skills and goals in recommendations
- Keep language professional but encouraging`;
}

/**
 * Get AI-powered mentor recommendations
 */
export async function getAIMentorRecommendations(request: MenteeRequest): Promise<AIResponse> {
  try {
    // Use Gemini Pro model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Create prompt with mentee request and all mentors
    const prompt = createPrompt(request, instructors);

    // Generate AI response
    const result = await model.generateContent(prompt);
    const response = await result.response;
    let text = response.text();

    // Clean up response - remove markdown code blocks if present
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();

    // Parse JSON response
    const aiResponse = JSON.parse(text);

    // Enrich recommendations with full mentor data
    const enrichedRecommendations = aiResponse.recommendations.map((rec: any) => {
      const mentor = instructors.find(m => m.id === rec.mentorId);
      if (!mentor) {
        throw new Error(`Mentor with ID ${rec.mentorId} not found`);
      }
      return {
        ...rec,
        mentor
      };
    });

    return {
      ...aiResponse,
      recommendations: enrichedRecommendations
    };

  } catch (error) {
    console.error('AI Mentor Service Error:', error);
    
    // Fallback to rule-based matching if AI fails
    return getFallbackRecommendations(request);
  }
}

/**
 * Fallback recommendation system using rule-based matching
 */
function getFallbackRecommendations(request: MenteeRequest): AIResponse {
  // Simple keyword matching
  const keywords = [
    ...request.skills.toLowerCase().split(/[,\s]+/),
    ...request.interests.toLowerCase().split(/[,\s]+/),
    ...request.preferredFields.toLowerCase().split(/[,\s]+/)
  ].filter(k => k.length > 2);

  // Score each mentor
  const scoredMentors = instructors.map(mentor => {
    let score = 0;
    
    // Check skill matches
    mentor.skills.forEach(skill => {
      if (keywords.some(k => skill.toLowerCase().includes(k) || k.includes(skill.toLowerCase()))) {
        score += 20;
      }
    });

    // Check specialty/title matches
    if (keywords.some(k => 
      mentor.specialty.toLowerCase().includes(k) || 
      mentor.title.toLowerCase().includes(k) ||
      k.includes(mentor.specialty.toLowerCase())
    )) {
      score += 15;
    }

    // Check bio/mentoring areas
    const mentorText = `${mentor.bio} ${mentor.mentoringAreas?.join(' ')}`.toLowerCase();
    keywords.forEach(k => {
      if (mentorText.includes(k)) score += 5;
    });

    // Bonus for high rating and many students
    score += mentor.rating * 5;
    score += Math.min(mentor.students / 100, 10);

    return {
      mentor,
      score: Math.min(score, 100)
    };
  });

  // Get top 3
  const topMentors = scoredMentors
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const recommendations: AIRecommendation[] = topMentors.map(({ mentor, score }) => ({
    mentorId: mentor.id,
    mentor,
    matchScore: Math.round(score),
    reasoning: `${mentor.name} is an experienced ${mentor.title} with expertise in ${mentor.skills.slice(0, 3).join(', ')}. With ${mentor.experience} of experience and a ${mentor.rating}★ rating from ${mentor.students} students, they can guide you towards your goals in ${mentor.specialty}.`,
    suggestedTopics: mentor.mentoringAreas?.slice(0, 4) || mentor.skills.slice(0, 4),
    learningPath: [
      `Foundation: Master ${mentor.skills[0]} fundamentals`,
      `Practice: Build real-world projects using ${mentor.skills[1]}`,
      `Advanced: Learn ${mentor.skills[2]} and best practices`,
      `Career: Prepare for job interviews and portfolio development`
    ]
  }));

  return {
    analysis: `Based on your interests in ${request.interests} and goals to ${request.goals}, I've matched you with experienced mentors who specialize in your target areas.`,
    recommendations,
    careerAdvice: `Focus on building a strong foundation in your chosen field, create practical projects to showcase your skills, and leverage your mentor's industry connections. With dedicated effort and guidance, you can achieve your career goals.`,
    nextSteps: [
      'Schedule a 1-on-1 meeting with your chosen mentor',
      'Prepare questions about your learning path',
      'Set clear weekly goals and milestones',
      'Build a project portfolio with mentor guidance'
    ]
  };
}

/**
 * Create meeting request with recommended mentor
 */
export async function scheduleMentorMeeting(
  mentorId: number,
  menteeInfo: {
    name: string;
    email: string;
    preferredTime: string;
    topic: string;
    message: string;
  }
): Promise<{ success: boolean; meetingId?: string; error?: string }> {
  try {
    // Find mentor
    const mentor = instructors.find(m => m.id === mentorId);
    if (!mentor) {
      throw new Error('Mentor not found');
    }

    // In a real app, this would call your backend API
    // For now, we'll simulate the meeting creation
    const meetingId = `MTG-${Date.now()}-${mentorId}`;

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    console.log('Meeting Request:', {
      meetingId,
      mentor: mentor.name,
      mentee: menteeInfo.name,
      topic: menteeInfo.topic,
      time: menteeInfo.preferredTime
    });

    return {
      success: true,
      meetingId
    };

  } catch (error: any) {
    return {
      success: false,
      error: error.message
    };
  }
}
