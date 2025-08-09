import * as React from 'react';

interface BasicEmailTemplateProps {
  firstName: string;
}

export function BasicEmailTemplate({ firstName }: BasicEmailTemplateProps) {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
    </div>
  );
}