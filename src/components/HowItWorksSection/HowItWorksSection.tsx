"use client";

import { Button } from "@heroui/react";

export const HowItWorksSection = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Main content */}
        <div className="space-y-8">
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Launch. Scale.
              <br />
              Stabilize.
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-lg">
              Startups and scaleups use Lemon.io developers to accelerate development at every stage.
            </p>
            <Button 
              className="bg-black text-white px-8 py-6 text-lg font-semibold rounded-xl hover:bg-black/90 transition-colors"
              size="lg"
            >
              Hire to move faster →
            </Button>
          </div>
        </div>

        {/* Right side - Feature cards */}
        <div className="space-y-6">
          {/* Launch an MVP Card */}
          <div className="bg-white border-2 border-black rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-4">Launch an MVP</h3>
                <p className="text-black/70 text-lg">
                  Turn proposals and designs into functional prototypes, with a senior developer's expertise.
                </p>
              </div>
              <div className="ml-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accelerate feature development Card */}
          <div className="bg-white border-2 border-black rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Accelerate
                  <br />
                  feature development
                </h3>
                <p className="text-black/70 text-lg">
                  Meet launch deadlines with much-needed capacity. Add new skills your team currently lacks.
                </p>
              </div>
              <div className="ml-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stabilize technical infrastructure Card */}
          <div className="bg-white border-2 border-black rounded-2xl p-8 relative overflow-hidden">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-black mb-2">
                  Stabilize
                  <br />
                  technical infrastructure
                </h3>
                <p className="text-black/70 text-lg">
                  Refactor legacy code and get rid of technical debt, so your team can build faster.
                </p>
              </div>
              <div className="ml-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏗️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};