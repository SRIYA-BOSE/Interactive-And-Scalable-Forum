// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('activity');
  const [isOnline, setIsOnline] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const contributionChartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contributionChartRef.current) {
      const chart = echarts.init(contributionChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: { show: false },
          axisTick: { show: false }
        },
        yAxis: {
          type: 'value',
          axisLine: { show: false },
          axisTick: { show: false }
        },
        series: [{
          data: [28, 35, 42, 30, 45, 38, 32],
          type: 'line',
          smooth: true,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: 'rgba(99, 102, 241, 0.2)'
              }, {
                offset: 1,
                color: 'rgba(99, 102, 241, 0.01)'
              }]
            }
          },
          lineStyle: {
            color: '#6366f1'
          },
          itemStyle: {
            color: '#6366f1'
          }
        }]
      };
      chart.setOption(option);
    }
  }, []);

  const skills = [
    { name: 'JavaScript', level: 92 },
    { name: 'React', level: 88 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 78 },
    { name: 'TypeScript', level: 90 }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'contribution',
      project: 'React Performance Optimizer',
      time: '2 hours ago',
      description: 'Implemented memory optimization techniques reducing bundle size by 35%'
    },
    {
      id: 2,
      type: 'review',
      project: 'TypeScript Compiler',
      time: '5 hours ago',
      description: 'Reviewed and approved 3 pull requests for type inference improvements'
    },
    {
      id: 3,
      type: 'achievement',
      badge: 'Code Maestro',
      time: '1 day ago',
      description: 'Achieved 1000+ successful code reviews milestone'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-indigo-600">CodeMate</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 h-10 pl-10 pr-4 rounded-lg border-none bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400 text-sm"></i>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              className="relative !rounded-button whitespace-nowrap"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <i className="fas fa-bell text-gray-600"></i>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 !rounded-button whitespace-nowrap"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <img
                  src="https://public.readdy.ai/ai/img_res/74f3e00222b02b1f5c2ff12e5c567067.jpg"
                  alt="Profile"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <i className="fas fa-chevron-down text-gray-600 text-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        {/* Profile Header */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-start space-x-8">
            <img
              src="https://public.readdy.ai/ai/img_res/a7abba832d19adda1ed2afbd25ded53c.jpg"
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-4">
                <h2 className="text-3xl font-bold text-gray-900">Alexander Mitchell</h2>
                <span className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded-full">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-sm text-green-700">Online</span>
                </span>
              </div>
              <p className="text-lg text-gray-600 mt-2">Senior Software Engineer at TechForward</p>
              <div className="flex items-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-star text-yellow-400"></i>
                  <span className="text-gray-700">4.9 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-code-branch text-indigo-500"></i>
                  <span className="text-gray-700">1,234 Contributions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-users text-blue-500"></i>
                  <span className="text-gray-700">Senior Mentor</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-6">
                <button className="px-6 py-2 bg-indigo-600 text-white !rounded-button whitespace-nowrap hover:bg-indigo-700 transition-colors">
                  <i className="fas fa-user-plus mr-2"></i>
                  Connect
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 !rounded-button whitespace-nowrap hover:bg-gray-50 transition-colors">
                  <i className="fas fa-envelope mr-2"></i>
                  Message
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="mt-8 grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About</h3>
              <p className="text-gray-600">
                Passionate software engineer with 8+ years of experience specializing in full-stack development. 
                Committed to mentoring and building scalable solutions that make a difference.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-map-marker-alt text-gray-400"></i>
                  <span className="text-gray-600">San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-building text-gray-400"></i>
                  <span className="text-gray-600">TechForward Inc.</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-graduation-cap text-gray-400"></i>
                  <span className="text-gray-600">Stanford University</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-indigo-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-6 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-6 border-b border-gray-200">
                <button 
                  className={`pb-4 px-2 ${activeTab === 'activity' ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-500'} !rounded-button whitespace-nowrap`}
                  onClick={() => setActiveTab('activity')}
                >
                  Activity
                </button>
                <button 
                  className={`pb-4 px-2 ${activeTab === 'projects' ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-500'} !rounded-button whitespace-nowrap`}
                  onClick={() => setActiveTab('projects')}
                >
                  Projects
                </button>
                <button 
                  className={`pb-4 px-2 ${activeTab === 'snippets' ? 'text-indigo-600 border-b-2 border-indigo-600 font-semibold' : 'text-gray-500'} !rounded-button whitespace-nowrap`}
                  onClick={() => setActiveTab('snippets')}
                >
                  Code Snippets
                </button>
              </div>
              <div className="mt-6">
                {activeTab === 'activity' && (
                  <div className="space-y-6">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <i className={`fas ${
                            activity.type === 'contribution' ? 'fa-code-commit' :
                            activity.type === 'review' ? 'fa-code-branch' :
                            'fa-award'
                          } text-indigo-600`}></i>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-gray-900 font-medium">{activity.project || activity.badge}</h4>
                            <span className="text-sm text-gray-500">{activity.time}</span>
                          </div>
                          <p className="text-gray-600 mt-1">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contribution Activity</h3>
              <div ref={contributionChartRef} style={{ height: '300px' }}></div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-trophy text-2xl text-yellow-500 mb-2"></i>
                  <h4 className="text-sm font-medium text-gray-900">Code Maestro</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-star text-2xl text-blue-500 mb-2"></i>
                  <h4 className="text-sm font-medium text-gray-900">Top Mentor</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-rocket text-2xl text-purple-500 mb-2"></i>
                  <h4 className="text-sm font-medium text-gray-900">Innovation</h4>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <i className="fas fa-heart text-2xl text-red-500 mb-2"></i>
                  <h4 className="text-sm font-medium text-gray-900">Community</h4>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentor Insights</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-green-700 mb-2">
                    <i className="fas fa-arrow-trend-up"></i>
                    <span className="font-medium">Strong Progress</span>
                  </div>
                  <p className="text-sm text-green-600">
                    Excellent improvement in code quality and architectural decisions
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 text-blue-700 mb-2">
                    <i className="fas fa-lightbulb"></i>
                    <span className="font-medium">Learning Focus</span>
                  </div>
                  <p className="text-sm text-blue-600">
                    Recommended: Advanced System Design patterns
                  </p>
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
