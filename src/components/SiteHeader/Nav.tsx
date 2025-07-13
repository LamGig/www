"use client";

import { NavbarContent, NavbarItem, Link, Button } from "@heroui/react";

export const MainNav = () => {
  return (
    <>
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
          <Link 
            href="/#how-it-works-section"
            className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
          >
            How It Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/#why-us-section"
            className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
          >
            Why Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
            href="/faqs" 
            className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
          >
            FAQs
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Sign In & CTA - Right */}
      <NavbarContent justify="end" className="gap-4">
        {/* <NavbarItem>
          <Link 
            href="/sign-in" 
            className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
          >
            Sign In
          </Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button 
            as={Link} 
            href="/start-project" 
            className="bg-white text-black hover:bg-gray-100 font-medium transition-all duration-300"
          >
            <span className="hidden sm:inline">Start Your Project</span>
            <span className="sm:hidden">Start Project</span>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </>
  );
};