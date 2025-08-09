"use client";

import { motion } from "framer-motion";
import { Button, Chip } from "@heroui/react";
import { CheckCircle2, Sparkles, ArrowRight, MessageCircle, Zap, Shield, Users, Code2, Clock, HeartHandshake } from "lucide-react";
import Link from "next/link";
import { pricingPackages } from "./pricingData";

export const PriceSection = () => {
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

  const { standard, enterprise } = pricingPackages;

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      
      {/* Gradient orbs */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemAnimation} className="mb-8">
            <Chip 
              startContent={<Sparkles className="w-3.5 h-3.5" />}
              variant="flat"
              className="bg-blue-50 border border-blue-200 text-primary font-medium"
            >
              Simple, Transparent Pricing
            </Chip>
          </motion.div>
          
          <motion.h2 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Choose Your <span className="text-primary">App Package</span>
          </motion.h2>
          
          <motion.p 
            variants={itemAnimation}
            className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Professional mobile apps for small businesses. One simple price, everything included.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerAnimation}
          initial="hidden"
          animate="show"
        >
          {/* Standard Package */}
          <motion.div 
            variants={itemAnimation}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{standard.name}</h3>
                {standard.isPopular && (
                  <Chip 
                    size="sm"
                    variant="flat"
                    className="bg-green-50 border border-green-200 text-green-600 font-medium"
                  >
                    Most Popular
                  </Chip>
                )}
              </div>
              <p className="text-gray-600 mb-6">{standard.description}</p>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">{standard.price}</span>
                <span className="text-gray-600">{standard.priceUnit}</span>
              </div>
              <p className="text-sm text-gray-500">{standard.yearlyPrice}</p>
            </div>

            <Button
              size="lg"
              className="w-full bg-primary text-white py-6 text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:bg-primary/90 transition-all duration-300 mb-8"
              endContent={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </Button>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider">What's included:</p>
              <ul className="space-y-3">
                {standard.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div 
            variants={itemAnimation}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:shadow-3xl transition-all duration-300"
          >

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">{enterprise.name}</h3>
              </div>
              <p className="text-gray-300 mb-6">{enterprise.description}</p>
              
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-white">{enterprise.price}</span>
              </div>
              <p className="text-sm text-gray-400">{enterprise.yearlyPrice}</p>
            </div>

            <Button
              size="lg"
              className="w-full bg-white text-gray-900 py-6 text-lg font-semibold hover:bg-gray-100 transition-all duration-300 mb-8"
              startContent={<MessageCircle className="w-5 h-5" />}
            >
              Contact Sales
            </Button>

            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Everything in Standard, plus:</p>
              <ul className="space-y-3">
                {enterprise.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span className="font-medium">Full Support</span>
            </div>
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-5 h-5 text-primary/80" />
              <span className="font-medium">100% satisfaction guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary/60" />
              <span className="font-medium">Cancel anytime</span>
            </div>
          </div>
        </motion.div>

        {/* FAQ CTA */}
        <motion.div 
          className="mt-16 text-center bg-gray-50 rounded-2xl p-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Have questions about pricing?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help you choose the right package for your business. See if the Standard Package fits your needs or if you require custom Enterprise development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as={Link}
              href="/faqs"
              size="lg"
              variant="bordered"
              className="border-2 border-gray-300 text-gray-700 px-8 py-6 text-lg font-semibold hover:border-gray-400 transition-all duration-300"
            >
              View FAQs
            </Button>
            <Button
              size="lg"
              className="bg-primary text-white px-8 py-6 text-lg font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:bg-primary/90 transition-all duration-300"
              startContent={<MessageCircle className="w-5 h-5" />}
            >
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};