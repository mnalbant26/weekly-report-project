import React, { useState } from 'react';
import { 
  Lightbulb, 
  Sparkles, 
  MessageSquare, 
  HelpCircle, 
  Award, 
  CheckCircle2, 
  Code2, 
  Copy, 
  Check, 
  Save, 
  RotateCcw, 
  FileDown, 
  TrendingUp, 
  Zap, 
  AlertCircle
} from 'lucide-react';
import { WeeklyResearchReport } from '../types';

interface CreatorStudioProps {
  report: WeeklyResearchReport;
  onUpdateReport: (updated: WeeklyResearchReport) => void;
  onResetDefaults: () => void;
  onExportStandalone: () => void;
}

export const CreatorStudio: React.FC<CreatorStudioProps> = ({
  report,
  onUpdateReport,
  onResetDefaults,
  onExportStandalone
}) => {
  const { creatorTips, days, keyStats, reportMeta } = report;

  // JSON editor state
  const [jsonText, setJsonText] = useState(JSON.stringify(report, null, 2));
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedTalkingPoint, setCopiedTalkingPoint] = useState<number | null>(null);

  // Sync state if external report changes
  const handleFormatJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      setJsonText(JSON.stringify(parsed, null, 2));
      setJsonError(null);
    } catch (e: any) {
      setJsonError(e.message || "Invalid JSON syntax");
    }
  };

  const handleSaveJson = () => {
    try {
      const parsed = JSON.parse(jsonText);
      onUpdateReport(parsed);
      setJsonError(null);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2500);
    } catch (e: any) {
      setJsonError(`Cannot save: ${e.message}`);
    }
  };

  const handleCopyTalkingPoint = (point: string, idx: number) => {
    navigator.clipboard.writeText(point);
    setCopiedTalkingPoint(idx);
    setTimeout(() => setCopiedTalkingPoint(null), 2000);
  };

  // Report Quality Audit metrics
  const hasOutcomeHeadline = !!reportMeta.primaryOutcomeHeadline;
  const hasQuantitativeStats = keyStats.length >= 3;
  const hasDailyDeltas = days.every(d => !!d.progressVsPast.improvementDelta);
  const hasFutureWork = report.synthesis.futureRoadmap.length >= 2;

  const scoreItems = [
    { title: "Executive Hook & Outcome Headline", passed: hasOutcomeHeadline, score: 25 },
    { title: "Quantitative Empirical Metrics (3+ Stats)", passed: hasQuantitativeStats, score: 25 },
    { title: "Before/After Knowledge Delta on all Days", passed: hasDailyDeltas, score: 25 },
    { title: "Prioritized Strategic Roadmap for Future Sprints", passed: hasFutureWork, score: 25 }
  ];

  const totalScore = scoreItems.reduce((acc, item) => acc + (item.passed ? item.score : 0), 0);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4" />
              Creator Coaching Hub & Live Studio
            </span>
            <h1 className="text-xl sm:text-3xl font-extrabold text-white">
              Presentation Coaching, Q&A Prep & Live JSON Studio
            </h1>
          </div>

          <button
            onClick={onExportStandalone}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white rounded-lg text-xs font-semibold shadow-md transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Export Standalone HTML</span>
          </button>
        </div>

        <p className="text-sm text-slate-300">
          Designed specifically for research authors to elevate weekly technical reports from static PDFs into persuasive, memorable executive presentations.
        </p>
      </section>

      {/* 1. Presentation Quality Scorecard */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              Report Engagement & Persuasiveness Scorecard
            </h2>
            <p className="text-xs text-slate-400">Automated audit evaluating slide engagement, cognitive load, and executive clarity</p>
          </div>

          <div className="flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-xs text-slate-400">Score:</span>
            <span className="text-2xl font-black text-amber-400">{totalScore}</span>
            <span className="text-xs text-slate-500">/ 100</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {scoreItems.map((item, i) => (
            <div key={i} className={`p-4 rounded-xl border text-xs space-y-2 ${
              item.passed ? 'bg-emerald-950/20 border-emerald-800/40 text-emerald-300' : 'bg-slate-950/60 border-slate-800 text-slate-400'
            }`}>
              <div className="flex items-center justify-between font-bold">
                <span>Rule #{i+1}</span>
                {item.passed ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                )}
              </div>
              <p className="text-slate-200 font-medium">{item.title}</p>
              <span className="text-[10px] text-slate-400 block font-mono">+{item.score} pts</span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Presentation Delivery Tips */}
      <section className="space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          Tactical Presentation Coaching for High-Impact Delivery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {creatorTips.presentationTips.map((tip, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-xl p-5 space-y-3 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {tip.category}
                </span>
                <span className="text-[11px] text-slate-500">Speaker Guideline</span>
              </div>

              <h3 className="text-sm font-bold text-white leading-snug">
                "{tip.tip}"
              </h3>

              <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-xs text-amber-300/90 space-y-1">
                <span className="font-semibold text-amber-400 block text-[11px]">How to apply this in your slides:</span>
                <p className="text-slate-300">{tip.actionItem}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Recommended Talking Points */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-sky-400" />
          High-Impact Verbal Talking Points (Copy & Use in Presentation)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {creatorTips.recommendedTalkingPoints.map((point, idx) => (
            <div 
              key={idx}
              className="bg-slate-950/70 border border-slate-800 rounded-lg p-4 flex items-start justify-between gap-3 text-xs text-slate-200 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase text-indigo-400 font-mono">Talking Point #{idx + 1}</span>
                <p className="italic text-slate-300 leading-relaxed">{point}</p>
              </div>
              <button
                onClick={() => handleCopyTalkingPoint(point, idx)}
                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors shrink-0"
                title="Copy to clipboard"
              >
                {copiedTalkingPoint === idx ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Audience Q&A Anticipation Matrix */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-emerald-400" />
          Anticipated Questions & Defensible Answers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {creatorTips.potentialAudienceQuestions.map((qa, idx) => (
            <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-lg p-4 space-y-2.5 text-xs">
              <div className="font-semibold text-rose-300 leading-snug">
                <span className="text-[10px] uppercase text-rose-400 block font-mono">Q: Tough Question</span>
                "{qa.question}"
              </div>
              <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-slate-300 space-y-1">
                <span className="text-[10px] uppercase text-emerald-400 font-bold block font-mono">A: Recommended Answer</span>
                <p className="text-emerald-200 font-medium leading-relaxed">{qa.suggestedAnswer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Live data.json Code Editor */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-400" />
              Live data.json Editor & Validator
            </h2>
            <p className="text-xs text-slate-400">Edit your weekly research data in real-time. Changes update all dashboard views and slides instantly.</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleFormatJson}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
            >
              Format JSON
            </button>
            <button
              onClick={onResetDefaults}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Sample
            </button>
            <button
              onClick={handleSaveJson}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply & Sync</span>
            </button>
          </div>
        </div>

        {jsonError && (
          <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-800 text-xs text-rose-300 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{jsonError}</span>
          </div>
        )}

        {saveSuccess && (
          <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span>Report updated and synchronized successfully!</span>
          </div>
        )}

        <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
          <textarea
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            rows={18}
            className="w-full bg-slate-950 text-slate-200 font-mono text-xs p-4 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-y leading-relaxed"
            spellCheck={false}
          />
        </div>
      </section>

    </div>
  );
};
