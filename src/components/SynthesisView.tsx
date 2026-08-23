import React from 'react';
import { 
  Compass, 
  Layers, 
  TrendingUp, 
  Calendar, 
  ShieldAlert, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  User, 
  Sparkles,
  Award
} from 'lucide-react';
import { WeeklyResearchReport } from '../types';

interface SynthesisViewProps {
  report: WeeklyResearchReport;
  onOpenPresentation: () => void;
}

export const SynthesisView: React.FC<SynthesisViewProps> = ({
  report,
  onOpenPresentation
}) => {
  const { reportMeta, synthesis } = report;

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <section className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              Strategic Synthesis & Evolution Analysis
            </span>
            <h1 className="text-xl sm:text-3xl font-extrabold text-white">
              Weekly Research Synthesis & Forward Trajectory
            </h1>
          </div>

          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-md transition-all"
          >
            <span>Present Synthesis Deck</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="bg-slate-950/70 border border-indigo-500/20 rounded-xl p-5 text-sm sm:text-base text-slate-200 leading-relaxed">
          <span className="font-bold text-indigo-400 block text-xs uppercase tracking-wider mb-1.5">
            Operational & Business Impact Summary:
          </span>
          {synthesis.weeklyImpactSummary}
        </div>
      </section>

      {/* 1. Knowledge Evolution Matrix */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              Knowledge Evolution & Paradigm Shifts (Before vs After)
            </h2>
            <p className="text-xs text-slate-400">
              Clear breakdown of invalidated past assumptions versus empirically proven insights
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {synthesis.knowledgeEvolution.map((item, idx) => (
            <div 
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">{item.domain}</h3>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800/60">
                    Impact: {item.impactScore}%
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {/* Before State */}
                  <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-3 space-y-1">
                    <span className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider block">
                      Prior Assumption / Baseline:
                    </span>
                    <p className="text-slate-300 leading-relaxed">
                      {item.beforeState}
                    </p>
                  </div>

                  {/* After State */}
                  <div className="bg-emerald-950/30 border border-emerald-800/40 rounded-lg p-3 space-y-1">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      Empirical New Insight:
                    </span>
                    <p className="text-emerald-200 font-medium leading-relaxed">
                      {item.afterState}
                    </p>
                  </div>
                </div>
              </div>

              {/* Progress Bar Visualizer */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1">
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>Knowledge Delta Progress</span>
                  <span className="text-emerald-400 font-bold">{item.impactScore}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full"
                    style={{ width: `${item.impactScore}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 2. Prioritized Future Work Roadmap */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              Prioritized Future Work & Next Sprint Actions
            </h2>
            <p className="text-xs text-slate-400">
              Immediate recommendations and structural roadmap derived from this week's findings
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {synthesis.futureRoadmap.map((item) => (
            <div 
              key={item.id}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4 flex flex-col justify-between hover:border-indigo-500/30 transition-all"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                    {item.period}
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    item.priority === 'High' 
                      ? 'bg-rose-950/80 text-rose-300 border border-rose-800/50' 
                      : item.priority === 'Strategic'
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-800/50'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  }`}>
                    {item.priority} Priority
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.rationale}
                </p>
              </div>

              {item.owner && (
                <div className="flex items-center gap-2 text-xs text-slate-400 pt-3 border-t border-slate-800">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Assigned: <strong className="text-slate-200">{item.owner}</strong></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 3. Risks & Mitigations */}
      <section className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          Technical Risks & Active Mitigations Identified
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {synthesis.risksAndMitigations.map((r, i) => (
            <div key={i} className="bg-slate-950/60 border border-slate-800/80 rounded-lg p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-rose-300 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
                  Potential Risk:
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                  r.severity === 'High' ? 'bg-rose-950 text-rose-300' : 'bg-amber-950 text-amber-300'
                }`}>
                  {r.severity} Severity
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {r.risk}
              </p>
              <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-xs text-emerald-300 space-y-1 mt-2">
                <span className="font-semibold text-emerald-400 flex items-center gap-1 text-[11px]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Active Mitigation Plan:
                </span>
                <p className="text-[11px] text-slate-300">{r.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
