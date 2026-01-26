
import React from 'react';

export const Hero: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 bg-white dark:bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal-left active">
            <div className="inline-flex animate-fade-in-up items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lahore, Pakistan
            </div>
            
            <div>
              <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4 tracking-tight animate-fade-in-up [animation-delay:200ms]">
                Fiza <span className="text-blue-600 inline-block hover:scale-105 transition-transform duration-300">Karamat</span>
              </h1>
              <h2 className="text-3xl font-bold text-blue-600 mb-2 animate-fade-in-up [animation-delay:400ms]">SQA Engineer</h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest animate-fade-in-up [animation-delay:600ms]">
                Manual | API | Automation | Agile | Performance
              </p>
            </div>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl animate-fade-in-up [animation-delay:800ms]">
              Dedicated Software Quality Assurance Engineer with a proven track record in leading high-impact projects at NESPAK. Expert in delivering robust, high-performance solutions that exceed client expectations.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up [animation-delay:1000ms]">
              <button className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-all flex items-center gap-2 text-sm shadow-lg shadow-blue-500/20 active:scale-95">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </button>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="px-6 py-2.5 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold rounded-md transition-all hover:bg-blue-50 dark:hover:bg-blue-900/10 text-sm flex items-center justify-center active:scale-95"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-5 pt-4 animate-fade-in-up [animation-delay:1200ms]">
              <a href="mailto:fizaykhan60@gmail.com" className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md hover:bg-blue-600 hover:text-white transition-all text-slate-500 dark:text-slate-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <a href="https://www.linkedin.com/in/fiza-karamat-ba5965239" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-900 rounded-md hover:bg-blue-600 hover:text-white transition-all text-slate-500 dark:text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239-5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="relative reveal-right active flex justify-center lg:justify-end">
            <div className="max-w-sm w-full relative group">
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl rotate-3 scale-105 -z-10 group-hover:rotate-6 transition-transform duration-700"></div>
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQF3oluANAhzZQ/profile-displayphoto-scale_400_400/B4DZvS516BH0Ak-/0/1768769939869?e=1770854400&v=beta&t=cK71bBX-zXZRAOwo31CFSPYom40AjqL-_6B7qF-8hrk" 
                alt="Fiza Karamat" 
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10 transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl z-20 border border-slate-100 dark:border-slate-800 hidden md:block animate-bounce">
                 <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black text-slate-900 dark:text-white uppercase tracking-tighter">Open to work</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
