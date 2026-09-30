# SIH26165 — Research Hub

**Smart India Hackathon 2026**  
**Problem Statement:** AI/NLP Engine to Detect Serious Injury & Fatality (SIF) Precursors in OIL's Unsafe-Act, Unsafe-Condition and Near-Miss Reports.  
**Domain:** Oil India Limited (OIL) • Exploration & Production

---

## 🌟 Overview

The **SIH26165 Research Hub** is a dark-themed academic and technical literature portal created for the SIH 2026 jury and evaluators. It synthesizes state-of-the-art literature across 10 foundational papers, highlights the industrial research gap in Oil & Gas safety, and outlines our proposed end-to-end AI/NLP precursor identification architecture.

---

## 🚀 Key Features

1. **Academic Branding & Hero:** Sticky navigation, SIH26165 badges, and a 5-stage conceptual pipeline.
2. **Four Research Statistics:** Core literature metrics highlighting 10 papers, 5+ ML/NLP approaches, and SIF precursor focus.
3. **01 — Problem Statement:** Detailed breakdown of Unsafe-Acts, Unsafe-Conditions, and Near-Misses with the Core Challenge highlight.
4. **02 — Research Papers Explorer:** Filterable and searchable catalog across 10 peer-reviewed papers with domain badges and detailed cards.
5. **03 — Paper-wise Comparison Matrix:** Horizontally scrollable comparative synthesis table and interactive detailed analysis modal.
6. **04 — Research Gap:** Academic progression diagram, literature capabilities, core opportunity definition, and 5 critical research limitations.
7. **05 — Existing vs Proposed System:** Comparative matrix contrasting legacy manual/rule-based reviews with our multi-stage intelligent pipeline.
8. **06 — Proposed AI/NLP Architecture:** Interactive 6-layer pipeline diagram with real-time layer inspection.
9. **07 — Research Insights:** Interactive Recharts visualizations categorizing methodology, domain distribution, and analytical focus.
10. **08 — Key Takeaways:** Four foundational insight cards distilled from the literature review.
11. **09 — References:** Complete bibliography with one-click APA citation copy and Research Collection connectors.
12. **Research Scanner (QR Code):** Dynamic QR code pointing to `RESEARCH_HUB_URL` for mobile evaluation during jury rounds.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Styling:** Tailwind CSS (Dark Navy / Cyan / SIF Orange-Red palette)
- **Icons:** Lucide React
- **Data Visualizations:** Recharts
- **QR Code:** qrcode.react (Dynamic SVG)
- **Fonts:** Inter & JetBrains Mono

---

## 📁 Project Architecture

```
d:/SIH/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── ProblemStatement.jsx
│   │   ├── ResearchExplorer.jsx
│   │   ├── PaperCard.jsx
│   │   ├── PaperAnalysisModal.jsx
│   │   ├── ResearchGap.jsx
│   │   ├── SystemArchitecture.jsx
│   │   ├── ResearchInsights.jsx
│   │   ├── References.jsx
│   │   ├── QRSection.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   └── papers.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

## ⚙️ Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Updating the Deployed URL for the QR Code

When deploying to Vercel, Netlify, or Firebase, open `src/data/papers.js` and update:

```javascript
export const RESEARCH_HUB_URL = "https://your-deployed-website-url.com";
```

The QR code and URL copy utility in the **Research Scanner** section will update automatically.
