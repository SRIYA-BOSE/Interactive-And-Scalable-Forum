// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [codeContent, setCodeContent] = useState('// Write your code here...');
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      user: 'Sarah Mitchell',
      avatar: 'https://public.readdy.ai/ai/img_res/00f293169aa72ea1ac6808bff4592181.jpg',
      content: 'Great implementation! Have you considered using async/await here?',
      votes: 12,
      isMentor: true,
    },
    {
      id: 2,
      user: 'James Wilson',
      avatar: 'https://public.readdy.ai/ai/img_res/11f7a3159b73acb6e01d9b8bdffbe7f4.jpg',
      content: 'This solution is very efficient. I especially like the error handling.',
      votes: 8,
      isMentor: false,
    }
  ]);

  const languages = [
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'java', name: 'Java' },
    { id: 'cpp', name: 'C++' },
  ];

  const trendingSnippets = [
    {
      id: 1,
      title: 'Async Data Fetching Pattern',
      language: 'JavaScript',
      likes: 234,
      author: 'Emily Chen',
    },
    {
      id: 2,
      title: 'Efficient Sorting Algorithm',
      language: 'Python',
      likes: 189,
      author: 'Michael Brown',
    },
    {
      id: 3,
      title: 'React Custom Hooks',
      language: 'TypeScript',
      likes: 156,
      author: 'David Smith',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm h-16 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-2xl font-bold text-indigo-600">CodeMate</div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search code snippets..."
                className="w-96 h-10 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-indigo-500"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-800">
              <i className="fas fa-bell text-xl"></i>
            </button>
            <button 
              className="!rounded-button bg-indigo-600 text-white px-4 py-2 flex items-center gap-2 hover:bg-indigo-700"
              onClick={() => setIsDarkMode(!isDarkMode)}
            >
              <i className={`fas fa-${isDarkMode ? 'sun' : 'moon'}`}></i>
              {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
            <div className="flex items-center gap-2">
              <img
                src="https://public.readdy.ai/ai/img_res/8ed5885358a32b9bfaa8345bf233ab09.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <i className="fas fa-chevron-down text-gray-600"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12 max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 mb-8 text-white">
          <h1 className="text-4xl font-bold mb-4">Share Your Code, Get Feedback, Collaborate!</h1>
          <p className="text-lg opacity-90 mb-6">Join our community of developers to share code, receive feedback, and grow together.</p>
        </div>

        {/* Code Editor Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="border border-gray-200 rounded-lg px-4 py-2"
              >
                {languages.map(lang => (
                  <option key={lang.id} value={lang.id}>{lang.name}</option>
                ))}
              </select>
              <button className="!rounded-button bg-green-500 text-white px-4 py-2 flex items-center gap-2 hover:bg-green-600">
                <i className="fas fa-magic"></i>
                AI Format
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button 
                className="!rounded-button bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200"
                onClick={() => setIsFullScreen(!isFullScreen)}
              >
                <i className={`fas fa-${isFullScreen ? 'compress' : 'expand'}`}></i>
              </button>
              <button className="!rounded-button bg-gray-100 px-4 py-2 text-gray-600 hover:bg-gray-200">
                <i className="fas fa-copy"></i>
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-white">
            <textarea
              value={codeContent}
              onChange={(e) => setCodeContent(e.target.value)}
              className="w-full bg-transparent border-none resize-none focus:outline-none h-64"
            />
          </div>

          <textarea
            placeholder="Add description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full mt-4 p-4 border border-gray-200 rounded-lg resize-none h-32 focus:outline-none focus:border-indigo-500"
          />

          <div className="flex justify-end mt-4 gap-4">
            <button className="!rounded-button bg-gray-100 px-6 py-2 text-gray-600 hover:bg-gray-200">
              <i className="fas fa-upload mr-2"></i>
              Upload File
            </button>
            <button className="!rounded-button bg-indigo-600 text-white px-6 py-2 hover:bg-indigo-700">
              <i className="fas fa-share mr-2"></i>
              Share
            </button>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Discussion</h2>
          
          <div className="mb-6">
            <textarea
              placeholder="Add your comment..."
              className="w-full p-4 border border-gray-200 rounded-lg resize-none h-32 focus:outline-none focus:border-indigo-500"
            />
            <div className="flex justify-end mt-2">
              <button className="!rounded-button bg-indigo-600 text-white px-6 py-2 hover:bg-indigo-700">
                Comment
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {comments.map(comment => (
              <div key={comment.id} className="flex gap-4">
                <img
                  src={comment.avatar}
                  alt={comment.user}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{comment.user}</span>
                    {comment.isMentor && (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                        Mentor
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{comment.content}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1">
                      <i className="fas fa-arrow-up"></i>
                      {comment.votes}
                    </button>
                    <button>Reply</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Snippets */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold mb-6">Trending Snippets</h2>
          <div className="grid grid-cols-3 gap-6">
            {trendingSnippets.map(snippet => (
              <div key={snippet.id} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold mb-2">{snippet.title}</h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{snippet.language}</span>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-heart text-red-500"></i>
                    {snippet.likes}
                  </div>
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  by {snippet.author}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
// end
