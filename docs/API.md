# API Documentation

## Services

### courseService
- `getCourses(filter?)` - Get courses with optional filtering
- `getCourseById(id)` - Get single course
- `getPopularCourses(count)` - Get popular courses
- `searchCourses(query)` - Search courses
- `addCourseReview(courseId, review)` - Add review

### userService
- `getUserById(userId)` - Get user profile
- `updateUserProfile(userId, data)` - Update profile
- `createUserProfile(userId, data)` - Create profile
- `addBookmark(userId, courseId)` - Bookmark course
- `removeBookmark(userId, courseId)` - Remove bookmark

### meetingService
- `createMeeting(request, names)` - Schedule meeting
- `getUserMeetings(userId)` - Get user meetings
- `updateMeetingStatus(id, status)` - Update status
- `submitMeetingFeedback(id, feedback)` - Submit feedback

### notificationService
- `getUserNotifications(userId)` - Get notifications
- `markAsRead(id)` - Mark notification read
- `markAllAsRead(userId)` - Mark all read
- `createNotification(data)` - Create notification
- `getUnreadCount(userId)` - Get unread count

### aiMentorService
- `getMentorRecommendations(menteeProfile)` - AI recommendations
- `scheduleMentorMeeting(mentorId, menteeId, topic)` - Schedule
