"use client";

import { motion } from "framer-motion";
import { Eye, UserCheck, Shield, DollarSign, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

const reasons = [
  {
    icon: UserCheck,
    title: "Professional Templates",
    description: "Start with pre-built, tested templates that work perfectly out of the box. Customize to match your brand without starting from scratch."
  },
  {
    icon: Shield,
    title: "All-Inclusive Platform",
    description: "Everything you need in one package: iOS & Android apps, backend infrastructure, CMS, hosting, maintenance, and ongoing support."
  },
  {
    icon: Eye,
    title: "Complete Control",
    description: "Manage your app content easily with our custom CMS. Update products, prices, and promotions in real-time without any coding."
  },
  {
    icon: DollarSign,
    title: "Predictable Costs",
    description: "One flat monthly fee covers everything. No setup costs, no hidden charges, no surprises. Save $800/year with our annual plan."
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
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };
  return (
    <section id="why-us" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_30%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40" />
      
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
              className="bg-blue-50 border border-blue-200 text-primary font-medium"
            >
              Built for Growing Businesses
            </Chip>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Why Choose <span className="text-primary">LamGig</span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            We eliminate the complexity and high cost of mobile app development, making professional apps accessible to every small business.
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
            return (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-8 bg-gradient-to-r from-blue-50/50 to-white rounded-2xl border border-blue-100">
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900 mb-1">7 Days</div>
              <div className="text-gray-600">To Launch</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900 mb-1">90%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-left">
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-gray-600">Apps Delivered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};