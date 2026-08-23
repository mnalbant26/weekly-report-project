import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  MessageSquare, 
  Sparkles, 
  TrendingUp, 
  FlaskConical, 
  Layers, 
  Lightbulb, 
  Clock, 
  HelpCircle,
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { WeeklyResearchReport, DayReport } from '../types';

interface PresentationSlideModeProps {
  report: WeeklyResearchReport;
  initialSlideIndex?: number;
  onClose: () => void;
}

export const PresentationSlideMode: React.FC<PresentationSlideModeProps> = ({
  report,
  initialSlideIndex = 0,
  onClose
}) => {
  const { reportMeta, keyStats, days, synthesis, creatorTips } = report;

  // Slide list structure:
  // Slide 0: Title & Executive Summary
  // Slide 1: Key Empirical Metrics
  // Slide 2..(2+days.length-1): Each Day (Mon..Fri)
  // Slide (2+days.length): Knowledge Evolution Matrix
  // Slide (3+days.length): Future Roadmap & Next Steps
  const totalSlides = 2 + days.length + 2;
  const [currentSlide, setCurrentSlide] = useState(initialSlideIndex);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide(prev => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, onClose]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const getSlideTitle = (index: number) => {
    if (index === 0) return "Executive Overview";
    if (index === 1) return "Key Metrics & Impact";
    if (index >= 2 && index < 2 + days.length) {
      return `${days[index - 2].day}: ${days[index - 2].focusTopic}`;
    }
    if (index === 2 + days.length) return "Knowledge Evolution Matrix";
    return "Actionable Roadmap & Future Work";
  };

  const currentDay: DayReport | null = (currentSlide >= 2 && currentSlide < 2 + days.length) 
    ? days[currentSlide - 2] 
    : null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-slate-100 flex flex-col justify-between select-none overflow-hidden">
      
      {/* Top Slide Control Bar */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-900/90 border-b border-slate-800 text-xs z-20">
        <div className="flex items-center gap-3">
          <span className="font-bold text-indigo-400 uppercase tracking-wider bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800/50">
            {reportMeta.weekNumber}
          </span>
          <span className="font-semibold text-slate-200 truncate max-w-md">
            {getSlideTitle(currentSlide)}
          </span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowNotes(!showNotes)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors ${
              showNotes 
                ? 'bg-amber-600 text-white border-amber-500' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
            }`}
            title="Toggle Speaker Notes & Q&A Tips (N)"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Presenter Notes</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Toggle Fullscreen (F)"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-800 transition-colors ml-2"
            title="Exit Presentation (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slide Canvas Container */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 lg:p-12 overflow-y-auto relative">
        <div className="w-full max-w-6xl mx-auto h-full flex flex-col justify-center">

          {/* SLIDE 0: TITLE & EXECUTIVE SUMMARY */}
          {currentSlide === 0 && (
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Weekly Research Briefing • {reportMeta.researchDomain}
                </div>
                <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  {reportMeta.title}
                </h1>
                <p className="text-lg sm:text-xl text-indigo-200 font-medium">
                  {reportMeta.subtitle}
                </p>
              </div>

              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 block">
                  Executive Abstract & Core Breakthrough
                </span>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-light">
                  {reportMeta.executiveSummary}
                </p>
                <div className="p-4 rounded-xl bg-indigo-950/50 border border-indigo-800/40 text-indigo-200 font-semibold text-sm sm:text-base flex items-center gap-3">
                  <Zap className="w-5 h-5 text-indigo-400 shrink-0" />
                  <span>{reportMeta.primaryOutcomeHeadline}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-200">{reportMeta.author.name}</span>
                  <span>•</span>
                  <span>{reportMeta.author.role}</span>
                  <span>•</span>
                  <span>{reportMeta.author.department}</span>
                </div>
                <div className="font-mono text-slate-400">
                  {reportMeta.dateRange}
                </div>
              </div>
            </div>
          )}

          {/* SLIDE 1: KEY STATS & EMPIRICAL METRICS */}
          {currentSlide === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Quantitative Impact & Validation
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Weekly Benchmark Scorecard
                </h2>
                <p className="text-sm text-slate-300">
                  Empirical results collected across {reportMeta.experimentsRun} reproducible test trials ({reportMeta.totalResearchHours} research hours)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {keyStats.map(stat => (
                  <div 
                    key={stat.id}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xl relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-400">{stat.label}</span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {stat.trendValue}
                      </span>
                    </div>
                    <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      {stat.value}
                    </div>
                    <p className="text-sm text-slate-400 font-medium">
                      {stat.subtext}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDES 2..(2+days.length-1): INDIVIDUAL DAY DEEP DIVE */}
          {currentDay && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                      {currentDay.day} • {currentDay.date}
                    </span>
                    <span className="text-xs text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {currentDay.phaseBadge}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-3xl font-extrabold text-white">
                    {currentDay.focusTopic}
                  </h2>
                </div>

                {currentDay.metrics && currentDay.metrics[0] && (
                  <div className="bg-slate-900 px-4 py-2 rounded-xl border border-slate-800 text-right">
                    <div className="text-xs text-slate-400">{currentDay.metrics[0].label}</div>
                    <div className="text-xl font-bold text-emerald-400">{currentDay.metrics[0].value}</div>
                  </div>
                )}
              </div>

              {/* Day Grid Details */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* What Was Done */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                    Investigation & Empirical Actions
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {currentDay.researchDone.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Insight Highlight */}
                <div className="bg-gradient-to-br from-indigo-950/60 to-slate-900 border border-indigo-500/40 rounded-xl p-5 space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Breakthrough Discovery
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                    "{currentDay.keyTakeaway}"
                  </p>
                  {currentDay.insightDescription && (
                    <p className="text-xs text-slate-300">
                      {currentDay.insightDescription}
                    </p>
                  )}
                </div>

                {/* Practical Demo/Artifact */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <FlaskConical className="w-4 h-4" />
                      Practical Run: {currentDay.practicalApplication.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800/60">
                      {currentDay.practicalApplication.outcomeStatus}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">{currentDay.practicalApplication.description}</p>
                  {currentDay.practicalApplication.outputSnippet && (
                    <pre className="text-[11px] font-mono text-emerald-300/90 bg-slate-950 p-2.5 rounded border border-slate-800 overflow-x-auto">
                      {currentDay.practicalApplication.outputSnippet}
                    </pre>
                  )}
                </div>

                {/* Progress Comparison Delta */}
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-sky-400 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Knowledge & Performance Delta
                  </h3>
                  <div className="text-xs space-y-1.5">
                    <div className="text-slate-400">
                      <span className="font-semibold text-rose-400">Past Baseline:</span> {currentDay.progressVsPast.previousKnowledge}
                    </div>
                    <div className="text-slate-200">
                      <span className="font-semibold text-indigo-400">Current Insight:</span> {currentDay.progressVsPast.currentInsight}
                    </div>
                    <div className="text-emerald-300 font-semibold bg-emerald-950/40 p-2 rounded border border-emerald-800/40 mt-1">
                      Improvement: {currentDay.progressVsPast.improvementDelta}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* SLIDE: KNOWLEDGE EVOLUTION MATRIX */}
          {currentSlide === 2 + days.length && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Comprehensive Synthesis
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Knowledge Evolution & Paradigm Shifts
                </h2>
                <p className="text-sm text-slate-300">
                  {synthesis.weeklyImpactSummary}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {synthesis.knowledgeEvolution.map((evo, i) => (
                  <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{evo.domain}</h4>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                        Impact: {evo.impactScore}/100
                      </span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-rose-300">
                        <span className="font-bold block text-rose-400 mb-1">Previous Assumption:</span>
                        {evo.beforeState}
                      </div>
                      <div className="bg-emerald-950/40 p-3 rounded-lg border border-emerald-800/50 text-emerald-200">
                        <span className="font-bold block text-emerald-400 mb-1">Empirically Proven:</span>
                        {evo.afterState}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SLIDE: FUTURE ROADMAP & ACTIONS */}
          {currentSlide === 2 + days.length + 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Next Horizons & Action Plan
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                  Prioritized Future Work & Next Experiments
                </h2>
                <p className="text-sm text-slate-300">
                  Structured trajectory for canary release, model distillation, and hardware scaling
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {synthesis.futureRoadmap.map(item => (
                  <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                          {item.period}
                        </span>
                        <span className="text-xs font-semibold text-amber-400">
                          {item.priority} Priority
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.rationale}
                      </p>
                    </div>

                    {item.owner && (
                      <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-800">
                        Lead: <strong className="text-slate-200">{item.owner}</strong>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Collapsible Presenter Notes Drawer */}
      {showNotes && (
        <aside className="bg-slate-900 border-t border-amber-600/40 p-4 sm:p-5 max-h-56 overflow-y-auto text-xs z-30 animate-fadeIn">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="space-y-1 sm:max-w-xl">
              <div className="flex items-center gap-2 font-bold text-amber-300 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Presenter Speaking Cue for This Slide:</span>
              </div>
              <p className="text-slate-200 italic leading-relaxed text-sm">
                {currentDay?.presenterNotes 
                  ? `"${currentDay.presenterNotes}"` 
                  : currentSlide === 0 
                  ? `"${creatorTips.recommendedTalkingPoints[0]}"`
                  : `"${creatorTips.recommendedTalkingPoints[1] || 'Highlight the practical numbers and focus on operational savings.'}"`
                }
              </p>
            </div>

            <div className="space-y-1 sm:max-w-md bg-slate-950 p-3 rounded-lg border border-slate-800 text-[11px]">
              <span className="font-semibold text-slate-300 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
                Anticipated Question from Audience:
              </span>
              <p className="text-slate-400">
                "{creatorTips.potentialAudienceQuestions[0]?.question || 'What is the rollout timeline?'}"
              </p>
              <p className="text-emerald-300 font-medium pt-1">
                Tip: {creatorTips.potentialAudienceQuestions[0]?.suggestedAnswer || 'Canary migration scheduled for next Tuesday.'}
              </p>
            </div>
          </div>
        </aside>
      )}

      {/* Bottom Navigation Toolbar & Progress Dots */}
      <footer className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-4 z-20">
        
        {/* Previous Button */}
        <button
          onClick={() => setCurrentSlide(prev => Math.max(0, prev - 1))}
          disabled={currentSlide === 0}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Slide Progress Indicator */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-md">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                currentSlide === idx 
                  ? 'w-8 bg-indigo-500' 
                  : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`Jump to slide ${idx + 1}: ${getSlideTitle(idx)}`}
            />
          ))}
          <span className="text-xs font-mono text-slate-400 ml-2">
            {currentSlide + 1}/{totalSlides}
          </span>
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentSlide(prev => Math.min(totalSlides - 1, prev + 1))}
          disabled={currentSlide === totalSlides - 1}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>

      </footer>

    </div>
  );
};
