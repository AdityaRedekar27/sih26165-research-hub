import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  BookOpen, 
  ArrowUpDown, 
  SlidersHorizontal, 
  Check, 
  Table, 
  LayoutGrid,
  FileSpreadsheet
} from 'lucide-react';
import PaperCard from './PaperCard';

export default function ResearchExplorer({ papers, onSelectPaper }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'

  const filterTags = [
    'All',
    'NLP',
    'Machine Learning',
    'Transformer',
    'SIF',
    'Near-Miss',
    'Safety'
  ];

  const filteredPapers = useMemo(() => {
    return papers.filter((paper) => {
      // Tag matching
      const matchesTag = 
        selectedTag === 'All' || 
        paper.tags.includes(selectedTag) ||
        (selectedTag === 'Transformer' && paper.method.toLowerCase().includes('transformer')) ||
        (selectedTag === 'SIF' && (paper.focus.toLowerCase().includes('sif') || paper.sifFocus.toLowerCase().includes('sif')));

      // Search matching across title, authors, method, key contribution, domain
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        paper.title.toLowerCase().includes(query) ||
        paper.authors.toLowerCase().includes(query) ||
        paper.method.toLowerCase().includes(query) ||
        paper.domain.toLowerCase().includes(query) ||
        paper.focus.toLowerCase().includes(query) ||
        paper.keyContribution.toLowerCase().includes(query) ||
        paper.year.toString().includes(query);

      return matchesTag && matchesSearch;
    });
  }, [papers, searchQuery, selectedTag]);

  return (
    <section id="research-papers" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-3 w-fit">
              <span>02 — Research Papers</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Literature Review & Paper Explorer
            </h2>
            
            <p className="mt-2 text-sm text-slate-300 max-w-2xl">
              Analysis of 10 seminal peer-reviewed research papers across automated safety reporting, NLP classification, and SIF precursor identification.
            </p>
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg bg-navy-900 border border-navy-800 self-start sm:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'grid' 
                  ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Card Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Cards</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`p-2 rounded-md text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'table' 
                  ? 'bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 font-semibold' 
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Synthesis Table View"
            >
              <Table className="w-4 h-4" />
              <span className="hidden sm:inline">Matrix</span>
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-navy-900/90 border border-navy-750 shadow-lg mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search papers by author, method, domain, keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-navy-950/80 border border-navy-700/80 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Count Badge */}
            <div className="text-xs font-mono text-slate-400 self-center hidden lg:block">
              Showing <span className="text-brand-cyan font-bold">{filteredPapers.length}</span> of {papers.length} Papers
            </div>
          </div>

          {/* Filter Chips */}
          <div className="mt-4 pt-3 border-t border-navy-800/80 flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-[11px] font-mono uppercase text-slate-400 whitespace-nowrap flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3 text-brand-cyan" />
              Filter:
            </span>
            
            {filterTags.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                    active
                      ? 'bg-brand-cyan text-navy-950 font-bold shadow-md shadow-brand-cyan/20'
                      : 'bg-navy-800/70 text-slate-300 hover:bg-navy-750 hover:text-white border border-navy-700/60'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* Papers Grid View */}
        {viewMode === 'grid' && (
          <div>
            {filteredPapers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredPapers.map((paper) => (
                  <PaperCard
                    key={paper.id}
                    paper={paper}
                    onViewAnalysis={onSelectPaper}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 rounded-xl bg-navy-900/40 border border-navy-800">
                <p className="text-slate-400 text-sm">No research papers match your current search or filter criteria.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSelectedTag('All'); }}
                  className="mt-3 text-xs font-mono text-brand-cyan hover:underline cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Paper Comparison Matrix Table (Section 03) */}
        <div id="paper-analysis" className="mt-16 pt-12 border-t border-navy-800">
          <div className="mb-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-navy-800 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-semibold uppercase tracking-wider mb-2 w-fit">
              <span>03 — Paper-wise Comparison Matrix</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Literature Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Comparative synthesis of methodology, dataset attributes, primary objectives, SIF focus, and identified limitations.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-navy-750 bg-navy-900/90 shadow-xl">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-navy-850/90 border-b border-navy-700 text-slate-300 font-mono uppercase tracking-wider text-[11px]">
                  <th className="py-3.5 px-4 font-semibold">Paper & Citation</th>
                  <th className="py-3.5 px-4 font-semibold">Methodology</th>
                  <th className="py-3.5 px-4 font-semibold">Dataset</th>
                  <th className="py-3.5 px-4 font-semibold">Main Task</th>
                  <th className="py-3.5 px-4 font-semibold">SIF Focus</th>
                  <th className="py-3.5 px-4 font-semibold">Limitation / Gap</th>
                  <th className="py-3.5 px-3 font-semibold text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy-800/80">
                {papers.map((p, idx) => (
                  <tr 
                    key={p.id}
                    className="hover:bg-navy-800/50 transition-colors"
                  >
                    <td className="py-3.5 px-4 font-medium text-white max-w-[200px]">
                      <div className="font-semibold text-slate-100">{p.shortTitle}</div>
                      <div className="text-[11px] font-mono text-brand-cyan">{p.authors.split(',')[0]} et al. ({p.year})</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 max-w-[160px]">
                      <span className="px-2 py-0.5 rounded bg-navy-950 font-mono text-[10px] text-slate-200 border border-navy-800">
                        {p.method}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 max-w-[170px]">
                      {p.dataset}
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 max-w-[170px]">
                      {p.mainTask}
                    </td>
                    <td className="py-3.5 px-4 max-w-[160px]">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                        p.sifFocus.toLowerCase().includes('direct')
                          ? 'bg-sif-red/15 text-sif-red border border-sif-red/30'
                          : p.sifFocus.toLowerCase().includes('near-miss')
                          ? 'bg-sif-orange/15 text-sif-orange border border-sif-orange/30'
                          : 'bg-navy-800 text-slate-300 border border-navy-700'
                      }`}>
                        {p.sifFocus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 italic max-w-[220px]">
                      {p.limitation}
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <button
                        onClick={() => onSelectPaper(p)}
                        className="px-2.5 py-1 rounded bg-navy-800 hover:bg-brand-cyan hover:text-navy-950 text-brand-cyan border border-brand-cyan/30 text-[11px] font-mono font-semibold transition-all cursor-pointer whitespace-nowrap"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400 mt-2 font-mono italic">
            * Scroll horizontally on smaller screens to inspect all columns. All data points reflect published literature review.
          </p>
        </div>

      </div>
    </section>
  );
}
