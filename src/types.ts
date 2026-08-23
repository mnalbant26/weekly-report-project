export interface DayMetric {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
}

export interface DayReport {
  id: string;
  day: string; // e.g. "Monday"
  date: string; // e.g. "Aug 17, 2026"
  phaseBadge: string; // e.g. "Phase 1: Diagnostic"
  themeColor: 'blue' | 'purple' | 'emerald' | 'amber' | 'rose' | 'indigo' | 'cyan';
  focusTopic: string;
  researchDone: string[];
  keyTakeaway: string;
  insightDescription?: string;
  practicalApplication: {
    title: string;
    description: string;
    type: 'benchmark' | 'code' | 'pilot' | 'experiment' | 'architecture';
    outputSnippet?: string;
    outcomeStatus: 'Success' | 'Validated' | 'In Progress' | 'Breakthrough';
  };
  progressVsPast: {
    previousKnowledge: string;
    currentInsight: string;
    improvementDelta: string;
  };
  metrics: DayMetric[];
  futureSuggestions: string[];
  presenterNotes?: string;
}

export interface ReportStat {
  id: string;
  label: string;
  value: string;
  subtext: string;
  trend: 'up' | 'down' | 'neutral';
  trendValue: string;
  category: 'performance' | 'efficiency' | 'quality' | 'delivery' | 'knowledge';
}

export interface FutureRoadmapItem {
  id: string;
  period: 'Next Week' | 'Next Sprint' | 'Next Quarter';
  title: string;
  rationale: string;
  priority: 'High' | 'Medium' | 'Strategic';
  owner?: string;
}

export interface KnowledgeDeltaItem {
  domain: string;
  beforeState: string;
  afterState: string;
  impactScore: number; // 1-100
}

export interface CreatorTip {
  category: 'Engagement' | 'Slide Clarity' | 'Executive Delivery' | 'Technical Framing';
  tip: string;
  actionItem: string;
  iconName: string;
}

export interface WeeklyResearchReport {
  reportMeta: {
    reportId: string;
    title: string;
    subtitle: string;
    weekNumber: string; // e.g. "Week 34"
    dateRange: string; // e.g. "Aug 17 - Aug 21, 2026"
    author: {
      name: string;
      role: string;
      department: string;
      avatarUrl?: string;
    };
    researchDomain: string;
    status: 'Ready for Review' | 'Live Presentation' | 'Finalized';
    totalResearchHours: number;
    experimentsRun: number;
    executiveSummary: string;
    primaryOutcomeHeadline: string;
  };
  keyStats: ReportStat[];
  days: DayReport[];
  synthesis: {
    weeklyImpactSummary: string;
    knowledgeEvolution: KnowledgeDeltaItem[];
    futureRoadmap: FutureRoadmapItem[];
    risksAndMitigations: Array<{
      risk: string;
      mitigation: string;
      severity: 'Low' | 'Medium' | 'High';
    }>;
  };
  creatorTips: {
    presentationTips: CreatorTip[];
    recommendedTalkingPoints: string[];
    potentialAudienceQuestions: Array<{
      question: string;
      suggestedAnswer: string;
    }>;
  };
}
