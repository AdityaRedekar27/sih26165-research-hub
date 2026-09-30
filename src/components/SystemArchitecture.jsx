import React, { useState } from 'react';
import { 
  GitCompare, 
  Cpu, 
  ArrowRight, 
  ArrowDown, 
  Check, 
  X, 
  Layers, 
  AlertTriangle, 
  ShieldAlert, 
  FileText, 
  Sparkles,
  Zap,
  Info,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export default function SystemArchitecture() {
  const [activeLayer, setActiveLayer] = useState('sif-engine');

  const comparisonRows = [
    {
      aspect: "Input Processing",
      existing: "Manual triage or keyword queries looking for explicit accident words",
      proposed: "Unified ingestion of Unsafe-Acts, Unsafe-Conditions, and Near-Misses with contextual tokenization",
      status: "Advanced"
    },
    {
      aspect: "Semantic Depth",
      existing: "Bag-of-words / TF-IDF or shallow regex parsers lacking contextual understanding",
      proposed: "Domain-adapted Transformer (BERT/RoBERTa) with bidirectional attention & oilfield safety lexicon",
      status: "Advanced"
    },
    {
      aspect: "SIF Alignment",
      existing: "Generic incident severity scoring or broad regulatory reporting classes",
      proposed: "Explicit SIF precursor ontology (high-energy hazards, barrier failure, loss-of-control)",
      status: "Core Innovation"
    },
    {
      aspect: "Interpretability",
      existing: "Black-box predictions with no token-level or causal justification",
      proposed: "Explainable AI (precursor token heatmaps, barrier degradation scores, audit trail)",
      status: "Operational"
    },
    {
      aspect: "Operational Utility",
      existing: "Retroactive monthly charts produced after incident occurrences",
      proposed: "Real-time early-warning alerts and preventative intervention triage for OIL safety teams",
      status: "Proactive"
    }
  ];

  const architectureLayers = [
    {
      id: "input-layer",
      name: "01. INPUT LAYER",
      tagline: "Frontline Narrative Ingestion",
      color: "border-sky-500/40 bg-sky-500/10 text-sky-400",
      items: [
        "Unsafe-Act Reports (human behaviors & deviations)",
        "Unsafe-Condition Reports (physical workplace degradation)",
        "Near-Miss Reports (potential-severity close calls)",
        "Incident Logging Streams & Shift Notes"
      ],
      details: "Captures heterogeneous free-form narratives written by rig supervisors, drilling engineers, and maintenance crews across operating installations."
    },
    {
      id: "preprocessing",
      name: "02. PREPROCESSING & NORMALIZATION",
      tagline: "Oilfield Lexicon & Noise Filtering",
      color: "border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan",
      items: [
        "Text Cleaning & Rig Acronym Expansion (e.g. BOP, ESDV, H2S)",
        "Domain Tokenization & Subword Segmentation",
        "Named Entity Recognition (Equipment, Locations, Hazards)",
        "Feature Engineering & Structural Metadata Alignment"
      ],
      details: "Converts messy text containing domain abbreviations and multilingual artifacts into normalized representations ready for transformer encoding."
    },
    {
      id: "nlp-engine",
      name: "03. AI/NLP ENGINE",
      tagline: "Contextual Semantic Analysis",
      color: "border-purple-500/40 bg-purple-500/10 text-purple-400",
      items: [
        "Pre-trained Transformer / Domain-Fine-Tuned BERT",
        "Multi-Head Bidirectional Self-Attention Layers",
        "Semantic Vector Embeddings & Dense Projections",
        "Keyword & Syntactic Co-occurrence Verifiers"
      ],
      details: "Captures subtle semantic dependencies between actions and consequences, detecting compound hazards that keyword search overlooks."
    },
    {
      id: "sif-engine",
      name: "04. SIF PRECURSOR ENGINE",
      tagline: "Ontology & Causal Exposure Mapping",
      color: "border-sif-orange/50 bg-sif-orange/10 text-sif-orange",
      items: [
        "High-Energy Exposure Detection (pressure, electrical, kinetic, gravity)",
        "Loss of Control & Barrier Degradation Identification",
        "Critical Equipment Failure Antecedents (valves, cranes, blowouts)",
        "Hazardous Environmental Conditions & Flammability",
        "Unsafe Behavior & Procedural Non-Compliance",
        "Potential Severe Consequence Modeling"
      ],
      details: "Applies specialized precursor definitions derived from the Martin & Black SIF paradigm, evaluating whether high energy met absent or degraded barriers."
    },
    {
      id: "risk-analysis",
      name: "05. MULTI-FACTOR RISK ANALYSIS",
      tagline: "Calibrated Risk & Confidence Scoring",
      color: "border-sif-red/50 bg-sif-red/10 text-sif-red",
      items: [
        "Precursor Type Classification (Multi-Label)",
        "Severity Potential Quantification (pSIF / non-SIF)",
        "Model Confidence Scoring & Uncertainty Estimation",
        "Temporal Clustering & Repeat Hazard Detection"
      ],
      details: "Synthesizes transformer probabilities with gradient-boosted scoring to generate an objective hazard severity rating with calibrated confidence."
    },
    {
      id: "output-layer",
      name: "06. DECISION SUPPORT & OUTPUT",
      tagline: "Actionable Operational Intelligence",
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
      items: [
        "Executive Risk Dashboard with Real-Time Triage Queue",
        "Explainable Findings (Token Attribution & Barrier Flags)",
        "Early Warning Notification to Field Safety Teams",
        "Targeted Preventative Action Recommendations"
      ],
      details: "Provides safety supervisors and management with immediately actionable intelligence rather than raw prediction numbers."
    }
  ];

  return (
    <div id="proposed-system" className="space-y-24 py-16">
      
      {/* ---------------- SECTION 05: EXISTING VS PROPOSED ---------------- */}
      <section className="bg-navy-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start mb-10">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span>05 — Existing vs Proposed System</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Architectural Shift: From Reactive Audits to Intelligent Precursor Triage
            </h2>
            
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl">
              Comparing traditional safety reporting approaches with our proposed AI/NLP precursor identification framework for Oil India Limited.
            </p>
          </div>

          {/* Comparison Matrix Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Existing Approaches */}
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-900/70 border border-navy-750 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-4">
                  <X className="w-4 h-4 text-sif-red" />
                  Existing Conventional Approaches
                </div>

                <div className="space-y-3.5">
                  {[
                    "Manual safety-report review (labor-intensive, high backlog)",
                    "Rule-based / regex keyword searches (high false positives/negatives)",
                    "General NLP classification without industrial domain ontology",
                    "Generic accident prediction disconnected from leading indicators",
                    "Separate SIF research isolated from day-to-day near-miss pipelines"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-sif-red/10 border border-sif-red/30 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-sif-red" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800 text-xs text-slate-400">
                Outcome: SIF warning signs remain hidden until catastrophic equipment breakdown or injury occurs.
              </div>
            </div>

            {/* Proposed SIH26165 System */}
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-900/90 border border-brand-cyan/40 shadow-xl shadow-cyan-950/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan uppercase tracking-wider font-bold mb-4">
                  <Check className="w-4 h-4 text-brand-cyan" />
                  Proposed SIH26165 System
                </div>

                <div className="space-y-3.5">
                  {[
                    "OIL Safety Reports: Direct ingestion of Unsafe-Acts, Conditions, & Near-Misses",
                    "Data Cleaning & Domain Lexicon: Normalized oilfield equipment & jargon dictionary",
                    "Transformer / NLP Model: Fine-tuned contextual self-attention representations",
                    "SIF Precursor Detection: Granular energy & barrier degradation identification",
                    "Explainable Result & Early Warning: Transparent audit trail with proactive safety alerts"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-brand-cyan/15 border border-brand-cyan/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-brand-cyan" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-navy-800 text-xs text-emerald-400 font-medium">
                Outcome: Precursor events are automatically triaged before high-energy potential converts into serious incidents.
              </div>
            </div>
          </div>

          {/* Detailed Aspect Comparison Table */}
          <div className="rounded-xl border border-navy-750 bg-navy-900/80 overflow-hidden shadow-lg">
            <div className="p-4 bg-navy-850/90 border-b border-navy-750 text-xs font-mono font-bold text-white uppercase tracking-wider">
              Technical Comparison Matrix
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-navy-950/60 border-b border-navy-800 text-slate-400 font-mono text-[11px] uppercase">
                    <th className="py-3 px-4 font-semibold">Evaluation Aspect</th>
                    <th className="py-3 px-4 font-semibold text-slate-400">Existing Approaches</th>
                    <th className="py-3 px-4 font-semibold text-brand-cyan">Proposed SIH26165 System</th>
                    <th className="py-3 px-4 font-semibold text-center">Impact Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800/60">
                  {comparisonRows.map((row) => (
                    <tr key={row.aspect} className="hover:bg-navy-800/40 transition-colors">
                      <td className="py-3 px-4 font-semibold text-white whitespace-nowrap">
                        {row.aspect}
                      </td>
                      <td className="py-3 px-4 text-slate-400 max-w-sm">
                        {row.existing}
                      </td>
                      <td className="py-3 px-4 text-slate-200 max-w-md font-medium">
                        {row.proposed}
                      </td>
                      <td className="py-3 px-4 text-center whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------- SECTION 06: PROPOSED SYSTEM ARCHITECTURE ---------------- */}
      <section className="bg-navy-900/40 pt-12 pb-20 border-t border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-start mb-12">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <span>06 — Proposed AI/NLP Architecture</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              End-to-End System Pipeline & Precursor Engine
            </h2>
            
            <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl">
              An interactive visualization of the 6-stage architecture: from raw report ingestion to explainable safety alerts. Click any layer to inspect technical pipeline details.
            </p>
          </div>

          {/* Interactive Large Architecture Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 6-stage Pipeline Flow */}
            <div className="lg:col-span-7 space-y-4">
              {architectureLayers.map((layer, idx) => {
                const isSelected = activeLayer === layer.id;
                return (
                  <div key={layer.id} className="relative">
                    <div
                      onClick={() => setActiveLayer(layer.id)}
                      className={`p-5 rounded-xl border transition-all cursor-pointer shadow-md ${
                        isSelected 
                          ? 'bg-navy-800/90 border-brand-cyan shadow-cyan-950/40 translate-x-1' 
                          : 'bg-navy-900/80 border-navy-750 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold border ${layer.color}`}>
                            {layer.name}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {layer.tagline}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono text-slate-400">
                          {isSelected ? 'Active Layer' : 'Click to inspect'}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                        {layer.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Flow down arrow */}
                    {idx < architectureLayers.length - 1 && (
                      <div className="flex justify-center my-1.5">
                        <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                          <ArrowDown className="w-3.5 h-3.5 text-brand-cyan animate-pulse" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Layer Inspector Details Panel */}
            <div className="lg:col-span-5 sticky top-24 p-6 sm:p-7 rounded-2xl bg-navy-900 border border-brand-cyan/40 shadow-2xl">
              {(() => {
                const current = architectureLayers.find(l => l.id === activeLayer) || architectureLayers[3];
                return (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between pb-3 border-b border-navy-800">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                          Selected Pipeline Layer
                        </span>
                        <h4 className="text-base font-bold text-white mt-0.5">
                          {current.name}
                        </h4>
                      </div>
                      <div className="p-2 rounded-lg bg-navy-800 text-brand-cyan">
                        <Cpu className="w-5 h-5" />
                      </div>
                    </div>

                    <div>
                      <h5 className="text-xs font-mono uppercase text-brand-sky font-semibold mb-2">
                        Layer Function & Engineering Role
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-navy-950/70 p-4 rounded-xl border border-navy-800">
                        {current.details}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-xs font-mono uppercase text-brand-cyan font-semibold mb-2 flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5" />
                        Sub-Components & Operations
                      </h5>
                      <div className="space-y-2">
                        {current.items.map((sub, idx) => (
                          <div 
                            key={idx} 
                            className="p-2.5 rounded-lg bg-navy-950/50 border border-navy-800/80 text-xs text-slate-300 flex items-center gap-2"
                          >
                            <span className="text-brand-cyan font-mono text-[10px]">0{idx+1}</span>
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-navy-800 text-xs text-slate-400">
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Architecture Paradigm:</span>
                        <span className="text-slate-300">Modular Micro-Pipeline</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
