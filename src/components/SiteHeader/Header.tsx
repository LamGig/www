"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {Navbar, NavbarBrand, Link} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";
import { MainNav } from "./Nav";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      position="sticky" 
      className="fixed top-0 z-50 bg-black border-b border-gray-800 h-14"
      maxWidth="full"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-2 lg:px-4">
        {/* Branding - Left */}
        <NavbarBrand className="flex items-center">
          <Link href="/" className="flex items-center">
            <AnimatePresence mode="wait">
              {isScrolled ? (
                <motion.div
                  key="logo"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative"
                >
                  <Image
                    src="/logo.svg"
                    alt="LamGig Logo"
                    width={30}
                    height={30}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="text-xl text-white"
                >
                  <span className="font-semibold">Lam</span>
                  <span className="font-normal">Gig</span>
                </motion.div>
              )}
            </AnimatePresence>
          </Link>
        </NavbarBrand>
        
        {/* Main nav */}
        <MainNav />
      </div>
    </Navbar>
  );
};
