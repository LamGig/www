"use client";

import { motion } from "framer-motion";
import { Eye, UserCheck, Shield, DollarSign, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

const reasons = [
  {
    icon: UserCheck,
    title: "Pre-Vetted Excellence",
    description: "Access top-tier talent that's already been rigorously tested. No more sifting through hundreds of resumes, and a bunch of interviews."
  },
  {
    icon: Shield,
    title: "Zero-Risk Staffing",
    description: "Scale your team size up or down based on current project demands. If you're not satisfied within the first week, we'll find you a replacement at no additional cost."
  },
  {
    icon: Eye,
    title: "Project Clarity",
    description: "Never worried about losing touch with your project's status again, we monitor and provide daily updates, keeping you fully informed."
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, no surprises, no complex taxes, no employee benefits. Pay a pre-negotiated fixed cost, on month-to-month basis, and only for the talent you use."
  }
];

export const WhyUsSection = () => {
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="why-us-section" className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700 font-medium"
            >
              Built for Growing Businesses
            </Chip>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Why Choose <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">LamGig</span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            We eliminate the complexity of finding and managing freelance talent, so you can focus on what matters most - growing your business.
          </motion.p>
        </motion.div>

        {/* Reasons grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerAnimation}
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const gradients = [
              "from-blue-500 to-indigo-600",
              "from-green-500 to-emerald-600",
              "from-purple-500 to-pink-600",
              "from-orange-500 to-red-600"
            ];
            const hoverBorders = [
              "hover:border-blue-100",
              "hover:border-green-100",
              "hover:border-purple-100",
              "hover:border-orange-100"
            ];
            return (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className={`relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl ${hoverBorders[index]} transition-all duration-300 h-full flex flex-col`}>
                  <div className="mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${gradients[index]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional trust section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900 mb-1">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900 mb-1">2-3x</div>
              <div className="text-gray-600">Faster Delivery</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900 mb-1">50%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};