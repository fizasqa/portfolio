
import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-24 text-center max-w-3xl mx-auto">
      <div className="inline-block h-1 w-12 bg-blue-600 mb-6 rounded-full"></div>
      <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 tracking-tight">
        {title}<span className="text-blue-600">.</span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
          {subtitle}
        </p>
      )}
    </div>
  );
};
