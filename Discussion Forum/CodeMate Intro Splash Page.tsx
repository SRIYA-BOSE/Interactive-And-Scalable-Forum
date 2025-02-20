// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
// start
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import * as echarts from 'echarts';

const App: React.FC = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const statsChartRef = useRef<HTMLDivElement>(null);
  
  const phrases = ['Code.', 'Learn.', 'Grow.'];
  const testimonials = [
    {
      name: 'Emily Richardson',
      role: 'Senior Software Engineer at Google',
      avatar: 'https://public.readdy.ai/ai/img_res/df220ec62af9d2dde196b67701cce533.jpg',
      quote: 'CodeMate transformed my coding journey. The AI assistance and mentorship are game-changers!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Tech Lead at Microsoft',
      avatar: 'https://public.readdy.ai/ai/img_res/0361a0b16415a5a718c07efd6621912f.jpg',
      quote: 'The collaborative features and real-time mentoring have accelerated my team\'s growth exponentially.',
      rating: 5,
    },
    {
      name: 'Sarah Anderson',
      role: 'Full Stack Developer',
      avatar: 'https://public.readdy.ai/ai/img_res/ec607b1c065ee3f9c70df3aba42564d9.jpg',
      quote: 'From beginner to professional, CodeMate has been my trusted companion throughout my coding career.',
      rating: 5,
    },
  ];

  useEffect(() => {
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && currentCharIndex <= currentPhrase.length) {
        setTypewriterText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex++;
      } else if (isDeleting && currentCharIndex >= 0) {
        setTypewriterText(currentPhrase.substring(0, currentCharIndex));
        currentCharIndex--;
      }

      if (currentCharIndex === currentPhrase.length + 1) {
        setTimeout(() => {
          isDeleting = true;
        }, 1000);
      }

      if (currentCharIndex === 0 && isDeleting) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }

      const timeout = isDeleting ? 100 : 200;
      setTimeout(typeWriter, timeout);
    };

    typeWriter();
  }, []);

  useEffect(() => {
    if (statsChartRef.current) {
      const chart = echarts.init(statsChartRef.current);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          axisLabel: {
            color: '#666',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#666',
          },
        },
        series: [
          {
            name: 'Active Users',
            type: 'line',
            data: [3000, 4500, 5800, 7200, 8900, 10000],
            smooth: true,
            lineStyle: {
              color: '#6366f1',
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(99, 102, 241, 0.3)' },
                { offset: 1, color: 'rgba(99, 102, 241, 0.1)' },
              ]),
            },
          },
        ],
      };
      chart.setOption(option);

      return () => {
        chart.dispose();
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://public.readdy.ai/ai/img_res/9f9049ccc826cf37e7eb7c2ce4696f72.jpg"
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-transparent">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Where AI Meets Human Excellence in Coding
              </h1>
              <div className="text-3xl font-semibold mb-8 h-12">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </div>
              <p className="text-xl mb-10 text-gray-100">
                Join our community of passionate developers. Get personalized AI assistance,
                expert mentorship, and collaborative learning experiences.
              </p>
              <div className="flex gap-4 items-center">
                <button 
                  onClick={() => setIsSignUpOpen(true)}
                  className="!rounded-button bg-white text-indigo-600 px-8 py-3 font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Get Started Free
                </button>
                <button className="!rounded-button border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors whitespace-nowrap">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Why Choose CodeMate?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'fa-solid fa-robot',
                title: 'AI-Powered Assistance',
                description: 'Get instant help with coding problems through our advanced AI system',
              },
              {
                icon: 'fa-solid fa-chalkboard-teacher',
                title: '1-on-1 Mentorship',
                description: 'Connect with industry experts for personalized guidance',
              },
              {
                icon: 'fa-solid fa-trophy',
                title: 'Gamified Learning',
                description: 'Learn while competing and earning rewards',
              },
              {
                icon: 'fa-solid fa-code-branch',
                title: 'Collaborative Coding',
                description: 'Work together with peers on real projects',
              },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <i className={`${feature.icon} text-4xl text-indigo-600 mb-6`}></i>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">
                Growing Faster Every Day
              </h2>
              <div className="grid grid-cols-2 gap-8 mb-8">
                {[
                  { number: '100,000+', label: 'Active Users' },
                  { number: '5,000+', label: 'Expert Mentors' },
                  { number: '1M+', label: 'Code Solutions' },
                  { number: '98%', label: 'Satisfaction Rate' },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div ref={statsChartRef} className="h-[400px] w-full" />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What Our Community Says
          </h2>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Start Your Coding Journey Today
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are already experiencing the future of coding education.
          </p>
          <button 
            onClick={() => setIsSignUpOpen(true)}
            className="!rounded-button bg-white text-indigo-600 px-12 py-4 font-semibold text-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Get Started Free
          </button>
        </div>
      </div>

      {/* Sign Up Modal */}
      {isSignUpOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Create Account</h3>
              <button 
                onClick={() => setIsSignUpOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <i className="fa-solid fa-times text-xl"></i>
              </button>
            </div>
            <div className="space-y-4">
              <button className="!rounded-button w-full py-3 px-4 border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap">
                <i className="fa-brands fa-github text-xl"></i>
                Continue with GitHub
              </button>
              <button className="!rounded-button w-full py-3 px-4 border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors whitespace-nowrap">
                <i className="fa-brands fa-google text-xl"></i>
                Continue with Google
              </button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button className="!rounded-button w-full bg-indigo-600 text-white py-3 px-4 font-semibold hover:bg-indigo-700 transition-colors whitespace-nowrap">
                Sign up with email
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
