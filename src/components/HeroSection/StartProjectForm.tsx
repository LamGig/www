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
    <div className={`w-full max-w-md space-y-6 ${className}`}>
      {/* Main form with textarea and submit button */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Textarea
            key={textareaKey} // Force re-render when examples are clicked
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your project idea..."
            minRows={4}
            className="w-full"
            classNames={{
              input: "text-base overflow-y-auto",
              inputWrapper: "border border-gray-200 hover:border-gray-300 focus-within:border-gray-900"
            }}
          />
        </div>
        
        <Button
          type="submit"
          size="lg"
          className="w-full bg-gray-900 text-white hover:bg-gray-800 font-medium"
          radius="md"
          isDisabled={!prompt.trim()} // Disable when textarea is empty or whitespace only
        >
          Start Your Project
        </Button>
      </form>

      {/* Example prompts section */}
      <div className="space-y-3">
        <p className="text-sm text-gray-600 font-medium">Try these examples:</p>
        <div className="space-y-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => handleExampleClick(example)}
              className="w-full text-left p-3 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors cursor-pointer"
            >
              "{example.buttonText}"
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};