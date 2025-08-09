"use client";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Chip, Button } from "@heroui/react";
import { pricingPackages } from "./pricingData";

export const PriceSectionSimple = () => {
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

  const { standard, enterprise } = pricingPackages;
  
  const packages = [
    {
      name: `${standard.name} Package`,
      price: `${standard.price}${standard.priceUnit}`,
      yearlyPrice: standard.yearlyPriceShort,
      description: standard.descriptionShort,
      features: standard.features,
      highlight: standard.isPopular
    },
    {
      name: `${enterprise.name} Package`,
      price: `${enterprise.price} pricing`,
      yearlyPrice: enterprise.yearlyPriceShort,
      description: enterprise.descriptionShort,
      features: enterprise.features,
      highlight: enterprise.isPopular
    }
  ];

  return (
    <section className="relative py-20">
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
            className="bg-blue-50 border border-blue-200 text-primary font-medium"
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

      <motion.div 
        className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                <p className="text-gray-500 text-sm">{pkg.yearlyPrice}</p>
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
    </section>
  );
};