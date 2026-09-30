import React from 'react';
import { 
  AlertOctagon, 
  UserX, 
  AlertTriangle, 
  HelpCircle, 
  Flame, 
  Layers, 
  ArrowRight,
  TrendingDown,
  CheckCircle,
  FileText
} from 'lucide-react';

export default function ProblemStatement() {
  const reportTypes = [
    {
      type: "UNSAFE ACT",
      subtitle: "Behavioral & Human Factors",
      definition: "Human actions, bypasses, or behaviors that depart from established safety standards and increase the likelihood of an incident.",
      examples: [
        "Operating pressurized equipment without PPE / permits",
        "Disabling or overriding an emergency shutdown valve (ESDV)",
        "Standing inside the swing radius of heavy crane operations"
      ],
      icon: UserX,
      color: "border-amber-500/40 text-amber-400 bg-amber-500/10",
      accent: "from-amber-500/20 to-transparent"
    },
    {
      type: "UNSAFE CONDITION",
      subtitle: "Workplace & Environmental Hazards",
      definition: "Hazardous workplace physical states, equipment degradations, or environmental conditions that threaten integrity.",
      examples: [
        "Uninsulated high-temperature steam lines near fuel storage",
        "Degraded blowout preventer (BOP) hydraulic seals",
        "Corroded structural scaffolding in offshore/drilling decks"
      ],
      icon: AlertTriangle,
      color: "border-sif-orange/50 text-sif-orange bg-sif-orange/10",
      accent: "from-sif-orange/20 to-transparent"
    },
    {
      type: "NEAR MISS",
      subtitle: "High-Potential Free Lessons",
      definition: "Unplanned events that did not result in injury, illness, or equipment damage, but had the realistic potential to do so under altered circumstances.",
      examples: [
        "Dropped casing pipe falling 15m onto unmanned rig deck",
        "Flash gas release that dispersed without ignition source",
        "Pressure surge caught by backup relief burst disc"
      ],
      icon: AlertOctagon,
      color: "border-sif-red/50 text-sif-red bg-sif-red/10",
      accent: "from-sif-red/20 to-transparent"
    }
  ];

  return (
    <section id="problem-statement" className="py-20 bg-navy-950 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sif-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>01 — Problem Statement</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            AI/NLP Engine to Detect Serious Injury & Fatality (SIF) Precursors
          </h2>
          
          <p className="mt-2 text-base text-slate-300 font-medium">
            Smart India Hackathon 2026 Problem ID: <span className="font-mono text-brand-cyan font-bold">SIH26165</span> • Domain: <span className="text-white font-semibold">Oil India Limited (OIL)</span>
          </p>
        </div>

        {/* Narrative Context Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-navy-900/80 border border-navy-750 shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-cyan via-sif-orange to-sif-red" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-cyan" />
                The Industrial Context in Oil & Gas Operations
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                Oil & Gas safety organizations generate large volumes of frontline reports daily:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-1">
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700/80 text-center">
                  <div className="text-xs font-mono font-bold text-slate-200">Unsafe-Act</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Behavioral observations</div>
                </div>
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700/80 text-center">
                  <div className="text-xs font-mono font-bold text-slate-200">Unsafe-Condition</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Physical hazard reports</div>
                </div>
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700/80 text-center">
                  <div className="text-xs font-mono font-bold text-slate-200">Near-Miss</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Close calls & warnings</div>
                </div>
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700/80 text-center">
                  <div className="text-xs font-mono font-bold text-slate-200">Incident Logs</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Realized events</div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Many of these reports contain textual indicators that signal potential <strong className="text-white font-semibold">Serious Injury & Fatality (SIF)</strong> events. However, because reports are predominantly free-form narrative text written under operational time constraints, critical precursor signals remain buried under thousands of low-severity observations.
              </p>

              <p className="text-slate-300 text-sm leading-relaxed">
                The objective is to automatically identify, triage, and classify these precursors using AI/NLP techniques tailored to the high-hazard reality of oilfield operations.
              </p>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-navy-950/80 border border-navy-800 flex flex-col justify-between h-full">
              <div className="flex items-center gap-2 text-sif-orange text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <Flame className="w-4 h-4" />
                Critical SIF Realization
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Modern safety science (Martin & Black, 2015) disproved Heinrich's triangle: <span className="text-white font-medium">reducing minor non-SIF incidents does NOT eliminate fatalities</span>. Fatality prevention requires pinpointing high-energy exposure and barrier degradation directly in narrative logs.
              </p>
              <div className="mt-4 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Domain Scope</span>
                <span className="text-brand-cyan">Exploration & Production</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Report Type Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reportTypes.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.type}
                className="relative rounded-xl bg-navy-900/80 border border-navy-750 p-6 flex flex-col justify-between hover:border-slate-600 transition-all shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`p-2 rounded-lg border ${card.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-white font-mono tracking-wide">
                          {card.type}
                        </h4>
                        <span className="text-[11px] text-slate-400">
                          {card.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {card.definition}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-navy-800">
                    <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold">
                      Typical Oilfield Indicators:
                    </div>
                    {card.examples.map((ex, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-brand-cyan font-mono mt-0.5">•</span>
                        <span>{ex}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-navy-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Input Stream</span>
                  <span className="text-slate-300">Unstructured Text</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CORE CHALLENGE CALLOUT */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-brand-cyan/30 text-center relative shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Core Research Challenge
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white max-w-3xl mx-auto leading-tight mb-4">
            "How can unstructured safety reports be transformed into early-warning SIF intelligence?"
          </h3>

          <p className="text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            By shifting from retroactive incident investigations to proactive AI/NLP precursor identification, safety officers can intervene before an unsafe act or degraded barrier escalates into a catastrophic event.
          </p>
        </div>

      </div>
    </section>
  );
}
