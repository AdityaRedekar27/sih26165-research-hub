import React from 'react';
import { 
  ArrowRight, 
  Database, 
  BrainCircuit, 
  AlertTriangle, 
  BarChart3, 
  CheckCircle2, 
  Sparkles,
  ChevronDown,
  Layers,
  Search
} from 'lucide-react';

export default function Hero() {
  const handleScroll = (id) => {
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

  const pipelineSteps = [
    {
      title: "Safety Reports",
      subtitle: "Unsafe Acts / Conditions / Near-Misses",
      icon: Database,
      color: "border-sky-500/40 text-sky-400 bg-sky-500/10",
      tag: "Raw Inputs"
    },
    {
      title: "NLP / Transformers",
      subtitle: "Contextual Embeddings & Tokenization",
      icon: BrainCircuit,
      color: "border-brand-cyan/40 text-brand-cyan bg-brand-cyan/10",
      tag: "Feature Extraction"
    },
    {
      title: "SIF Precursor Detection",
      subtitle: "High-Energy & Barrier Degradation",
      icon: AlertTriangle,
      color: "border-sif-orange/50 text-sif-orange bg-sif-orange/10",
      tag: "Ontological Engine"
    },
    {
      title: "Risk Analysis",
      subtitle: "Potential Severity & Multi-Class Scoring",
      icon: BarChart3,
      color: "border-purple-500/40 text-purple-400 bg-purple-500/10",
      tag: "Classification"
    },
    {
      title: "Actionable Insights",
      subtitle: "Early Warning & Triage for OIL Safety",
      icon: CheckCircle2,
      color: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
      tag: "Decision Support"
    }
  ];

  return (
    <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden tech-grid-bg">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-brand-cyan/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sif-orange/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        
        {/* Top Badges & SIH Metadata */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider uppercase font-semibold bg-navy-800/90 text-brand-cyan border border-brand-cyan/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
            <span>Smart India Hackathon 2026</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wide bg-navy-900/80 text-slate-300 border border-navy-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Problem ID: SIH26165</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sif-orange/10 text-sif-orange border border-sif-orange/30">
            <span>Oil India Limited (OIL) Domain</span>
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
            From Safety Reports <span className="text-brand-cyan">→</span> SIF Precursors <span className="text-sif-orange">→</span> Actionable Intelligence
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-medium text-brand-sky/90 mb-4 max-w-2xl mx-auto">
            AI/NLP Engine for Detecting Serious Injury & Fatality Precursors
          </p>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Research-driven exploration of Natural Language Processing, Machine Learning, and Serious Injury & Fatality precursor detection for OIL safety reports.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => handleScroll('research-papers')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg shadow-cyan-900/30 flex items-center gap-2 group cursor-pointer focus:ring-2 focus:ring-brand-cyan"
            >
              <Search className="w-4 h-4 text-cyan-200" />
              <span>Explore Research</span>
              <ArrowRight className="w-4 h-4 text-cyan-200 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScroll('research-gap')}
              className="px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 bg-navy-800/90 hover:bg-navy-750 hover:text-white border border-navy-700 hover:border-slate-500 transition-all flex items-center gap-2 cursor-pointer focus:ring-2 focus:ring-slate-400"
            >
              <span>View Research Gap</span>
              <Layers className="w-4 h-4 text-sif-orange" />
            </button>
          </div>
        </div>

        {/* Visual Pipeline Section */}
        <div className="max-w-5xl mx-auto mt-6 pt-8 border-t border-navy-800/80">
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase font-semibold">
              Research Pipeline Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {pipelineSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.title}
                  className="relative group p-4 rounded-xl bg-navy-900/90 border border-navy-800 hover:border-navy-600 transition-all shadow-sm flex flex-col justify-between"
                >
                  {/* Step order indicator */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-semibold text-slate-400 px-2 py-0.5 rounded bg-navy-950/80 border border-navy-800">
                      STAGE 0{idx + 1}
                    </span>
                    <div className={`p-1.5 rounded-lg border ${step.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xs font-bold text-white tracking-wide mb-1">
                      {step.title}
                    </h2>
                    <p className="text-[11px] text-slate-400 leading-snug">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-navy-800/60">
                    <span className="text-[10px] font-mono text-slate-400">
                      {step.tag}
                    </span>
                  </div>

                  {/* Flow connector arrow for desktop */}
                  {idx < pipelineSteps.length - 1 && (
                    <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-slate-600 pointer-events-none">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick scroll nudge */}
        <div className="text-center mt-12">
          <button
            onClick={() => handleScroll('problem-statement')}
            className="inline-flex flex-col items-center text-slate-400 hover:text-brand-cyan transition-colors text-xs font-mono group cursor-pointer"
            aria-label="Scroll to Problem Statement"
          >
            <span className="mb-1">Scroll to Problem Statement</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}
