"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/react";
import { ArrowRight, Code2, Zap, Users, Rocket } from "lucide-react";

export const HeroSection = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const animatedWords = ["build", "scale", "design", "deploy", "optimize"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const codeLines = [
    "const project = new Project({",
    "  team: 'elite-developers',",
    "  delivery: 'on-time',",
    "  quality: 'enterprise-grade'",
    "});",
    "",
    "project.deploy(); ✓"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Subtle Moving Dots */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-200 rounded-full opacity-60"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-purple-200 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/4 w-1 h-1 bg-gray-300 rounded-full opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Elite Freelance Developers
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900"
          >
            Scale Your Business with{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 bg-clip-text text-transparent">
                On-Demand Dev Team
              </span>
            </span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
              Connect with vetted experts and{" "}
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block font-semibold text-blue-700"
                >
                  {animatedWords[currentWord]}
                </motion.span>
              </AnimatePresence>{" "}
              your dream project, without the overhead.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              color="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border-2 border-gray-400 hover:border-blue-600 text-gray-800 hover:text-blue-700 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
            >
              View Developers
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-8 pt-8 border-t border-gray-300"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-700 mb-1">500+</div>
              <div className="text-sm text-gray-600">Expert Developers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 mb-1">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-700 mb-1">48h</div>
              <div className="text-sm text-gray-600">Avg. Match Time</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Code Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 border border-gray-700 shadow-2xl">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-gray-400 text-sm font-mono">project.js</span>
              </div>
              <div className="font-mono text-sm">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    className={`mb-2 ${
                      line.includes("✓")
                        ? "text-green-400"
                        : line.includes("const") || line.includes("});")
                        ? "text-blue-400"
                        : line.includes("'")
                        ? "text-amber-300"
                        : "text-gray-300"
                    }`}
                  >
                    {line || "\u00A0"}
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl -z-10 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};