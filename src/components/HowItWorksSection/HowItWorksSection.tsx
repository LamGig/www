"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative bg-gray-50 overflow-hidden">
      
      <div className="relative py-24 px-6 max-w-4xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100/80 to-blue-200/80 backdrop-blur-sm text-sm font-medium text-blue-700 mb-4">
            ✨ Simple & Streamlined Process
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
            Dealing with digital projects can be complicated, but it doesn't have to be. LamGig makes it easy:
          </p>
        </div>

        {/* Steps container */}
        <div className="relative space-y-8">
          {/* Animated progress line */}
          <div className="absolute left-0 top-12 bottom-12 w-0.5 z-0">
            {/* Background line */}
            <div className="w-full h-full bg-gray-200 rounded-full"></div>
            {/* Animated progress line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 via-blue-500 to-blue-600 rounded-full origin-top"
              style={{ 
                height: lineHeight
              }}
            ></motion.div>
          </div>
            {/* Step 1 */}
            <div className="relative group">
              {/* Step number */}
              <div className="absolute -left-6 top-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                1
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 ml-8 relative overflow-hidden shadow-xl border border-white/40 transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/30 to-blue-200/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-2 left-4 w-16 h-16 bg-gradient-to-tr from-blue-50/40 to-purple-50/40 rounded-full blur-lg"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        Start with a Free Consultation
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <span className="text-xl">🚀</span>
                        </div>
                      </h3>
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
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              {/* Step number */}
              <div className="absolute -left-6 top-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                2
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 ml-8 relative overflow-hidden shadow-xl border border-white/40 transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-2 right-8 w-24 h-24 bg-gradient-to-bl from-purple-100/30 to-blue-100/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-8 w-20 h-20 bg-gradient-to-tr from-blue-50/40 to-blue-50/40 rounded-full blur-lg"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        We Power Your Project
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <span className="text-xl">⚡</span>
                        </div>
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
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              {/* Step number */}
              <div className="absolute -left-6 top-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                3
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 ml-8 relative overflow-hidden shadow-xl border border-white/40 transition-all duration-300">
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-28 h-28 bg-gradient-to-bl from-blue-100/30 to-blue-100/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-2 left-2 w-18 h-18 bg-gradient-to-tr from-blue-50/40 to-blue-50/40 rounded-full blur-lg"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                        Hassle-Free for You
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center">
                          <span className="text-xl">🏗️</span>
                        </div>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};