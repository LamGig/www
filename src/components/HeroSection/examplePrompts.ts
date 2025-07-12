/**
 * Configuration for example prompts in the StartProjectForm component
 */

/**
 * Interface for an example prompt with separate display and value text
 */
export interface ExamplePrompt {
  /** Text displayed on the button */
  buttonText: string;
  /** Text that gets populated in the textarea when clicked */
  promptValue: string;
}

/**
 * Predefined example prompts to help users get started with their project descriptions
 * Each prompt has separate text for the button display and the actual textarea value
 */
export const examplePrompts: ExamplePrompt[] = [
  {
    buttonText: "I need a new website for ...",
    promptValue: `I need a new website for my restaurant business.

Key requirements:
- Online menu and ordering system
- Table reservation functionality
- Mobile-responsive design
- Integration with payment systems

Timeline: 6-8 weeks`
  },
  {
    buttonText: "I want to build a mobile app that ...",
    promptValue: `I want to build a mobile app that connects local services.

The app should:
- Allow users to find nearby service providers
- Include booking and scheduling features
- Have user reviews and ratings
- Support in-app messaging between users and providers
- Include payment processing

Platform: iOS and Android
`
  },
  {
    buttonText: "My startup team needs some frontend devs to ...",
    promptValue: `My startup team needs some frontend devs to build our MVP.

We're looking for:
- 2-3 experienced React developers
- Experience with TypeScript and modern tooling
- Strong understanding of React workflows (e.g., Redux, Context API, React Router).
- Ability to work in an agile environment

Project details:
- SaaS dashboard for small businesses
- 3-month initial engagement, with potential to extend further
- We have the design already
- We have in-house backend engieers who will be working on the backend
`
  }
];