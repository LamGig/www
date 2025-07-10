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
          <Dropdown>
            <NavbarItem>
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
                  endContent={<ChevronDown size={16} />}
                  radius="sm"
                  variant="light"
                >
                  About
                </Button>
              </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
              aria-label="About menu"
              itemClasses={{
                base: "gap-4",
              }}
            >
              <DropdownItem
                key="team"
                description="Meet the talented people behind LamGig"
                href="/about/team"
                startContent={
                  <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                }
              >
                Our Team
              </DropdownItem>
              <DropdownItem
                key="story"
                description="Learn about our journey and mission"
                href="/about/story"
                startContent={
                  <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                }
              >
                Our Story
              </DropdownItem>
              <DropdownItem
                key="careers"
                description="Join our team and grow with us"
                href="/about/careers"
                startContent={
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v6a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
                }
              >
                Careers
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
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
