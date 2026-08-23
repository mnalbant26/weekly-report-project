import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Download, 
  FileCode, 
  CheckCircle2, 
  ExternalLink,
  Code2,
  Sparkles
} from 'lucide-react';
import { WeeklyResearchReport } from '../types';

interface StandaloneExporterModalProps {
  report: WeeklyResearchReport;
  onClose: () => void;
}

export const StandaloneExporterModal: React.FC<StandaloneExporterModalProps> = ({
  report,
  onClose
}) => {
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [activeTab, setActiveTab] = useState<'html' | 'json'>('html');

  const jsonContent = JSON.stringify(report, null, 2);

  // Generate the standalone HTML with Tailwind CDN and Vanilla JS
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Weekly Research Presentation Dashboard</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(6px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
  </style>
</head>
<body class="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-indigo-500 selection:text-white">

  <!-- Navbar -->
  <header class="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 gap-4">
        <div class="flex items-center gap-3">
          <div class="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center font-bold text-white text-xs shadow-md">
            RES
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span id="nav-week" class="text-xs font-bold text-indigo-400 uppercase bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">Week 34</span>
              <span id="sync-status" class="text-[11px] text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">● data.json synced</span>
            </div>
            <h1 id="nav-title" class="text-sm font-semibold text-slate-200 truncate max-w-md">Weekly Research Dashboard</h1>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button id="btn-toggle-present" onclick="togglePresentationMode()" class="flex items-center gap-1.5 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-bold transition shadow-md">
            <i data-lucide="presentation" class="w-3.5 h-3.5"></i>
            <span>Present Deck</span>
          </button>
          <button onclick="fetchData()" class="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition" title="Reload data.json">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
    
    <!-- Executive Hero -->
    <section class="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/60 border border-slate-800 p-6 md:p-8 relative overflow-hidden shadow-2xl">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-4">
        <span id="domain-badge" class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI Systems</span>
        <span id="meta-hours" class="text-xs text-slate-400">38.5h Research • 24 Empirical Runs</span>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div class="lg:col-span-2 space-y-3">
          <h2 id="report-title" class="text-2xl sm:text-3xl font-extrabold text-white leading-tight">Loading research report...</h2>
          <p id="report-summary" class="text-sm text-slate-300 leading-relaxed"></p>
        </div>
        <div class="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3">
          <div class="flex items-center gap-3">
            <div id="author-avatar" class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white text-sm">R</div>
            <div>
              <div id="author-name" class="text-xs font-bold text-white">Researcher</div>
              <div id="author-role" class="text-[11px] text-slate-400">Applied ML</div>
            </div>
          </div>
          <div id="outcome-headline" class="text-xs font-semibold text-indigo-300 bg-indigo-950/60 p-2.5 rounded-lg border border-indigo-800/40"></div>
        </div>
      </div>
    </section>

    <!-- Key Statistics -->
    <section>
      <h3 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Custom Statistics & Key Breakthroughs</h3>
      <div id="stats-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"></div>
    </section>

    <!-- Day By Day Progression -->
    <section class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-base font-bold text-white">Day-by-Day Research Progression (Mon – Fri)</h3>
        <span class="text-xs text-slate-400">Click any day for full details</span>
      </div>
      <!-- Day Tabs -->
      <div id="day-tabs" class="flex gap-2 overflow-x-auto pb-2"></div>
      <!-- Day Details Card -->
      <div id="day-card" class="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl"></div>
    </section>

    <!-- Synthesis & Knowledge Evolution -->
    <section class="space-y-4">
      <h3 class="text-base font-bold text-white">Strategic Synthesis & Knowledge Evolution</h3>
      <div id="synthesis-grid" class="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
    </section>

    <!-- Future Roadmap -->
    <section class="space-y-4">
      <h3 class="text-base font-bold text-white">Prioritized Future Work & Next Sprint Actions</h3>
      <div id="roadmap-grid" class="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
    </section>

  </main>

  <!-- Presentation Slide Overlay -->
  <div id="presentation-overlay" class="fixed inset-0 z-50 bg-slate-950 text-white flex-col justify-between hidden">
    <div class="flex items-center justify-between px-6 py-3 bg-slate-900 border-b border-slate-800 text-xs">
      <span id="slide-indicator" class="font-bold text-indigo-400">Slide 1/7</span>
      <button onclick="togglePresentationMode()" class="px-3 py-1 bg-rose-950 text-rose-300 rounded border border-rose-800">Close Deck (Esc)</button>
    </div>
    <div id="slide-content" class="flex-1 flex items-center justify-center p-8 overflow-y-auto"></div>
    <div class="px-6 py-3 bg-slate-900 border-t border-slate-800 flex justify-between">
      <button onclick="changeSlide(-1)" class="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 rounded text-xs">Previous</button>
      <button onclick="changeSlide(1)" class="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 rounded text-xs font-bold">Next</button>
    </div>
  </div>

  <script>
    let reportData = null;
    let selectedDayIndex = 0;
    let currentSlideIndex = 0;

    async function fetchData() {
      try {
        const res = await fetch('data.json');
        if (!res.ok) throw new Error('data.json not found');
        reportData = await res.json();
        document.getElementById('sync-status').textContent = '● data.json synced';
        document.getElementById('sync-status').className = 'text-[11px] text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800';
      } catch (err) {
        console.warn('Using embedded fallback:', err);
        document.getElementById('sync-status').textContent = '● demo mode';
        document.getElementById('sync-status').className = 'text-[11px] text-amber-400 bg-amber-950 px-1.5 py-0.5 rounded border border-amber-800';
        reportData = ${JSON.stringify(report)};
      }
      renderApp();
    }

    function renderApp() {
      if (!reportData) return;
      const { reportMeta, keyStats, days, synthesis } = reportData;

      // Meta
      document.getElementById('nav-week').textContent = reportMeta.weekNumber || 'Week';
      document.getElementById('nav-title').textContent = reportMeta.title;
      document.getElementById('domain-badge').textContent = reportMeta.researchDomain;
      document.getElementById('meta-hours').textContent = \`\${reportMeta.totalResearchHours || 35}h Research • \${reportMeta.experimentsRun || 20} Empirical Runs\`;
      document.getElementById('report-title').textContent = reportMeta.title;
      document.getElementById('report-summary').textContent = reportMeta.executiveSummary;
      document.getElementById('author-name').textContent = reportMeta.author?.name || 'Author';
      document.getElementById('author-role').textContent = reportMeta.author?.role || 'Researcher';
      document.getElementById('outcome-headline').textContent = reportMeta.primaryOutcomeHeadline || '';

      // Stats
      const statsGrid = document.getElementById('stats-grid');
      statsGrid.innerHTML = keyStats.map(s => \`
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <div class="flex justify-between items-start mb-1 text-xs text-slate-400">
            <span>\${s.label}</span>
            <span class="text-emerald-400 font-bold">\${s.trendValue || ''}</span>
          </div>
          <div class="text-2xl font-extrabold text-white">\${s.value}</div>
          <div class="text-xs text-slate-400">\${s.subtext}</div>
        </div>
      \`).join('');

      // Day tabs
      const dayTabs = document.getElementById('day-tabs');
      dayTabs.innerHTML = days.map((d, i) => \`
        <button onclick="selectDay(\${i})" class="px-3 py-1.5 rounded-lg text-xs font-bold \${i === selectedDayIndex ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'}">
          \${d.day}
        </button>
      \`).join('');

      renderDayDetails();

      // Synthesis
      const synthGrid = document.getElementById('synthesis-grid');
      synthGrid.innerHTML = synthesis.knowledgeEvolution.map(k => \`
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
          <div class="font-bold text-white flex justify-between">
            <span>\${k.domain}</span>
            <span class="text-indigo-400">Impact: \${k.impactScore}%</span>
          </div>
          <div class="p-2 rounded bg-slate-950 text-rose-300 border border-slate-800">
            <strong class="block text-rose-400">Was:</strong> \${k.beforeState}
          </div>
          <div class="p-2 rounded bg-emerald-950/40 text-emerald-200 border border-emerald-800/40">
            <strong class="block text-emerald-400">Now:</strong> \${k.afterState}
          </div>
        </div>
      \`).join('');

      // Roadmap
      const roadmapGrid = document.getElementById('roadmap-grid');
      roadmapGrid.innerHTML = synthesis.futureRoadmap.map(r => \`
        <div class="bg-slate-900 border border-slate-800 rounded-xl p-4 text-xs space-y-2">
          <div class="flex justify-between font-bold">
            <span class="text-indigo-400">\${r.period}</span>
            <span class="text-amber-400">\${r.priority}</span>
          </div>
          <div class="text-sm font-bold text-white">\${r.title}</div>
          <p class="text-slate-300">\${r.rationale}</p>
        </div>
      \`).join('');

      lucide.createIcons();
    }

    function selectDay(index) {
      selectedDayIndex = index;
      renderApp();
    }

    function renderDayDetails() {
      const d = reportData.days[selectedDayIndex];
      if (!d) return;
      const dayCard = document.getElementById('day-card');
      dayCard.innerHTML = \`
        <div class="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span class="text-xs font-bold uppercase text-indigo-400 bg-indigo-950 px-2.5 py-0.5 rounded border border-indigo-800">\${d.day} • \${d.date}</span>
            <h4 class="text-xl font-bold text-white mt-1">\${d.focusTopic}</h4>
          </div>
          \${d.metrics && d.metrics[0] ? \`<div class="bg-slate-950 p-2 rounded border border-slate-800 text-xs text-right"><span class="text-slate-400">\${d.metrics[0].label}:</span> <strong class="text-emerald-400">\${d.metrics[0].value}</strong></div>\` : ''}
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
            <h5 class="font-bold text-indigo-300">What was Researched:</h5>
            <ul class="space-y-1.5 text-slate-300">
              \${d.researchDone.map(r => \`<li class="flex items-start gap-1.5"><span class="text-indigo-400">•</span> \${r}</li>\`).join('')}
            </ul>
          </div>
          <div class="bg-indigo-950/40 p-4 rounded-xl border border-indigo-800/40 text-xs space-y-2">
            <h5 class="font-bold text-indigo-400">Key Takeaway / Breakthrough:</h5>
            <p class="text-slate-200 font-semibold leading-relaxed">"\${d.keyTakeaway}"</p>
          </div>
        </div>
        <div class="bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs space-y-2">
          <div class="flex justify-between font-bold">
            <span class="text-emerald-400">Practical Application: \${d.practicalApplication.title}</span>
            <span class="text-slate-400 uppercase">\${d.practicalApplication.outcomeStatus}</span>
          </div>
          <p class="text-slate-300">\${d.practicalApplication.description}</p>
          \${d.practicalApplication.outputSnippet ? \`<pre class="bg-slate-900 p-2 rounded text-[11px] font-mono text-emerald-300 overflow-x-auto">\${d.practicalApplication.outputSnippet}</pre>\` : ''}
        </div>
      \`;
      lucide.createIcons();
    }

    function togglePresentationMode() {
      const overlay = document.getElementById('presentation-overlay');
      if (overlay.classList.contains('hidden')) {
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
        currentSlideIndex = 0;
        renderSlide();
      } else {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
      }
    }

    function changeSlide(delta) {
      const total = 2 + reportData.days.length;
      currentSlideIndex = Math.max(0, Math.min(total - 1, currentSlideIndex + delta));
      renderSlide();
    }

    function renderSlide() {
      const total = 2 + reportData.days.length;
      document.getElementById('slide-indicator').textContent = \`Slide \${currentSlideIndex + 1}/\${total}\`;
      const slide = document.getElementById('slide-content');
      
      if (currentSlideIndex === 0) {
        slide.innerHTML = \`
          <div class="max-w-4xl text-center space-y-6">
            <h2 class="text-4xl font-extrabold text-white">\${reportData.reportMeta.title}</h2>
            <p class="text-lg text-indigo-300">\${reportData.reportMeta.executiveSummary}</p>
            <div class="p-4 rounded-xl bg-indigo-950 border border-indigo-800 text-emerald-300 font-bold">\${reportData.reportMeta.primaryOutcomeHeadline}</div>
          </div>
        \`;
      } else if (currentSlideIndex === 1) {
        slide.innerHTML = \`
          <div class="max-w-4xl w-full space-y-6">
            <h3 class="text-2xl font-bold text-center">Weekly Benchmark Scorecard</h3>
            <div class="grid grid-cols-2 gap-4">
              \${reportData.keyStats.map(s => \`
                <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center">
                  <div class="text-sm text-slate-400">\${s.label}</div>
                  <div class="text-4xl font-black text-white my-2">\${s.value}</div>
                  <div class="text-emerald-400 font-bold">\${s.trendValue}</div>
                </div>
              \`).join('')}
            </div>
          </div>
        \`;
      } else {
        const d = reportData.days[currentSlideIndex - 2];
        slide.innerHTML = \`
          <div class="max-w-4xl w-full space-y-6">
            <div class="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 class="text-2xl font-bold text-white">\${d.day}: \${d.focusTopic}</h3>
              <span class="text-xs bg-indigo-950 text-indigo-300 px-3 py-1 rounded-full border border-indigo-800">\${d.phaseBadge}</span>
            </div>
            <div class="bg-slate-900 p-5 rounded-xl border border-slate-800 text-sm space-y-3">
              <div class="text-indigo-400 font-bold">Key Insight:</div>
              <div class="text-lg font-semibold text-white">"\${d.keyTakeaway}"</div>
            </div>
            <div class="bg-slate-900 p-5 rounded-xl border border-slate-800 text-xs">
              <div class="font-bold text-emerald-400 mb-1">Practical Output: \${d.practicalApplication.title}</div>
              <p class="text-slate-300 mb-2">\${d.practicalApplication.description}</p>
              \${d.practicalApplication.outputSnippet ? \`<pre class="bg-slate-950 p-3 rounded font-mono text-emerald-300">\${d.practicalApplication.outputSnippet}</pre>\` : ''}
            </div>
          </div>
        \`;
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('presentation-overlay');
        if (!overlay.classList.contains('hidden')) togglePresentationMode();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        changeSlide(1);
      } else if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      }
    });

    fetchData();
  </script>
</body>
</html>`;

  const handleDownload = (filename: string, text: string) => {
    const blob = new Blob([text], { type: filename.endsWith('.html') ? 'text/html' : 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = (text: string, type: 'html' | 'json') => {
    navigator.clipboard.writeText(text);
    if (type === 'html') {
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2000);
    } else {
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <FileCode className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Standalone Single-File Exporter</h3>
              <p className="text-xs text-slate-400">Pure Tailwind CSS CDN + Vanilla JS ready to open in any browser</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center justify-between px-6 py-2 bg-slate-900/90 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('html')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'html' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              index.html (Frontend Single File)
            </button>
            <button
              onClick={() => setActiveTab('json')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'json' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              data.json (Sample Data Structure)
            </button>
          </div>

          <div className="flex items-center gap-2">
            {activeTab === 'html' ? (
              <>
                <button
                  onClick={() => handleCopyCode(standaloneHtmlCode, 'html')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700"
                >
                  {copiedHtml ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHtml ? 'Copied HTML' : 'Copy HTML'}</span>
                </button>
                <button
                  onClick={() => handleDownload('index.html', standaloneHtmlCode)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download index.html</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleCopyCode(jsonContent, 'json')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium border border-slate-700"
                >
                  {copiedJson ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedJson ? 'Copied JSON' : 'Copy JSON'}</span>
                </button>
                <button
                  onClick={() => handleDownload('data.json', jsonContent)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download data.json</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="px-6 py-2.5 bg-slate-950 border-b border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>
            <strong>How to use:</strong> Place <code className="text-indigo-300 font-mono">index.html</code> and <code className="text-emerald-300 font-mono">data.json</code> in the same folder and serve with any local HTTP server (or open directly). The page fetches <code className="text-indigo-300 font-mono">data.json</code> dynamically.
          </span>
        </div>

        {/* Code Preview Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-slate-950">
          <pre className="text-xs font-mono text-slate-300 leading-relaxed overflow-x-auto whitespace-pre p-2">
            {activeTab === 'html' ? standaloneHtmlCode : jsonContent}
          </pre>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-900 flex items-center justify-between text-xs text-slate-400">
          <span>Zero build steps required • Fully self-contained</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
