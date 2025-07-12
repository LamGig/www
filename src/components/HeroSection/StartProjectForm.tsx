"use client";

import { useState } from "react";
import { Button, Textarea } from "@heroui/react";
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
    <div className={`w-full space-y-6 ${className}`}>
      {/* Main form with textarea and submit button */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Textarea
            key={textareaKey} // Force re-render when examples are clicked
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you need ..."
            minRows={4}
            className="w-full"
            classNames={{
              input: "text-base",
              inputWrapper: "border border-gray-200 hover:border-gray-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200"
            }}
          />
        </div>
        
        <Button
          type="submit"
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          radius="lg"
          isDisabled={!prompt.trim()} // Disable when textarea is empty or whitespace only
        >
          Start Your Project →
        </Button>
      </form>

      {/* Example prompts section */}
      <div className="space-y-4">
        <p className="text-sm text-gray-600 font-medium">💡 Need inspiration? Try these examples:</p>
        <div className="space-y-3">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="w-full text-left p-4 text-sm text-gray-700 bg-gradient-to-r from-gray-50 to-gray-50/80 hover:from-blue-50 hover:to-purple-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span className="font-medium">"{example.buttonText}"</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};