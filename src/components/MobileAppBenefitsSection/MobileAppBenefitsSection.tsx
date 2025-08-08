"use client";

import { motion } from "framer-motion";
import { Smartphone, TrendingUp, Users, Star, Clock, DollarSign, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Chip, Button } from "@heroui/react";

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

  const packages = [
    {
      name: "Standard Package",
      price: "$400/month",
      yearlyPrice: "$4000/year",
      description: "Perfect for getting started quickly",
      features: [
        "Professional mobile app ready to launch",
        "Choose from our premium templates",
        "Full white-label customization",
        "Custom CMS for easy content updates",
        "Robust backend infrastructure",
        "Save $800 with yearly plan"
      ],
      highlight: true
    },
    {
      name: "Enterprise Package",
      price: "Custom pricing",
      yearlyPrice: "Contact for quote",
      description: "For unique business requirements",
      features: [
        "Completely custom app development",
        "Bespoke design from scratch",
        "Advanced feature integration",
        "Dedicated development team",
        "Priority support & maintenance",
        "Scalable architecture"
      ],
      highlight: false
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Why Your Business Needs a <span className="text-primary">Mobile App</span>
          </motion.h2>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            In today&apos;s mobile-first world, having an app isn&apos;t just nice to have—it&apos;s essential for growth. 
            Small businesses with mobile apps see dramatic increases in revenue and customer engagement.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
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

        {/* Packages section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerAnimation}
        >
          <motion.div variants={itemAnimation} className="mb-8">
            <Chip 
              startContent={<CheckCircle className="w-3.5 h-3.5" />}
              variant="flat"
              className="bg-green-50 border border-green-200 text-green-700 font-medium"
            >
              Flexible Pricing Options
            </Chip>
          </motion.div>
          <motion.h3 
            variants={itemAnimation}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Choose Your Path to <span className="text-primary">Mobile Success</span>
          </motion.h3>
          <motion.p 
            variants={itemAnimation}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
          >
            LamGig offers two clear packages designed to fit different business needs and budgets
          </motion.p>
        </motion.div>

        {/* Packages grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerAnimation}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              whileHover={{ scale: 1.01, y: -5 }}
              className="group"
            >
              <div className={`relative p-8 rounded-2xl shadow-lg transition-all duration-300 h-full flex flex-col ${
                pkg.highlight 
                  ? "border-2 border-primary bg-gradient-to-br from-blue-50/50 to-white hover:shadow-2xl hover:shadow-blue-500/20" 
                  : "border border-gray-200 bg-white hover:shadow-xl hover:border-blue-100"
              }`}>
                {pkg.highlight && (
                  <div className="absolute -top-3 left-8">
                    <Chip 
                      size="sm"
                      className="bg-primary text-white font-semibold"
                    >
                      MOST POPULAR
                    </Chip>
                  </div>
                )}
                <h4 className="text-2xl font-bold text-gray-900 mb-2 mt-2">{pkg.name}</h4>
                <div className="mb-4">
                  <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                  <p className="text-gray-500 text-sm">or {pkg.yearlyPrice}</p>
                </div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 flex-grow">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className={`w-full mt-8 font-semibold ${
                    pkg.highlight
                      ? "bg-primary text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
                      : "bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400"
                  }`}
                  endContent={<ArrowRight className="w-5 h-5" />}
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-12 text-center shadow-2xl shadow-blue-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of small businesses that have increased their revenue with a professional mobile app
              </p>
              <Button
                size="lg"
                className="bg-white text-primary px-8 py-6 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
                endContent={<ArrowRight className="w-5 h-5 ml-1" />}
              >
                Start Your Project Today
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}