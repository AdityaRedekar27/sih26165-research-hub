import React from 'react';
import { 
  ExternalLink, 
  Layers, 
  Cpu, 
  Database, 
  AlertCircle, 
  CheckCircle, 
  ArrowUpRight,
  BookOpen
} from 'lucide-react';

export default function PaperCard({ paper, onViewAnalysis }) {
  // Relevance badge color helper
  const getRelevanceBadge = (relevance) => {
    switch (relevance) {
      case 'CRITICAL':
        return 'bg-sif-red/15 text-sif-red border-sif-red/40';
      case 'HIGH':
        return 'bg-sif-orange/15 text-sif-orange border-sif-orange/40';
      default:
        return 'bg-brand-cyan/15 text-brand-cyan border-brand-cyan/40';
    }
  };

  // Tag color helper
  const getTagColor = (tag) => {
    switch (tag) {
      case 'SIF':
        return 'bg-sif-red/10 text-sif-red border-sif-red/30';
      case 'Transformer':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'Machine Learning':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      case 'NLP':
        return 'bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30';
      case 'Near-Miss':
        return 'bg-amber-500/10 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="group rounded-xl bg-navy-900/90 border border-navy-750 hover:border-brand-cyan/50 p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-cyan-950/20">
      
      {/* Top Header: Authors & Year + Relevance */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="text-xs font-mono font-bold tracking-wider text-brand-sky uppercase">
            {paper.authors.split(',')[0]} ET AL. | {paper.year}
          </div>

          <div className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wider border ${getRelevanceBadge(paper.relevance)}`}>
            SIH RELEVANCE: {paper.relevance}
          </div>
        </div>

        {/* Paper Title */}
        <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-3 group-hover:text-brand-cyan transition-colors">
          {paper.title}
        </h3>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {paper.tags.map((tag) => (
            <span
              key={tag}
              className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium border ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Structured Grid: Domain, Method, Focus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 p-3 rounded-lg bg-navy-950/60 border border-navy-800/80 text-xs">
          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
              DOMAIN
            </span>
            <span className="text-slate-200 font-medium line-clamp-1">
              {paper.domain}
            </span>
          </div>

          <div>
            <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
              METHOD
            </span>
            <span className="text-slate-200 font-medium line-clamp-1">
              {paper.method}
            </span>
          </div>

          <div className="sm:col-span-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase block font-semibold">
              FOCUS
            </span>
            <span className="text-slate-200 font-medium line-clamp-1">
              {paper.focus}
            </span>
          </div>
        </div>

        {/* Key Contribution */}
        <div className="mb-3">
          <div className="text-[10px] font-mono text-brand-cyan uppercase tracking-wider font-semibold mb-1 flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-brand-cyan" />
            KEY CONTRIBUTION
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {paper.keyContribution}
          </p>
        </div>

        {/* Limitation */}
        <div className="mb-4">
          <div className="text-[10px] font-mono text-sif-orange uppercase tracking-wider font-semibold mb-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3 text-sif-orange" />
            LIMITATION / RESEARCH GAP
          </div>
          <p className="text-xs text-slate-400 leading-relaxed italic">
            {paper.limitation}
          </p>
        </div>
      </div>

      {/* Card Action Button */}
      <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between gap-3">
        <span className="text-[11px] font-mono text-slate-400 truncate max-w-[140px]">
          {paper.source}
        </span>

        <button
          onClick={() => onViewAnalysis(paper)}
          className="px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono tracking-wider uppercase text-brand-cyan bg-navy-800 hover:bg-brand-cyan hover:text-navy-950 border border-brand-cyan/30 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <span>VIEW FULL ANALYSIS</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
}
