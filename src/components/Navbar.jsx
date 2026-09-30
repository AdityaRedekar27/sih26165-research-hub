import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  BookOpen, 
  Cpu, 
  GitCompare, 
  ExternalLink, 
  Menu, 
  X, 
  Layers, 
  Activity,
  Award
} from 'lucide-react';

export default function Navbar({ onOpenPaperModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'overview',
        'problem-statement',
        'research-papers',
        'paper-analysis',
        'research-gap',
        'proposed-system',
        'research-insights',
        'references',
        'qr-scanner'
      ];

      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Problem Statement', href: '#problem-statement' },
    { label: 'Research Papers', href: '#research-papers' },
    { label: 'Analysis', href: '#paper-analysis' },
    { label: 'Research Gap', href: '#research-gap' },
    { label: 'Proposed System', href: '#proposed-system' },
    { label: 'References', href: '#references' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 72;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-navy-700/80 shadow-lg shadow-black/40 py-3' 
          : 'bg-navy-950/60 backdrop-blur-sm border-b border-navy-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Identification */}
          <a 
            href="#overview" 
            onClick={(e) => handleNavClick(e, '#overview')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-cyan/50 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-navy-800 border border-brand-cyan/30 group-hover:border-brand-cyan transition-colors">
              <ShieldAlert className="w-5 h-5 text-brand-cyan group-hover:scale-105 transition-transform" />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sif-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sif-orange"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-white text-base tracking-wider">
                  SIH26165
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold rounded bg-navy-800 text-brand-cyan border border-brand-cyan/30">
                  Research Hub
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block">
                AI/NLP SIF Precursor Detection • OIL
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-brand-cyan bg-navy-800/80 border border-brand-cyan/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-navy-800/40'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Quick Action Badge / QR trigger */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#qr-scanner"
              onClick={(e) => handleNavClick(e, '#qr-scanner')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md bg-navy-800 border border-navy-700 hover:border-brand-cyan/50 text-slate-300 hover:text-white transition-all shadow-sm"
            >
              <Activity className="w-3.5 h-3.5 text-brand-cyan" />
              <span>SIH 2026</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900/95 backdrop-blur-xl border-b border-navy-700/80 px-4 pt-3 pb-6 space-y-1">
          <div className="px-2 py-1 mb-2 text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-navy-800">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2.5 rounded-md text-sm font-medium text-slate-200 hover:text-brand-cyan hover:bg-navy-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-navy-800 mt-2">
            <a
              href="#qr-scanner"
              onClick={(e) => handleNavClick(e, '#qr-scanner')}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-md text-xs font-mono bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30"
            >
              <Activity className="w-4 h-4" />
              View Research Scanner & QR
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
