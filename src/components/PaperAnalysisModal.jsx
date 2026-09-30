import React, { useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Cpu, 
  Database, 
  CheckCircle2, 
  AlertTriangle, 
  Target, 
  Layers, 
  Sparkles,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';

export default function PaperAnalysisModal({ paper, isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !paper) return null;

  const handleCopyCitation = () => {
    const citation = `${paper.authors} (${paper.year}). "${paper.title}". ${paper.source}.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-paper-title"
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-navy-900 border border-navy-700 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-navy-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30">
                {paper.year} • {paper.domain}
              </span>
              <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-navy-800 text-slate-300 border border-navy-700">
                SIH RELEVANCE: {paper.relevance}
              </span>
            </div>
            
            <h2 id="modal-paper-title" className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              {paper.title}
            </h2>

            <p className="mt-1 text-xs sm:text-sm text-slate-400 font-medium">
              {paper.authors}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-white transition-colors cursor-pointer focus:ring-2 focus:ring-brand-cyan"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Systematic Academic Analysis */}
        <div className="py-6 space-y-6">

          {/* Paper Overview */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-brand-sky font-semibold mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-brand-sky" />
              Paper Overview
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-navy-950/60 p-4 rounded-xl border border-navy-800">
              {paper.analysis?.overview || paper.keyContribution}
            </p>
          </div>

          {/* Grid: Methodology, Dataset, Features, Model, Performance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-4 rounded-xl bg-navy-950/70 border border-navy-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-cyan" />
                Methodology
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {paper.method}
              </p>
              <p className="text-xs text-slate-400 mt-1.5 leading-normal">
                {paper.analysis?.methodology || "Extracted structural NLP / ML pipeline attributes."}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/70 border border-navy-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-brand-cyan" />
                Dataset
              </div>
              <p className="text-xs text-slate-200 font-medium">
                {paper.dataset}
              </p>
              <p className="text-xs text-slate-400 mt-1.5 leading-normal">
                Domain-specific free-text incident narratives and safety observation logs.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/70 border border-navy-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-brand-cyan" />
                Features & Representations
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {paper.features}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-navy-950/70 border border-navy-800">
              <div className="text-[11px] font-mono text-slate-400 uppercase font-semibold mb-1 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-brand-cyan" />
                Model Architecture
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                {paper.model}
              </p>
            </div>
          </div>

          {/* Performance Box - Strict Compliance Rule */}
          <div className="p-4 rounded-xl bg-navy-800/40 border border-navy-700/80">
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
                Reported Performance
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-navy-900 px-2 py-0.5 rounded border border-navy-700">
                Verified Literature
              </span>
            </div>
            <p className="text-xs text-brand-cyan font-mono">
              {paper.performance}
            </p>
            <p className="text-[11px] text-slate-400 mt-1 italic">
              Note: In accordance with academic review integrity, exact numerical metrics are kept strictly to original author specifications without synthetic estimation.
            </p>
          </div>

          {/* Key Findings & Limitations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/30">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Key Findings
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {paper.analysis?.findings || paper.keyContribution}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-sif-orange/10 border border-sif-orange/30">
              <div className="text-xs font-mono uppercase tracking-wider text-sif-orange font-semibold mb-1.5 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-sif-orange" />
                Limitations & Gaps
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {paper.limitation}
              </p>
            </div>
          </div>

          {/* SIH26165 Relevance */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-navy-850 to-navy-800 border border-brand-cyan/40">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan font-semibold mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-cyan" />
              Relevance to SIH26165 (OIL Safety Engine)
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {paper.analysis?.relevanceToSih || "Provides foundational empirical proof for automated safety text extraction in high-risk operational environments."}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono">
            Source: <span className="text-slate-300">{paper.source}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyCitation}
              className="px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-navy-800 hover:bg-navy-750 border border-navy-700 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied Citation" : "Copy Citation"}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-navy-700 hover:bg-navy-600 transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
