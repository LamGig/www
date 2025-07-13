# RULES.md

This file provides additional rules to Claude Code (claude.ai/code) when working with code in this repository, together with the default CLAUDE.md

## Comment Style

When adding comments to React/TypeScript files, use this specific commenting style and structure:

1. **JSDoc-style component documentation**: Use /** */ blocks for components and interfaces with descriptive text
2. **Section dividers**: Use decorative comment blocks with equal signs to separate logical sections:
// =====================
// SECTION NAME
// =====================
3. **JSDoc property documentation**: Use /** */ with descriptive text for state variables, props, and important 
variables
4. **Inline comments**: Use // for explaining non-obvious logic, workarounds, or important implementation details
5. **JSX comments**: Use {/* */} for explaining sections of JSX markup

**Section order and naming**:
- STATE MANAGEMENT (for useState, useRef, etc.)
- CONFIGURATION (for constants, arrays, objects)
- EVENT HANDLERS (for functions that handle events)
- RENDER (for the return statement)

**Example structure**:
```typescript
/**
 * Component description here
 */
export const ComponentName = ({ prop }: Props) => {
  // =====================
  // STATE MANAGEMENT
  // =====================
  
  /** Description of what this state does */
  const [state, setState] = useState("");
  
  // =====================
  // EVENT HANDLERS
  // =====================
  
  /**
* Description of what this handler does
*/
  const handleSomething = () => {
  // Inline comment for non-obvious logic
  };

  // =====================
  // RENDER
  // =====================
  
  return (
  <div>
    {/* JSX section comment */}
  </div>
  );
};

Do not add file header comments. Focus on clear, descriptive documentation that explains the "why" not just the
"what".
```