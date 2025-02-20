// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeTab, setActiveTab] = useState('discussions');
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }]
      };
      chart.setOption(option);
    }
  }, []);

  const notifications = [
    { id: 1, text: 'James Wilson commented on your post', time: '2 min ago' },
    { id: 2, text: 'New achievement unlocked: Code Master', time: '15 min ago' },
    { id: 3, text: 'Sarah Parker mentioned you in React Discussion', time: '1 hour ago' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best Practices for React Hooks Implementation',
      author: 'Emily Thompson',
      avatar: 'https://public.readdy.ai/ai/img_res/5b9bccf17467e802589c2440ea150ce3.jpg',
      votes: 234,
      comments: 56,
      tags: ['React', 'Hooks', 'JavaScript']
    },
    {
      id: 2,
      title: 'Understanding TypeScript Generics in Depth',
      author: 'Michael Chen',
      avatar: 'https://public.readdy.ai/ai/img_res/26defb10efff9444dfbf9e0f19fe77ae.jpg',
      votes: 189,
      comments: 42,
      tags: ['TypeScript', 'Programming', 'Web Development']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-indigo-600">CodeMate</div>
              <div className="hidden md:flex space-x-6">
                <button onClick={() => setActiveTab('home')} className={`${activeTab === 'home' ? 'text-indigo-600' : 'text-gray-600'} !rounded-button whitespace-nowrap`}>Home</button>
                <button onClick={() => setActiveTab('discussions')} className={`${activeTab === 'discussions' ? 'text-indigo-600' : 'text-gray-600'} !rounded-button whitespace-nowrap`}>Discussions</button>
                <button onClick={() => setActiveTab('mentors')} className={`${activeTab === 'mentors' ? 'text-indigo-600' : 'text-gray-600'} !rounded-button whitespace-nowrap`}>Ask a Mentor</button>
                <button onClick={() => setActiveTab('leaderboard')} className={`${activeTab === 'leaderboard' ? 'text-indigo-600' : 'text-gray-600'} !rounded-button whitespace-nowrap`}>Leaderboard</button>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-full hover:bg-gray-100 !rounded-button whitespace-nowrap"
                >
                  <i className="fas fa-bell text-gray-600"></i>
                </button>
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4">
                    <h3 className="text-lg font-semibold mb-3">Notifications</h3>
                    {notifications.map(notification => (
                      <div key={notification.id} className="py-2 border-b border-gray-100">
                        <p className="text-sm text-gray-800">{notification.text}</p>
                        <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button className="flex items-center space-x-2 !rounded-button whitespace-nowrap">
                <img
                  src="https://public.readdy.ai/ai/img_res/c792ad1edeb0e3f976ef539b4dff36f0.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">Alexander Wright</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://public.readdy.ai/ai/img_res/300b8a10b8a595e37444c3376ea342af.jpg"
                  alt="Profile"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">Alexander Wright</h3>
                  <p className="text-sm text-gray-500">Senior Developer</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2">Experience Points</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Level 32 - 75%</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Achievements</h4>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <i className="fas fa-trophy text-yellow-500 text-xl"></i>
                      <p className="text-xs mt-1">Expert</p>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-star text-blue-500 text-xl"></i>
                      <p className="text-xs mt-1">Mentor</p>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-medal text-purple-500 text-xl"></i>
                      <p className="text-xs mt-1">Helper</p>
                    </div>
                    <div className="text-center">
                      <i className="fas fa-award text-green-500 text-xl"></i>
                      <p className="text-xs mt-1">Active</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Popular Discussions</h2>
              <div className="space-y-6">
                {discussions.map(discussion => (
                  <div key={discussion.id} className="border-b pb-6">
                    <div className="flex items-start space-x-4">
                      <img src={discussion.avatar} alt={discussion.author} className="w-10 h-10 rounded-full" />
                      <div className="flex-1">
                        <h3 className="font-medium text-lg">{discussion.title}</h3>
                        <div className="flex items-center space-x-4 mt-2">
                          <span className="text-sm text-gray-500">{discussion.author}</span>
                          <div className="flex items-center space-x-2">
                            <i className="fas fa-arrow-up text-gray-400"></i>
                            <span className="text-sm text-gray-600">{discussion.votes}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <i className="fas fa-comment text-gray-400"></i>
                            <span className="text-sm text-gray-600">{discussion.comments}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2 mt-3">
                          {discussion.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-sm rounded-full text-gray-600">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
              <div ref={chartRef} style={{ height: '300px' }}></div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h3 className="font-semibold mb-4">Online Mentors</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src="https://public.readdy.ai/ai/img_res/f48fb992226631fc5323365c895b811a.jpg"
                      alt="Mentor"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Sophie Anderson</p>
                    <p className="text-xs text-gray-500">React Expert</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src="https://public.readdy.ai/ai/img_res/fd1667752b7a7478d6212498e941902e.jpg"
                      alt="Mentor"
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <p className="text-sm font-medium">David Kumar</p>
                    <p className="text-xs text-gray-500">TypeScript Guru</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold mb-4">Daily Challenges</h3>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium">Optimize Array Operations</h4>
                  <p className="text-xs text-gray-600 mt-1">Complete 3 array optimization challenges</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-indigo-600">2/3 completed</span>
                    <button className="text-xs text-white bg-indigo-600 px-3 py-1 rounded-full !rounded-button whitespace-nowrap">
                      Continue
                    </button>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h4 className="text-sm font-medium">Debug React Components</h4>
                  <p className="text-xs text-gray-600 mt-1">Find and fix 5 React component bugs</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-purple-600">0/5 completed</span>
                    <button className="text-xs text-white bg-purple-600 px-3 py-1 rounded-full !rounded-button whitespace-nowrap">
                      Start
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-indigo-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap">
        <i className="fas fa-plus text-lg"></i>
      </button>
    </div>
  );
}

export default App;
// end
