import React from 'react';
import { ShieldAlert, ArrowUp, Sparkles, BookOpen, Layers, Target, Compass } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 72;
      const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand & Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-navy-850">
          
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-navy-800 border border-brand-cyan/40">
                <ShieldAlert className="w-5 h-5 text-brand-cyan" />
              </div>
              <div>
                <span className="font-mono font-bold text-white text-base tracking-wider block">
                  SIH26165 – Research Hub
                </span>
                <span className="text-xs text-brand-sky font-medium">
                  Smart India Hackathon 2026
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              AI/NLP Engine for Detecting Serious Injury & Fatality Precursors in OIL's Unsafe-Act, Unsafe-Condition and Near-Miss Reports.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-900 border border-navy-800 text-[11px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Oil India Limited (OIL) Domain Research</span>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Core Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <button 
                  onClick={() => scrollTo('problem-statement')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  01. Problem Statement
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('research-papers')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  02. Research Papers & Matrix
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('research-gap')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  04. Research Gap & Limitations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('proposed-system')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  06. Proposed Architecture
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollTo('references')}
                  className="hover:text-brand-cyan transition-colors cursor-pointer"
                >
                  09. Academic References
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4">
              Hackathon Context
            </h4>
            <div className="p-4 rounded-xl bg-navy-900/60 border border-navy-800 text-xs text-slate-400 space-y-2">
              <div className="flex justify-between font-mono text-[11px]">
                <span>Hackathon:</span>
                <span className="text-white">SIH 2026</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span>Problem Code:</span>
                <span className="text-brand-cyan">SIH26165</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span>Literature Corpus:</span>
                <span className="text-white">10 Studies</span>
              </div>
              <div className="flex justify-between font-mono text-[11px]">
                <span>Primary Paradigm:</span>
                <span className="text-sif-orange">SIF Precursor Extraction</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>
            SIH26165 Research Hub • Built for Smart India Hackathon 2026. Literature review & proposed research architecture.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-800 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-brand-cyan" />
          </button>
        </div>

      </div>
    </footer>
  );
}
