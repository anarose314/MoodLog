import type { ReactNode } from 'react';

interface FormSectionProps {
  title: string;
  children: ReactNode;
}

export default function FormSection({ title, children }: FormSectionProps) {
  return (
    <section className="flex flex-col items-start gap-2">
      <h2 className="typo-lg-medium">{title}</h2>
      {children}
    </section>
  );
}
