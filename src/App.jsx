import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProblemStatement from './components/ProblemStatement';
import ResearchExplorer from './components/ResearchExplorer';
import PaperAnalysisModal from './components/PaperAnalysisModal';
import ResearchGap from './components/ResearchGap';
import SystemArchitecture from './components/SystemArchitecture';
import ResearchInsights from './components/ResearchInsights';
import References from './components/References';
import QRSection from './components/QRSection';
import Footer from './components/Footer';
import { PAPERS } from './data/papers';

export default function App() {
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPaperModal = (paper) => {
    setSelectedPaper(paper);
    setIsModalOpen(true);
  };

  const handleClosePaperModal = () => {
    setIsModalOpen(false);
    setSelectedPaper(null);
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan">
      
      {/* Sticky Header Navigation */}
      <Navbar onOpenPaperModal={handleOpenPaperModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Statistics Section */}
        <Stats />

        {/* 01. Problem Statement */}
        <ProblemStatement />

        {/* 02. Research Papers & 03. Paper-wise Comparison Matrix */}
        <ResearchExplorer 
          papers={PAPERS} 
          onSelectPaper={handleOpenPaperModal} 
        />

        {/* 04. Research Gap */}
        <ResearchGap />

        {/* 05. Existing vs Proposed & 06. Proposed Architecture */}
        <SystemArchitecture />

        {/* 07. Research Insights & 08. Key Takeaways */}
        <ResearchInsights />

        {/* 09. References */}
        <References 
          papers={PAPERS} 
          onSelectPaper={handleOpenPaperModal} 
        />

        {/* Research Scanner QR Section */}
        <QRSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Paper Detailed Analysis Modal (03. Paper-Wise Analysis) */}
      <PaperAnalysisModal
        paper={selectedPaper}
        isOpen={isModalOpen}
        onClose={handleClosePaperModal}
      />

    </div>
  );
}
