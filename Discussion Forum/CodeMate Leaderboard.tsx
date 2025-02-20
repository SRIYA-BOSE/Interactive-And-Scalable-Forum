// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

interface User {
  rank: number;
  avatar: string;
  username: string;
  points: number;
  badges: number;
  streak: number;
}

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('weekly');
  const [showDropdown, setShowDropdown] = useState(false);
  const [users, setUsers] = useState<User[]>([
    {
      rank: 1,
      avatar: 'https://public.readdy.ai/ai/img_res/2d06791fa8c655ff0e7135375c68cb5a.jpg',
      username: 'Alexander Mitchell',
      points: 15780,
      badges: 42,
      streak: 89
    },
    {
      rank: 2,
      avatar: 'https://public.readdy.ai/ai/img_res/52f399f826f9d0d7b42f4ac3a3256246.jpg',
      username: 'Sarah Chen',
      points: 14920,
      badges: 38,
      streak: 76
    },
    {
      rank: 3,
      avatar: 'https://public.readdy.ai/ai/img_res/786851eb483d19ff17c28929f6568725.jpg',
      username: 'Rahul Patel',
      points: 14350,
      badges: 35,
      streak: 64
    },
  ]);

  const [liveFeed, setLiveFeed] = useState([
    'Emily Parker just earned the Problem Solver badge!',
    'James Wilson moved up to Rank #8',
    'Maria Garcia completed a 30-day streak!',
  ]);

  const pointSystem = [
    { action: 'Answer a Question', points: 10 },
    { action: 'Get Upvoted', points: 5 },
    { action: 'Mentor Help Given', points: 20 },
    { action: 'Daily Login', points: 2 },
    { action: 'Complete Challenge', points: 15 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-indigo-600">CodeMate</h1>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Discussions</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">Ask a Mentor</a>
              <a href="#" className="text-indigo-600 font-semibold">Leaderboard</a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img 
              src="https://public.readdy.ai/ai/img_res/215ddf5040c5b34dd5df3cb10ba3b27a.jpg"
              className="w-10 h-10 rounded-full"
              alt="Profile"
            />
            <span className="text-gray-700">David Anderson</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Top Coders in CodeMate</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Earn points by contributing to discussions, helping peers, and solving challenges. 
              Join our community of exceptional developers!
            </p>
            <div className="max-w-xl mx-auto relative">
              <input
                type="text"
                placeholder="Search by username..."
                className="w-full px-4 py-3 rounded-lg text-gray-800 border-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            </div>
          </div>
        </div>
      </div>

      {/* Time Filter */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="relative inline-block">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="!rounded-button bg-white border border-gray-300 px-4 py-2 flex items-center space-x-2 hover:bg-gray-50"
          >
            <span className="capitalize">{timeFilter}</span>
            <i className="fas fa-chevron-down text-sm"></i>
          </button>
          {showDropdown && (
            <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-lg z-10">
              {['weekly', 'monthly', 'all-time'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    setTimeFilter(filter);
                    setShowDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 capitalize whitespace-nowrap"
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Top 3 Users */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={user.rank}
              className={`bg-white rounded-lg p-6 shadow-lg transform hover:scale-105 transition-transform ${
                index === 0 ? 'border-t-4 border-yellow-400' :
                index === 1 ? 'border-t-4 border-gray-400' :
                'border-t-4 border-orange-400'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <span className={`absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                    index === 0 ? 'bg-yellow-400' :
                    index === 1 ? 'bg-gray-400' :
                    'bg-orange-400'
                  }`}>
                    #{user.rank}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{user.username}</h3>
                <div className="flex items-center space-x-4 text-gray-600">
                  <span><i className="fas fa-star text-yellow-400"></i> {user.points}</span>
                  <span><i className="fas fa-medal text-indigo-400"></i> {user.badges}</span>
                  <span><i className="fas fa-fire text-red-400"></i> {user.streak}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Point System */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">How to Earn Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pointSystem.map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-indigo-600"></i>
                </div>
                <div>
                  <p className="font-medium">{item.action}</p>
                  <p className="text-indigo-600">+{item.points} Points</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Feed */}
      <div className="max-w-7xl mx-auto px-4 mt-8 mb-16">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
          <h3 className="text-xl font-semibold mb-4">Live Updates</h3>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
          >
            {liveFeed.map((update, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center space-x-3 py-2">
                  <i className="fas fa-bell"></i>
                  <p>{update}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">CodeMate</h4>
              <p className="text-gray-400">Empowering developers to learn, grow, and succeed together.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-github text-2xl"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter text-2xl"></i></a>
                <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin text-2xl"></i></a>
              </div>
            </div>
            <div>
              <button className="!rounded-button bg-indigo-600 text-white px-6 py-3 hover:bg-indigo-700 whitespace-nowrap">
                Join Discussions Now
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            © 2025 CodeMate. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
// end
