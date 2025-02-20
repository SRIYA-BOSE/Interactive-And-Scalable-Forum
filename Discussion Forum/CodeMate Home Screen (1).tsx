// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">CodeMate</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-200">Home</a>
              <a href="#" className="hover:text-blue-200">Discussions</a>
              <a href="#" className="hover:text-blue-200">Ask a Mentor</a>
              <a href="#" className="hover:text-blue-200">Leaderboard</a>
              <button className="px-4 py-2 text-blue-600 bg-white !rounded-button whitespace-nowrap hover:bg-blue-50">Sign In</button>
              <button className="px-4 py-2 text-white bg-blue-800 !rounded-button whitespace-nowrap hover:bg-blue-700">Join Now</button>
            </div>

            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white">
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 px-4 py-2">
            <div className="flex flex-col space-y-2">
              <a href="#" className="py-2 hover:text-blue-200">Home</a>
              <a href="#" className="py-2 hover:text-blue-200">Discussions</a>
              <a href="#" className="py-2 hover:text-blue-200">Ask a Mentor</a>
              <a href="#" className="py-2 hover:text-blue-200">Leaderboard</a>
              <button className="py-2 text-blue-600 bg-white !rounded-button whitespace-nowrap">Sign In</button>
              <button className="py-2 text-white bg-blue-800 !rounded-button whitespace-nowrap">Join Now</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://public.readdy.ai/ai/img_res/b87349f127d5465ee6386f9859e1e90f.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Structured Coding Discussions & Mentorship
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Join our AI-powered platform where developers collaborate, learn, and grow together. Get personalized mentorship and engage in meaningful coding discussions.
            </p>
            
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search topics, discussions, or mentors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 text-gray-700 bg-white !rounded-button border-none text-lg"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <i className="fas fa-search text-gray-400 text-xl" />
              </button>
            </div>
            
            <div className="flex space-x-4">
              <button className="px-8 py-4 bg-blue-600 text-white !rounded-button whitespace-nowrap hover:bg-blue-700">
                Start Learning
              </button>
              <button className="px-8 py-4 bg-white text-blue-600 !rounded-button whitespace-nowrap hover:bg-blue-50">
                Explore Discussions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Why Choose CodeMate?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-comments text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Discussions</h3>
            <p className="text-gray-600">
              Engage in structured, topic-based coding discussions. Share knowledge, ask questions, and learn from peers in a supportive environment.
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-user-graduate text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Mentorship</h3>
            <p className="text-gray-600">
              Get personalized guidance from experienced developers. Book 1-on-1 sessions, code reviews, and career advice from industry experts.
            </p>
          </div>
          
          <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <i className="fas fa-trophy text-blue-600 text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Rewards & Recognition</h3>
            <p className="text-gray-600">
              Earn badges, XP, and climb the leaderboard as you help others. Get recognized for your contributions to the community.
            </p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Success Stories
          </h2>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="max-w-4xl"
          >
            {[
              {
                name: "Sarah Mitchell",
                role: "Frontend Developer at Google",
                image: "https://public.readdy.ai/ai/img_res/db6a217cd7feca1bae348c33b76a0f50.jpg",
                quote: "CodeMate's mentorship program helped me land my dream job. The structured learning path and expert guidance made all the difference."
              },
              {
                name: "James Wilson",
                role: "Senior Software Engineer at Microsoft",
                image: "https://public.readdy.ai/ai/img_res/670c22f20c0983d3fe4456c13ca68fe9.jpg",
                quote: "The community here is incredible. I've learned more from the discussions and code reviews than I did in years of self-study."
              },
              {
                name: "Emily Chang",
                role: "Tech Lead at Netflix",
                image: "https://public.readdy.ai/ai/img_res/748d6a1f7d8b6d10a8a6de02e1638b27.jpg",
                quote: "As a mentor on CodeMate, I've seen countless developers grow and succeed. It's incredibly rewarding to be part of their journey."
              }
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="text-center p-8">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <p className="text-xl text-gray-600 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CodeMate</h3>
              <p className="text-blue-100">
                Empowering developers through structured learning and mentorship.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-100 hover:text-white">Help Center</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-100 hover:text-white">
                  <i className="fab fa-twitter text-xl" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <i className="fab fa-linkedin text-xl" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <i className="fab fa-github text-xl" />
                </a>
                <a href="#" className="text-blue-100 hover:text-white">
                  <i className="fab fa-discord text-xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-500 mt-8 pt-8 text-center text-blue-100">
            © 2025 CodeMate. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
// end
