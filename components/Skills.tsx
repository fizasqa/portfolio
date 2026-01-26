
import React from 'react';
import { SKILLS, SKILLS_DESCRIPTIONS, TOOLS } from '../constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">Core Competencies</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-slate-400">Specialized skill set in quality assurance and software testing</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 stagger-container">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-all">
              <div className="text-3xl mb-4 inline-block p-4 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600">
                {skill.icon}
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2">{skill.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {SKILLS_DESCRIPTIONS[skill.name]}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 reveal">
          <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Tools & Technologies</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 stagger-container">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center gap-3 hover:shadow-md transition-all group">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={tool.icon} 
                  alt={tool.name} 
                  className={`w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110 ${tool.name === 'Cypress' || tool.name === 'Git' ? 'dark:invert dark:brightness-200' : ''}`} 
                />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white">{tool.name}</h4>
                <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">{tool.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
