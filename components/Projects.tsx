
import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-20 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-800">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">
            Featured <span className="text-blue-600">QA Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            A selection of my professional work demonstrating technical proficiency across 
            automated and manual testing lifecycles in diverse industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-container">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white leading-tight">{project.name}</h3>
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <div className="mb-6">
                  <h4 className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Project Overview</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4">Key Responsibilities</h4>
                  <ul className="space-y-3">
                    {project.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold rounded-full border border-slate-200 dark:border-slate-700 group-hover:border-blue-600 group-hover:text-blue-600 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
