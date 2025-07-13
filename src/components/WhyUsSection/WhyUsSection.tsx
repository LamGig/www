"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Zap, CheckCircle, Sparkles } from "lucide-react";

export const WhyUsSection = () => {
  return (
    <section className="relative py-24 px-6 max-w-4xl mx-auto bg-white">
      {/* Header section */}
      <div className="text-center mb-16 space-y-6">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white mb-4">
          Maximize Talent at Minimal Risk
        </div>
        <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
          Why We&apos;re Your Best Partner
        </h2>
        <p className="text-xl text-black font-light leading-relaxed max-w-2xl mx-auto">
          Experience the ease of connecting with specialized talent, achieving superior outcomes, and scaling your operations without the usual headaches.
        </p>
      </div>

    </section>
  );
};