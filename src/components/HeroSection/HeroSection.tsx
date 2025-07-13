"use client";

import { StartProjectForm } from "./StartProjectForm";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center min-h-[max(800px,100vh)] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16">
          {/* Left column - Hero content (40%) */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                Your Vision. 
                <span className="block text-black">
                  Our Experts.
                </span>
                <span className="block text-black">Done Right!</span>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-black leading-relaxed font-light">
              No more time-consuming interviews or oversight. We meticulously vet our talent and provide complete project management, so you can
              <span className="font-medium text-black"> focus on your business goals.</span>
            </p>
          </div>

          {/* Right column - Project Form (60%) */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-2xl border border-black p-10">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-black mb-2">Start Your Project</h2>
                <p className="text-black">Tell us about your vision and we'll match you with the perfect team</p>
              </div>
              <StartProjectForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};