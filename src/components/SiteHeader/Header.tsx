"use client";

import Image from 'next/image';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";

const ChevronDownIcon = () => (
  <svg
    fill="none"
    height="16"
    viewBox="0 0 24 24"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

export const Header = () => {
  return (
    <Navbar 
      position="sticky" 
      className="fixed top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      maxWidth="full"
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-4">
        {/* Branding - Left */}
        <NavbarBrand className="flex items-center">
          <div className="relative">
            <Image
              src="/logo.svg"
              alt="LamGig Logo"
              width={44}
              height={44}
              className="mr-3"
            />
          </div>
          <p className="font-bold text-2xl text-gray-900">
            LamGig
          </p>
        </NavbarBrand>

        {/* Main Navigation - Center */}
        <NavbarContent className="hidden lg:flex gap-10" justify="center">
          <NavbarItem>
            <Link 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <Button
                  disableRipple
                  className="p-0 bg-transparent data-[hover=true]:bg-transparent text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-200 flex items-center gap-1"
                  radius="sm"
                  variant="light"
                >
                  About
                  <ChevronDownIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu 
                aria-label="About menu"
                className="bg-white shadow-xl border border-gray-200 rounded-lg min-w-48"
              >
                <DropdownItem key="team" href="/about/team" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-3">
                  Our Team
                </DropdownItem>
                <DropdownItem key="story" href="/about/story" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-3">
                  Our Story
                </DropdownItem>
                <DropdownItem key="careers" href="/about/careers" className="text-gray-700 hover:bg-gray-100 hover:text-gray-900 py-3">
                  Careers
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Link 
              href="/case-studies" 
              className="text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-200"
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
              className="text-gray-700 hover:text-gray-900 font-medium text-sm tracking-wide transition-colors duration-200"
            >
              Sign In
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button 
              as={Link} 
              href="/start-project" 
              className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-2 text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
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
