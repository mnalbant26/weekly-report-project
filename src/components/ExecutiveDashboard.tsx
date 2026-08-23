import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FlaskConical, 
  ShieldCheck, 
  Clock, 
  Calendar,
  Layers, 
  Award, 
  ChevronRight,
  Lightbulb,
  Activity,
  BarChart3
} from 'lucide-react';
import { WeeklyResearchReport } from '../types';

interface ExecutiveDashboardProps {
  report: WeeklyResearchReport;
  onSelectDay: (dayId: string) => void;
  onOpenPresentation: () => void;
  onGoToSynthesis: () => void;
  onGoToCreator: () => void;
}

export const ExecutiveDashboard: React.FC<ExecutiveDashboardProps> = ({
  report,
  onSelectDay,
  onOpenPresentation,
  onGoToSynthesis,
  onGoToCreator
}) => {
  const { reportMeta, keyStats, days, synthesis, creatorTips } = report;

  const colorVariants: Record<string, { bg: string; text: string; border: string; bar: string; glow: string }> = {
    blue: { bg: 'bg-blue-950/40', text: 'text-blue-400', border: 'border-blue-800/40', bar: 'bg-blue-400', glow: 'shadow-blue-500/10' },
    purple: { bg: 'bg-purple-950/40', text: 'text-purple-400', border: 'border-purple-800/40', bar: 'bg-purple-400', glow: 'shadow-purple-500/10' },
    emerald: { bg: 'bg-emerald-950/40', text: 'text-emerald-400', border: 'border-emerald-800/40', bar: 'bg-emerald-400', glow: 'shadow-emerald-500/10' },
    amber: { bg: 'bg-amber-950/40', text: 'text-amber-400', border: 'border-amber-800/40', bar: 'bg-amber-400', glow: 'shadow-amber-500/10' },
    rose: { bg: 'bg-rose-950/40', text: 'text-rose-400', border: 'border-rose-800/40', bar: 'bg-rose-400', glow: 'shadow-rose-500/10' },
    indigo: { bg: 'bg-indigo-950/40', text: 'text-indigo-400', border: 'border-indigo-800/40', bar: 'bg-indigo-400', glow: 'shadow-indigo-500/10' },
    cyan: { bg: 'bg-cyan-950/40', text: 'text-cyan-400', border: 'border-cyan-800/40', bar: 'bg-cyan-400', glow: 'shadow-cyan-500/10' }
  };

  // Calculate knowledge growth score from keyStats or fallback to 88%
  const primaryStat = keyStats[0] || { value: '88%', label: 'Efficiency Gain' };
  const leadMetric = keyStats[1] || { value: '41.2%', label: 'Throughput' };

  return (
    <div className="space-y-6 pb-12">
      
      {/* Top Bento Row: 3-Col Hero Card + 1-Col Circular Velocity Gauge */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Main Hero Bento Card (Spans 3 Columns) */}
        <div className="lg:col-span-3 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-7 relative overflow-hidden flex flex-col justify-between shadow-xl">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 -mb-16 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Header tags and metrics */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-indigo-600 text-white text-[11px] font-bold rounded-md uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {reportMeta.researchDomain}
                </span>
                <span className="text-xs text-slate-400 font-mono bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                  {reportMeta.weekNumber} • {reportMeta.dateRange}
                </span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <strong className="text-slate-200">{reportMeta.totalResearchHours}h</strong> logged
                </span>
                <span className="inline-flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-md border border-slate-800">
                  <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
                  <strong className="text-slate-200">{reportMeta.experimentsRun}</strong> empirical trials
                </span>
              </div>
            </div>

            {/* Title & Primary Impact Statement */}
            <div className="space-y-2 mb-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
                {reportMeta.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                {reportMeta.executiveSummary}
              </p>
            </div>

            {/* Split Insight & Practical Application Bento Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase text-indigo-400 font-bold tracking-wider mb-1 block">
                    Key Weekly Breakthrough
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-100 leading-snug">
                    {reportMeta.primaryOutcomeHeadline}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Empirically verified</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Baseline Smashed
                  </span>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase text-emerald-400 font-bold tracking-wider mb-1 block">
                    Practical Application Status
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 leading-snug">
                    {days[0]?.practicalApplication?.title || 'Production Prototype Deployed'}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">{days[0]?.practicalApplication?.type || 'Benchmark'}</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/50">
                    {days[0]?.practicalApplication?.outcomeStatus || 'Verified'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Author Footer & Action Bar */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-sky-500 p-0.5 shrink-0 shadow-inner">
                {reportMeta.author.avatarUrl ? (
                  <img 
                    src={reportMeta.author.avatarUrl} 
                    alt={reportMeta.author.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-indigo-300 font-bold text-xs">
                    {reportMeta.author.name.charAt(0)}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-semibold text-slate-100 truncate">{reportMeta.author.name}</h4>
                <p className="text-[11px] text-slate-400 truncate">{reportMeta.author.role} • {reportMeta.author.department}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenPresentation}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Launch Presentation Deck</span>
              </button>
              <button
                onClick={onGoToCreator}
                title="View Creator Tips & Speaking Points"
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-medium border border-slate-700 transition-colors"
              >
                <Lightbulb className="w-4 h-4 text-amber-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Weekly Velocity / Knowledge Growth Circular Meter Bento Card (Spans 1 Column) */}
        <div className="bg-indigo-600 rounded-2xl p-6 flex flex-col justify-between text-white shadow-xl shadow-indigo-600/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-extrabold uppercase tracking-widest bg-white/20 px-2.5 py-1 rounded-md text-white border border-white/30">
                Weekly Velocity
              </span>
              <Activity className="w-4 h-4 text-indigo-200" />
            </div>

            <h3 className="text-sm font-semibold text-indigo-100 mb-1">
              Knowledge Growth
            </h3>
            <p className="text-xs text-indigo-200/90 mb-4">
              Empirical evolution rate vs sprint baseline
            </p>
          </div>

          {/* SVG Circular Progress Gauge */}
          <div className="flex flex-col items-center justify-center my-2">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background Ring */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  stroke="rgba(255,255,255,0.2)" 
                  strokeWidth="8"
                />
                {/* Active Progress Ring (88% fill = 251.2 * 0.12 offset = ~30) */}
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="transparent" 
                  stroke="#ffffff" 
                  strokeWidth="8" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="30.1" 
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-2xl font-black tracking-tight text-white leading-none font-mono">
                  {primaryStat.value}
                </span>
                <span className="text-[9px] uppercase tracking-wider text-indigo-200 font-bold mt-1">
                  Speedup
                </span>
              </div>
            </div>
          </div>

          {/* Footer Callout inside velocity card */}
          <div className="bg-black/20 backdrop-blur-sm rounded-xl p-3 border border-white/10 text-xs">
            <div className="flex items-center justify-between font-bold text-white mb-0.5">
              <span>Sprint Comparison</span>
              <span className="text-emerald-300 font-mono">+12.4%</span>
            </div>
            <p className="text-[11px] text-indigo-100/80 leading-snug">
              Consistent leap across all 5 daily research modules
            </p>
          </div>

        </div>

      </section>

      {/* Bento Day-by-Day Progression Row (5 Compact Bento Cards) */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-400" />
              Day-by-Day Research Progression (Mon – Fri)
            </h2>
          </div>
          <button 
            onClick={() => onSelectDay(days[0]?.id || '')}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
          >
            Explore Interactive Days <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {days.map((day, idx) => {
            const variant = colorVariants[day.themeColor] || colorVariants.blue;
            return (
              <div
                key={day.id}
                onClick={() => onSelectDay(day.id)}
                className={`cursor-pointer group flex flex-col justify-between rounded-2xl border p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl bg-slate-900 ${variant.border} ${variant.glow}`}
              >
                <div className="space-y-2.5">
                  
                  {/* Top Row: Day & Date */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider ${variant.text}`}>
                      {day.day}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {day.date.split(',')[0]}
                    </span>
                  </div>

                  {/* Sleek Horizontal Progress Indicator */}
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${variant.bar}`}
                      style={{ width: `${60 + idx * 10}%` }}
                    />
                  </div>

                  {/* Phase Badge */}
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800 truncate max-w-full">
                    {day.phaseBadge}
                  </span>

                  {/* Focus Topic */}
                  <h3 className="text-xs font-bold text-slate-100 group-hover:text-white line-clamp-2 leading-snug">
                    {day.focusTopic}
                  </h3>

                  {/* Quoted Insight Pill */}
                  <div className="bg-slate-950/80 rounded-xl p-2.5 border border-slate-800/80 text-[11px] text-slate-300 leading-relaxed">
                    <span className="font-semibold text-indigo-400 block text-[10px] uppercase mb-0.5">Insight:</span>
                    <p className="line-clamp-2 italic text-slate-300">"{day.keyTakeaway}"</p>
                  </div>
                </div>

                <div className="pt-3 mt-2 border-t border-slate-800/60">
                  {day.metrics && day.metrics[0] && (
                    <div className="flex items-center justify-between text-[11px] py-1 px-2 rounded bg-slate-950/60 border border-slate-800/40 mb-2">
                      <span className="text-slate-400 truncate">{day.metrics[0].label}:</span>
                      <span className="font-bold text-emerald-400 shrink-0">{day.metrics[0].value}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-[11px] text-slate-400 group-hover:text-indigo-300 font-medium">
                    <span className="truncate">{day.practicalApplication.outcomeStatus}</span>
                    <ChevronRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom Bento Row: Next Steps & Future Work (Col 2) + Summary Metric Bar Equalizer (Col 2) */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Next Steps & Future Work Bento Card (Spans 2 Columns) */}
        <div className="lg:col-span-2 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Next Steps & Future Roadmap
              </span>
              <button 
                onClick={onGoToSynthesis}
                className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold"
              >
                Full Matrix →
              </button>
            </div>

            <p className="text-xs text-slate-300 mb-4">
              Strategic rollout milestones and prioritized investigations derived from this week's empirical findings.
            </p>

            <ul className="space-y-2.5">
              {synthesis.futureRoadmap.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-slate-950/60 p-3 rounded-xl border border-emerald-900/40">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0 animate-pulse" />
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">{item.title}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-snug">{item.rationale}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 mt-3 border-t border-emerald-900/40 flex items-center justify-between text-xs text-emerald-300">
            <span>{synthesis.futureRoadmap.length} Prioritized Sprint Milestones</span>
            <span className="font-semibold">Ready for Execution</span>
          </div>
        </div>

        {/* Summary Metric / Equalizer Bar Chart Bento Card (Spans 2 Columns) */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5" />
                Summary Metrics & Velocity Equalizer
              </span>
              <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                [LOG-W42-BENCHMARK]
              </span>
            </div>

            {/* Equalizer Visualizer */}
            <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 mb-4">
              <div className="flex items-end justify-between gap-3 h-20 px-2">
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-slate-800 rounded-t h-8" />
                  <span className="text-[10px] font-mono text-slate-500">Mon</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-slate-700 rounded-t h-12" />
                  <span className="text-[10px] font-mono text-slate-500">Tue</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-indigo-500 rounded-t h-16 shadow-md shadow-indigo-500/20" />
                  <span className="text-[10px] font-mono text-indigo-400 font-bold">Wed</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-slate-700 rounded-t h-11" />
                  <span className="text-[10px] font-mono text-slate-500">Thu</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="w-full bg-emerald-500 rounded-t h-14" />
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">Fri</span>
                </div>
              </div>
            </div>

            {/* Key Metric Highlight */}
            <div className="flex items-center justify-between bg-slate-950/60 p-3 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Primary Throughput Metric:</span>
                <strong className="text-white text-sm">{leadMetric.label}</strong>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-emerald-400 font-mono">{leadMetric.value}</span>
                <span className="text-[10px] text-emerald-400/80 block font-medium">Validated Delta</span>
              </div>
            </div>
          </div>

          <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Overall Report Health: <strong className="text-emerald-400">100% Passed</strong></span>
            <button
              onClick={onGoToCreator}
              className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
            >
              Creator Studio Tips →
            </button>
          </div>
        </div>

      </section>

      {/* 4-Stat Metric Strip */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-indigo-400" />
            Empirical Breakthroughs & Benchmark Scorecards
          </h2>
          <span className="text-xs text-slate-500">All tests reproducible via local harness</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {keyStats.map((stat) => (
            <div 
              key={stat.id}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-5 transition-all hover:shadow-lg hover:shadow-slate-950/40 relative overflow-hidden group"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">
                  {stat.label}
                </span>
                <span 
                  className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    stat.trend === 'up' 
                      ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/40' 
                      : stat.trend === 'down'
                      ? 'text-sky-400 bg-sky-950/60 border border-sky-800/40'
                      : 'text-slate-300 bg-slate-800 border border-slate-700'
                  }`}
                >
                  {stat.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : stat.trend === 'down' ? <TrendingDown className="w-3 h-3" /> : null}
                  {stat.trendValue}
                </span>
              </div>
              
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono">
                {stat.value}
              </div>

              <div className="text-xs text-slate-400 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practical Applications & Tested Harnesses Section */}
      <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <FlaskConical className="w-4 h-4 text-emerald-400" />
            Tested Proof-of-Concepts & Execution Harnesses (This Week)
          </h3>
          <span className="text-xs text-slate-400 font-mono">{days.length} Active Prototypes</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {days.slice(0, 3).map((day) => (
            <div 
              key={day.id}
              onClick={() => onSelectDay(day.id)}
              className="cursor-pointer bg-slate-950/70 hover:bg-slate-950 border border-slate-800 hover:border-indigo-500/50 rounded-xl p-4 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-slate-300 px-2 py-0.5 rounded bg-slate-800">
                    {day.day}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                    {day.practicalApplication.outcomeStatus}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {day.practicalApplication.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {day.practicalApplication.description}
                </p>
              </div>

              {day.practicalApplication.outputSnippet && (
                <pre className="mt-3 text-[10px] font-mono bg-slate-900 text-emerald-300/90 p-2 rounded-lg border border-slate-800/80 overflow-x-auto">
                  {day.practicalApplication.outputSnippet.split('\n').slice(0, 2).join('\n')}
                </pre>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
