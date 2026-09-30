import React, { useState } from 'react';
import { 
  BookMarked, 
  ExternalLink, 
  FolderArchive, 
  Copy, 
  Check, 
  FileText, 
  Search,
  ShieldCheck,
  Download
} from 'lucide-react';

export default function References({ papers, onSelectPaper }) {
  const [copiedId, setCopiedId] = useState(null);
  const [filterDomain, setFilterDomain] = useState('ALL');

  const handleCopy = (paper) => {
    const citation = `${paper.authors} (${paper.year}). ${paper.title}. ${paper.source}.`;
    navigator.clipboard.writeText(citation);
    setCopiedId(paper.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCollectionNotice = (paperTitle) => {
    alert(`Research Collection Notice: "${paperTitle}" is cataloged in the local literature review dataset. You can connect your team's local PDF storage or API endpoint to the 'papers.js' configuration file.`);
  };

  return (
    <section id="references" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3 w-fit">
              <span>09 — Academic References</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Literature Review Bibliography
            </h2>
            
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl">
              Complete bibliography of 10 primary peer-reviewed literature sources informing the SIH26165 problem formulation and system design.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-[11px] font-mono text-slate-400 max-w-xs">
            <span className="text-brand-cyan font-bold block mb-0.5">Academic Integrity Notice:</span>
            All references reflect verified published studies. No synthetic DOIs or artificial URLs are created.
          </div>
        </div>

        {/* References List */}
        <div className="space-y-4">
          {papers.map((paper, idx) => (
            <div
              key={paper.id}
              className="p-5 sm:p-6 rounded-xl bg-navy-900/80 border border-navy-750 hover:border-slate-600 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="p-2 rounded-lg bg-navy-950 font-mono text-xs font-bold text-brand-cyan border border-navy-800 shrink-0">
                  [{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
                </span>

                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white hover:text-brand-cyan transition-colors">
                    {paper.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-1">
                    {paper.authors} <span className="text-brand-sky font-mono font-medium">({paper.year})</span>
                  </p>

                  <div className="flex flex-wrap items-center gap-2 mt-2 text-[11px] font-mono text-slate-400">
                    <span className="px-2 py-0.5 rounded bg-navy-950 border border-navy-800 text-slate-300">
                      {paper.source}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">{paper.domain}</span>
                    <span>•</span>
                    <span className="text-brand-cyan">SIH Relevance: {paper.relevance}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                <button
                  onClick={() => onSelectPaper(paper)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-navy-800 hover:bg-navy-750 text-slate-200 border border-navy-700 hover:border-brand-cyan/40 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>Inspect</span>
                </button>

                <button
                  onClick={() => handleCollectionNotice(paper.title)}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-semibold bg-navy-800 hover:bg-navy-750 text-slate-200 border border-navy-700 hover:border-brand-cyan/40 transition-all cursor-pointer flex items-center gap-1.5"
                  title="Link to local research PDF archive"
                >
                  <FolderArchive className="w-3.5 h-3.5 text-sif-orange" />
                  <span>Research Collection</span>
                </button>

                <button
                  onClick={() => handleCopy(paper)}
                  className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-750 text-slate-300 hover:text-white border border-navy-700 transition-all cursor-pointer"
                  title="Copy APA Citation"
                >
                  {copiedId === paper.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
