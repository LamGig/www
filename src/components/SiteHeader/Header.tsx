"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4">
        {/* Branding - Left */}
        <NavbarBrand className="flex items-center">
          <AnimatePresence mode="wait">
            {isScrolled ? (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Image
                  src="/logo.svg"
                  alt="LamGig Logo"
                  width={32}
                  height={32}
                />
              </motion.div>
            ) : (
              <motion.div
                key="text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="text-xl text-white tracking-tight"
              >
                <span className="font-semibold">Lam</span>
                <span className="font-normal">Gig</span>
              </motion.div>
            )}
          </AnimatePresence>
        </NavbarBrand>

        {/* Main Navigation - Center */}
        <NavbarContent className="hidden lg:flex gap-10" justify="center">
          <NavbarItem>
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200 flex items-center gap-1"
                  radius="sm"
                  variant="light"
                >
                  About
                  <ChevronDown size={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="About menu"
                className="bg-gray-900 shadow-xl border border-gray-700 rounded-lg min-w-48"
              >
                <DropdownItem key="team" href="/about/team" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3">
                  Our Team
                </DropdownItem>
                <DropdownItem key="story" href="/about/story" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3">
                  Our Story
                </DropdownItem>
                <DropdownItem key="careers" href="/about/careers" className="text-gray-300 hover:bg-gray-800 hover:text-white py-3">
                  Careers
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link 
              href="/case-studies" 
              className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Case Studies
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Sign In & CTA - Right */}
        <NavbarContent justify="end" className="gap-4">
          <NavbarItem>
            <Link 
              href="/sign-in" 
              className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button 
              as={Link} 
              href="/start-project" 
              className="bg-white text-black hover:bg-gray-100 font-medium px-8 py-2 text-sm tracking-wide transition-all duration-300"
              radius="md"
            >
              Start Your Project
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
    </Navbar>
  );
};
