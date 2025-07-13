"use client";

import { Controller, useForm } from "react-hook-form";
import { Button, Textarea, Form, Input } from "@heroui/react";
import { Lightbulb, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { examplePrompts, type ExamplePrompt } from "./examplePrompts";

/**
 * Form data interface for the project form
 */
interface ProjectFormData {
  /** The project description/prompt */
  prompt: string;
  /** Contact information */
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;
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
  // STATE MANAGEMENT
  // =====================
  
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  
  // =====================
  // FORM MANAGEMENT
  // =====================
  
  const { handleSubmit, control, setValue, watch } = useForm<ProjectFormData>({
    defaultValues: {
      prompt: "",
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
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
   * Handles proceeding to step 2 (contact information)
   */
  const handleNextStep = () => {
    setCurrentStep(2);
  };

  /**
   * Handles going back to step 1 (project description)
   */
  const handleBackStep = () => {
    setCurrentStep(1);
  };

  /**
   * Handles final form submission
   * Logs all form data for development purposes
   */
  const onSubmit = (data: ProjectFormData) => {
    console.log("Form submitted:", {
      prompt: data.prompt,
      contact: {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phonenumber: data.phonenumber,
      }
    });
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
          Tell us about your vision and we&apos;ll match you with the perfect team
        </p>
      </div>
      
      <div className={`w-full min-w-0 overflow-hidden ${className}`}>
        <div className="relative">
          {/* Step 1: Project Description */}
          <div className={`transition-transform duration-500 ease-in-out ${
            currentStep === 1 ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="space-y-6">
              {/* Textarea and next button */}
              <div className="w-full space-y-4">
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
                  onClick={handleNextStep}
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
              </div>

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
                      <span className="font-medium">&quot;{example.buttonText}&quot;</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Contact Information */}
          <div className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
            currentStep === 2 ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Controller
                  control={control}
                  name="firstname"
                  render={({
                    field: { name, value, onChange, onBlur, ref },
                    fieldState: { invalid, error }
                  }) => (
                    <Input
                      ref={ref}
                      name={name}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder="First Name"
                      variant="bordered"
                      validationBehavior="aria"
                      isInvalid={invalid}
                      errorMessage={error?.message}
                      classNames={{
                        input: "text-base",
                        inputWrapper: "border border-black/20 hover:border-black/40 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 bg-gray-50 data-[focus=true]:bg-white transition-all duration-200"
                      }}
                    />
                  )}
                />
                
                <Controller
                  control={control}
                  name="lastname"
                  render={({
                    field: { name, value, onChange, onBlur, ref },
                    fieldState: { invalid, error }
                  }) => (
                    <Input
                      ref={ref}
                      name={name}
                      value={value}
                      onChange={onChange}
                      onBlur={onBlur}
                      placeholder="Last Name"
                      variant="bordered"
                      validationBehavior="aria"
                      isInvalid={invalid}
                      errorMessage={error?.message}
                      classNames={{
                        input: "text-base",
                        inputWrapper: "border border-black/20 hover:border-black/40 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 bg-gray-50 data-[focus=true]:bg-white transition-all duration-200"
                      }}
                    />
                  )}
                />
              </div>
              
              <Controller
                control={control}
                name="email"
                render={({
                  field: { name, value, onChange, onBlur, ref },
                  fieldState: { invalid, error }
                }) => (
                  <Input
                    ref={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Email Address"
                    type="email"
                    variant="bordered"
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
                  required: "Email address is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address."
                  }
                }}
              />
              
              <Controller
                control={control}
                name="phonenumber"
                render={({
                  field: { name, value, onChange, onBlur, ref },
                  fieldState: { invalid, error }
                }) => (
                  <Input
                    ref={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="Phone Number (Optional)"
                    type="tel"
                    variant="bordered"
                    validationBehavior="aria"
                    isInvalid={invalid}
                    errorMessage={error?.message}
                    classNames={{
                      input: "text-base",
                      inputWrapper: "border border-black/20 hover:border-black/40 focus-within:border-black focus-within:ring-2 focus-within:ring-black/10 bg-gray-50 data-[focus=true]:bg-white transition-all duration-200"
                    }}
                  />
                )}
              />

              {/* Navigation buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={handleBackStep}
                  size="lg"
                  variant="bordered"
                  className="flex-1 border-black text-black hover:bg-black/5 font-semibold transition-all duration-200"
                  radius="lg"
                >
                  <span className="flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-1" strokeWidth={3} />
                    Back
                  </span>
                </Button>
                
                <Button
                  type="submit"
                  size="lg"
                  className="flex-1 bg-black text-white hover:bg-black/80 font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  radius="lg"
                >
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};