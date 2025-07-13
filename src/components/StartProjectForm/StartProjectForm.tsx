"use client";

import { Controller, useForm } from "react-hook-form";
import { Button, Textarea, Form } from "@heroui/react";
import { Lightbulb, ArrowRight } from "lucide-react";
import { examplePrompts, type ExamplePrompt } from "./examplePrompts";

/**
 * Form data interface for the project form
 */
interface ProjectFormData {
  /** The project description/prompt */
  prompt: string;
}

/**
 * Props interface for the StartProjectForm component
 */
interface StartProjectFormProps {
  /** Optional CSS class name for styling */
  className?: string;
}

/**
 * A form component that allows users to describe their project ideas
 * with a textarea input and example prompts for inspiration.
 * Uses react-hook-form for form management and validation.
 */
export const StartProjectForm = ({ className = "" }: StartProjectFormProps) => {
  
  // =====================
  // FORM MANAGEMENT
  // =====================
  
  const { handleSubmit, control, setValue, watch } = useForm<ProjectFormData>({
    defaultValues: {
      prompt: "",
    },
  });

  // Watch the prompt value to enable/disable submit button
  const promptValue = watch("prompt");

  // =====================
  // EVENT HANDLERS
  // =====================
  
  /**
   * Handles clicking on an example prompt button
   * Sets the form value using react-hook-form setValue
   */
  const handleExampleClick = (example: ExamplePrompt) => {
    setValue("prompt", example.promptValue);
  };

  /**
   * Handles form submission
   * Currently logs the prompt for development purposes
   */
  const onSubmit = (data: ProjectFormData) => {
    // TODO: Handle form submission
    console.log("Project prompt:", data.prompt);
  };

  // =====================
  // RENDER
  // =====================
  
  return (
    <div className="bg-white rounded-2xl border border-black p-6 lg:p-10 shadow-2xl">
      <div className="mb-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">
          Start Your Project
        </h1>
        <p className="text-lg text-black">
          Tell us about your vision and we'll match you with the perfect team
        </p>
      </div>
      
      <div className={`w-full min-w-0 space-y-6 ${className}`}>
        {/* Main form with textarea and submit button */}
        <Form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
          <div className="w-full">
            <Controller
              control={control}
              name="prompt"
              render={({
                field: { name, value, onChange, onBlur, ref },
                fieldState: { invalid, error }
              }) => (
                <Textarea
                  ref={ref}
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  placeholder="Describe what you need ..."
                  minRows={4}
                  variant="bordered"
                  className="w-full"
                  validationBehavior="aria"
                  isInvalid={invalid}
                  errorMessage={error?.message}
                  classNames={{
                    input: "text-base",
                    inputWrapper: "border border-black/20 hover:border-black/40 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 bg-gray-50 data-[focus=true]:bg-white transition-all duration-200"
                  }}
                />
              )}
              rules={{
                required: "Please describe your project idea.",
                minLength: {
                  value: 10,
                  message: "Please provide at least 10 characters."
                }
              }}
            />
          </div>
          
          <Button
            type="submit"
            size="lg"
            className="w-full bg-black text-white hover:bg-black/80 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
            radius="lg"
            isDisabled={!promptValue?.trim()}
          >
            <span className="flex items-center">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-1" strokeWidth={3} />
            </span>
          </Button>
        </Form>

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

    </div>
  );
};