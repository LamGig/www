"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, CheckCircle, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

export const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.8"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 0.9], ["0%", "100%"]);

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="how-it-works-section" ref={sectionRef} className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation} className="mb-8">
            <Chip 
              startContent={<Sparkles className="w-3.5 h-3.5" />}
              variant="flat"
              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 font-medium"
            >
              Simple & Streamlined Process
            </Chip>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            How It <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Works</span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            From idea to execution in three simple steps. We handle the complexity so you can focus on your business.
          </motion.p>
        </motion.div>

        {/* Steps container */}
        <div className="relative space-y-12">
          {/* Animated progress line */}
          <div className="absolute left-8 top-12 w-0.5 z-0 hidden md:block" style={{ height: 'calc(100% - 8rem)' }}>
            {/* Background line */}
            <div className="w-full h-full bg-gradient-to-b from-gray-200 to-gray-300 rounded-full"></div>
            {/* Animated progress line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-green-500 to-emerald-600 rounded-full origin-top"
              style={{ 
                height: lineHeight
              }}
            ></motion.div>
          </div>

          {/* Step 1 */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Step number */}
            <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl z-20 shadow-lg hidden md:flex">
              1
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-8 md:ml-24 relative overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex md:hidden mb-4 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl items-center justify-center">
                        <Rocket className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Start with a Free Consultation
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">Quick 15-minute discovery call</p>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Share your project requirements and timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Get expert recommendations and pricing within 24 hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Step number */}
            <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl z-20 shadow-lg hidden md:flex">
              2
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-8 md:ml-24 relative overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex md:hidden mb-4 w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl items-center justify-center">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        We Power Your Project
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">End-to-end project management</p>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Match you with pre-vetted experts in 24-48 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Handle all contracts, NDAs, and payment processing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Provide daily progress updates and milestone tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Deliver quality-assured results on schedule</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Step number */}
            <div className="absolute left-0 top-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl z-20 shadow-lg hidden md:flex">
              3
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-8 md:ml-24 relative overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex md:hidden mb-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Scale with Confidence
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">Flexible and transparent</p>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Pay monthly with no long-term commitments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Scale your team up or down as needed</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Focus on growth while we handle the rest</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};