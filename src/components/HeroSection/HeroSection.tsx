"use client";

import { StartProjectForm } from "./StartProjectForm";

export const HeroSection = () => {
  return (
    <section className="min-h-[max(800px,90vh)] flex items-center pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 w-full">
        <div className="text-center space-y-12">
          {/* Hero content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Your Vision. Our Experts.
              <span className="block">Done Right!</span>
            </h1>
            <p className="text-lg md:text-l text-gray-600 leading-relaxed max-w-3xl mx-auto">
              No more time-consuming interviews or oversight. We meticulously vet our talent and provide complete project management, so you can focus on your business goals.
            </p>
          </div>

          {/* Project Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              <StartProjectForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};