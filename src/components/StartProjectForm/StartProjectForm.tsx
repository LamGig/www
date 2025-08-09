"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  ArrowLeft, 
  Package, 
  User, 
  Building, 
  Mail, 
  Phone, 
  FileText,
  CheckCircle2,
  Clock,
  Shield,
  Sparkles,
  MessageCircle,
  Star
} from "lucide-react";
import { 
  Button, 
  Input, 
  Textarea, 
  Card, 
  CardBody,
  Chip
} from "@heroui/react";
import { pricingPackages } from "@/components/PriceSection/pricingData";

type FormStep = "package" | "business" | "contact";

interface FormData {
  package: "standard" | "enterprise" | null;
  businessDescription: string;
  projectNeeds: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
}

export const StartProjectForm = () => {
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState<FormStep>("package");
  const [formData, setFormData] = useState<FormData>({
    package: null,
    businessDescription: "",
    projectNeeds: "",
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: ""
  });

  // Pre-select package from URL query parameter
  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam === 'standard' || packageParam === 'enterprise') {
      setFormData(prev => ({ ...prev, package: packageParam }));
    }
  }, [searchParams]);

  const steps: { id: FormStep; label: string; icon: React.ReactNode }[] = [
    { id: "package", label: "Select Package", icon: <Package className="w-5 h-5" /> },
    { id: "business", label: "Your Project", icon: <FileText className="w-5 h-5" /> },
    { id: "contact", label: "Contact Info", icon: <User className="w-5 h-5" /> }
  ];

  const currentStepIndex = steps.findIndex(step => step.id === currentStep);

  const handleNext = () => {
    if (currentStep === "package" && formData.package) {
      setCurrentStep("business");
    } else if (currentStep === "business" && formData.businessDescription && formData.projectNeeds) {
      setCurrentStep("contact");
    }
  };

  const handleBack = () => {
    if (currentStep === "business") {
      setCurrentStep("package");
    } else if (currentStep === "contact") {
      setCurrentStep("business");
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted", formData);
  };

  const isStepValid = () => {
    switch (currentStep) {
      case "package":
        return formData.package !== null;
      case "business":
        return formData.businessDescription.trim() !== "" && formData.projectNeeds.trim() !== "";
      case "contact":
        return (
          formData.firstName.trim() !== "" &&
          formData.lastName.trim() !== "" &&
          formData.email.trim() !== "" &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        );
      default:
        return false;
    }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background elements similar to HeroSection */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="text-center mb-12"
        >
          <motion.div variants={itemAnimation} className="mb-8">
            <Chip 
              startContent={<Sparkles className="w-3.5 h-3.5" />}
              variant="flat"
              className="bg-blue-50 border border-blue-200 text-primary font-medium"
            >
              Start Your Mobile App Journey
            </Chip>
          </motion.div>

          <motion.h1 
            variants={itemAnimation}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Let's Build Your App
          </motion.h1>
          
          <motion.p 
            variants={itemAnimation}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We'll respond as fast as we can to get your project started
          </motion.p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div 
          variants={itemAnimation}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300
                    ${currentStepIndex >= index 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-500'
                    }
                  `}
                >
                  {step.icon}
                  <span className="font-medium hidden sm:inline">{step.label}</span>
                </div>
                {index < steps.length - 1 && (
                  <div 
                    className={`
                      w-12 h-0.5 mx-2 transition-all duration-300
                      ${currentStepIndex > index ? 'bg-primary' : 'bg-gray-300'}
                    `}
                  />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form Content */}
        <Card className="border border-gray-100">
          <CardBody className="p-8">
            <AnimatePresence mode="wait">
              {/* Package Selection Step */}
              {currentStep === "package" && (
                <motion.div
                  key="package"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Compact Header */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-1">
                      Choose Your Package
                    </h2>
                    <p className="text-sm text-gray-600">
                      Select the best fit for your business
                    </p>
                  </div>

                  {/* Compact Toggle Buttons */}
                  <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
                    <button
                      onClick={() => setFormData({ ...formData, package: "standard" })}
                      className={`
                        flex-1 py-2 px-3 rounded-md font-medium text-sm transition-all cursor-pointer
                        ${formData.package === "standard"
                          ? 'bg-white text-primary shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                        }
                      `}
                    >
                      <div className="flex items-center justify-center gap-2">
                        {pricingPackages.standard.isPopular && (
                          <Star className="w-3.5 h-3.5 fill-current" />
                        )}
                        Standard
                      </div>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, package: "enterprise" })}
                      className={`
                        flex-1 py-2 px-3 rounded-md font-medium text-sm transition-all
                        ${formData.package === "enterprise"
                          ? 'bg-gray-900 text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                        }
                      `}
                    >
                      Enterprise
                    </button>
                  </div>

                  {/* Package Details Card */}
                  <AnimatePresence mode="wait">
                    {formData.package && (
                      <motion.div
                        key={formData.package}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={`
                          rounded-xl p-5 border-2
                          ${formData.package === "standard"
                            ? 'border-primary bg-gradient-to-br from-blue-50/50 to-white'
                            : 'border-gray-800 bg-gradient-to-br from-gray-900 to-gray-800'
                          }
                        `}
                      >
                        {formData.package === "standard" ? (
                          <>
                            {/* Standard Package Content */}
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                  {pricingPackages.standard.name}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  {pricingPackages.standard.descriptionShort}
                                </p>
                              </div>
                              {pricingPackages.standard.isPopular && (
                                <Chip 
                                  size="sm"
                                  className="bg-green-100 text-green-700 font-medium"
                                >
                                  Popular
                                </Chip>
                              )}
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-4">
                              <span className="text-3xl font-bold text-gray-900">
                                {pricingPackages.standard.price}
                              </span>
                              <span className="text-gray-600">
                                {pricingPackages.standard.priceUnit}
                              </span>
                              <span className="text-xs text-gray-500">
                                • {pricingPackages.standard.yearlyPriceShort}
                              </span>
                            </div>

                            {/* Key Features - Compact */}
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {pricingPackages.standard.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-600 leading-tight">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Enterprise Package Content */}
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h3 className="text-xl font-bold text-white">
                                  {pricingPackages.enterprise.name}
                                </h3>
                                <p className="text-sm text-gray-300 mt-1">
                                  {pricingPackages.enterprise.descriptionShort}
                                </p>
                              </div>
                              <MessageCircle className="w-5 h-5 text-blue-400" />
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-2 mb-4">
                              <span className="text-3xl font-bold text-white">
                                {pricingPackages.enterprise.price}
                              </span>
                              <span className="text-xs text-gray-400">
                                • {pricingPackages.enterprise.yearlyPriceShort}
                              </span>
                            </div>

                            {/* Key Features - Compact */}
                            <div className="grid grid-cols-2 gap-2 mb-4">
                              {pricingPackages.enterprise.features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-1.5">
                                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-xs text-gray-300 leading-tight">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Default Selection Prompt */}
                  {!formData.package && (
                    <div className="text-center py-8 px-4 bg-gray-50 rounded-xl border border-gray-200">
                      <Package className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600 font-medium">Select a package to see details</p>
                      <p className="text-sm text-gray-500 mt-1">Tap on Standard or Enterprise above</p>
                    </div>
                  )}

                  {/* Trust Indicators - Compact */}
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 pt-2">
                    <div className="flex items-center gap-1">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>24/7 support</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Business & Project Details Step */}
              {currentStep === "business" && (
                <motion.div
                  key="business"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Tell Us About Your Project
                  </h2>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your business <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        placeholder="What does your business do? Who are your customers? What makes you unique?"
                        value={formData.businessDescription}
                        onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                        minRows={4}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What do you need the app to do? <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        placeholder="Describe the features you need, any specific functionality, and your goals for the app"
                        value={formData.projectNeeds}
                        onChange={(e) => setFormData({ ...formData, projectNeeds: e.target.value })}
                        minRows={4}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">Quick Response</p>
                          <p className="text-sm text-gray-600 mt-1">
                            We'll review your project details and get back to you as quickly as possible with next steps.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Contact Information Step */}
              {currentStep === "contact" && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Contact Information
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        startContent={<User className="w-4 h-4 text-gray-400" />}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company <span className="text-gray-500">(Optional)</span>
                      </label>
                      <Input
                        placeholder="Acme Inc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        startContent={<Building className="w-4 h-4 text-gray-400" />}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        startContent={<Mail className="w-4 h-4 text-gray-400" />}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone <span className="text-gray-500">(Optional)</span>
                      </label>
                      <Input
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        startContent={<Phone className="w-4 h-4 text-gray-400" />}
                        classNames={{
                          input: "text-gray-900",
                          inputWrapper: "border-gray-300 hover:border-gray-400 focus:border-primary"
                        }}
                      />
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-gray-900">Your information is secure</p>
                        <p className="text-sm text-gray-600 mt-1">
                          We respect your privacy and will only use your information to respond to your project inquiry.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <Button
                variant="flat"
                className="text-gray-700"
                startContent={<ArrowLeft className="w-4 h-4" />}
                onPress={handleBack}
                isDisabled={currentStep === "package"}
              >
                Back
              </Button>

              {currentStep === "contact" ? (
                <Button
                  className="bg-primary text-white px-6"
                  endContent={<CheckCircle2 className="w-4 h-4" />}
                  onPress={handleSubmit}
                  isDisabled={!isStepValid()}
                >
                  Submit Project
                </Button>
              ) : (
                <Button
                  className="bg-primary text-white px-6"
                  endContent={<ArrowRight className="w-4 h-4" />}
                  onPress={handleNext}
                  isDisabled={!isStepValid()}
                >
                  Continue
                </Button>
              )}
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};