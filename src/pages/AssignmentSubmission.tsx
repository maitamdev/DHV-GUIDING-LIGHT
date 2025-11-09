import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUpload, FaFile, FaCheckCircle, FaClock, FaExclamationTriangle, FaDownload, FaTrash, FaPaperPlane } from 'react-icons/fa';

interface Assignment {
  id: number;
  title: string;
  course: string;
  description: string;
  deadline: string;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  submission?: {
    fileName: string;
    fileSize: string;
    submittedAt: string;
    feedback?: string;
    grade?: number;
  };
  autoReminder: boolean;
  daysUntilDeadline: number;
}

const AssignmentSubmission = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: 1,
      title: 'React Hooks - Final Project',
      course: 'Advanced React Development',
      description: 'Build a complete e-commerce website using React Hooks (useState, useEffect, useContext, useReducer)',
      deadline: 'November 20, 2024',
      status: 'pending',
      autoReminder: true,
      daysUntilDeadline: 11
    },
    {
      id: 2,
      title: 'Node.js REST API Implementation',
      course: 'Backend Development',
      description: 'Create a RESTful API with authentication, CRUD operations, and database integration',
      deadline: 'November 15, 2024',
      status: 'pending',
      autoReminder: true,
      daysUntilDeadline: 6
    },
    {
      id: 3,
      title: 'UI/UX Design Portfolio',
      course: 'UI/UX Design',
      description: 'Design 3 complete mobile app screens with wireframes, mockups, and prototypes',
      deadline: 'November 12, 2024',
      status: 'submitted',
      autoReminder: true,
      daysUntilDeadline: 3,
      submission: {
        fileName: 'ux-portfolio.pdf',
        fileSize: '12.5 MB',
        submittedAt: 'November 10, 2024 3:45 PM',
        feedback: 'Excellent work! Your design thinking process is very clear. Consider adding more user research data.'
      }
    },
    {
      id: 4,
      title: 'Database Design & SQL Queries',
      course: 'Database Management',
      description: 'Design a normalized database schema and write advanced SQL queries',
      deadline: 'November 8, 2024',
      status: 'graded',
      autoReminder: false,
      daysUntilDeadline: -1,
      submission: {
        fileName: 'database-project.sql',
        fileSize: '8.2 MB',
        submittedAt: 'November 7, 2024 11:30 AM',
        feedback: 'Great work on normalization! Your ER diagram is comprehensive.',
        grade: 95
      }
    },
    {
      id: 5,
      title: 'Python Data Analysis',
      course: 'Data Science Fundamentals',
      description: 'Analyze a real-world dataset using Pandas, NumPy, and create visualizations',
      deadline: 'November 5, 2024',
      status: 'overdue',
      autoReminder: true,
      daysUntilDeadline: -4
    }
  ]);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadingFor, setUploadingFor] = useState<number | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>, assignmentId: number) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      setUploadingFor(assignmentId);
    }
  };

  const handleSubmit = (assignmentId: number) => {
    if (!selectedFile) {
      alert('Please select a file to upload!');
      return;
    }

    // Simulate file upload and submission
    const updatedAssignments = assignments.map(assignment => {
      if (assignment.id === assignmentId) {
        return {
          ...assignment,
          status: 'submitted' as const,
          submission: {
            fileName: selectedFile.name,
            fileSize: `${(selectedFile.size / (1024 * 1024)).toFixed(2)} MB`,
            submittedAt: new Date().toLocaleString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: '2-digit'
            })
          }
        };
      }
      return assignment;
    });

    setAssignments(updatedAssignments);
    setSelectedFile(null);
    setUploadingFor(null);
    alert('✅ Assignment submitted successfully! You will receive a notification when it\'s graded.');
  };

  const handleDelete = (assignmentId: number) => {
    if (window.confirm('Are you sure you want to delete this submission?')) {
      const updatedAssignments = assignments.map(assignment => {
        if (assignment.id === assignmentId) {
          return {
            ...assignment,
            status: 'pending' as const,
            submission: undefined
          };
        }
        return assignment;
      });
      setAssignments(updatedAssignments);
      alert('Submission deleted successfully!');
    }
  };

  const getStatusBadge = (status: Assignment['status']) => {
    const badges = {
      pending: { color: 'bg-yellow-100 text-yellow-700', icon: <FaClock />, label: 'Pending' },
      submitted: { color: 'bg-blue-100 text-blue-700', icon: <FaPaperPlane />, label: 'Submitted' },
      graded: { color: 'bg-green-100 text-green-700', icon: <FaCheckCircle />, label: 'Graded' },
      overdue: { color: 'bg-red-100 text-red-700', icon: <FaExclamationTriangle />, label: 'Overdue' }
    };
    const badge = badges[status];
    return (
      <span className={`px-4 py-2 rounded-full font-semibold flex items-center gap-2 ${badge.color}`}>
        {badge.icon} {badge.label}
      </span>
    );
  };

  const pendingAssignments = assignments.filter(a => a.status === 'pending' || a.status === 'overdue');
  const submittedAssignments = assignments.filter(a => a.status === 'submitted' || a.status === 'graded');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <FaUpload className="text-[#06BBCC]" />
            Assignment Submission
          </h1>
          <p className="text-xl text-gray-600">
            Submit your work and track your progress with auto-reminders
          </p>
        </motion.div>

        {/* Auto-Reminder Info Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-yellow-100 to-orange-100 border-l-4 border-yellow-500 rounded-xl p-6 mb-8 shadow-lg"
        >
          <div className="flex items-start gap-4">
            <FaClock className="text-3xl text-yellow-600 mt-1" />
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">📢 Auto-Reminder System Active</h3>
              <p className="text-gray-700">
                You will receive automatic reminders <strong>3 days</strong> and <strong>1 day</strong> before each deadline.
                Email and dashboard notifications will keep you on track!
              </p>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-yellow-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-1">Pending</p>
                <p className="text-4xl font-bold text-yellow-600">{pendingAssignments.filter(a => a.status === 'pending').length}</p>
              </div>
              <FaClock className="text-5xl text-yellow-500 opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-1">Submitted</p>
                <p className="text-4xl font-bold text-blue-600">{assignments.filter(a => a.status === 'submitted').length}</p>
              </div>
              <FaPaperPlane className="text-5xl text-blue-500 opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-green-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-1">Graded</p>
                <p className="text-4xl font-bold text-green-600">{assignments.filter(a => a.status === 'graded').length}</p>
              </div>
              <FaCheckCircle className="text-5xl text-green-500 opacity-20" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-red-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 font-semibold mb-1">Overdue</p>
                <p className="text-4xl font-bold text-red-600">{assignments.filter(a => a.status === 'overdue').length}</p>
              </div>
              <FaExclamationTriangle className="text-5xl text-red-500 opacity-20" />
            </div>
          </motion.div>
        </div>

        {/* Pending Assignments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaClock className="text-yellow-500" />
            Pending Submissions
          </h2>
          <div className="space-y-6">
            {pendingAssignments.map(assignment => (
              <div key={assignment.id} className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${assignment.status === 'overdue' ? 'border-red-500' : 'border-yellow-500'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{assignment.title}</h3>
                    <p className="text-[#06BBCC] font-semibold mb-2">{assignment.course}</p>
                    <p className="text-gray-600 mb-3">{assignment.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <FaClock />
                        <strong>Deadline:</strong> {assignment.deadline}
                      </span>
                      {assignment.daysUntilDeadline > 0 && (
                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-semibold">
                          {assignment.daysUntilDeadline} days remaining
                        </span>
                      )}
                      {assignment.daysUntilDeadline < 0 && (
                        <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold animate-pulse">
                          {Math.abs(assignment.daysUntilDeadline)} days overdue!
                        </span>
                      )}
                    </div>
                  </div>
                  {getStatusBadge(assignment.status)}
                </div>

                {/* Upload Section */}
                <div className="bg-gray-50 rounded-xl p-6 mb-4">
                  <label className="block text-gray-700 font-semibold mb-3">📎 Upload Your Work</label>
                  <div className="flex gap-3">
                    <input
                      type="file"
                      onChange={(e) => handleFileSelect(e, assignment.id)}
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#06BBCC] focus:outline-none"
                      accept=".pdf,.doc,.docx,.zip,.rar"
                    />
                    <button
                      onClick={() => handleSubmit(assignment.id)}
                      disabled={uploadingFor !== assignment.id || !selectedFile}
                      className="px-6 py-3 bg-[#06BBCC] hover:bg-[#05a3b3] text-white rounded-lg font-semibold transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <FaPaperPlane /> Submit
                    </button>
                  </div>
                  {uploadingFor === assignment.id && selectedFile && (
                    <p className="mt-2 text-sm text-gray-600">
                      Selected: <strong>{selectedFile.name}</strong> ({(selectedFile.size / (1024 * 1024)).toFixed(2)} MB)
                    </p>
                  )}
                </div>

                {assignment.autoReminder && (
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <FaCheckCircle />
                    <span>Auto-reminders enabled - you'll get notified 3 days and 1 day before deadline</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Submitted & Graded Assignments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <FaCheckCircle className="text-green-500" />
            Submitted Assignments
          </h2>
          <div className="space-y-6">
            {submittedAssignments.map(assignment => (
              <div key={assignment.id} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{assignment.title}</h3>
                    <p className="text-[#06BBCC] font-semibold mb-2">{assignment.course}</p>
                    <p className="text-gray-600 mb-3">{assignment.description}</p>
                  </div>
                  {getStatusBadge(assignment.status)}
                </div>

                {/* Submission Details */}
                {assignment.submission && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6">
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Submitted File:</p>
                        <p className="flex items-center gap-2 font-semibold text-gray-800">
                          <FaFile className="text-blue-500" /> {assignment.submission.fileName}
                        </p>
                        <p className="text-sm text-gray-500">Size: {assignment.submission.fileSize}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Submission Time:</p>
                        <p className="font-semibold text-gray-800">{assignment.submission.submittedAt}</p>
                      </div>
                    </div>

                    {assignment.submission.grade !== undefined && (
                      <div className="bg-white rounded-lg p-4 mb-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 font-semibold">Your Grade:</span>
                          <span className="text-4xl font-bold text-green-600">{assignment.submission.grade}%</span>
                        </div>
                      </div>
                    )}

                    {assignment.submission.feedback && (
                      <div className="bg-white rounded-lg p-4 mb-4">
                        <p className="text-sm text-gray-600 mb-2">Instructor Feedback:</p>
                        <p className="text-gray-700 italic">"{assignment.submission.feedback}"</p>
                      </div>
                    )}

                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all">
                        <FaDownload /> Download
                      </button>
                      {assignment.status === 'submitted' && (
                        <button
                          onClick={() => handleDelete(assignment.id)}
                          className="flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                        >
                          <FaTrash /> Delete & Resubmit
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AssignmentSubmission;
