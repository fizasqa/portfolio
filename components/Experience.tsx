
import React from 'react';
import { EXPERIENCES } from '../constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">Career Path</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-slate-600 dark:text-slate-400">A proven track record of delivering quality assurance excellence</p>
        </div>
        
        <div className="space-y-8 stagger-container">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-10 border-l-2 border-slate-200 dark:border-slate-800 pb-12 last:pb-0">
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-slate-950"></div>
              
              <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                      <span className="text-slate-600 dark:text-slate-400 font-bold">{exp.company}</span>
                      <span className="text-slate-300 mx-1">•</span>
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                      <span className="text-slate-500 text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {exp.period}
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4">Key Achievements:</h4>
                  <ul className="grid gap-3">
                    {exp.keyAchievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm">
                        <svg className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
