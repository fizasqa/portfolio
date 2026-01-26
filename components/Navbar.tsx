
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-black text-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-105">FK</div>
          <span className="text-lg font-black text-slate-900 dark:text-white">Fiza Karamat</span>
        </a>

        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleNavLinkClick(e, link.href)}
              className="px-4 py-2 rounded-full text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 active:scale-95"
            >
              {link.name}
            </a>
          ))}
          <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-full text-slate-500 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md transition-all focus:outline-none active:scale-90"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            )}
          </button>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-slate-900 dark:text-white p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white dark:bg-slate-950 p-6 shadow-2xl transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-10">
            <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-black text-lg">FK</div>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-3 text-xl font-bold text-slate-900 dark:text-white rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
                onClick={(e) => handleNavLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-2"></div>
            <button onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} className="px-4 py-3 text-xl font-bold text-slate-900 dark:text-white flex items-center justify-between rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              <span>Theme</span>
              <span>{theme === 'light' ? '🌙' : '☀️'}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
