"use client";

import { StartProjectForm } from "./StartProjectForm";

export const HeroSection = () => {
  return (
    <section className="min-h-[max(900px,100vh)] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-r from-blue-100/30 to-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-l from-blue-100/20 to-blue-200/20 rounded-full blur-3xl" />
      
      <div className="relative flex items-center min-h-[max(900px,100vh)] pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="text-center space-y-16">
            {/* Hero content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                  Your Vision.
                  <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Our Experts.
                  </span>
                  <span className="block text-gray-900">Done Right!</span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
                No more time-consuming interviews or oversight. We meticulously vet our talent and provide complete project management, so you can
                <span className="font-medium text-gray-800"> focus on your business goals.</span>
              </p>
            </div>

            {/* Project Form */}
            <div className="flex justify-center">
              <div className="w-full max-w-3xl">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-10">
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">Start Your Project</h2>
                    <p className="text-gray-600">Tell us about your vision and we'll match you with the perfect team</p>
                  </div>
                  <StartProjectForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};