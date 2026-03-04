
import React from 'react';
import { SUMMARY_POINTS, EDUCATION, CERTIFICATIONS } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">About Me</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Professional Summary</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I'm Fiza Karamat, a dedicated Software Quality Assurance Engineer with a proven track record of leading, organizing, and delivering high-impact software projects featuring robust functionality and top-tier security.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 flex flex-col gap-6 reveal-left">
            <div className="relative group self-center mb-4">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden border-4 border-blue-50 dark:border-blue-900/20 shadow-xl group-hover:scale-105 transition-all duration-500">
                <img 
                  src="./images/profile.jpeg" 
                  alt="Fiza Karamat Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                Education
              </h3>
              <p className="text-sm font-bold text-slate-900 dark:text-white mb-1">{EDUCATION.degree}</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">{EDUCATION.institution}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest">{EDUCATION.period}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                Certifications
              </h3>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, idx) => (
                  <li key={idx} className="group/cert">
                    <p className="text-[11px] font-bold text-slate-900 dark:text-white group-hover/cert:text-blue-600 transition-colors">{cert.name}</p>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{cert.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="lg:w-2/3 reveal-right">
            <div className="bg-blue-50/30 dark:bg-slate-900/50 rounded-3xl p-8 border border-blue-100/50 dark:border-blue-900/20 shadow-sm h-full">
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-8 border-b border-blue-100 dark:border-slate-800 pb-4">Key Strengths</h3>
              <div className="grid gap-6">
                {SUMMARY_POINTS.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 font-medium text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
