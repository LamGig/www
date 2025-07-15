"use client";

import Image from 'next/image';
import { Link } from "@heroui/react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
          {/* Left side - Branding and Copyright */}
          <div className="flex flex-col items-center space-y-3 sm:items-start">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="LamGig Logo"
                width={30}
                height={30}
                className="mr-2"
              />
              <span className="font-bold text-xl text-white">
                <span className="font-semibold">Lam</span>
                <span className="font-normal">Gig</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              © 2025 LamGig. All rights reserved.
            </p>
          </div>

          {/* Right side - Privacy Policy and Terms of Service */}
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};