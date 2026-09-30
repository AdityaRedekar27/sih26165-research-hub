import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend 
} from 'recharts';
import { 
  PieChart as PieIcon, 
  BarChart3, 
  Layers, 
  Sparkles, 
  Lightbulb, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { METHOD_DISTRIBUTION, DOMAIN_DISTRIBUTION, RESEARCH_FOCUS_DATA } from '../data/papers';

// Custom dark theme tooltip for Recharts
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="p-3 rounded-lg bg-navy-900 border border-navy-700 shadow-xl text-xs">
        <p className="font-semibold text-white mb-1">{label || data.name}</p>
        <p className="text-brand-cyan font-mono">
          Reviewed Papers: <span className="font-bold">{data.value}</span>
        </p>
        {data.payload?.percentage && (
          <p className="text-slate-400 font-mono text-[11px]">
            Share: {data.payload.percentage}% of reviewed literature
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function ResearchInsights() {
  const takeaways = [
    {
      num: "01",
      title: "Unstructured Safety Reports Contain Valuable Precursor Information",
      desc: "Frontline logs, observation notes, and near-miss narratives capture early indications of system degradation, procedural variance, and high-energy exposure well before an actual loss incident occurs.",
      accent: "border-sky-500/40 text-sky-400"
    },
    {
      num: "02",
      title: "NLP Can Convert Narrative Reports into Machine-Readable Signals",
      desc: "Natural Language Processing bridges the gap between heterogeneous free-form text written in field conditions and computational risk models, extracting semantic entities, actions, and environmental conditions.",
      accent: "border-brand-cyan/40 text-brand-cyan"
    },
    {
      num: "03",
      title: "ML and Transformer Models Support Automated Safety Classification",
      desc: "Contextual language models (BERT/RoBERTa) and machine learning ensembles reliably identify complex hazard patterns and ambiguous syntactic phrasing that traditional keyword rules systematically overlook.",
      accent: "border-purple-500/40 text-purple-400"
    },
    {
      num: "04",
      title: "Domain-Specific SIF Precursor Detection Yields Actionable Intelligence",
      desc: "Tailoring precursor taxonomy to the high-pressure, hazardous realities of Oil India Limited transforms raw compliance paperwork into proactive early warnings, enabling preventative interventions for safety leaders.",
      accent: "border-sif-orange/50 text-sif-orange"
    }
  ];

  return (
    <section id="research-insights" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span>07 — Research Insights</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Categorization of Reviewed Literature
          </h2>
          
          <div className="mt-2 flex items-center gap-2 text-xs font-mono text-slate-400 bg-navy-900 px-3 py-1.5 rounded-lg border border-navy-800">
            <AlertCircle className="w-4 h-4 text-brand-cyan shrink-0" />
            <span>Methodological Note: These visualizations reflect the categorization of reviewed literature across the 10 core papers, not fabricated experimental results.</span>
          </div>
        </div>

        {/* Recharts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          
          {/* Chart 1: Method Distribution */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-750 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-cyan" />
                  Methodology Distribution
                </h3>
                <span className="text-[10px] font-mono text-slate-400">10 Papers</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                Prevalence of algorithmic families in safety mining.
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={METHOD_DISTRIBUTION} layout="vertical" margin={{ left: -15, right: 10, top: 10, bottom: 0 }}>
                  <XAxis type="number" stroke="#64748b" tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 6]} />
                  <YAxis type="category" dataKey="name" stroke="#64748b" tick={{ fontSize: 10, fill: '#cbd5e1' }} width={110} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="count" fill="#06b6d4" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 pt-3 border-t border-navy-800 text-[10px] font-mono text-slate-400 flex justify-between">
              <span>Primary Trend:</span>
              <span className="text-brand-cyan">Shift to Transformers</span>
            </div>
          </div>

          {/* Chart 2: Domain Distribution */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-750 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <PieIcon className="w-4 h-4 text-brand-sky" />
                  Research Domain Coverage
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Cross-Sector</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                Operational sectors evaluated in reviewed safety literature.
              </p>
            </div>

            <div className="h-64 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={DOMAIN_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="count"
                  >
                    {DOMAIN_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 pt-3 border-t border-navy-800 text-[10px] font-mono text-slate-400 flex flex-wrap gap-2 justify-center">
              {DOMAIN_DISTRIBUTION.map((d) => (
                <div key={d.name} className="flex items-center gap-1 text-[10px]">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></span>
                  <span className="text-slate-300">{d.name.split(' ')[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 3: Research Focus */}
          <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-750 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sif-orange" />
                  Core Analytical Focus
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Objective</span>
              </div>
              <p className="text-[11px] text-slate-400 mb-4">
                Distribution of analytical targets across the literature corpus.
              </p>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RESEARCH_FOCUS_DATA} margin={{ left: -25, right: 10, top: 10, bottom: 0 }}>
                  <XAxis dataKey="focus" stroke="#64748b" tick={{ fontSize: 9, fill: '#cbd5e1' }} interval={0} angle={-25} textAnchor="end" height={60} />
                  <YAxis stroke="#64748b" tick={{ fontSize: 10, fill: '#94a3b8' }} domain={[0, 5]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="papers" fill="#f97316" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-3 pt-3 border-t border-navy-800 text-[10px] font-mono text-slate-400 flex justify-between">
              <span>SIH Focus:</span>
              <span className="text-sif-orange font-semibold">SIF Precursor Extraction</span>
            </div>
          </div>

        </div>

        {/* ---------------- SECTION 08: KEY TAKEAWAYS ---------------- */}
        <div className="pt-12 border-t border-navy-800">
          <div className="mb-8">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-2 w-fit">
              <span>08 — Key Takeaways</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Four Core Research Insights
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Guiding empirical and theoretical principles distilled from cross-domain safety research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {takeaways.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-navy-900/90 border border-navy-750 hover:border-slate-600 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-brand-cyan bg-navy-950 px-2.5 py-1 rounded border border-navy-800">
                      INSIGHT {item.num}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      Research Finding
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-navy-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Application in SIH26165</span>
                  <span className="text-emerald-400 font-medium">Core Architecture Pillar</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
