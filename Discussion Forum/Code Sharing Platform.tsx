// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [codeContent, setCodeContent] = useState('');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, content: 'James Wilson commented on your code', time: '2 min ago' },
    { id: 2, content: 'New solution suggested by Sarah Parker', time: '5 min ago' },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'Emily Thompson',
      content: 'Great optimization approach! Have you considered using memoization here?',
      votes: 12,
      isMentor: true,
      time: '1 hour ago'
    },
    {
      id: 2,
      author: 'Michael Chen',
      content: 'The recursive solution is elegant, but might cause stack overflow with large inputs.',
      votes: 8,
      isMentor: false,
      time: '2 hours ago'
    }
  ]);

  const [trendingSnippets] = useState([
    {
      id: 1,
      title: 'React Custom Hook for API Calls',
      author: 'Alexander Wright',
      language: 'TypeScript',
      likes: 234,
      image: 'https://public.readdy.ai/ai/img_res/1dfe5158acd0757b1a401d67bfa94fa4.jpg'
    },
    {
      id: 2,
      title: 'Efficient Array Sorting Algorithm',
      author: 'Sophie Anderson',
      language: 'Python',
      likes: 189,
      image: 'https://public.readdy.ai/ai/img_res/3714d6009e90abf087e598c9be516644.jpg'
    }
  ]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleAIPanel = () => {
    setShowAIPanel(!showAIPanel);
  };

  const handleVote = (commentId: number, increment: boolean) => {
    setComments(comments.map(comment => {
      if (comment.id === commentId) {
        return {
          ...comment,
          votes: comment.votes + (increment ? 1 : -1)
        };
      }
      return comment;
    }));
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50 h-16">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-full">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-blue-600">CodeMate</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search code snippets..."
                className="w-96 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm"
              />
              <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-blue-600">Explore</button>
            <button className="text-gray-600 hover:text-blue-600">Community</button>
            <div className="relative">
              <button onClick={toggleNotifications} className="text-gray-600 hover:text-blue-600">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Notifications</h3>
                    {notifications.map(notification => (
                      <div key={notification.id} className="py-2 border-b border-gray-100">
                        <p className="text-sm">{notification.content}</p>
                        <span className="text-xs text-gray-500">{notification.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <img
                src="https://public.readdy.ai/ai/img_res/0ee0ad3682a94d7dfcaba81e12b5e527.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium">David Mitchell</span>
            </div>
            
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-6">Share Your Code, Get Feedback, Collaborate!</h1>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                  
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 !rounded-button whitespace-nowrap">
                      <i className="fas fa-magic mr-2"></i>AI Format
                    </button>
                    <button
                      onClick={() => setIsFullScreen(!isFullScreen)}
                      className="p-2 rounded-lg hover:bg-gray-200 !rounded-button whitespace-nowrap"
                    >
                      <i className={`fas ${isFullScreen ? 'fa-compress' : 'fa-expand'}`}></i>
                    </button>
                  </div>
                </div>
                
                <textarea
                  value={codeContent}
                  onChange={(e) => setCodeContent(e.target.value)}
                  className="w-full h-64 font-mono text-sm p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500"
                  placeholder="Paste your code here..."
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 !rounded-button whitespace-nowrap">
                  <i className="fas fa-share mr-2"></i>Share Code
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 !rounded-button whitespace-nowrap">
                  <i className="fas fa-upload mr-2"></i>Upload File
                </button>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">AI Assistant</h3>
                <div className="space-y-4">
                  <button className="w-full px-4 py-3 text-left border border-gray-200 rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-bug mr-2 text-red-500"></i>
                    Debug Code
                  </button>
                  <button className="w-full px-4 py-3 text-left border border-gray-200 rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-lightbulb mr-2 text-yellow-500"></i>
                    Suggest Improvements
                  </button>
                  <button className="w-full px-4 py-3 text-left border border-gray-200 rounded-lg hover:bg-gray-100 !rounded-button whitespace-nowrap">
                    <i className="fas fa-book mr-2 text-blue-500"></i>
                    Explain Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Discussion</h2>
          <div className="space-y-6">
            {comments.map(comment => (
              <div key={comment.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center space-y-2">
                      <button
                        onClick={() => handleVote(comment.id, true)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        <i className="fas fa-chevron-up"></i>
                      </button>
                      <span className="font-medium">{comment.votes}</span>
                      <button
                        onClick={() => handleVote(comment.id, false)}
                        className="text-gray-400 hover:text-blue-500"
                      >
                        <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-medium">{comment.author}</span>
                        {comment.isMentor && (
                          <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">Mentor</span>
                        )}
                        <span className="text-sm text-gray-500">{comment.time}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trending Snippets */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Trending Code Snippets</h2>
          <div className="grid grid-cols-2 gap-6">
            {trendingSnippets.map(snippet => (
              <div key={snippet.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={snippet.image}
                  alt={snippet.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{snippet.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{snippet.author}</span>
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {snippet.language}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <i className="fas fa-heart text-red-500"></i>
                      <span className="text-sm">{snippet.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
// end
