"use client";

export const HowItWorksSection = () => {
  return (
    <section className="relative overflow-hidden">
      
      <div className="relative py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16 items-start">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-lg font-light leading-relaxed">
                Dealing with digital projects can be complicated, but it doesn't have to be. LamGig makes it easy:
              </p>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6">
            {/* Start with a Free Consultation Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Start with a Free Consultation</h3>
                  <ul className="text-lg text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>You tell us what you want.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We'll schedule a free consultation to discuss how we can assist you.</span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>

            {/* We Power Your Project Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    We Power Your Project
                  </h3>
                  <ul className="text-lg text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We assign our vetted talent to your project.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We handle all payroll and legal paperwork with our talent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We manage the project, sending you daily updates on the progress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>We deliver your vision, abstracting all the tedious processes for you.</span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hassle-Free for You Card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Hassle-Free for You
                  </h3>
                  <ul className="text-lg text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>You pay LamGig on a month-to-month basis.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full mt-2 flex-shrink-0"></div>
                      <span>You can focus on your business goals.</span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">🏗️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};