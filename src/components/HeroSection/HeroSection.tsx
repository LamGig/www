"use client";

import { StartProjectForm } from "./StartProjectForm";

export const HeroSection = () => {
  return (
    <section className="min-h-[max(800px,90vh)] flex items-center bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
                Your Vision. Our Experts.
                <span className="block">Done Right!</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Solving your biggest challenges: no more time-consuming interviews or oversight. We meticulously vet our talents and provide complete project management, so you can focus on your business goals.
              </p>
            </div>
          </div>

          {/* Right side - Project Form */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg bg-white rounded-lg shadow-lg border border-gray-200 p-6">
              <StartProjectForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};