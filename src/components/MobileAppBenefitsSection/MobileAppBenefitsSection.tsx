"use client";

import { motion } from "framer-motion";
import { Smartphone, TrendingUp, Users, Star, Clock, DollarSign, Sparkles } from "lucide-react";
import { Chip } from "@heroui/react";

export const MobileAppBenefitsSection = () => {
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

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "Boost Revenue by 30%",
      description: "Mobile apps drive 3x more sales than mobile websites. Push notifications achieve 50% open rates vs 2% for emails."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Build Customer Loyalty",
      description: "Apps increase customer retention by 60%. Your brand stays visible on their home screen 24/7."
    },
    {
      icon: <Star className="w-6 h-6 text-white" />,
      title: "Stand Out from Competitors",
      description: "Only 29% of small businesses have apps. Be the professional choice customers remember and recommend."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "Save Time & Money",
      description: "Automate bookings, orders, and payments. Reduce phone calls by 40% with in-app messaging and self-service."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-white" />,
      title: "Reach Mobile-First Customers",
      description: "89% of mobile time is spent in apps. Meet your customers where they already are."
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      title: "Increase Order Values",
      description: "Mobile app users spend 2.5x more than web users. One-tap reordering boosts repeat purchases by 70%."
    }
  ];


  return (
    <section id="mobileappbenefits" className="relative py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_50%,#000_40%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
      
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
              Transform Your Business Growth
            </Chip>
          </motion.div>
          <motion.h2 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-xl mx-auto"
          >
            Why Your Business Needs a <span className="text-primary">Mobile App</span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            In today&apos;s mobile-first world, having an app isn&apos;t just nice to have, it&apos;s essential for growth. 
            Small businesses with mobile apps see dramatic increases in revenue and customer engagement.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerAnimation}
        >
          {benefits.map((benefit, index) => {
            const bgOpacities = ["bg-primary"];
            return (
              <motion.div
                key={index}
                variants={itemAnimation}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl border border-gray-100 bg-white shadow-lg hover:shadow-xl hover:border-blue-100 transition-all duration-300 h-full flex flex-col">
                  <div className="mb-6">
                    <div className={`w-14 h-14 ${bgOpacities[index % bgOpacities.length]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}