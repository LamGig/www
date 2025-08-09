"use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { ArrowRight, Users, Code2, Shield, Sparkles, CheckCircle2, Clock } from "lucide-react";
import Link from "next/link";

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
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Minimal dots pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Fade overlay to blend with next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
      
      {/* Gradient orbs - more subtle */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Professional Mobile Apps Made Simple
            </Chip>
          </motion.div>

          {/* Main heading */}
          <motion.h1 
            variants={itemAnimation}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            Custom Mobile App 
            <br />
            <span className="relative">
              <span className="text-primary">
                 Without the Hassle
              </span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 300 6" fill="none">
                <motion.path 
                  d="M0 3C100 1 200 1 300 3" 
                  stroke="#0072f5" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemAnimation}
            className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Stop waiting months and paying a fortune for a custom app. We can gets you to market fast with a professional mobile app that boosts sales and customer loyalty.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemAnimation}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              as={Link}
              href="/start"
              size="lg"
              className="bg-primary text-white px-8 py-6 text-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              endContent={<ArrowRight className="w-5 h-5 ml-1" />}
            >
              Get Your App Now
            </Button>
            {/* <Button
              size="lg"
              variant="bordered"
              className="border-2 border-gray-300 text-gray-700 px-8 py-6 text-lg font-semibold hover:border-gray-400 transition-all duration-300"
            >
              View Samples
            </Button> */}
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            variants={itemAnimation}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-16"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium">$400/month or $4000/year</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary/80" />
              <span className="font-medium">Launch in 7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary/60" />
              <span className="font-medium">Full support included</span>
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
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">White-Label Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                Your brand, your app. Complete customization with your logo, colors, and identity
              </p>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 bg-primary/90 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Code2 className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                iOS & Android apps, backend, CMS, and hosting - everything you need included
              </p>
            </motion.div>

            <motion.div 
              variants={itemAnimation}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="w-14 h-14 bg-primary/80 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">No Hidden Costs</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent pricing with maintenance, updates, and support all included
              </p>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};