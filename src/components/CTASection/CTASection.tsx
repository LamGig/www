"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

export const CTASection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="bg-gray-950 p-12 text-center overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of small businesses that have increased their revenue with a professional mobile app
          </p>
          <Button
            as={Link}
            href="/start"
            size="lg"
            className="bg-white text-primary px-8 py-6 text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            endContent={<ArrowRight className="w-5 h-5 ml-1" />}
          >
            Start Your Project Today
          </Button>
        </div>
      </div>
    </motion.div>
  );
};