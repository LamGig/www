"use client";

import { StartProjectForm } from "@/components/StartProjectForm";

export const HeroSection = () => {
  return (
    <section className="relative flex items-center min-h-[max(800px,100vh)] pt-32 pb-24">
      {/* decoration squares  */}
      <svg aria-hidden="true" className="absolute inset-0 z-0 size-full stroke-gray-200 opacity-50 [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]">
        <defs>
          <pattern x="50%" y="-1" id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" width="100%" height="100%" strokeWidth="0"></rect>
      </svg>

      {/* content  */}
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column - Hero content (40%) */}
          <div className="flex-1 lg:flex-[2] space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight">
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
          <div className="flex-1 lg:flex-[3] min-w-0">
            <StartProjectForm />
          </div>
        </div>
      </div>
    </section>
  );
};