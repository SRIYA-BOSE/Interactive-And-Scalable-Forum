// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const userStats = {
    discussionsStarted: 47,
    answersGiven: 156,
    upvotesReceived: 892,
    currentPoints: 2450,
  };

  const trendingDiscussions = [
    {
      id: 1,
      title: 'Best Practices for React Performance Optimization',
      category: 'Frontend',
      author: 'Emily Thompson',
      avatar: 'https://public.readdy.ai/ai/img_res/d2251add0fd30049b239867f775d88e1.jpg',
      replies: 24,
      upvotes: 156,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      title: 'Understanding Time Complexity in Binary Search Trees',
      category: 'Data Structures',
      author: 'Michael Chen',
      avatar: 'https://public.readdy.ai/ai/img_res/a947468803a1c657e4a6d658c653c884.jpg',
      replies: 18,
      upvotes: 98,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      title: 'Implementing WebSocket Security in Node.js',
      category: 'Backend',
      author: 'Sarah Williams',
      avatar: 'https://public.readdy.ai/ai/img_res/4e310e9df614f10c093ec570a85b7937.jpg',
      replies: 31,
      upvotes: 203,
      timestamp: '6 hours ago'
    }
  ];

  const mentorReplies = [
    {
      id: 1,
      mentor: 'Dr. Robert Anderson',
      avatar: 'https://public.readdy.ai/ai/img_res/9af4ef168309e9b99e4376e989e23a8e.jpg',
      question: 'How to handle complex state management in large React applications?',
      answer: 'Consider using Redux Toolkit for centralized state management. It provides better developer experience and reduces boilerplate code significantly...',
    },
    {
      id: 2,
      mentor: 'Lisa Martinez',
      avatar: 'https://public.readdy.ai/ai/img_res/cf04dc33496579e01966fcffcda27d8b.jpg',
      question: 'What are the best practices for microservices architecture?',
      answer: 'Focus on service boundaries based on business domains. Implement API gateways for better security and monitoring...',
    }
  ];

  const topContributors = [
    {
      rank: 1,
      name: 'Alexandra Cooper',
      points: 4892,
      avatar: 'https://public.readdy.ai/ai/img_res/78f3a072230fc8fa02c40ced5a306c4a.jpg',
    },
    {
      rank: 2,
      name: 'James Wilson',
      points: 4567,
      avatar: 'https://public.readdy.ai/ai/img_res/4cea2ee4134dc848e3b4e73d9e8a4463.jpg',
    },
    {
      rank: 3,
      name: 'Diana Chang',
      points: 4234,
      avatar: 'https://public.readdy.ai/ai/img_res/cde00e1b8a6ea558111aab5c10bea72e.jpg',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm h-16 fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center gap-8">
              <img src="https://public.readdy.ai/ai/img_res/2af0a95e742a46613305dcd07239093d.jpg" alt="CodeMate Logo" className="h-8" />
              <div className="flex items-center gap-6">
                <button className="text-gray-700 hover:text-blue-600 font-medium !rounded-button whitespace-nowrap">Home</button>
                <button className="text-gray-700 hover:text-blue-600 font-medium !rounded-button whitespace-nowrap">Discussions</button>
                <button className="text-gray-700 hover:text-blue-600 font-medium !rounded-button whitespace-nowrap">Ask a Mentor</button>
                <button className="text-gray-700 hover:text-blue-600 font-medium !rounded-button whitespace-nowrap">Leaderboard</button>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search discussions, users, mentors..."
                  className="w-80 h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>

              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 !rounded-button whitespace-nowrap"
                >
                  <img
                    src="https://public.readdy.ai/ai/img_res/34f532bf96209a9a911091a80f35b986.jpg"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <i className="fas fa-chevron-down text-gray-600 text-sm"></i>
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                      <i className="fas fa-user mr-2"></i> Profile
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                      <i className="fas fa-cog mr-2"></i> Settings
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                      <i className="fas fa-moon mr-2"></i> Dark Mode
                    </button>
                    <hr className="my-2" />
                    <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                      <i className="fas fa-sign-out-alt mr-2"></i> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="flex gap-6 py-8">
          {/* Left Sidebar */}
          <div className="w-1/5">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col items-center">
                <img
                  src="https://public.readdy.ai/ai/img_res/e5395065424efcee7e7f13c6d0a8fe88.jpg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">David Mitchell</h3>
                <p className="text-gray-500 text-sm mb-4">Full Stack Developer</p>
                <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 mb-6">{userStats.currentPoints} Points</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Discussions</span>
                  <span className="font-medium">{userStats.discussionsStarted}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Answers</span>
                  <span className="font-medium">{userStats.answersGiven}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Upvotes</span>
                  <span className="font-medium">{userStats.upvotesReceived}</span>
                </div>
              </div>

              <hr className="my-6" />

              <div className="space-y-3">
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm !rounded-button whitespace-nowrap">
                  <i className="fas fa-bookmark mr-2"></i> Saved Discussions
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm !rounded-button whitespace-nowrap">
                  <i className="fas fa-code mr-2"></i> Code Snippets
                </button>
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg text-sm !rounded-button whitespace-nowrap">
                  <i className="fas fa-users mr-2"></i> My Mentors
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-3/5">
            {/* Welcome Section */}
            <div className="bg-white rounded-xl shadow-sm p-8 mb-6">
              <h1 className="text-2xl font-bold mb-6">Welcome back, David! 👋</h1>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-plus-circle"></i>
                  Start Discussion
                </button>
                <button className="flex items-center justify-center gap-2 bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-question-circle"></i>
                  Ask a Mentor
                </button>
                <button className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-trophy"></i>
                  View Leaderboard
                </button>
              </div>
            </div>

            {/* Discussions */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <button
                  onClick={() => setActiveTab('trending')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors !rounded-button whitespace-nowrap ${
                    activeTab === 'trending' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Trending
                </button>
                <button
                  onClick={() => setActiveTab('recent')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors !rounded-button whitespace-nowrap ${
                    activeTab === 'recent' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Recent
                </button>
                <button
                  onClick={() => setActiveTab('yours')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors !rounded-button whitespace-nowrap ${
                    activeTab === 'yours' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  Your Topics
                </button>
              </div>

              <div className="space-y-4">
                {trendingDiscussions.map((discussion) => (
                  <div key={discussion.id} className="border border-gray-100 rounded-lg p-4 hover:border-gray-200 transition-colors">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <img
                          src={discussion.avatar}
                          alt={discussion.author}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-medium text-gray-900">{discussion.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-sm text-gray-500">{discussion.author}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{discussion.timestamp}</span>
                          </div>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full">{discussion.category}</span>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 text-sm !rounded-button whitespace-nowrap">
                        <i className="fas fa-comment-alt"></i>
                        {discussion.replies} Replies
                      </button>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 text-sm !rounded-button whitespace-nowrap">
                        <i className="fas fa-arrow-up"></i>
                        {discussion.upvotes} Upvotes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Replies */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Recent Mentor Replies</h2>
              <div className="space-y-4">
                {mentorReplies.map((reply) => (
                  <div key={reply.id} className="border border-gray-100 rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={reply.avatar}
                        alt={reply.mentor}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{reply.mentor}</h4>
                        <span className="text-sm text-gray-500">Senior Developer</span>
                      </div>
                    </div>
                    <p className="text-gray-600 font-medium mb-2">{reply.question}</p>
                    <p className="text-gray-500 text-sm mb-4">{reply.answer}</p>
                    <div className="flex gap-3">
                      <button className="text-blue-600 text-sm hover:text-blue-700 !rounded-button whitespace-nowrap">
                        View Full Answer
                      </button>
                      <button className="text-purple-600 text-sm hover:text-purple-700 !rounded-button whitespace-nowrap">
                        Request Follow-up
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/5">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Top Contributors 🏆</h2>
              <div className="space-y-4">
                {topContributors.map((contributor) => (
                  <div key={contributor.rank} className="flex items-center gap-3">
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium">
                      {contributor.rank}
                    </span>
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-sm">{contributor.name}</h4>
                      <p className="text-gray-500 text-sm">{contributor.points} pts</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 text-sm hover:text-blue-700 !rounded-button whitespace-nowrap">
                View Full Leaderboard
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Your Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Weekly Goal</span>
                    <span className="text-sm font-medium">75%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Monthly Goal</span>
                    <span className="text-sm font-medium">60%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
// end
