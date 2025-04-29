import React from 'react';

const Viranova: React.FC = () => {
  React.useEffect(() => {
    document.title = "Viranova | AI-Powered Content Extraction";
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Simple Header without animations */}
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
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Viranova
          </h1>
          
          <p className="text-xl text-gray-300">
            AI-Powered Content Extraction Platform
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {["AI", "Machine Learning", "Video Processing", "Python", "React", "Kubernetes", "AWS"].map((tag, i) => (
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
      
      {/* Main content with consistent width */}
      <main className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero image */}
          <div className="mb-16 relative mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800 max-w-5xl aspect-video">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-blue-900/40 mix-blend-overlay" />
            <img
              src="https://via.placeholder.com/1200x600"
              alt="Viranova Platform"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content sections with consistent max-width */}
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                The Journey Begins
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  While working at Palantir in 2022, I noticed a significant trend in content creation: "clipping content." 
                  This involved taking YouTube videos and converting them into short-form content. 
                  I managed to gather about 50 customers and agencies that offered this service and worked closely with them to understand their process.
                </p>
                
                <p>
                  These creators would meticulously scan videos for entertaining segments, note them down, 
                  trim the videos, add subtitles, and then post them to platforms like TikTok, often gaining millions of views. 
                  I recognized the potential to significantly reduce this time-intensive process using AI technology.
                </p>

                <p>
                  This insight led me to leave Palantir and complete my master's at Imperial College London, 
                  focusing my thesis on this specific challenge. Viranova was born from this vision.
                </p>
              </div>
            </section>
            
            {/* Technical Challenge Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Technical Challenges & Innovation
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  One of the most significant technical challenges was handling long video duration. 
                  With my remaining users working primarily with podcasts, I needed a solution that could efficiently 
                  process extended content, as most models weren't designed for such long durations.
                </p>
                
                <p>
                  I developed a novel "topical cohesion method" that could cluster adjacent topics by performing 
                  cosine similarity analysis to determine when podcasts and videos changed topics. 
                  This innovation effectively reduced the problem size and made the content more manageable.
                </p>
                
                <div className="my-12 bg-gray-800/50 p-8 rounded-xl border border-gray-700 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Technical Achievements</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Developed a topical cohesion method using cosine similarity to identify content topic changes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Fine-tuned a large language model to identify high-quality short-form video potential</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Created vector representations of videos using DINO (visual) and BERT (textual) for content matching</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Built an agentic workflow for transcript editing and content cohesion</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Implemented serverless GPU solutions on Beam cloud for spatial saliency evaluation</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  I fine-tuned a large language model to determine what constituted good short-form videos 
                  from a dataset I built by pairing shorts with their corresponding long-form video. 
                  Using both visual cues (DINO) and textual cues (BERT), I created vector representations of 
                  videos regardless of length and mapped them together.
                </p>
                
                <p>
                  This process allowed me to construct a model capable of determining the source video of a 
                  short from a long-form video, essentially creating a roadmap for generating engaging short-form content.
                </p>
              </div>
              
              {/* Placeholder for technical diagram */}
              <div className="mt-8 p-8 border border-dashed border-gray-600 rounded-xl text-center">
                <p className="text-gray-400 italic">Technical Diagram Coming Soon</p>
                <p className="text-sm text-gray-500">Visualizing the topical cohesion method and content mapping process</p>
              </div>
            </section>
            
            {/* Business Challenges Section */}
            <section className="mb-20">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Market Challenges & Pivots
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  In November, TikTok introduced a new copyright ban that devastated our user base. 
                  My client roster plummeted from 60 to just 2 almost overnight, which came as a shock. 
                  This massive challenge effectively eliminated most of my beta testers, and the few that 
                  remained lacked the experience to provide valuable feedback.
                </p>
                
                <p>
                  I was suddenly forced to pivot from a consumer-focused product to an enterprise solution 
                  targeting larger corporations. This pivot required substantial changes to the product vision 
                  and development roadmap.
                </p>
                
                <div className="my-8 flex items-center justify-center">
                  <div className="w-full max-w-2xl bg-gray-800/30 rounded-xl overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-red-500 to-amber-500"></div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold mb-4 text-red-400">Critical Business Challenges</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>TikTok copyright policy changes decimated the customer base</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>Forced pivot from consumer to enterprise solution</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>High infrastructure costs (~£400/month) with minimal active users</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>Security concerns with K8s deployment just before deadline</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                          <span>New competitor (Opus Clips) gained significant market traction</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p>
                  The infrastructure challenges were substantial. I started using Kubernetes (K8s) to deploy 
                  the backend with three separate clusters and load balancers. However, with almost no active users, 
                  costs were around £400 per month—clearly unsustainable for a startup with no revenue.
                </p>
                
                <p>
                  Additionally, just before my academic deadline, I discovered someone was attempting to attack 
                  my servers. This forced me to migrate to API Gateway and Lambda functions, which brought its own 
                  set of challenges due to my use of Flask. In hindsight, I should have used EC2 with Celery, but 
                  such is the nature of startup development—learning as you go.
                </p>
              </div>
            </section>
            
            {/* Lessons Learned Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Lessons & Reflections
              </h2>
              
              <div className="prose prose-invert prose-lg max-w-none">
                <p>
                  After about five months of intensive development, a new product called Opus Clips gained 
                  significant traction and quickly dominated the market. There was little room for competition, 
                  and they had effectively suffocated my product's growth potential.
                </p>
                
                <p>
                  When I approached venture capitalists with my idea, they were understandably skeptical about 
                  investing in a product competing with such a well-established incumbent. In a desperate attempt 
                  to keep customers satisfied, I continually added features until the product became overly complex and cluttered.
                </p>
                
                <p>
                  This feature bloat became my next significant challenge. The constant additions led to regular 
                  bugs and instability, causing high churn rates. New potential customers were intimidated by the 
                  product's complexity, leading to an unfortunately slow decline.
                </p>
                
                <div className="my-12 bg-gradient-to-br from-gray-800/30 to-gray-900/30 p-8 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Takeaways</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Market Timing is Crucial</h4>
                      <p className="text-gray-300">Entering a market just as regulation changes or a dominant competitor emerges can be devastating for a startup.</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Feature Discipline</h4>
                      <p className="text-gray-300">Adding features to please customers without strategic direction leads to product bloat and technical debt.</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Infrastructure Right-Sizing</h4>
                      <p className="text-gray-300">Match your infrastructure to your current needs, not your aspirations. Start simple and scale as needed.</p>
                    </div>
                    <div className="bg-gray-800/40 p-5 rounded-lg">
                      <h4 className="text-lg font-medium mb-2 text-purple-400">Pivot with Purpose</h4>
                      <p className="text-gray-300">When forced to pivot, take time to reassess the market and product-market fit rather than rushing to solutions.</p>
                    </div>
                  </div>
                </div>
                
                <p>
                  Despite the challenges and ultimate outcome, this journey provided invaluable experience in product 
                  development, machine learning implementation, and startup management. The technical innovations created 
                  for Viranova—particularly the topical cohesion method and the fine-tuned content evaluation models—remain 
                  significant achievements with potential applications in other contexts.
                </p>
                
                <p>
                  This experience has shaped my approach to future projects, emphasizing the importance of adaptability, 
                  infrastructure optimization, and maintaining product focus even in the face of market pressures.
                </p>
              </div>
              
              {/* Placeholder for future UX flow diagram */}
              <div className="mt-8 p-8 border border-dashed border-gray-600 rounded-xl text-center">
                <p className="text-gray-400 italic">Product Evolution Diagram Coming Soon</p>
                <p className="text-sm text-gray-500">Visualizing how the product changed over time in response to market conditions</p>
              </div>
            </section>
            
            {/* CTA Section */}
            <section className="text-center mt-16 pt-16 border-t border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Interested in learning more?</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://www.viranova.io" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium inline-flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Visit Viranova
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <a 
                  href="/#contact" 
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-full text-white font-medium inline-flex items-center gap-2 transition-colors"
                >
                  <span>Contact Me</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Viranova; 