
import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-4">Get in Touch</span>
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Let's Connect</h2>
          <p className="text-slate-600 dark:text-slate-400">I'm always open to discussing new opportunities and collaborations</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6 reveal-left">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h3>
            
            <div className="space-y-4 stagger-container">
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <a href="mailto:fizaykhan60@gmail.com" className="font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">fizaykhan60@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Location</p>
                  <p className="font-bold text-slate-700 dark:text-slate-200">Lahore, Punjab, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/fiza-karamat-ba5965239" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors">Connect on LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm reveal-right">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-600 outline-none transition-all dark:text-white text-sm" placeholder="john@example.com" />
              </div>
              <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
