// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const userName = 'Alexander Mitchell';
  const userPoints = 2850;
  const userRank = 4;

  const discussions = [
    {
      id: 1,
      title: 'Understanding React Hooks and Custom Hook Patterns',
      category: 'Frontend',
      author: 'Emily Watson',
      avatar: 'https://public.readdy.ai/ai/img_res/7c6a4a5183a6dae5e58bb763252221e0.jpg',
      replies: 24,
      upvotes: 156,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      title: 'Optimizing Database Queries in Microservices Architecture',
      category: 'Backend',
      author: 'James Chen',
      avatar: 'https://public.readdy.ai/ai/img_res/61d37c71bbbd2c9e25eaebce0d197466.jpg',
      replies: 18,
      upvotes: 89,
      timestamp: '4 hours ago'
    },
    {
      id: 3,
      title: 'Implementing Binary Search Trees: A Complete Guide',
      category: 'Data Structures',
      author: 'Sarah Miller',
      avatar: 'https://public.readdy.ai/ai/img_res/daf04d665699679522880b1bd57e9537.jpg',
      replies: 32,
      upvotes: 204,
      timestamp: '6 hours ago'
    }
  ];

  const mentorReplies = [
    {
      id: 1,
      mentorName: 'Dr. Michael Anderson',
      mentorAvatar: 'https://public.readdy.ai/ai/img_res/ee733d96718c583578c8f181cd3382c8.jpg',
      question: 'What are the best practices for implementing authentication in a React application?',
      answer: 'When implementing authentication in React, consider using JWT tokens stored in HTTP-only cookies...',
      timestamp: '1 hour ago'
    },
    {
      id: 2,
      mentorName: 'Prof. Lisa Zhang',
      mentorAvatar: 'https://public.readdy.ai/ai/img_res/0d3969f79c616034740f80bf2e7d6e69.jpg',
      question: 'How to optimize performance in large-scale React applications?',
      answer: 'For large React applications, implement code splitting, lazy loading, and proper state management...',
      timestamp: '3 hours ago'
    }
  ];

  const topUsers = [
    {
      rank: 1,
      name: 'David Thompson',
      points: 4562,
      avatar: 'https://public.readdy.ai/ai/img_res/456e9543e4e6ff28b26607476aec4555.jpg'
    },
    {
      rank: 2,
      name: 'Rebecca Martinez',
      points: 4128,
      avatar: 'https://public.readdy.ai/ai/img_res/8236833ea8261b247a4e3afaadb1a35c.jpg'
    },
    {
      rank: 3,
      name: 'Kevin Park',
      points: 3895,
      avatar: 'https://public.readdy.ai/ai/img_res/77762d526ceaf57b40727c0c65158084.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-indigo-600">CodeMate</div>
            <div className="hidden md:flex space-x-6">
              <button className="text-gray-700 hover:text-indigo-600 !rounded-button whitespace-nowrap">Home</button>
              <button className="text-gray-700 hover:text-indigo-600 !rounded-button whitespace-nowrap">Discussions</button>
              <button className="text-gray-700 hover:text-indigo-600 !rounded-button whitespace-nowrap">Ask a Mentor</button>
              <button className="text-gray-700 hover:text-indigo-600 !rounded-button whitespace-nowrap">Leaderboard</button>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-10 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-2 !rounded-button whitespace-nowrap"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <img
                  src="https://public.readdy.ai/ai/img_res/4427ce001c055c70d7d7e542c9114ccb.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <i className="fas fa-chevron-down text-gray-600"></i>
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-user mr-2"></i> Profile
                  </button>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-cog mr-2"></i> Settings
                  </button>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-moon mr-2"></i> Dark Mode
                  </button>
                  <button className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-sign-out-alt mr-2"></i> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="flex gap-6 mt-8">
          {/* Left Sidebar */}
          <div className="w-1/5">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center mb-6">
                <img
                  src="https://public.readdy.ai/ai/img_res/cc0edd9c28064339b7980a842b7279e9.jpg"
                  alt="Profile"
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{userName}</h3>
                <p className="text-gray-600">Full Stack Developer</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Points</span>
                  <span className="font-semibold">{userPoints}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Rank</span>
                  <span className="font-semibold">#{userRank}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Discussions</span>
                  <span className="font-semibold">28</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Answers</span>
                  <span className="font-semibold">156</span>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                <button className="w-full py-2 text-left px-4 rounded hover:bg-gray-100 !rounded-button whitespace-nowrap">
                  <i className="fas fa-bookmark mr-2 text-indigo-600"></i> Saved Discussions
                </button>
                <button className="w-full py-2 text-left px-4 rounded hover:bg-gray-100 !rounded-button whitespace-nowrap">
                  <i className="fas fa-code mr-2 text-indigo-600"></i> Code Snippets
                </button>
                <button className="w-full py-2 text-left px-4 rounded hover:bg-gray-100 !rounded-button whitespace-nowrap">
                  <i className="fas fa-users mr-2 text-indigo-600"></i> My Mentors
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-3/5">
            {/* Hero Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h1 className="text-2xl font-bold mb-6">Welcome back, {userName}! 👋</h1>
              <div className="grid grid-cols-3 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-plus-circle"></i>
                  <span>Start Discussion</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-question-circle"></i>
                  <span>Ask a Mentor</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-purple-600 text-white py-3 px-4 rounded-lg hover:bg-purple-700 transition-colors !rounded-button whitespace-nowrap">
                  <i className="fas fa-trophy"></i>
                  <span>View Leaderboard</span>
                </button>
              </div>
            </div>

            {/* Discussions */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Discussions</h2>
                <div className="flex space-x-2">
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'trending'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    } !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab('trending')}
                  >
                    Trending
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'recent'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    } !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab('recent')}
                  >
                    Recent
                  </button>
                  <button
                    className={`px-4 py-2 rounded-lg ${
                      activeTab === 'yours'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    } !rounded-button whitespace-nowrap`}
                    onClick={() => setActiveTab('yours')}
                  >
                    Your Topics
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{discussion.title}</h3>
                        <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                          {discussion.category}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 !rounded-button whitespace-nowrap">
                        <i className="fas fa-ellipsis-v"></i>
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={discussion.avatar}
                          alt={discussion.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-gray-600">{discussion.author}</span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>
                          <i className="fas fa-comment mr-1"></i> {discussion.replies}
                        </span>
                        <span>
                          <i className="fas fa-arrow-up mr-1"></i> {discussion.upvotes}
                        </span>
                        <span>{discussion.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mentor Replies */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold mb-6">Recent Mentor Replies</h2>
              <div className="space-y-4">
                {mentorReplies.map((reply) => (
                  <div key={reply.id} className="border rounded-lg p-4">
                    <div className="flex items-start space-x-4">
                      <img
                        src={reply.mentorAvatar}
                        alt={reply.mentorName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold">{reply.mentorName}</h4>
                            <p className="text-sm text-gray-500">{reply.timestamp}</p>
                          </div>
                          <button className="text-indigo-600 hover:text-indigo-700 !rounded-button whitespace-nowrap">
                            View Full Answer
                          </button>
                        </div>
                        <p className="text-gray-700 mt-2">{reply.question}</p>
                        <p className="text-gray-600 mt-2">{reply.answer}</p>
                        <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-700 !rounded-button whitespace-nowrap">
                          <i className="fas fa-reply mr-2"></i> Request Follow-up
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-1/5">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-bold mb-6">Leaderboard 🏆</h2>
              <div className="space-y-4">
                {topUsers.map((user) => (
                  <div key={user.rank} className="flex items-center space-x-3">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100">
                      <span className="font-semibold">#{user.rank}</span>
                    </div>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.points} pts</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-indigo-600 hover:text-indigo-700 font-semibold !rounded-button whitespace-nowrap">
                View Full Leaderboard
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-bold mb-4">Your Progress</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Weekly Goal</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Monthly Ranking</span>
                    <span>82%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '82%' }}></div>
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
