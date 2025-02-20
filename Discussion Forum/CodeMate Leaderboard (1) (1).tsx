// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('weekly');
  const [showPointsInfo, setShowPointsInfo] = useState(false);

  const users = [
    { rank: 1, name: 'Alexander Mitchell', points: 12850, badges: 47, streak: 85, avatar: 'https://public.readdy.ai/ai/img_res/b439bc3498bc49b2266b4cfa9d242a87.jpg' },
    { rank: 2, name: 'Emily Richardson', points: 11920, badges: 42, streak: 73, avatar: 'https://public.readdy.ai/ai/img_res/874936bce40acb27fa3c5414f40dcd56.jpg' },
    { rank: 3, name: 'James Anderson', points: 10750, badges: 38, streak: 64, avatar: 'https://public.readdy.ai/ai/img_res/d4c436e5b4f0e0d26f076afce00b293a.jpg' },
  ];

  const otherUsers = [
    { rank: 4, name: 'Sarah Thompson', points: 9840, badges: 35, streak: 58, avatar: 'https://public.readdy.ai/ai/img_res/673a799300770720eeb713a06f5949dd.jpg' },
    { rank: 5, name: 'Michael Chen', points: 9250, badges: 33, streak: 52, avatar: 'https://public.readdy.ai/ai/img_res/d42bf52f4a953b936debdc6d3398f115.jpg' },
  ];

  useEffect(() => {
    const chartDom = document.getElementById('pointsChart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        title: {
          text: 'Points Distribution',
          left: 'center'
        },
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
          data: [820, 932, 901, 934, 1290, 1330, 1520],
          type: 'line',
          smooth: true,
          color: '#6366f1'
        }]
      };
      myChart.setOption(option);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-indigo-600">CodeMate</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Discussions</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Ask a Mentor</a>
              <a href="#" className="text-indigo-600 font-medium">Leaderboard</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="!rounded-button whitespace-nowrap flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 border border-gray-300 hover:bg-gray-50">
              <i className="fas fa-user"></i>
              <span>John Developer</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Top Coders in CodeMate</h2>
          <p className="text-lg mb-8 opacity-90">Earn points by contributing to discussions, helping peers, and solving challenges.</p>
          
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative flex-1 max-w-xl">
              <input
                type="text"
                placeholder="Search by username..."
                className="w-full px-4 py-3 pl-12 rounded-lg border-none text-gray-900"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
            
            <div className="flex space-x-2">
              {['weekly', 'monthly', 'all-time'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTimeFilter(filter)}
                  className={`!rounded-button whitespace-nowrap px-4 py-2 ${
                    timeFilter === filter
                      ? 'bg-white text-indigo-600'
                      : 'bg-indigo-700 text-white'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Users */}
      <div className="max-w-7xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user.rank}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-2xl font-bold ${
                      user.rank === 1 ? 'text-yellow-500' :
                      user.rank === 2 ? 'text-gray-400' :
                      'text-amber-600'
                    }`}>
                      #{user.rank}
                    </span>
                    <h3 className="text-lg font-semibold">{user.name}</h3>
                  </div>
                  <div className="mt-2 text-gray-600">
                    <span className="mr-4"><i className="fas fa-star text-yellow-500"></i> {user.points} pts</span>
                    <span className="mr-4"><i className="fas fa-medal text-indigo-500"></i> {user.badges}</span>
                    <span><i className="fas fa-fire text-red-500"></i> {user.streak} days</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Badges</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Streak</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {otherUsers.map((user) => (
                <tr key={user.rank} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-gray-900 font-medium">#{user.rank}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img className="h-10 w-10 rounded-full" src={user.avatar} alt="" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.points}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.badges}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{user.streak} days</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Points System */}
      <div className="max-w-7xl mx-auto px-4 mt-12 mb-16">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-start">
            <div className="w-1/2">
              <h3 className="text-xl font-bold mb-4">Points System</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Answer a Question: +10 Points</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-arrow-up text-blue-500"></i>
                  <span>Get Upvoted: +5 Points</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-hands-helping text-purple-500"></i>
                  <span>Mentor Help Given: +20 Points</span>
                </div>
              </div>
              <button
                onClick={() => setShowPointsInfo(!showPointsInfo)}
                className="!rounded-button whitespace-nowrap mt-4 bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
              >
                Learn More About Points
              </button>
            </div>
            <div className="w-1/2">
              <div id="pointsChart" style={{ height: '300px' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">CodeMate</h4>
              <p className="text-gray-400">Empowering developers to learn, grow, and succeed together.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github text-xl"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter text-xl"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin text-xl"></i></a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Join the Community</h4>
              <button className="!rounded-button whitespace-nowrap bg-indigo-600 text-white px-6 py-2 hover:bg-indigo-700">
                Start Coding Now
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2025 CodeMate. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Points Info Modal */}
      {showPointsInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">How to Earn Points</h3>
            <div className="space-y-4">
              <p className="text-gray-600">Detailed breakdown of our points system and how you can climb the ranks:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  <span>Answer Questions: +10 points per accepted answer</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-arrow-up text-blue-500"></i>
                  <span>Receive Upvotes: +5 points per upvote</span>
                </li>
                <li className="flex items-center space-x-2">
                  <i className="fas fa-hands-helping text-purple-500"></i>
                  <span>Mentor Others: +20 points per mentoring session</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => setShowPointsInfo(false)}
              className="!rounded-button whitespace-nowrap mt-6 bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// end
