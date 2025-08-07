"use client";

import { useState } from 'react';
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

export const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Why Us", href: "#why-us" },
    { label: "FAQs", href: "/faqs" }
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-white border-b border-gray-200" maxWidth="xl">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
      <NavbarContent className="flex-grow-0">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-800"
        />
        <NavbarBrand as={Link} href="/">
          <Image
            src="/logo.svg"
            alt="LamGig Logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <p className="font-bold text-gray-900">
            <span className="font-semibold">Lam</span>
            <span className="font-normal">Gig</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-8 flex-grow justify-center">
        {menuItems.map((item, index) => (
          <NavbarItem key={item.label}>
            <Link 
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="flex-grow-0" justify="end">
        <NavbarItem>
          <Button 
            as={Link} 
            href="/start-project" 
            variant="solid"
            className="bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Start Project
          </Button>
        </NavbarItem>
      </NavbarContent>
      </div>

      <NavbarMenu className="bg-white">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              className="w-full text-lg text-gray-700 hover:text-gray-900"
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
