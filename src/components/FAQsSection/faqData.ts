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
        answer: "LamGig is a platform that connects you with pre-vetted, top-tier talent for your projects. We handle the recruitment, vetting, talent, and project management so you can focus on your business goals."
      },
      {
        question: "How are you different from other platforms?",
        answer: "We provide rigorous talent vetting, complete project management, and match you with only the best candidates. Unlike other platforms, we don't make you sift through hundreds of profiles and interviews; we simply deliver quality matches. Also, unlike other platforms where you have to hunt down the status of your project, we update you on its progress daily."
      },
      {
        question: "What's the minimum project duration?",
        answer: "To ensure high-quality delivery and proper project development, our minimum engagement is 2 weeks, with most projects exceeding 3 months. Additionally, we offer 2 months free for annual contracts."
      },
      {
        question: "Do I own the intellectual property?",
        answer: "Yes! You retain full ownership of all intellectual property created during your project. Our terms of service clearly cover this protection."
      },
      {
        question: "What technologies do you support?",
        answer: "We specialize in JavaScript, React, React Native, Python, React, Node.js, mobile development, data science, AI/ML. Our talent pool covers full-stack development, DevOps, and specialized domains."
      }
    ]
  },
  {
    title: "Talent & Team",
    id: "talent",
    items: [
      {
        question: "How do you vet your talent?",
        answer: "Our 5-stage vetting process includes CV and portfolio review, background verification, technical assessments, and in-person interviews."
      },
      {
        question: "What's the experience level of your talent?",
        answer: "All our professionals have a minimum of 2 years of experience, with an average of 4-6 years."
      },
      {
        question: "Where are your team members located?",
        answer: "Our talent is primarily located in Vietnam at this time. Our CTO is in the USA; he is a senior developer with over a decade of experience."
      }
    ]
  },
  {
    title: "Billing & Pricing",
    id: "billing",
    items: [
      {
        question: "How does billing work?",
        answer: "We use a two-part billing system: an initial deposit for project setup and regular monthly payments. Any unused funds are refunded at project completion."
      },
      {
        question: "When will I be charged?",
        answer: "Monthly billing occurs on the last day of each month. For weekly arrangements, billing happens every Tuesday based on reported hours from the previous week."
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
      }
    ]
  }
];