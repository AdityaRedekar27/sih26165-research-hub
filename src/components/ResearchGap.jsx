import React from 'react';
import { 
  ArrowDown, 
  CheckCircle2, 
  AlertCircle, 
  Target, 
  Layers, 
  Sparkles, 
  Lightbulb, 
  ShieldCheck,
  Compass,
  Zap,
  ArrowRight
} from 'lucide-react';

export default function ResearchGap() {
  const existingProgression = [
    { label: "Safety Reports", detail: "General incident logs & injury narratives" },
    { label: "NLP", detail: "Rule-based & classical ML text processing" },
    { label: "Classification", detail: "Broad accident type & severity categorization" },
    { label: "Risk / SIF Prediction", detail: "Statistical exposure & potential-SIF identification" }
  ];

  const demonstratedCapabilities = [
    "NLP-based safety-report analysis across construction & aviation",
    "Automated text classification using SVM, Random Forest, & CNNs",
    "Near-miss analysis and hazard indicator extraction",
    "SIF precursor theoretical frameworks (high-energy barrier models)",
    "ML-based SIF exposure prediction in project settings",
    "Potential-SIF (pSIF) incident identification via transformer embeddings"
  ];

  const currentLimitations = [
    {
      num: "01",
      title: "Domain-Specific Adaptation is Limited",
      desc: "Most studies target commercial aviation, construction sites, or generic maritime environments. Oil & gas upstream drilling, well-servicing, and sour gas operations feature highly specialized terminology and hazardous energy profiles that generic models misinterpret."
    },
    {
      num: "02",
      title: "Multiple Safety-Report Types Are Not Integrated",
      desc: "Prior systems evaluate isolated report streams (either only near-misses or only realized accidents). OIL relies on three distinct frontline observation types: Unsafe-Acts, Unsafe-Conditions, and Near-Misses, which must be cross-analyzed in a unified pipeline."
    },
    {
      num: "03",
      title: "SIF Precursor Extraction Can Be Improved",
      desc: "Many models stop at binary high-risk classification without granularly extracting the exact precursor category (e.g., high-pressure release, suspended load failure, structural collapse, ignition source co-occurrence)."
    },
    {
      num: "04",
      title: "Results Need to Be Interpretable for Safety Teams",
      desc: "Black-box neural classifiers fail to give field safety officers the actionable rationale behind a high SIF score. Explainability (attention heatmaps, token attribution, barrier failure indicators) is essential for operational trust."
    },
    {
      num: "05",
      title: "Detection Must Lead to Actionable Risk Intelligence",
      desc: "Classifying an event after the fact offers limited utility. The system must transform raw precursor signals into prioritized triage alerts and targeted early-warning recommendations before an incident occurs."
    }
  ];

  return (
    <section id="research-gap" className="py-20 bg-navy-900/40 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-sif-orange/40 text-sif-orange text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>04 — Research Gap</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Academic Context & The Research Opportunity
          </h2>
          
          <p className="mt-2 text-base text-slate-300 max-w-3xl">
            Synthesizing existing achievements to isolate the specific domain need for Oil India Limited (OIL) safety operations.
          </p>
        </div>

        {/* Existing Research Flow vs Demonstrated Capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          
          {/* Left Column: Visual Progression */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-navy-900/90 border border-navy-750 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-sky uppercase tracking-wider mb-4">
                <Compass className="w-4 h-4 text-brand-sky" />
                Evolution of Existing Research
              </div>

              <div className="space-y-3 relative">
                {existingProgression.map((step, idx) => (
                  <div key={step.label} className="relative">
                    <div className="p-3.5 rounded-xl bg-navy-950/80 border border-navy-800 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-white font-mono">
                          {step.label}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          {step.detail}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 bg-navy-900 px-2 py-0.5 rounded border border-navy-700">
                        Level 0{idx + 1}
                      </span>
                    </div>

                    {idx < existingProgression.length - 1 && (
                      <div className="flex justify-center my-1 text-slate-500">
                        <ArrowDown className="w-3.5 h-3.5 text-brand-cyan/60" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] text-slate-400 leading-normal">
              Literature demonstrates consistent progress from manual keyword searches toward deep contextual transformers (Chen et al. 2025, Parikh et al. 2024).
            </div>
          </div>

          {/* Right Column: What Existing Research Demonstrates */}
          <div className="lg:col-span-7 p-6 rounded-2xl bg-navy-900/90 border border-navy-750 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Established In Literature (Literature Demonstrates)
              </div>

              <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                Prior scholarship across our 10 reviewed papers has validated several crucial premises:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {demonstratedCapabilities.map((cap, i) => (
                  <div 
                    key={i}
                    className="p-3 rounded-lg bg-navy-950/60 border border-navy-800 text-xs text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-navy-800 bg-navy-950/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
              <p className="text-xs text-slate-300">
                <strong className="text-white">Academic Positioning Note:</strong> We acknowledge prior SIF detection literature. Our research contribution lies in <span className="text-brand-cyan font-medium">domain-specific adaptation and multi-report integration</span> for oilfield environments.
              </p>
            </div>
          </div>
        </div>

        {/* THE RESEARCH GAP HIGHLIGHT BOX */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border-2 border-sif-orange/40 shadow-2xl mb-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sif-orange/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sif-orange/15 border border-sif-orange/40 text-sif-orange text-xs font-mono font-bold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-sif-orange" />
              The Identified Research Opportunity
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight">
              "An integrated system specifically designed to analyze OIL's Unsafe-Act, Unsafe-Condition and Near-Miss reports and identify SIF precursors with explainable, actionable outputs."
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Bridging the gap between raw frontline safety observations and proactive risk triage by combining specialized Oil & Gas safety taxonomy with fine-tuned contextual transformers.
            </p>
          </div>
        </div>

        {/* Current Limitations Accordion/Cards */}
        <div>
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-sif-orange" />
              Five Critical Limitations in Current Approaches
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Key bottlenecks identified through systematic evaluation of existing models and methodologies:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentLimitations.map((item, idx) => (
              <div 
                key={item.num}
                className={`p-5 rounded-xl bg-navy-900/80 border border-navy-750 hover:border-slate-600 transition-all flex flex-col justify-between ${
                  idx === 0 ? 'lg:col-span-1' : idx === 1 ? 'lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-2 py-0.5 rounded">
                      GAP {item.num}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Literature Bottleneck
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-navy-800 text-[10px] font-mono text-slate-400 flex items-center justify-between">
                  <span>SIH26165 Target</span>
                  <span className="text-emerald-400 font-semibold">Addressed in Proposed Architecture</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
