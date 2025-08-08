"use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { ArrowRight, Users, Code2, Shield, Sparkles, CheckCircle2, Clock } from "lucide-react";

export const HeroSection = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Minimal dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Fade overlay to blend with next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      
      {/* Gradient orbs - more subtle */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div 
          className="text-center max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {/* Badge */}
          <motion.div variants={itemAnimation} className="mb-8">
            <Chip 
              startContent={<Sparkles className="w-3.5 h-3.5" />}
              variant="flat"
              className="bg-blue-50 border border-blue-200 text-primary font-medium"
            >
              Trusted by 500+ Growing Businesses
            </Chip>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemAnimation}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            Find Expert Freelancers
            <br />
            <span className="relative">
              <span className="text-primary">
                Build Faster
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                <path d="M0 3C100 1 200 1 300 3" stroke="#0072f5" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemAnimation}
            className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Connect with pre-vetted developers, designers, and digital experts. 
            Scale your team on-demand without the overhead.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemAnimation}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:bg-primary/90 transition-all duration-300"
              endContent={<ArrowRight className="w-5 h-5 ml-1" />}
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-gray-300 text-gray-700 px-8 py-6 text-lg font-semibold hover:border-gray-400 transition-all duration-300"
              startContent={<Users className="w-5 h-5" />}
            >
              Browse Talent
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemAnimation}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-16"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">No upfront costs</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary/80" />
              <span className="font-medium">24-hour matching</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary/60" />
              <span className="font-medium">Secure payments</span>
            </div>
          </motion.div>

          {/* Feature cards */}
          <motion.div 
            variants={containerAnimation}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <motion.div 
              variants={itemAnimation}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vetted Talent Pool</h3>
              <p className="text-gray-600 leading-relaxed">
                Every freelancer is thoroughly screened for technical skills and professional experience
              </p>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Stack Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                From frontend to backend, mobile to cloud - find experts in any technology stack
              </p>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/80 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk-Free Hiring</h3>
              <p className="text-gray-600 leading-relaxed">
                Protected payments, NDAs, and replacement guarantee for complete peace of mind
              </p>
            </motion.div>
          </motion.div>

          {/* Stats section */}
          <motion.div 
            variants={containerAnimation}
            className="mt-20 pt-12 border-t border-gray-200"
          >
            <motion.div 
              variants={itemAnimation}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">10K+</div>
                <div className="text-gray-600">Active Freelancers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">24hrs</div>
                <div className="text-gray-600">Avg. Match Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">4.9★</div>
                <div className="text-gray-600">Client Rating</div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};