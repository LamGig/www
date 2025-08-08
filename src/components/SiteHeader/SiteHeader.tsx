"use client";

import { useState } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
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

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQs", href: "/faqs" }
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
      className="border-b border-gray-100 bg-white/80 backdrop-blur-md"
      height="56px"
    >
      <div className="flex w-full items-center justify-between">
        {/* Left Section - Brand */}
        <div className="flex items-center flex-shrink-0">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden text-gray-700 mr-4"
          />
          <NavbarBrand as={Link} href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="LamGig Logo"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <div className="font-bold text-lg text-gray-900">
              <span className="font-bold">Lam</span>
              <span className="font-light">Gig</span>
            </div>
          </NavbarBrand>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden lg:flex items-center gap-0 absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item) => (
            <NavbarItem key={item.label}>
              <Link 
                href={item.href}
                className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
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
              isIconOnly
              className="text-gray-600 hover:text-primary hover:bg-primary/10 transition-all duration-200 min-w-8 h-8"
              aria-label="Sign In"
            >
              <User size={18} />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button 
              as={Link} 
              href="/start-project" 
              variant="solid"
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-200 font-medium h-8 px-4"
            >
              Start Project
            </Button>
          </NavbarItem>
        </div>
      </div>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md border-t border-gray-100 mt-1">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full text-base text-gray-700 hover:text-primary py-3 transition-colors duration-200"
              href={item.href}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="w-full text-base text-gray-700 hover:text-primary py-3 transition-colors duration-200 flex items-center gap-2"
            href="#signin"
          >
            <User size={16} />
            Sign In
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};
