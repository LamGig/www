"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@heroui/react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "How It Works", href: "/#how-it-works-section" },
    { name: "Why Us", href: "/#why-us-section" },
    { name: "FAQs", href: "/faqs" },
  ];

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
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
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

        {/* Desktop Navigation - Center */}
        <NavbarContent className="hidden md:flex gap-0 lg:gap-2" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link 
                href={item.href}
                className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-2xl font-medium text-sm tracking-wide transition-all duration-200"
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* CTA & Mobile Menu Toggle - Right */}
        <NavbarContent justify="end" className="gap-2">
          <NavbarItem>
            <Button 
              as={Link} 
              href="/start-project" 
              className="bg-white text-black hover:bg-gray-100 font-medium transition-all duration-300 h-9 px-3 sm:px-4 text-sm"
              radius="md"
            >
              <span className="hidden sm:inline">Start Your Project</span>
              <span className="sm:hidden">Start Project</span>
            </Button>
          </NavbarItem>
          
          <NavbarItem className="md:hidden ml-4">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="text-white h-8 w-8 cursor-pointer"
            />
          </NavbarItem>
        </NavbarContent>
      </div>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-black pt-6">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full text-gray-300 hover:text-white font-medium text-lg py-2"
              href={item.href}
              onPress={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        
        {/* Mobile CTA */}
        {/* <NavbarMenuItem className="pt-4">
          <Button 
            as={Link} 
            href="/start-project"
            className="w-full bg-white text-black hover:bg-gray-100 font-medium py-3"
            radius="lg"
            onPress={() => setIsMenuOpen(false)}
          >
            Start Your Project
          </Button>
        </NavbarMenuItem> */}
      </NavbarMenu>
    </Navbar>
  );
};
