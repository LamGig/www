"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqData, type FAQItem, type FAQSection } from "./faqData";

const AccordionItem = ({ item, isOpen, onToggle }: { 
  item: FAQItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
      >
        <span className="font-semibold text-black text-lg">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const StickyNavigation = ({ sections, activeSection }: { 
  sections: FAQSection[]; 
  activeSection: string;
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-32 space-y-2">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">
        Jump to Section
      </h3>
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
            activeSection === section.id
              ? 'bg-black text-white font-medium'
              : 'text-gray-600 hover:text-black hover:bg-gray-100'
          }`}
        >
          {section.title}
        </button>
      ))}
    </div>
  );
};

const FAQSection = ({ section }: { section: FAQSection }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div id={section.id} className="space-y-4 scroll-mt-32">
      <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
        <HelpCircle className="w-6 h-6 mr-2" />
        {section.title}
      </h2>
      <div className="space-y-3">
        {section.items.map((item, index) => (
          <AccordionItem
            key={index}
            item={item}
            isOpen={openItems.has(index)}
            onToggle={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export const FAQsSection = () => {
  const [activeSection, setActiveSection] = useState<string>("general");

  useEffect(() => {
    const handleScroll = () => {
      const sections = faqData.map(section => section.id);
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-black text-sm font-medium text-white mb-4">
            Support & Help
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Get answers to common questions about our services, billing, talent, and project management process.
          </p>
        </div>

        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1">
            {/* FAQ Sections */}
            <div className="space-y-12">
              {faqData.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FAQSection section={section} />
                </motion.div>
              ))}
            </div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center p-8 bg-gray-50 rounded-2xl border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Get in touch with our team.
              </p>
              <a
                href="mailto:hello@lamgig.com"
                className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/80 transition-colors duration-200"
              >
                Contact Support
              </a>
            </motion.div>
          </div>

          {/* Sticky Navigation */}
          <div className="hidden lg:block w-64">
            <StickyNavigation sections={faqData} activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
};