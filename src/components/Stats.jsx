import React from 'react';
import { BookOpen, Cpu, ShieldAlert, Target } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      value: "10",
      label: "Research Papers",
      description: "Reviewed across safety-critical domains (Aviation, Maritime, Construction, Oil & Gas)",
      icon: BookOpen,
      color: "text-brand-cyan",
      borderColor: "group-hover:border-brand-cyan/40",
      bgGlow: "from-brand-cyan/10 to-transparent"
    },
    {
      value: "5+",
      label: "ML / NLP Approaches",
      description: "Rule-based NLP, Classical ML, Deep CNN/LSTM, Contextual BERT/Transformers, Hybrid Ensembles",
      icon: Cpu,
      color: "text-brand-sky",
      borderColor: "group-hover:border-brand-sky/40",
      bgGlow: "from-brand-sky/10 to-transparent"
    },
    {
      value: "SIF",
      label: "Focused Research",
      description: "Targeted detection of Serious Injury & Fatality precursors rather than generic frequency tracking",
      icon: ShieldAlert,
      color: "text-sif-orange",
      borderColor: "group-hover:border-sif-orange/40",
      bgGlow: "from-sif-orange/10 to-transparent"
    },
    {
      value: "SIH26165",
      label: "Problem Statement",
      description: "Specialized for Oil India Limited (OIL) Unsafe-Act, Unsafe-Condition & Near-Miss reports",
      icon: Target,
      color: "text-emerald-400",
      borderColor: "group-hover:border-emerald-400/40",
      bgGlow: "from-emerald-400/10 to-transparent"
    }
  ];

  return (
    <section className="py-12 bg-navy-900/60 border-y border-navy-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`group relative p-6 rounded-xl bg-navy-850/80 border border-navy-750/90 ${item.borderColor} transition-all duration-300 shadow-md flex flex-col justify-between`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-3xl sm:text-4xl font-extrabold font-mono tracking-tight ${item.color}`}>
                    {item.value}
                  </span>
                  <div className="p-2 rounded-lg bg-navy-900 border border-navy-700/80 text-slate-300 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h2 className="text-base font-bold text-white mb-1.5 tracking-wide">
                    {item.label}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-navy-800/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Literature Synthesis</span>
                  <span className="text-slate-400">• Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
