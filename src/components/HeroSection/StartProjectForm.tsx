"use client";

import { useState } from "react";
import { Button, Textarea } from "@heroui/react";
import { Lightbulb, ArrowRight } from "lucide-react";
import { examplePrompts, type ExamplePrompt } from "./examplePrompts";

/**
 * Props interface for the StartProjectForm component
 */
interface StartProjectFormProps {
  /** Optional CSS class name for styling */
  className?: string;
}

/**
 * A form component that allows users to describe their project ideas
 * with a textarea input and example prompts for inspiration
 */
export const StartProjectForm = ({ className = "" }: StartProjectFormProps) => {
  
  // =====================
  // STATE MANAGEMENT
  // =====================
  
  /** Current value of the project description textarea */
  const [prompt, setPrompt] = useState("");
  
  /** Key used to force textarea re-render when examples are clicked */
  const [textareaKey, setTextareaKey] = useState(0);


  // =====================
  // EVENT HANDLERS
  // =====================
  
  /**
   * Handles clicking on an example prompt button
   * Sets the textarea value and forces a re-render to ensure proper display
   */
  const handleExampleClick = (example: ExamplePrompt) => {
    setPrompt(example.promptValue);
    setTextareaKey(prev => prev + 1); // Force re-render to work around HeroUI Textarea state issues
  };

  /**
   * Handles form submission
   * Currently logs the prompt for development purposes
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log("Project prompt:", prompt);
  };

  // =====================
  // RENDER
  // =====================
  
  return (
    <div className={`w-full min-w-0 space-y-6 ${className}`}>
      {/* Main form with textarea and submit button */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Textarea
            key={textareaKey} // Force re-render when examples are clicked
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you need ..."
            minRows={4}
            variant="bordered"
            className="w-full"
            classNames={{
              input: "text-base",
              inputWrapper: "border border-black/20 hover:border-black/40 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 bg-gray-50 data-[focus=true]:bg-white transition-all duration-200"
            }}
          />
        </div>
        
        <Button
          type="submit"
          size="lg"
          className="w-full bg-black text-white hover:bg-black/80 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          radius="lg"
          isDisabled={!prompt.trim()} // Disable when textarea is empty or whitespace only
        >
          <span className="flex items-center">
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-1" strokeWidth={3} />
          </span>
        </Button>
      </form>

      {/* Example prompts section */}
      <div className="space-y-4">
        <p className="text-sm text-black font-medium flex items-center">
          <Lightbulb className="w-4 h-4 mr-1" />
          Need inspiration? Try these examples:
        </p>
        <div className="space-y-3">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="w-full text-left p-4 text-sm text-black bg-white hover:bg-black/5 rounded-xl border border-black/20 hover:border-black/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span className="font-medium">"{example.buttonText}"</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};