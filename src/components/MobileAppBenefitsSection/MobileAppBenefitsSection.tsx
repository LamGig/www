"use client";

import { motion } from "framer-motion";
import { Smartphone, TrendingUp, Users, Star, Clock, DollarSign } from "lucide-react";

export const MobileAppBenefitsSection = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Boost Revenue by 30%",
      description: "Mobile apps drive 3x more sales than mobile websites. Push notifications achieve 50% open rates vs 2% for emails."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Build Customer Loyalty",
      description: "Apps increase customer retention by 60%. Your brand stays visible on their home screen 24/7."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Stand Out from Competitors",
      description: "Only 29% of small businesses have apps. Be the professional choice customers remember and recommend."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Save Time & Money",
      description: "Automate bookings, orders, and payments. Reduce phone calls by 40% with in-app messaging and self-service."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Reach Mobile-First Customers",
      description: "89% of mobile time is spent in apps. Meet your customers where they already are."
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Your Business Needs a Mobile App
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In today's mobile-first world, having an app isn't just nice to have—it's essential for growth. 
            Small businesses with mobile apps see dramatic increases in revenue and customer engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="bg-black text-white p-3 rounded-lg w-fit mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Path to Mobile Success
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            LamGig offers two clear packages designed to fit different business needs and budgets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-2xl border-2 ${
                pkg.highlight 
                  ? "border-black bg-gray-50" 
                  : "border-gray-200 bg-white"
              }`}
            >
              {pkg.highlight && (
                <div className="bg-black text-white text-sm font-semibold px-4 py-1 rounded-full w-fit mb-4">
                  MOST POPULAR
                </div>
              )}
              <h4 className="text-2xl font-bold mb-2">{pkg.name}</h4>
              <div className="mb-4">
                <p className="text-3xl font-bold">{pkg.price}</p>
                <p className="text-gray-600">or {pkg.yearlyPrice}</p>
              </div>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transition-all ${
                  pkg.highlight
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black border-2 border-black hover:bg-gray-50"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16 p-8 bg-black text-white rounded-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join hundreds of small businesses that have increased their revenue with a professional mobile app
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Project Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}