"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navbar, 
  NavbarBrand, 
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from "@heroui/react";

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setHasScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Why Apps", href: "/#mobileappbenefits" },
    { label: "FAQs", href: "/faqs" },
    { label: "Price", href: "/price" },
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
      className="backdrop-blur-lg"
      height="64px"
    >
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left Section - Brand */}
        <div className="flex items-center flex-shrink-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-gray-600 hover:text-gray-900 mr-3 transition-colors"
          />
          <NavbarBrand as={Link} href="/" className="flex items-center gap-3 group">
            <div className="relative w-[32px] h-[32px]">
              <AnimatePresence mode="wait">
                {!hasScrolled ? (
                  <motion.div
                    key="text"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-y-0 left-1 flex items-center justify-center"
                  >
                    <div className="text-xl whitespace-nowrap">
                      <span className="font-normal text-gray-900">Lam</span>
                      <span className="font-bold text-gray-900">Gig</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/logo.svg"
                      alt="LamGig Logo"
                      width={32}
                      height={32}
                      className="rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </NavbarBrand>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link 
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-primary transition-all duration-200 relative group rounded-lg hover:bg-blue-50/50"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item.label}
                {hoveredItem === item.label && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            </NavbarItem>
          ))}
        </div>

        {/* Right Section - Auth + CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <NavbarItem className="hidden sm:flex">
            <Button
              as={Link}
              href="#signin"
              variant="light"
              className="text-gray-600 hover:text-primary hover:bg-blue-50 transition-all duration-200 h-10 px-4 font-medium rounded-lg"
            >
              <User size={18} />
              Login
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button 
              as={Link} 
              href="/start" 
              variant="solid"
              className="bg-primary text-white hover:bg-primary/90 transition-all duration-300 font-semibold h-10 px-4 rounded-lg group"
            >
              Start Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </NavbarItem>
        </div>
      </div>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/98 backdrop-blur-lg border-t border-gray-100 mt-2 py-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`} className="mb-1">
            <Link
              className="w-full text-base text-gray-700 hover:text-primary hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 block"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="border-t border-gray-100 mt-4 pt-4">
          <Link
            className="w-full text-base text-gray-700 hover:text-primary hover:bg-blue-50 px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-2"
            href="#signin"
          >
            <User size={18} />
            Sign In
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="mt-2">
          <Button
            as={Link}
            href="/start-project"
            className="w-full bg-primary text-white hover:bg-primary/90 font-semibold h-11 rounded-lg"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
