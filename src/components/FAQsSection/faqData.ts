export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  id: string;
  items: FAQItem[];
}

export const faqData: FAQSection[] = [
  {
    title: "General",
    id: "general",
    items: [
      {
        question: "What is LamGig?",
        answer: "LamGig is a complete mobile app platform for small businesses. We provide professional iOS and Android apps with a backend, CMS, and hosting - all for one flat monthly fee of $400 or $4000/year."
      },
      {
        question: "How are you different from other app builders?",
        answer: "Unlike DIY app builders, we handle everything for you - from customization to app store submission. You get a professional, white-labeled app without any technical work. Our apps are built with real native code, not web wrappers."
      },
      {
        question: "How quickly can I get my app?",
        answer: "Standard Package apps are typically live within 7 days. This includes customization, app store submission, and CMS setup. Enterprise custom apps take 4-12 weeks depending on complexity."
      },
      {
        question: "Do I own the app?",
        answer: "Yes! You own your brand, content, and customer data. The app is published under your developer account. For Enterprise packages, you also receive the source code."
      },
      {
        question: "What types of businesses do you serve?",
        answer: "We serve restaurants, retail stores, service businesses, fitness studios, salons, professional services, and any small business that wants to engage customers through a mobile app."
      }
    ]
  },
  {
    title: "Features & Technology",
    id: "features",
    items: [
      {
        question: "What features are included?",
        answer: "Standard apps include: push notifications, user accounts, product/service catalogs, booking systems, payment processing, loyalty programs, analytics, and a custom CMS to manage everything."
      },
      {
        question: "Can I update content myself?",
        answer: "Absolutely! Our custom CMS lets you update products, prices, images, promotions, and content in real-time without any coding. Changes appear instantly in your app."
      },
      {
        question: "What about app store requirements?",
        answer: "We handle all app store submissions and requirements. We ensure your app meets Apple and Google guidelines and manage the entire approval process for you."
      }
    ]
  },
  {
    title: "Billing & Pricing",
    id: "billing",
    items: [
      {
        question: "What's included in the $400/month Standard Package?",
        answer: "Everything you need: iOS & Android apps, backend infrastructure, hosting, CMS access, app store submissions, maintenance, updates, and ongoing support."
      },
      {
        question: "How much can I save with annual billing?",
        answer: "Annual billing is $4000/year - that's $800 in savings (2 months free). It's our most popular option for businesses committed to mobile growth."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept ACH direct debit and credit cards processed through Stripe for secure, reliable payments. Monthly billing occurs on the same date each month."
      },
      {
        question: "Are there any setup fees?",
        answer: "No setup fees for Standard Package! The $400/month (or $4000/year) covers everything. Enterprise custom projects are quoted individually based on requirements."
      },
      {
        question: "Can I cancel anytime?",
        answer: "Yes, monthly plans can be cancelled anytime with 30 days notice. Annual plans are commitment-based but include significant savings."
      }
    ]
  },
  {
    title: "Support & Maintenance",
    id: "support",
    items: [
      {
        question: "What support do you provide?",
        answer: "We provide 24/7 technical support, CMS training, regular app updates, bug fixes, OS compatibility updates, and ongoing maintenance - all included in your subscription."
      },
      {
        question: "What if I need custom features later?",
        answer: "You can add custom features anytime. Simple additions are often included in your plan. Complex features may require upgrading to Enterprise or a one-time development fee."
      },
      {
        question: "Do you handle app updates?",
        answer: "Yes! We handle all technical updates including OS compatibility, security patches, and app store requirement changes. Your app always stays current and compliant."
      }
    ]
  }
];
