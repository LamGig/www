"use client";

export const HowItWorksSection = () => {
  return (
    <section className="bg-gray-100">
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                How It Works
              </h2>
              <p className="text-xl text-black/80 mb-8 max-w-lg">
                Dealing with digital projects can be complicated, but it doesn't have to be. LamGig makes it easy:
              </p>
            </div>
          </div>

          {/* Right side - Feature cards */}
          <div className="space-y-6">
            {/* Start with a Free Consultation Card */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-4">Start with a Free Consultation</h3>
                  <ul className="text-lg text-black/80 max-w-lg space-y-2 list-none">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>You tell us what you want.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>We'll schedule a free consultation to discuss how we can assist you.</span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                </div>
              </div>
            </div>

            {/* We Power Your Project Card */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    We Power Your Project
                  </h3>
                  <ul className="text-lg text-black/80 max-w-lg space-y-2 list-none">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>We assign our vetted talent to your project.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>We handle all payroll and legal paperwork with our talent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>We manage the project, sending you daily updates on the progress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>We deliver your vision, abstracting all the tedious processes for you.</span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hassle-Free for You Card */}
            <div className="bg-white rounded-2xl p-8 relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-2">
                    Hassle-Free for You
                  </h3>
                  <ul className="text-xl text-black/80 max-w-lg space-y-2 list-none">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>You pay LamGig on a month-to-month basis.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 text-xl font-bold">•</span>
                      <span>You can focus on your business goals.</span>
                    </li>
                  </ul>
                </div>
                <div className="ml-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
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