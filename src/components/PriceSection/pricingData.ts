export const pricingPackages = {
  standard: {
    name: "Standard",
    price: "$400",
    priceUnit: "/month",
    yearlyPrice: "or $4,000/year (save $800)",
    yearlyPriceShort: "or $4000/year",
    description: "Perfect for small businesses ready to go mobile",
    descriptionShort: "Perfect for getting started quickly",
    features: [
      "iOS & Android apps",
      "White-labeled with your branding",
      "Custom CMS for content management",
      "Backend infrastructure & hosting",
      "App store submission & approval",
      "Regular updates & maintenance",
      "24/7 technical support"
    ],
    isPopular: true
  },
  enterprise: {
    name: "Enterprise",
    price: "Custom",
    priceUnit: "",
    yearlyPrice: "Tailored to your needs",
    yearlyPriceShort: "Contact for quote",
    description: "Fully custom apps for unique business needs",
    descriptionShort: "For unique business requirements",
    features: [
      "Completely custom app development",
      "Custom UI/UX design",
      "Advanced integrations (POS, CRM, etc.)",
      "Source code ownership",
      "Custom backend architecture",
      "Priority support & SLAs",
      "Dedicated project manager & dev",
      "QA from third-party firm"
    ],
    isPopular: false
  }
};