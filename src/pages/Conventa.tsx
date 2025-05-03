import React from 'react';

const Conventa: React.FC = () => {
  React.useEffect(() => {
    document.title = "Conventa | Psychology Skills Learning Platform";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="py-10 bg-gray-900 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <a 
            href="/#projects" 
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 bg-gray-800 rounded-full text-gray-300 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Projects</span>
          </a>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Conventa
          </h1>
          
          <p className="text-xl text-gray-300">
            Duolingo meets Psychology Books
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Firebase", "PWA", "Figma", "User Research", "Mobile First"].map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero image */}
          <div className="mb-16 relative mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800 max-w-5xl aspect-video bg-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-pink-900/40 mix-blend-overlay" />
            <img
              src="/src/assets/conventa/landing-page.png"
              alt="Conventa Platform"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Content sections */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                The Genesis of Conventa
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  During my time at Palantir, I realized there was a significant gap in the market for teaching 
                  essential soft skills that had helped me succeed professionally. While traditional business courses 
                  existed, they were often time-consuming and provided a poor user experience, typically requiring 
                  over an hour per lesson.
                </p>
                
                <p>
                  Conventa was born from the vision of creating a more accessible and engaging way to learn these 
                  crucial skills. Inspired by the success of book summarization apps and the gamification approach 
                  of platforms like Duolingo, I set out to create a mobile-first learning platform that would make 
                  psychology and soft skills education more digestible and enjoyable.
                </p>
              </div>
            </section>
            
            {/* Product Gallery */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Product Screenshots
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-800">
                  <img
                    src="/src/assets/conventa/dashboard.png"
                    alt="Conventa Dashboard"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">Interactive Dashboard</h3>
                    <p className="text-gray-300">Track your learning progress and access lessons</p>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-800 bg-gray-800">
                  <img
                    src="/src/assets/conventa/login.png"
                    alt="Conventa Login"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">Seamless Authentication</h3>
                    <p className="text-gray-300">Quick access to your learning journey</p>
                  </div>
                </div>
                
                <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-800 md:col-span-2 bg-gray-800">
                  <img
                    src="/src/assets/conventa/about-us.png"
                    alt="Conventa About"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-semibold text-white">About Conventa</h3>
                    <p className="text-gray-300">Learn about our mission and approach to education</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Technical Development */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Technical Development Journey
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  This project marked a significant milestone in my development journey. Unlike previous projects 
                  that were rushed or incomplete, Conventa was the first product where I truly understood the code 
                  I was writing. It represented a shift from relying on Stack Overflow answers to building with 
                  purpose and understanding.
                </p>
                
                <div className="my-12 bg-gray-800/50 p-8 rounded-xl border border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Technical Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Mastered React fundamentals including state management, effects, and component lifecycle</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Implemented Progressive Web App (PWA) features for offline access and notifications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Developed a mobile-first design approach with responsive layouts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Integrated Firebase for backend functionality and data persistence</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  The development process began with learning Figma to create proper designs and user journeys, 
                  a significant improvement from my previous approach of jumping straight into coding. This 
                  helped me better compose the different elements of the application and create a more cohesive 
                  user experience.
                </p>
              </div>
            </section>
            
            {/* User Research & Feedback */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                User Research & Feedback
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  Taking learnings from Palantir, I implemented a robust user feedback cycle. This was my first 
                  experience with formal user interviews, and while initially challenging, it proved invaluable 
                  for product development.
                </p>
                
                <div className="my-8 flex items-center justify-center">
                  <div className="w-full max-w-2xl bg-gray-800/30 rounded-xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-4 text-purple-400">Key User Insights</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>Users preferred learning during commutes (tube rides)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>Offline access was crucial for mobile learning</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>Push notifications helped maintain engagement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p>
                  The initial user interviews were challenging, with bugs and issues causing some embarrassment. 
                  However, I learned that constructive criticism is more valuable than positive feedback alone. 
                  This experience helped me develop thicker skin and a more objective approach to product development.
                </p>
              </div>
            </section>
            
            {/* Lessons Learned */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Lessons & Reflections
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  While Conventa never reached the market, it served as a crucial learning experience. The project 
                  helped me develop essential skills in frontend development, design, and user research. It also 
                  taught me the importance of proper planning and user feedback in product development.
                </p>
                
                <div className="my-12 bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-purple-400">Key Takeaways</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Design First, Code Second</h4>
                      <p className="text-gray-300">Learning Figma and proper design processes significantly improved the development workflow.</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">User Feedback is Gold</h4>
                      <p className="text-gray-300">Constructive criticism, while initially challenging, is essential for product improvement.</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Mobile-First Mindset</h4>
                      <p className="text-gray-300">Understanding user context (commuting) led to better product decisions.</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Technical Growth</h4>
                      <p className="text-gray-300">This project marked a significant step in understanding and implementing React concepts properly.</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  The experience with Conventa laid the foundation for my future projects, teaching me the importance 
                  of proper planning, user research, and technical implementation. While the product didn't reach the 
                  market, the skills and lessons learned were invaluable for my professional growth.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Conventa; 