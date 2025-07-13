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
        answer: "LamGig is a platform that connects you with pre-vetted, top-tier talent for your projects. We handle the recruitment, vetting, and project management so you can focus on your business goals."
      },
      {
        question: "How are you different from other platforms?",
        answer: "We provide rigorous talent vetting, complete project management, and match you with only the best candidates. Unlike other platforms, we don't make you sift through hundreds of profiles - we deliver quality matches."
      },
      {
        question: "What's the minimum project duration?",
        answer: "Our minimum engagement is 160 hours, with most projects averaging 3-6 months. This ensures quality delivery and proper project development."
      },
      {
        question: "Do I own the intellectual property?",
        answer: "Yes! You retain full ownership of all intellectual property created during your project. Our terms of service clearly cover this protection."
      },
      {
        question: "What technologies do you support?",
        answer: "We specialize in JavaScript, Python, React, Node.js, mobile development, data science, AI/ML, and many other modern technologies. Our talent pool covers full-stack development, DevOps, and specialized domains."
      }
    ]
  },
  {
    title: "Talent & Team",
    id: "talent",
    items: [
      {
        question: "How do you vet your talent?",
        answer: "Our 5-stage vetting process includes CV review, background verification, technical assessments, coding challenges, and comprehensive interviews. Only the top 3% of applicants make it through."
      },
      {
        question: "What's the experience level of your talent?",
        answer: "All our professionals have a minimum of 3 years of experience, with an average of 5+ years. We don't work with junior developers to ensure project quality."
      },
      {
        question: "Can I communicate directly with the team?",
        answer: "Absolutely! We encourage direct communication with your assigned team members. You'll have full access to collaborate and provide feedback throughout the project."
      },
      {
        question: "Where are your team members located?",
        answer: "Our talent is primarily located across North America, Europe, and Latin America, ensuring timezone compatibility and excellent English communication."
      },
      {
        question: "What are your hourly rates?",
        answer: "Our rates start at $55-85/hour depending on the expertise level and project requirements. All pricing is transparent with no hidden fees."
      }
    ]
  },
  {
    title: "Billing & Pricing",
    id: "billing",
    items: [
      {
        question: "How does billing work?",
        answer: "We use a two-part billing system: an initial deposit for project setup and regular monthly payments based on actual hours worked. Any unused funds are refunded at project completion."
      },
      {
        question: "When will I be charged?",
        answer: "Monthly billing occurs on the first Tuesday of each month. For weekly arrangements, billing happens every Tuesday based on reported hours from the previous week."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept ACH direct debit and credit cards processed through Stripe for secure, reliable payments."
      },
      {
        question: "Are there any upfront fees?",
        answer: "We require a deposit (pre-payment) that gets applied to your project costs. This deposit is fully refundable if not used."
      },
      {
        question: "What happens to unused budget?",
        answer: "Any remaining balance from your deposit will be transferred back to your original payment method after project completion."
      }
    ]
  },
  {
    title: "Project Management",
    id: "project-management",
    items: [
      {
        question: "Do you provide project estimates?",
        answer: "Yes! We provide detailed hour estimates based on your project requirements and scope. Our experienced team helps you plan realistic timelines and budgets."
      },
      {
        question: "How do you ensure project quality?",
        answer: "We provide daily updates, regular check-ins, and comprehensive project monitoring. Our project managers ensure deliverables meet your standards and deadlines."
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer: "We offer a zero-risk guarantee. If you're not satisfied within the first week, we'll find you a replacement team at no additional cost."
      },
      {
        question: "Can team members work from your office?",
        answer: "For full-time engagements, office work arrangements are possible. We can cover travel expenses for key team members when necessary."
      }
    ]
  }
];