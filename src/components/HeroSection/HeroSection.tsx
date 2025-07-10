"use client";

import { Button } from "@heroui/react";

export const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Ideas Into 
                <span className="block text-gray-700">Digital Reality</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                We help businesses and entrepreneurs bring their vision to life with custom web applications, mobile apps, and digital solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gray-900 text-white hover:bg-gray-800 font-medium px-8 py-3 text-base"
                radius="md"
              >
                Start Your Project
              </Button>
              <Button 
                size="lg"
                variant="bordered"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3 text-base"
                radius="md"
              >
                View Our Work
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - Placeholder for image or form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg h-96 lg:h-[500px] bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-500 font-medium">Image Placeholder</p>
                  <p className="text-sm text-gray-400">Replace with hero image or contact form</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};