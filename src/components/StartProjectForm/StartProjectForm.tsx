"use client";

import { useState } from "react";
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
  Sparkles
} from "lucide-react";
import { 
  Button, 
  Input, 
  Textarea, 
  Card, 
  CardBody,
  Chip,
  RadioGroup,
  Radio
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
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Choose Your Package
                  </h2>

                  <RadioGroup
                    value={formData.package || ""}
                    onValueChange={(value) => setFormData({ ...formData, package: value as "standard" | "enterprise" })}
                  >
                    <div className="space-y-4">
                      {/* Standard Package */}
                      <Card 
                        className={`
                          border-2 transition-all duration-300 cursor-pointer
                          ${formData.package === "standard" 
                            ? 'border-primary bg-blue-50/30' 
                            : 'border-gray-200 hover:border-gray-300'
                          }
                        `}
                      >
                        <CardBody className="p-6">
                          <Radio value="standard" className="w-full">
                            <div className="flex-1 ml-2">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {pricingPackages.standard.name}
                                </h3>
                                {pricingPackages.standard.isPopular && (
                                  <Chip size="sm" className="bg-primary text-white">
                                    Most Popular
                                  </Chip>
                                )}
                              </div>
                              <p className="text-gray-600 mb-3">
                                {pricingPackages.standard.descriptionShort}
                              </p>
                              <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-3xl font-bold text-primary">
                                  {pricingPackages.standard.price}
                                </span>
                                <span className="text-gray-600">
                                  {pricingPackages.standard.priceUnit}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {pricingPackages.standard.yearlyPriceShort}
                                </span>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {pricingPackages.standard.features.slice(0, 4).map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Radio>
                        </CardBody>
                      </Card>

                      {/* Enterprise Package */}
                      <Card 
                        className={`
                          border-2 transition-all duration-300 cursor-pointer
                          ${formData.package === "enterprise" 
                            ? 'border-primary bg-blue-50/30' 
                            : 'border-gray-200 hover:border-gray-300'
                          }
                        `}
                      >
                        <CardBody className="p-6">
                          <Radio value="enterprise" className="w-full">
                            <div className="flex-1 ml-2">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {pricingPackages.enterprise.name}
                                </h3>
                              </div>
                              <p className="text-gray-600 mb-3">
                                {pricingPackages.enterprise.descriptionShort}
                              </p>
                              <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-3xl font-bold text-primary">
                                  {pricingPackages.enterprise.price}
                                </span>
                                <span className="text-sm text-gray-500">
                                  {pricingPackages.enterprise.yearlyPriceShort}
                                </span>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {pricingPackages.enterprise.features.slice(0, 4).map((feature, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                                    <span>{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Radio>
                        </CardBody>
                      </Card>
                    </div>
                  </RadioGroup>
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