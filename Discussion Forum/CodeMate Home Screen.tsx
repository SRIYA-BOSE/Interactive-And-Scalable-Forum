// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const App: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const features = [
    {
      title: 'Community Discussions',
      description: 'Engage in structured, topic-based coding discussions with fellow developers.',
      icon: 'fa-comments',
      image: 'https://public.readdy.ai/ai/img_res/dc87d189d31551f57f88b9bd0b64e9bd.jpg'
    },
    {
      title: 'Ask a Mentor',
      description: 'Get direct guidance from experienced developers and industry experts.',
      icon: 'fa-user-graduate',
      image: 'https://public.readdy.ai/ai/img_res/6cec7ba0691448fc242db4d154aaace0.jpg'
    },
    {
      title: 'Gamification & Rewards',
      description: 'Earn badges, XP points and climb the leaderboard as you contribute.',
      icon: 'fa-trophy',
      image: 'https://public.readdy.ai/ai/img_res/37ae8a6b0754a0bd78a2cfbf9582a9ff.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-blue-600 text-white z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <i className="fas fa-code text-2xl" />
            <span className="text-xl font-bold">CodeMate</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-blue-200 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Discussions</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Ask a Mentor</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Leaderboard</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              className="px-4 py-2 text-blue-600 bg-white rounded-button hover:bg-blue-50 transition-colors whitespace-nowrap"
              onClick={() => setShowSignUpModal(true)}
            >
              Sign In
            </button>
            <button 
              className="px-4 py-2 text-white bg-blue-800 rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap"
              onClick={() => setShowSignUpModal(true)}
            >
              Join Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative h-[600px] bg-gradient-to-r from-blue-600 to-blue-800 overflow-hidden">
          <img 
            src="https://public.readdy.ai/ai/img_res/5955d687e4b26fda05795e49be6af6f5.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Hero background"
          />
          
          <div className="relative max-w-7xl mx-auto px-6 pt-20">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Structured Coding Discussions & Mentorship
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Join our AI-powered platform where developers collaborate, learn, and grow together. Get expert guidance and engage in meaningful coding discussions.
              </p>
              
              <div className="relative mb-8">
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-button text-gray-800 text-lg border-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Search topics, discussions, or mentors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <i className={`fas fa-search absolute right-6 top-1/2 -translate-y-1/2 text-lg ${isSearchFocused ? 'text-blue-600' : 'text-gray-400'}`} />
              </div>

              <div className="flex space-x-4">
                <button 
                  className="px-8 py-3 bg-white text-blue-600 rounded-button hover:bg-blue-50 transition-colors text-lg font-semibold whitespace-nowrap"
                  onClick={() => setShowSignUpModal(true)}
                >
                  Sign Up Free
                </button>
                <button className="px-8 py-3 bg-blue-800 text-white rounded-button hover:bg-blue-700 transition-colors text-lg font-semibold whitespace-nowrap">
                  Explore Discussions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Why Choose CodeMate?
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Our platform combines community-driven learning with expert mentorship to help you become a better developer.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <i className={`fas ${feature.icon} text-2xl text-blue-600`} />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-twitter text-xl" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-github text-xl" />
            </a>
            <a href="#" className="hover:text-blue-300 transition-colors">
              <i className="fab fa-linkedin text-xl" />
            </a>
          </div>
          <p className="text-blue-200">© 2025 CodeMate. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Sign Up Modal */}
      {showSignUpModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Join CodeMate</h3>
              <button 
                onClick={() => setShowSignUpModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fas fa-times text-xl" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-button focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button 
                className="w-full py-2 bg-blue-600 text-white rounded-button hover:bg-blue-700 transition-colors whitespace-nowrap"
                onClick={() => setShowSignUpModal(false)}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
// end
