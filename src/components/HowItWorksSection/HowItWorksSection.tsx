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
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
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
              className="bg-blue-50 border border-blue-200 text-primary font-medium"
            >
              Simple & Streamlined Process
            </Chip>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            How It <span className="text-primary">Works</span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Get your professional mobile app up and running in just three simple steps. No technical expertise required.
          </motion.p>
        </motion.div>

        {/* Steps container */}
        <div className="relative space-y-12">
          {/* Animated progress line */}
          <div className="absolute left-8 top-12 w-0.5 z-0 hidden md:block" style={{ height: 'calc(100% - 8rem)' }}>
            {/* Background line */}
            <div className="w-full h-full bg-gray-200 rounded-full"></div>
            {/* Animated progress line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary rounded-full origin-top"
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
            <div className="absolute left-0 top-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl z-20 md:flex">
              1
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-8 md:ml-24 relative overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex md:hidden mb-4 w-14 h-14 bg-primary rounded-xl items-center justify-center">
                        <Rocket className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Choose Your Package
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">Standard or Enterprise</p>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Standard: $400/month or $4000/year for ready-to-launch apps</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Enterprise: Custom development for unique business needs</span>
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
            <div className="absolute left-0 top-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl z-20 md:flex">
              2
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-8 md:ml-24 relative overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex md:hidden mb-4 w-14 h-14 bg-primary rounded-xl items-center justify-center">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        We Build Your App
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">Complete setup in 7 days</p>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Customize a template with your brand and content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Set up your data and system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Configure iOS and Android app stores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Test everything to ensure perfect functionality</span>
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
            <div className="absolute left-0 top-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl z-20 md:flex">
              3
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.01, y: -2 }}
              className="bg-white rounded-2xl p-8 md:ml-24 relative overflow-hidden border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="inline-flex md:hidden mb-4 w-14 h-14 bg-primary rounded-xl items-center justify-center">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Launch & Grow
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">Go live with full support</p>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="w-7 h-7 text-white" />
                      </div>
                    </div>
                  </div>
                  <ul className="text-gray-600 space-y-3 list-none">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Your app goes live on App Store and Google Play</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Ongoing maintenance and updates included</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>24/7 support and CMS training provided</span>
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