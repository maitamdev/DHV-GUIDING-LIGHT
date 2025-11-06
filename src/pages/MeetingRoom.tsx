import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash, FaPhoneSlash, FaComments, FaUsers } from 'react-icons/fa';

const MeetingRoom = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [showChat, setShowChat] = useState(true);
  const [messages, setMessages] = useState<{ user: string; text: string; time: string }[]>([
    { user: 'Mentor', text: 'Welcome to the session everyone!', time: '14:00' },
    { user: 'Student A', text: 'Hello mentor!', time: '14:01' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [participants] = useState([
    { id: 1, name: 'Mentor', role: 'instructor', video: true, audio: true },
    { id: 2, name: 'Student A', role: 'student', video: true, audio: true },
    { id: 3, name: 'Student B', role: 'student', video: false, audio: true },
    { id: 4, name: 'Student C', role: 'student', video: true, audio: false },
  ]);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Initialize webcam
    if (isVideoOn && videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((err) => console.error('Error accessing media devices:', err));
    }
  }, [isVideoOn]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      setMessages([
        ...messages,
        {
          user: 'Bạn',
          text: newMessage,
          time: `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`
        }
      ]);
      setNewMessage('');
    }
  };

  const handleLeaveRoom = () => {
    if (window.confirm('Are you sure you want to leave the room?')) {
      navigate('/meeting');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Room: {roomId}</h1>
          <p className="text-sm text-gray-400">JavaScript Advanced - Q&A Session</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">
            <FaUsers className="inline mr-2" />
            {participants.length} participants
          </span>
          <span className="text-sm text-green-400">● Connected</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Grid */}
        <div className="flex-1 p-4 overflow-auto">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Main Video (Your video) */}
            <div className="col-span-2 bg-gray-800 rounded-lg overflow-hidden relative">
              {isVideoOn ? (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#06BBCC] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold text-white">B</span>
                    </div>
                    <p className="text-white text-xl">Bạn</p>
                  </div>
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-3 py-1 rounded">
                <span className="text-white font-semibold">You</span>
              </div>
            </div>

            {/* Other Participants */}
            {participants.map((participant) => (
              <div key={participant.id} className="bg-gray-800 rounded-lg overflow-hidden relative aspect-video">
                {participant.video ? (
                  <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#06BBCC] rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl font-bold text-white">
                          {participant.name.charAt(0)}
                        </span>
                      </div>
                      <p className="text-white text-sm">{participant.name}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <FaVideoSlash className="text-4xl text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">{participant.name}</p>
                    </div>
                  </div>
                )}
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <div className="bg-black bg-opacity-60 px-2 py-1 rounded">
                    <span className="text-white text-xs font-semibold">{participant.name}</span>
                  </div>
                  {!participant.audio && (
                    <div className="bg-red-500 p-1 rounded">
                      <FaMicrophoneSlash className="text-white text-xs" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Sidebar */}
        {showChat && (
          <div className="w-80 bg-gray-800 flex flex-col">
            <div className="p-4 border-b border-gray-700">
              <h3 className="text-white font-semibold text-lg">Chat</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[#06BBCC] font-semibold text-sm">{msg.user}</span>
                    <span className="text-gray-400 text-xs">{msg.time}</span>
                  </div>
                  <p className="text-white text-sm">{msg.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#06BBCC] text-white rounded-lg hover:bg-[#05a3b3] transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-gray-800 px-6 py-4 flex justify-center items-center gap-4">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            isMuted ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <FaMicrophoneSlash className="text-white text-xl" />
          ) : (
            <FaMicrophone className="text-white text-xl" />
          )}
        </button>

        <button
          onClick={() => setIsVideoOn(!isVideoOn)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            !isVideoOn ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          title={isVideoOn ? 'Turn off video' : 'Turn on video'}
        >
          {isVideoOn ? (
            <FaVideo className="text-white text-xl" />
          ) : (
            <FaVideoSlash className="text-white text-xl" />
          )}
        </button>

        <button
          onClick={handleLeaveRoom}
          className="w-14 h-14 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300"
          title="Leave room"
        >
          <FaPhoneSlash className="text-white text-xl" />
        </button>

        <button
          onClick={() => setShowChat(!showChat)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
            showChat ? 'bg-[#06BBCC] hover:bg-[#05a3b3]' : 'bg-gray-700 hover:bg-gray-600'
          }`}
          title={showChat ? 'Hide chat' : 'Show chat'}
        >
          <FaComments className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default MeetingRoom;
