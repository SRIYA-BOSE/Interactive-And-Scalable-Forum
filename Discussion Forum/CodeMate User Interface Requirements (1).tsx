// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifications, setNotifications] = useState(false);
  const [selectedTab, setSelectedTab] = useState('trending');
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
          smooth: true,
          color: '#6366f1'
        }]
      };
      chart.setOption(option);
    }
  }, []);

  const trendingTopics = [
    { id: 1, title: 'React Performance Optimization', comments: 156, upvotes: 423 },
    { id: 2, title: 'TypeScript Best Practices 2025', comments: 89, upvotes: 312 },
    { id: 3, title: 'AI Integration in Modern Web Apps', comments: 234, upvotes: 567 }
  ];

  const mentors = [
    { id: 1, name: 'Dr. Sarah Mitchell', specialty: 'AI/ML Expert', rating: 4.9, available: true },
    { id: 2, name: 'James Anderson', specialty: 'Full Stack Developer', rating: 4.8, available: true },
    { id: 3, name: 'Emily Thompson', specialty: 'Cloud Architecture', rating: 4.9, available: false }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-indigo-600">CodeMate</div>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-8">
                  <button className="text-gray-600 hover:text-indigo-600">Home</button>
                  <button className="text-gray-600 hover:text-indigo-600">Discussions</button>
                  <button className="text-gray-600 hover:text-indigo-600">Ask a Mentor</button>
                  <button className="text-gray-600 hover:text-indigo-600">Leaderboard</button>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  className="w-64 pl-10 pr-4 py-2 rounded-lg border-none bg-gray-100 focus:ring-2 focus:ring-indigo-500 text-sm"
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
              <button 
                className="relative p-2 text-gray-600 hover:text-indigo-600"
                onClick={() => setNotifications(!notifications)}
              >
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                <span className="text-white text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6 py-6">
          {/* Left Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
                  <span className="text-white">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">XP Points</span>
                  <span className="font-semibold">2,450</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-indigo-600 rounded-full w-3/4"></div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Rank</span>
                  <span className="font-semibold">#42</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <div className="flex space-x-4 mb-6">
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedTab === 'trending' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'} !rounded-button whitespace-nowrap`}
                  onClick={() => setSelectedTab('trending')}
                >
                  Trending
                </button>
                <button 
                  className={`px-4 py-2 rounded-lg text-sm font-medium ${selectedTab === 'latest' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600'} !rounded-button whitespace-nowrap`}
                  onClick={() => setSelectedTab('latest')}
                >
                  Latest
                </button>
              </div>
              <div className="space-y-4">
                {trendingTopics.map(topic => (
                  <div key={topic.id} className="border rounded-lg p-4 hover:border-indigo-600 transition-colors">
                    <h3 className="font-semibold mb-2">{topic.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span><i className="fas fa-comment-alt mr-2"></i>{topic.comments}</span>
                      <span><i className="fas fa-arrow-up mr-2"></i>{topic.upvotes}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold mb-4">Activity Graph</h2>
              <div ref={chartRef} style={{ height: '300px' }}></div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold mb-4">Available Mentors</h2>
              <div className="space-y-4">
                {mentors.map(mentor => (
                  <div key={mentor.id} className="flex items-center space-x-3">
                    <div className={`h-2 w-2 rounded-full ${mentor.available ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                    <div>
                      <h3 className="font-medium text-sm">{mentor.name}</h3>
                      <p className="text-xs text-gray-500">{mentor.specialty}</p>
                    </div>
                    <div className="ml-auto text-xs">
                      <span className="text-yellow-500"><i className="fas fa-star mr-1"></i>{mentor.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 h-14 w-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap">
        <i className="fas fa-plus text-xl"></i>
      </button>
    </div>
  );
}

export default App;
// end
