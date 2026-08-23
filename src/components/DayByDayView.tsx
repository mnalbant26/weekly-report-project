import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  FlaskConical, 
  ArrowRight, 
  Layers, 
  Lightbulb, 
  Code2, 
  Copy, 
  Check, 
  TrendingUp, 
  ChevronLeft, 
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { DayReport } from '../types';

interface DayByDayViewProps {
  days: DayReport[];
  selectedDayId: string;
  onSelectDay: (dayId: string) => void;
  onOpenPresentationWithIndex: (index: number) => void;
}

export const DayByDayView: React.FC<DayByDayViewProps> = ({
  days,
  selectedDayId,
  onSelectDay,
  onOpenPresentationWithIndex
}) => {
  const currentIndex = Math.max(0, days.findIndex(d => d.id === selectedDayId));
  const currentDay = days[currentIndex] || days[0];

  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const handleCopySnippet = (snippet: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectDay(days[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < days.length - 1) {
      onSelectDay(days[currentIndex + 1].id);
    }
  };

  const themeClasses: Record<string, { badge: string; border: string; activeTab: string }> = {
    blue: { badge: 'bg-blue-950/80 text-blue-300 border-blue-800/60', border: 'border-blue-800/40', activeTab: 'border-blue-500 bg-blue-950/40 text-white' },
    purple: { badge: 'bg-purple-950/80 text-purple-300 border-purple-800/60', border: 'border-purple-800/40', activeTab: 'border-purple-500 bg-purple-950/40 text-white' },
    emerald: { badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60', border: 'border-emerald-800/40', activeTab: 'border-emerald-500 bg-emerald-950/40 text-white' },
    amber: { badge: 'bg-amber-950/80 text-amber-300 border-amber-800/60', border: 'border-amber-800/40', activeTab: 'border-amber-500 bg-amber-950/40 text-white' },
    rose: { badge: 'bg-rose-950/80 text-rose-300 border-rose-800/60', border: 'border-rose-800/40', activeTab: 'border-rose-500 bg-rose-950/40 text-white' },
    indigo: { badge: 'bg-indigo-950/80 text-indigo-300 border-indigo-800/60', border: 'border-indigo-800/40', activeTab: 'border-indigo-500 bg-indigo-950/40 text-white' },
    cyan: { badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60', border: 'border-cyan-800/40', activeTab: 'border-cyan-500 bg-cyan-950/40 text-white' }
  };

  const currentTheme = themeClasses[currentDay.themeColor] || themeClasses.blue;

  return (
    <div className="space-y-6 pb-12">
      
      {/* Day Navigation Bar Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800 p-2 rounded-xl">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {days.map((day, idx) => {
            const isSelected = day.id === currentDay.id;
            return (
              <button
                key={day.id}
                onClick={() => onSelectDay(day.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap border ${
                  isSelected
                    ? `${themeClasses[day.themeColor]?.activeTab || 'bg-indigo-600 text-white border-indigo-500'} shadow-md`
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border-transparent'
                }`}
              >
                <span className="w-5 h-5 rounded-full bg-slate-950 flex items-center justify-center text-[10px] font-mono font-bold">
                  {idx + 1}
                </span>
                <span>{day.day}</span>
                <span className="text-[10px] text-slate-500 hidden md:inline">({day.date.split(',')[0]})</span>
              </button>
            );
          })}
        </div>

        {/* Prev / Next & Presentation Slide Sync */}
        <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0">
          <div className="flex items-center gap-1">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Previous Day"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-slate-400 px-1">
              {currentIndex + 1} / {days.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex === days.length - 1}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              title="Next Day"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => onOpenPresentationWithIndex(currentIndex)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-lg transition-all shadow-sm"
          >
            <span>Present This Day</span>
          </button>
        </div>
      </div>

      {/* Main Day Presentation Card */}
      <article className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
        
        {/* Day Header Banner */}
        <header className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${currentTheme.badge}`}>
                {currentDay.day} • {currentDay.date}
              </span>
              <span className="text-xs font-medium text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                {currentDay.phaseBadge}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {currentDay.focusTopic}
            </h1>
          </div>

          {/* Day Metrics Quick Badges */}
          {currentDay.metrics && currentDay.metrics.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {currentDay.metrics.map((m, i) => (
                <div key={i} className="bg-slate-950/80 border border-slate-800 px-3 py-2 rounded-xl text-right">
                  <div className="text-[11px] text-slate-400">{m.label}</div>
                  <div className="text-base font-bold text-emerald-400 flex items-center justify-end gap-1">
                    {m.value}
                    {m.change && <span className="text-[10px] text-slate-400 font-normal">({m.change})</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </header>

        {/* Section 1 & 2: What was Researched + Key Takeaway */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* What was researched and executed */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-5 space-y-3">
            <h2 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              What was Researched & Executed on {currentDay.day}
            </h2>
            <ul className="space-y-2.5">
              {currentDay.researchDone.map((item, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 leading-relaxed">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Takeaway / New Insight */}
          <div className="bg-gradient-to-br from-indigo-950/40 via-slate-950/70 to-slate-950/90 border border-indigo-500/30 rounded-xl p-5 space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-indigo-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                Key Takeaway & Breakthrough Insight
              </h2>
              <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/50">
                Core Discovery
              </span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
              "{currentDay.keyTakeaway}"
            </p>
            {currentDay.insightDescription && (
              <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-indigo-950/80">
                {currentDay.insightDescription}
              </p>
            )}
          </div>

        </div>

        {/* Section 3: Practical Application Performed */}
        <section className="bg-slate-950/70 border border-slate-800 rounded-xl p-5 sm:p-6 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <FlaskConical className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">
                  Practical Application: {currentDay.practicalApplication.title}
                </h3>
                <span className="text-[11px] text-slate-400 uppercase tracking-wide">
                  Type: {currentDay.practicalApplication.type}
                </span>
              </div>
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/50">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {currentDay.practicalApplication.outcomeStatus}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {currentDay.practicalApplication.description}
          </p>

          {/* Output / Code / Log Snippet */}
          {currentDay.practicalApplication.outputSnippet && (
            <div className="relative rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-950 text-[11px] text-slate-400 border-b border-slate-800">
                <span className="font-mono flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                  Live Execution Trace / Artifact Snippet
                </span>
                <button
                  onClick={() => handleCopySnippet(currentDay.practicalApplication.outputSnippet || '')}
                  className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-200 transition-colors"
                >
                  {copiedSnippet ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedSnippet ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-3 text-xs font-mono text-emerald-300/90 overflow-x-auto whitespace-pre leading-relaxed">
                {currentDay.practicalApplication.outputSnippet}
              </pre>
            </div>
          )}
        </section>

        {/* Section 4: Progress Compared to Past Knowledge & Practice */}
        <section className="space-y-3">
          <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-sky-400" />
            Progress & Velocity vs Past Knowledge / Practice
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-4 space-y-1.5">
              <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wide flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> Past Knowledge / Baseline
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentDay.progressVsPast.previousKnowledge}
              </p>
            </div>

            <div className="bg-slate-950/60 border border-indigo-900/40 rounded-xl p-4 space-y-1.5">
              <span className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wide flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> New Verified Insight
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentDay.progressVsPast.currentInsight}
              </p>
            </div>

            <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-xl p-4 space-y-1.5">
              <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wide flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> Practical Improvement Delta
              </span>
              <p className="text-xs text-emerald-200 font-medium leading-relaxed">
                {currentDay.progressVsPast.improvementDelta}
              </p>
            </div>

          </div>
        </section>

        {/* Section 5: Future Suggestions & Next Experiments Derived From This Day */}
        <section className="bg-slate-950/40 border border-slate-800 rounded-xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-400" />
            Actionable Suggestions & Follow-up Work from {currentDay.day}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentDay.futureSuggestions.map((sugg, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800/80">
                <span className="text-amber-400 font-mono text-xs font-bold mt-0.5">#{i+1}</span>
                <span className="text-xs text-slate-300 leading-relaxed">{sugg}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Presenter Notes Callout for Creator */}
        {currentDay.presenterNotes && (
          <footer className="bg-gradient-to-r from-slate-900 to-indigo-950/40 border-l-4 border-indigo-500 rounded-r-xl p-4 flex items-start gap-3">
            <HelpCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h4 className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Presenter Coaching Note for {currentDay.day}
              </h4>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "{currentDay.presenterNotes}"
              </p>
            </div>
          </footer>
        )}

      </article>

    </div>
  );
};
