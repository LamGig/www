"use client";

import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-blue-100/40 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(0,114,245,0.15)_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Scale Your Business with{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                On-Demand Development
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10"
          >
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access top-tier developers instantly. No hiring hassles, no long-term commitments. 
              Just skilled professionals ready to accelerate your projects and drive growth.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Button
              size="lg"
              className="bg-[#0072f5] text-white px-8 py-4 text-lg font-semibold hover:bg-[#0061d5] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0072f5] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600 text-center">Get matched with developers in 24 hours or less</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0072f5] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Matching</h3>
              <p className="text-gray-600 text-center">Developers matched to your exact tech stack and needs</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0072f5] to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale Instantly</h3>
              <p className="text-gray-600 text-center">Expand or reduce your team as your business grows</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};