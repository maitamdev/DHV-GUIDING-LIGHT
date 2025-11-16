import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DarkModeProvider } from './context/DarkModeContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Testimonial from './pages/Testimonial';
import Team from './pages/Team';
import Instructor from './pages/Instructor';
import Login from './pages/Login';
import Signup from './pages/Signup';
import MenteeForm from './pages/MenteeForm';
import MenteeList from './pages/MenteeList';
import Roadmap from './pages/Roadmap';
import RoadmapDetail from './pages/RoadmapDetail';
import MeetingRoom from './pages/MeetingRoom';
import MeetingSchedule from './pages/MeetingSchedule';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import InstructorDashboard from './pages/InstructorDashboard';
import CreateCourse from './pages/CreateCourse';
import StudentDashboard from './pages/StudentDashboard';
import Portfolio from './pages/Portfolio';
import HomeworkReminder from './pages/HomeworkReminder';
import CompetencyProfile from './pages/CompetencyProfile';
import AssignmentSubmission from './pages/AssignmentSubmission';
import ForgotPassword from './pages/ForgotPassword';
import MentorProfile from './pages/MentorProfile';

function App() {
  return (
    <DarkModeProvider>
      <AuthProvider>
        <Router>
          <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="about" element={<About />} />
            <Route path="courses" element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            } />
            <Route path="course/:courseId" element={
              <ProtectedRoute>
                <CourseDetail />
              </ProtectedRoute>
            } />
            <Route path="cart" element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            } />
            <Route path="contact" element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            } />
            <Route path="testimonial" element={
              <ProtectedRoute>
                <Testimonial />
              </ProtectedRoute>
            } />
            <Route path="team" element={
              <ProtectedRoute>
                <Team />
              </ProtectedRoute>
            } />
            <Route path="instructor" element={
              <ProtectedRoute>
                <Instructor />
              </ProtectedRoute>
            } />
            <Route path="mentor/:id" element={
              <ProtectedRoute>
                <MentorProfile />
              </ProtectedRoute>
            } />
            <Route path="faq" element={
              <ProtectedRoute>
                <FAQ />
              </ProtectedRoute>
            } />
            <Route path="blog" element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            } />
            <Route path="blog/:id" element={
              <ProtectedRoute>
                <BlogDetail />
              </ProtectedRoute>
            } />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="signup" element={<Signup />} />
            
            {/* Protected Routes */}
            <Route path="instructor-dashboard" element={
              <ProtectedRoute>
                <InstructorDashboard />
              </ProtectedRoute>
            } />
            <Route path="student-dashboard" element={
              <ProtectedRoute>
                <StudentDashboard />
              </ProtectedRoute>
            } />
            <Route path="create-course" element={
              <ProtectedRoute>
                <CreateCourse />
              </ProtectedRoute>
            } />
            <Route path="roadmap" element={
              <ProtectedRoute>
                <Roadmap />
              </ProtectedRoute>
            } />
            <Route path="roadmap/:category" element={
              <ProtectedRoute>
                <RoadmapDetail />
              </ProtectedRoute>
            } />
            <Route path="meeting" element={
              <ProtectedRoute>
                <MeetingSchedule />
              </ProtectedRoute>
            } />
            <Route path="meeting/:roomId" element={
              <ProtectedRoute>
                <MeetingRoom />
              </ProtectedRoute>
            } />
            <Route path="mentee-form" element={
              <ProtectedRoute>
                <MenteeForm />
              </ProtectedRoute>
            } />
            <Route path="mentee-list" element={
              <ProtectedRoute>
                <MenteeList />
              </ProtectedRoute>
            } />
            <Route path="portfolio" element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            } />
            <Route path="homework" element={
              <ProtectedRoute>
                <HomeworkReminder />
              </ProtectedRoute>
            } />
            <Route path="competency-profile" element={
              <ProtectedRoute>
                <CompetencyProfile />
              </ProtectedRoute>
            } />
            <Route path="assignment-submission" element={
              <ProtectedRoute>
                <AssignmentSubmission />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    </DarkModeProvider>
  );
}

export default App;
