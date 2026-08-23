import React, { useState, useEffect } from 'react';
import { 
  Presentation, 
  LayoutDashboard, 
  CalendarDays, 
  Compass, 
  Lightbulb, 
  Code2, 
  RefreshCw, 
  FileCode2, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { WeeklyResearchReport } from '../types';

interface NavbarProps {
  report: WeeklyResearchReport;
  activeView: 'dashboard' | 'days' | 'synthesis' | 'creator' | 'editor';
  setActiveView: (view: 'dashboard' | 'days' | 'synthesis' | 'creator' | 'editor') => void;
  onOpenPresentation: () => void;
  onOpenExporter: () => void;
  onRefreshData: () => void;
  isLoading: boolean;
  dataSource: 'fetched' | 'local' | 'edited';
}

export const Navbar: React.FC<NavbarProps> = ({
  report,
  activeView,
  setActiveView,
  onOpenPresentation,
  onOpenExporter,
  onRefreshData,
  isLoading,
  dataSource
}) => {
  // Speaker Timer feature
  const [timerRunning, setTimerRunning] = useState(false);
  const [secondsElapsed, setSecondsElapsed] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand / Report Title Badge */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 shrink-0">
              <span className="font-mono font-bold text-white text-xs tracking-wider">RES</span>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
                  {report.reportMeta.weekNumber}
                </span>
                <span className="text-xs text-slate-400 truncate hidden sm:inline">
                  {report.reportMeta.dateRange}
                </span>
                {dataSource === 'fetched' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/50">
                    <CheckCircle2 className="w-3 h-3" /> data.json synced
                  </span>
                ) : dataSource === 'edited' ? (
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 bg-amber-950/60 px-1.5 py-0.5 rounded border border-amber-800/50">
                    <AlertCircle className="w-3 h-3" /> custom edited
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/50">
                    built-in fallback
                  </span>
                )}
              </div>
              <h1 className="text-sm font-semibold text-slate-200 truncate max-w-xs md:max-w-md">
                {report.reportMeta.title}
              </h1>
            </div>
          </div>

          {/* Navigation View Switcher */}
          <nav className="hidden lg:flex items-center bg-slate-950/60 p-1 rounded-xl border border-slate-800/80">
            <button
              onClick={() => setActiveView('dashboard')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              Executive Bento
            </button>
            <button
              onClick={() => setActiveView('days')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'days'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <CalendarDays className="w-3.5 h-3.5" />
              Day-by-Day (Mon–Fri)
            </button>
            <button
              onClick={() => setActiveView('synthesis')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'synthesis'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Synthesis & Roadmap
            </button>
            <button
              onClick={() => setActiveView('creator')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'creator'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
              Creator Studio & Tips
            </button>
            <button
              onClick={() => setActiveView('editor')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeView === 'editor'
                  ? 'bg-slate-800 text-slate-100 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Live JSON
            </button>
          </nav>

          {/* Action Controls (Presenter Mode, Timer, Reload, Exporter) */}
          <div className="flex items-center gap-2">
            
            {/* Presenter Speech Timer */}
            <div className="hidden xl:flex items-center bg-slate-950/80 px-2.5 py-1 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className={timerRunning ? 'text-emerald-400 font-semibold' : 'text-slate-400'}>
                {formatTime(secondsElapsed)}
              </span>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                title={timerRunning ? "Pause Timer" : "Start Presentation Timer"}
                className="hover:text-white p-0.5 rounded text-slate-400 hover:bg-slate-800"
              >
                {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              {secondsElapsed > 0 && (
                <button
                  onClick={() => { setTimerRunning(false); setSecondsElapsed(0); }}
                  title="Reset Timer"
                  className="hover:text-white p-0.5 rounded text-slate-400 hover:bg-slate-800"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Refresh data.json */}
            <button
              onClick={onRefreshData}
              disabled={isLoading}
              title="Reload from /data.json"
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin text-indigo-400' : ''}`} />
            </button>

            {/* Export Standalone HTML */}
            <button
              onClick={onOpenExporter}
              title="Export Standalone Single-File index.html"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 transition-all shadow-sm"
            >
              <FileCode2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Get Standalone HTML</span>
            </button>

            {/* Start Slide Presentation Mode */}
            <button
              onClick={onOpenPresentation}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Presentation className="w-3.5 h-3.5" />
              <span>Present Deck</span>
            </button>
          </div>

        </div>

        {/* Mobile View Navigation bar */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2 border-t border-slate-800/60 gap-1 scrollbar-none">
          <button
            onClick={() => setActiveView('dashboard')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeView === 'dashboard' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setActiveView('days')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeView === 'days' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            Day-by-Day
          </button>
          <button
            onClick={() => setActiveView('synthesis')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeView === 'synthesis' ? 'bg-indigo-600 text-white' : 'text-slate-400'
            }`}
          >
            Roadmap
          </button>
          <button
            onClick={() => setActiveView('creator')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeView === 'creator' ? 'bg-amber-600 text-white' : 'text-slate-400'
            }`}
          >
            Creator Tips
          </button>
          <button
            onClick={() => setActiveView('editor')}
            className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap ${
              activeView === 'editor' ? 'bg-slate-800 text-slate-200' : 'text-slate-400'
            }`}
          >
            Live JSON
          </button>
        </div>
      </div>
    </header>
  );
};
