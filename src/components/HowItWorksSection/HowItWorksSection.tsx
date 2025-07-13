"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, CheckCircle, Sparkles } from "lucide-react";

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0", "end 0.1"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="relative py-24 px-6 max-w-4xl mx-auto bg-white">
      {/* Header section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white mb-4">
          {/* <Sparkles className="w-4 h-4 mr-2" /> */}
          Simple & Streamlined Process
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
          How It Works
        </h2>
        <p className="text-xl text-black font-light leading-relaxed max-w-2xl mx-auto">
          Dealing with digital projects can be complicated, but it doesn't have to be. LamGig makes it easy:
        </p>
      </div>

      {/* Steps container */}
      <div className="relative space-y-8">
        {/* Animated progress line */}
        <div className="absolute left-0 top-8 w-0.5 z-0" style={{ height: 'calc(100% - 10rem)' }}>
          {/* Background line */}
          <div className="w-full h-full bg-black/20 rounded-full"></div>
          {/* Animated progress line */}
          <motion.div 
            className="absolute top-0 left-0 w-full bg-black rounded-full origin-top"
            style={{ 
              height: lineHeight
            }}
          ></motion.div>
        </div>

          {/* Step 1 */}
          <div className="relative group">
            {/* Step number */}
            <div className="absolute -left-6 top-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
              1
            </div>
            
            <div className="bg-white rounded-2xl p-8 ml-8 relative overflow-hidden border border-black/20 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1">
                        <div className="flex flex-col sm:hidden mb-4">
                          <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                            <Rocket className="w-6 h-6 text-black" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-black mb-4">
                          Start with a Free Consultation
                        </h3>
                      </div>
                      <div className="hidden sm:block sm:ml-6">
                        <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                          <Rocket className="w-6 h-6 text-black" />
                        </div>
                      </div>
                    </div>
                    <ul className="text-lg text-black space-y-3 list-none">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>You tell us what you want.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span>We'll schedule a free consultation to discuss how we can assist you.</span>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            {/* Step number */}
            <div className="absolute -left-6 top-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
              2
            </div>
            
            <div className="bg-white rounded-2xl p-8 ml-8 relative overflow-hidden border border-black/20 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col sm:hidden mb-4">
                        <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                          <Zap className="w-6 h-6 text-black" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        We Power Your Project
                      </h3>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                        <Zap className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-lg text-black space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>We assign our vetted talent to your project.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>We handle all payroll and legal paperwork with our talent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>We manage the project, sending you daily updates on the progress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>We deliver your vision, abstracting all the tedious processes for you.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            {/* Step number */}
            <div className="absolute -left-6 top-6 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg z-20">
              3
            </div>
            
            <div className="bg-white rounded-2xl p-8 ml-8 relative overflow-hidden border border-black/20 transition-all duration-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col sm:hidden mb-4">
                        <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-black" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-4">
                        Hassle-Free for You
                      </h3>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-12 h-12 bg-black/10 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-black" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-lg text-black space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>You pay LamGig on a month-to-month basis.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                      <span>You can focus on your business goals.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};