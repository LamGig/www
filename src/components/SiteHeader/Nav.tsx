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
            href="/" 
            className="text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-colors duration-200"
          >
            About
          </Link>
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
    </>
  );
};