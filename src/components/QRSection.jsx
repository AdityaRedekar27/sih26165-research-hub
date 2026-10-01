import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { 
  QrCode, 
  Smartphone, 
  ExternalLink, 
  Copy, 
  Check, 
  Laptop
} from 'lucide-react';
import { RESEARCH_HUB_URL } from '../data/papers';

export default function QRSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(RESEARCH_HUB_URL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="qr-scanner" className="py-20 bg-navy-900/60 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-navy-900 via-navy-850 to-navy-950 border border-brand-cyan/40 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-sif-orange/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Branding & Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono uppercase font-bold tracking-wider">
                <QrCode className="w-3.5 h-3.5" />
                Research Scanner
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Scan → Explore Our Research
              </h2>

              <p className="text-sm sm:text-base text-brand-sky/90 font-medium">
                10 Papers • Paper Analysis • Research Gap • Proposed System
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Scan the QR code with any mobile device to immediately open this research hub during hackathon evaluation rounds, lab presentations, or academic defense.
              </p>

              {/* Direct Portal Link */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-300 mb-2 font-medium">
                  Direct Portal URL:
                </div>

                <div className="flex items-center gap-2 max-w-md bg-navy-950/90 p-2 rounded-xl border border-navy-750 shadow-inner">
                  <span className="flex-1 text-xs font-mono text-brand-cyan px-2 truncate">
                    {RESEARCH_HUB_URL}
                  </span>
                  
                  <button
                    onClick={handleCopyUrl}
                    className="px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-xs font-mono text-slate-200 border border-navy-700 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                    title="Copy live URL"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-brand-cyan" />}
                    <span>{copied ? "Copied" : "Copy Link"}</span>
                  </button>

                  <a
                    href={RESEARCH_HUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-brand-cyan border border-navy-700 transition-colors shrink-0"
                    title="Open live portal in new tab"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: High-tech QR Code Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="p-6 rounded-2xl bg-white text-navy-950 shadow-2xl flex flex-col items-center border-4 border-navy-700/80 max-w-xs w-full">
                
                {/* QR Code Container */}
                <div className="p-2 bg-white rounded-lg flex items-center justify-center">
                  <QRCodeSVG
                    value={RESEARCH_HUB_URL}
                    size={200}
                    level="H"
                    includeMargin={false}
                    fgColor="#050811"
                    bgColor="#ffffff"
                  />
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 w-full text-center">
                  <div className="text-xs font-mono font-bold text-navy-950 uppercase tracking-wider">
                    SIH26165 • Research Hub
                  </div>
                  <div className="text-[10px] text-slate-600 font-mono mt-0.5">
                    Scan for Mobile Research Dashboard
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-brand-cyan" />
                  Mobile Optimized
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Laptop className="w-3.5 h-3.5 text-brand-sky" />
                  Responsive
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
