"use client";

import { motion } from "framer-motion";
import { Eye, UserCheck, Shield, DollarSign } from "lucide-react";

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
  return (
    <section className="relative py-24 px-6 max-w-7xl mx-auto bg-white">
      {/* Header section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white mb-4">
          Maximize Talent at Minimal Risk
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
          Why We&apos;re Your Best Partner
        </h2>
        <p className="text-xl text-black font-light leading-relaxed max-w-2xl mx-auto">
          Experience the ease of connecting with specialized talent, achieving your vision, and scaling your operations without the usual headaches.
        </p>
      </div>

      {/* Reasons grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};