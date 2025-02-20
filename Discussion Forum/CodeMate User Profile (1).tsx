// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('activity');
  const [showNotifications, setShowNotifications] = useState(false);
  const contributionChartRef = useRef<HTMLDivElement>(null);
  const skillsChartRef = useRef<HTMLDivElement>(null);

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
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 270, 110],
          type: 'line',
          smooth: true,
          color: '#6366f1'
        }]
      };
      chart.setOption(option);
    }

    if (skillsChartRef.current) {
      const chart = echarts.init(skillsChartRef.current);
      const option = {
        animation: false,
        radar: {
          indicator: [
            { name: 'JavaScript', max: 100 },
            { name: 'React', max: 100 },
            { name: 'Node.js', max: 100 },
            { name: 'Python', max: 100 },
            { name: 'DevOps', max: 100 }
          ]
        },
        series: [{
          type: 'radar',
          data: [{
            value: [90, 85, 75, 80, 70],
            name: 'Skills',
            areaStyle: {
              color: 'rgba(99, 102, 241, 0.2)'
            },
            lineStyle: {
              color: '#6366f1'
            }
          }]
        }]
      };
      chart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-indigo-600">CodeMate</div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-indigo-600 !rounded-button"
              >
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center space-x-2 !rounded-button"
              >
                <img
                  src="https://public.readdy.ai/ai/img_res/55e3659927b2e7f1ea16c0c32c57ec3e.jpg"
                  alt="Profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <i className="fas fa-chevron-down text-gray-600"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16 max-w-7xl mx-auto px-4">
        {/* Profile Header */}
        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="h-48 bg-cover bg-center" style={{
            backgroundImage: `url('https://public.readdy.ai/ai/img_res/2bf4d7c5b93de40b791184df5b0091a7.jpg')`
          }}></div>
          <div className="px-8 pb-8">
            <div className="flex items-end -mt-12">
              <img
                src="https://public.readdy.ai/ai/img_res/7990d1fc320b73b5fe33c8118c5a2cdd.jpg"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />
              <div className="ml-6 pb-4">
                <h1 className="text-2xl font-bold text-gray-900">Alexander Mitchell</h1>
                <p className="text-gray-600">Senior Software Engineer at TechForward</p>
                <div className="flex items-center mt-2 space-x-4">
                  <span className="flex items-center text-green-600">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    Available for mentoring
                  </span>
                  <span className="text-gray-500">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="mt-8 grid grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="col-span-3 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">About Me</h2>
              <p className="text-gray-600 text-sm">
                Passionate software engineer with 8+ years of experience in full-stack development. 
                Specialized in building scalable web applications and mentoring junior developers.
              </p>
              <div className="mt-4">
                <h3 className="font-medium mb-2">Skills Overview</h3>
                <div ref={skillsChartRef} style={{ height: '300px' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-trophy text-indigo-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Top Contributor</h3>
                    <p className="text-sm text-gray-500">February 2025</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-award text-green-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Mentor of the Month</h3>
                    <p className="text-sm text-gray-500">January 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="col-span-6">
            <div className="bg-white rounded-xl shadow-sm">
              <div className="border-b">
                <div className="flex">
                  {['activity', 'projects', 'snippets'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-4 text-sm font-medium whitespace-nowrap !rounded-button ${
                        activeTab === tab
                          ? 'text-indigo-600 border-b-2 border-indigo-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div ref={contributionChartRef} style={{ height: '300px' }}></div>

                <div className="mt-8 space-y-6">
                  {/* Activity Items */}
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-code-branch text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="font-medium">Merged Pull Request</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Implemented new authentication flow in the API service
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-comments text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="font-medium">Code Review Completed</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Reviewed and approved frontend optimization changes
                      </p>
                      <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Current Focus</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Learning Rust</h3>
                    <span className="text-sm text-indigo-600">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">System Design</h3>
                    <span className="text-sm text-indigo-600">60%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-calendar text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Mentoring Session</h3>
                    <p className="text-sm text-gray-500">Tomorrow, 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <i className="fas fa-video text-teal-600"></i>
                  </div>
                  <div>
                    <h3 className="font-medium">Team Code Review</h3>
                    <p className="text-sm text-gray-500">Friday, 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute top-16 right-20 w-80 bg-white rounded-xl shadow-lg border z-50">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            <div className="p-4 hover:bg-gray-50 border-b">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-star text-blue-600 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm">Your project received a new star</p>
                  <p className="text-xs text-gray-500 mt-1">5 minutes ago</p>
                </div>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-50">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <i className="fas fa-check text-green-600 text-sm"></i>
                </div>
                <div>
                  <p className="text-sm">Code review approved</p>
                  <p className="text-xs text-gray-500 mt-1">1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Profile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 w-48 bg-white rounded-xl shadow-lg border z-50">
          <div className="py-2">
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 !rounded-button">
              <i className="fas fa-user mr-2"></i> Profile
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 !rounded-button">
              <i className="fas fa-cog mr-2"></i> Settings
            </button>
            <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 !rounded-button">
              <i className="fas fa-question-circle mr-2"></i> Help
            </button>
            <hr className="my-1" />
            <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 !rounded-button">
              <i className="fas fa-sign-out-alt mr-2"></i> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// end
